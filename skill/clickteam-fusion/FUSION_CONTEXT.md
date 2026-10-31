# Clickteam Fusion 2.5 context: reading a MfaDump export

This document is for an LLM (or a developer) who has to analyze or debug a Clickteam Fusion project
from the `<project>.events.txt` file produced by `MfaDump.exe`. It explains Fusion's execution model,
then the format of the export.

Reliability legend: points marked **(to verify)** are assumed behaviors, not yet confirmed on a real
project. Do not present them as certain.

For **every possible condition / action / expression** (built-in objects and extensions, with numbers,
parameters, English and French labels and real examples), see the bible: `bible/README.md`.

Examples below use the English labels. With a French editor, see the "Label (FR)" column of the bible
(e.g. `Always` = `Toujours`, `Start loop` = `Lancer la boucle`).

---

## 1. Execution model: the tick loop

Fusion is not programmed with code but with an **event grid**. Each event is a line "IF conditions →
DO actions".

On every **tick** (one frame of the game; the rate is shown at the top of the export, e.g. `60 FPS`):

1. The engine evaluates **all active events, from top to bottom**, once.
2. For each event, if **all** its conditions are true, its actions run immediately, in the order they
   are written.
3. Once the grid has been walked, the engine draws the new image, then starts again.

Important consequences for debugging:

- **Event order matters.** A value changed by event #10 is already visible to event #20 in the same
  tick, but not to event #5 (which only sees it on the next tick).
- **Nothing is drawn between two events**: everything that happens during a tick appears at once on
  screen.
- A long computation in a tick **freezes the game** (the next image waits for the end of the tick).

## 2. Fast loops: synchronous processing within a tick

To iterate (walk a grid, test each row…) without waiting one tick per iteration, use a **fast loop**:

- Action `Special : Start loop "name" N times` starts the loop **immediately**. The engine then runs,
  N times in a row, every event that has the condition `On loop "name"`, then **returns** to the next
  action. All of this happens within the same tick.
- `LoopIndex("name")` gives the current index (from 0).
- Object variant: `Start loop for each one of <object>, loop name "name"` + condition
  `On each of <object>, loop name "name"`: one iteration per instance of the object, with only that
  instance selected. **Unlike `Start loop`, it only starts after the other actions of the event**
  (verified, see §7b).

A fast loop is thus the equivalent of a classic `for` loop. Its cost depends on the number of
iterations × the number of `On loop` events; a few hundred iterations remain negligible. If a game
"freezes for a second", look for a **timer** first (see §4) before blaming a fast loop.

## 3. Conditions, object selection and condition types

- **Selection ("scoping")**: a condition on an object does not only test, it **selects the instances**
  that satisfy it. The event's actions on that object apply only to the selected instances. Without a
  condition on the object, an action applies to **all** its instances.
- **Triggered conditions** (shown in red in the editor) are not evaluated on every tick: they are true
  **when the event occurs**. Examples: `On loop`, `On each of`, `On group activation`,
  `Start of Frame`, collisions. In an event, a triggered condition is normally placed first.
- `Always`: true on every tick.
- `NOT ...`: negated condition.
- `Repeat while Player 1 Moved down` is true **as long as** the key is held (on every tick), unlike
  `Player 1 Moved down` (true once, when pressed).
- **Press conditions (`Player 1 Moved left`, `Pressed fire`, `Upon pressing a key`) are triggered**:
  their event runs when the input happens, **before** the normal walk of the list, whatever its
  position. An event placed higher in the list therefore already sees their effects. `Repeat while …`
  conditions run in their place. See §7b.

## 4. Timers: `Every`

- `Every X` (X in milliseconds, may be an expression, e.g. `Every tpsPiece("Params")`) is true once
  every X ms.
- Its clock belongs to the event and **does not restart** when a piece appears or when a group is
  reactivated **(to verify for the group case)**: the first trigger can therefore happen anywhere
  between 0 and X ms. A classic source of "pauses" of varying length.

## 5. Event groups

- Events can be put into **groups** (nestable), activated or deactivated by an action:
  `Special : Activate Group "X"` / `Deactivate Group "X"`.
- A group can be **disabled at the start** of the frame.
- A disabled group is not evaluated, nor are its subgroups.
- `On group activation`: triggered condition, true once on the first pass in the group after its
  activation.
- Common use: a **state machine** (e.g. "Choose piece" → "Falling piece" → "Piece landed" →
  "Choose piece"), each group deactivating itself and activating the next.
- A group activated by an event located **higher** in the grid is evaluated in the same tick (the walk
  continues downward); a group located higher is only evaluated on the next tick **(to verify)**.

## 6. Object data

- **Alterable values**: per object, can be named. The export shows the name when there is one:
  `testPosY("Params")` instead of `Alterable Value F("Params")`. **Recent Fusion 2.5 editors (build 296)
  number them from 0 (value 0, 1, 2…), like flags, instead of using letters A, B, C** (verified): in a
  suggestion, refer to an alterable value by its name and its number, never by a letter. The export
  does not show the number yet.
- **An extension without a French language file shows its English text in the French editor**
  (verified): e.g. String Parser → `Set source string to levelBuffer`. Give the English label then.
- **Flags**: booleans numbered **from 0** (as in the editor), can be named. The export shows
  `Flag 3 «landed»`.
- **Directions** (verified): a wheel of 32 directions, numbered 0 to 31 **counter-clockwise**:
  0 = right, 8 = up, 16 = left, 24 = down (4 = up-right, 12 = up-left, 20 = down-left,
  28 = down-right). The export shows `Set direction to 16 (left)` (French: `16 (gauche)`); several
  directions selected on the wheel show as `{0 (right), 16 (left)}` (one is picked at random when
  setting a direction). `Dir("obj")` returns this number.
- **Global values**: listed at the top of the export.
- Frequent trick: an invisible object (e.g. `Params`) serves as a container of parameters/variables.
- **Object groups (qualifiers)**: a set of objects handled as one (e.g. "Groupe Formes"). A
  condition/action on the qualifier applies to all the instances of all its members. The export lists
  the members of each qualifier.

## 7. Known pitfalls of the expression language

- `mod` keeps the sign of the left operand: `-1 mod 4 = -1` (not 3).
- Integer division between integers: `7 / 2 = 3` (verified).
- **`a * b / c` is computed as `a * (b / c)`** (verified): `426 * scrollY / scrollMax` stayed 0 as long
  as `scrollY < scrollMax` (the integer division comes first), so a scroll bar thumb stayed stuck at
  the top. Always **parenthesize** a rule of three: `(a * b) / c`. Point out any `… * … / …`
  expression without parentheses in a project.
- `X Left`, `X Right`, `Y Top`, `Y Bottom`: edges of the object; `X Right` is **exclusive** (hence the
  `- 1` often seen in zones).
- `Mid$(string, start, length)`: `start` begins at **0** (verified in game). Handy for a table of values
  in a string: `Val(Mid$("484338…", n * 2, 2))`.

## 7b. Pitfalls met in practice

This section grows with the projects. Write **(verified)** when the user saw it in game, **(to
verify)** otherwise.

- **Music and sounds do not use the same channels** (verified): a music (MIDI) played on channel 0 is
  not cut by a sound played on channel 0. Do not report a channel conflict between a music and a sound
  effect. Yet the export shows `Play sample …` for both.
- **An imported MP3 may not play at all** (verified): no sound, no error, while another MP3 of the same
  project plays (unsupported encoding variant). If one music stays silent while the others play,
  suspect the file first; replace it or convert it to OGG (the safest format, also for HTML5). In the
  export, a sound keeps the name of its original file (e.g. `791018`): this is not a decoding defect.
- **Score object ≠ Counter** (verified): the `Score` object (player's score) does not have the same
  display options as a Counter (9 digits max for the Score, 16 for a Counter).
- **`Every` drifts**: prefer a frame counter in an alterable value (+1 in an `Always`, reset to 0 when
  consumed) for frame-exact timing (60 FPS games).
- **Two moves tested in the same tick** ("test shadow" pattern): if a sideways move and a fall both
  change the shadow in the same tick, the test covers the diagonal and can wrongly block. Sequence them
  (one request per tick, or one fast loop per step).
- **A key press runs before the events above it** (verified): a test at the top of the list
  (`#29: IF shadow overlaps backdrop → Game over`) saw the shadow already moved by
  `Player 1 Moved left` (#39, lower), before the test group further down undid it → false Game over
  against a wall. `Repeat while Player 1 Moved left` (not triggered) did not have the problem. Fix: in
  an "at rest" test, require that no request is pending (e.g. flag `testMove` off), or route the
  presses through a flag handled lower down.
- **A filter placed before an overlap test does not prevent testing the other instances**
  (verified): `box: Flag isMoving on` then `NOT testMoveBlock is overlapping Groupe Objets physique`
  (which contains `box`) did block the pushed crate against **another** crate. Do not report this case
  as a selection bug.
- **The player's score survives "Restart the current frame"** (to verify): object values and groups go
  back to their initial state, but not the players' score / lives nor the global values. Reset them
  before restarting.
- **Pick a random image without knowing how many there are** (verified): Fusion has no native
  "number of images of the animation" expression. Trick: `Force animation frame to 99` (clamped to the
  last image), then `Force animation frame to Random(Image( "obj" ) + 1)`. The 4 variants of a 4-image
  sequence all come out. Images can be added without touching the events.
- **Animation sequence that "goes back" to sequence 0** (verified): a sequence chosen with
  `Change animation sequence` (e.g. `12 + Theme` for a graphic theme) that is **not looping** plays its
  images once, then the object goes back to sequence 0 (Stopped). It then looks as if the requested
  sequence did not exist. For a sequence used as a theme or fixed variant: tick **"Loop"** and set the
  **maximum speed to 0** (the image no longer changes, and the one chosen by `Force animation frame`
  stays displayed). Remember to set it on **every** sequence of every object. Look for this cause
  before suspecting a number problem.
- **A qualifier put on objects of different types is split** (verified): with the qualifier "Parents"
  on Actives and Strings, the editor offers `Groupe Parent.Sprite` and `Groupe Parent.Texte` (French
  editor), one per object type. An action "for the whole group" must be duplicated on each. Do not
  promise that a single qualifier covers Actives and Strings. **MfaDump shows both under the same
  name** `Groupe Parents`: two identical actions in a row are normal (one per type). A condition on
  `Groupe Parents.Sprite` filters **only** the Actives: actions on `.Texte` in the same event then
  affect all the Strings. Make one event per type when the condition selects instances.
- **Mouse and invisible object** (verified): "User clicks on <object>" and "Mouse pointer is over
  <object>" work on an Active **invisible at start** ("Visible at start" unticked). An invisible Active
  thus works as a click zone that follows its position and size, without hard-coded coordinates.
- **Expression of a qualifier in an action on that qualifier** (verified):
  `Groupe Parents.Sprite : Set Y position to Y("Groupe Parents.Sprite") - 48` does not move each
  instance by 48: the expression returns the Y of **a single** instance (the last one selected). For a
  qualifier, go through a "for each" loop (one selected instance per turn).
- **A "for each" loop starts after the other actions of the event** (verified):
  `Start loop for each one of X` then `Set scrollPrev to scrollY` in the same event: the loop already
  sees the new value of `scrollPrev`. Compute what the loop needs in a value (e.g. `scrollDelta`)
  **before** starting it, and do not touch that value afterwards.
- **Destroying then recreating the same object in the same tick** (verified twice): a destroyed object
  still exists until the end of the tick. It counts toward the frame's "maximum number of objects"
  (creations fail without error), and the actions that follow a creation in the same tick can target
  the wrong instances (texts not written, images not changed). Seen cases: minimap preview redrawn,
  level list rebuilt on a pack change. Solution: destroy on tick N, recreate on tick N+1 (a step value:
  1 = to rebuild, 0 = nothing).
- **Active destroyed when it goes too far from the frame** (verified): the Active option "Destroy if
  too far from frame" (ticked by default) destroys it without any event when it leaves the play area.
  Strings do not have this option. For objects scrolled far off screen (lists), untick it.
- **Animation sequence numbers** (verified): the predefined sequences go from 0 to 11, then added ones
  get 12, 13… A new sequence takes the highest number + 1. Deleting an added sequence **renumbers** the
  following ones: no gap, but the next ones move down by one. With a `base + n` computation (e.g.
  `12 + Theme`), deleting a theme shifts all the following themes: take it into account in the values
  of `n`.
- **Array object created as text instead of numeric** (verified): `Write Value` and `ValueAtXY` do not
  work, without error, and tests like `ValueAtXY(…) = 1` stay false. MfaDump does not export object
  properties: if an array seems empty, have its type (numeric / text), its dimensions (default
  10 × 1 × 1) and the "base 1" option checked.
- **Create an object directly at its position** (user preference): to create an object and then place
  it, suggest the action `Create <p0> at X=<p1>, Y=<p2>, Layer=<p3>` (French editor:
  "Créer <objet> en X=…, Y=…, Calque=…", see `bible/built-in-objects.md`, Create section) rather than
  three actions `Create … at (0,0)` + `Set X position` + `Set Y position`. Only one action to type and
  read, and the object never appears at (0,0). Exports of existing projects often show the old form:
  point it out as a possible simplification, not as a bug.
- **Object "late" on screen = check its layer first** (verified): texts translated with images
  (FR/EN) stayed in French during a loading, then switched to English at the end. Cause: the objects
  were on a layer hidden at Start of Frame and shown again after the loading; the French text drawn in
  the background was visible through. It was neither a race condition nor a refresh problem (setting
  the animation speed to 1 changed nothing). MfaDump does not export the objects' layer: ask the user.
  Keep on an always-visible layer whatever must not be hidden, and prefer backgrounds without text.
- **"On group activation" in an OR** (verified): the condition is true only once per activation. In
  `IF On group activation + A  OR  On group activation + B`, the first block consumes it; if A is false,
  the second block never triggers, even if B is true. Make two separate events, each with its own
  "On group activation".
- **Location of the INI file** (verified): the Ini object without a path writes into
  `%APPDATA%\MMFApplications\<file>.ini`, not into the game folder.

---

## 8. Format of the MfaDump export

In English (`--lang en`):

```
Application: <name>  (Fusion build <n>)
Window: <width>x<height>, <fps> FPS
== Global values ==               (if named)
################ FRAME: <name> ################
== Objects ==                     name (type)  values: name=initial value, ...
== Object groups (qualifiers) ==  name: members
== Events ==
  === GROUP “Name” ===  (disabled at start)
      // author's comment
      #24  [DISABLED]
        IF    condition
        IF    condition
        DO    action
  === end of group ===
```

In French (`--lang fr`) the same structure reads `Fenêtre`, `Valeurs globales`, `Objets`, `valeurs`,
`Groupes d'objets (qualifiers)`, `Événements`, `=== GROUPE “Nom” ===`, `(désactivé au démarrage)`,
`[DÉSACTIVÉ]`, `SI` / `FAIRE`, `=== fin de groupe ===`, and conditions/actions use the French editor's
labels (e.g. `Params : Mettre le drapeau 1 «tombe» sur ON`).

- **`#n` = line number shown in the Fusion editor** (verified on a real project), so `#69` can be
  quoted to the user. **These take a number**: each event, each `//` comment, each
  `=== GROUP … ===` header **and each `=== end of group ===` line**. Blank lines of the export do not
  count. To know the number of a header or comment (not shown), count from the nearest `#n`.
- English labels of conditions/actions are Nebula's, close to but not always identical to the editor's.
  In French, a line without a safe translation stays in English (about 5%).
- Empty actions that Fusion inserts automatically are hidden.
- `[DISABLED]`: event disabled in the editor (not executed).

### Known limits of the export

- An export made by an **old version** of MfaDump may contain defects fixed since (for example global
  values read in an expression, decimal numbers shown as a large integer `* 1072955392` instead of
  `* 1.25`, fixed on 2026-10-26, or a round decimal shown as `* 1` instead of `* 1.0`, fixed on
  2026-10-28). Old exports were also in French only, with the English labels of Nebula. When in doubt,
  run the export again with the up-to-date `MfaDump.exe`.
- A decimal number is always shown with a point (`1.0`, `2.5`); an integer without (`1`). The
  difference matters: an operation between integers stays an integer (`7 / 2 = 3`) **(to verify)**.
- Some parameters may be badly decoded; they then appear raw or inconsistent. Example seen:
  `Player 1 Pressed fire 1, Moved ` (truncated text). An export older than 2026-11-01 shows directions
  as dots (`Set direction to ...........`): run the export again.
- `[ERROR] Could not find ObjectType …` or `[?? type …]`: condition/action unknown to Nebula. See the end
  of `bible/built-in-objects.md`, otherwise ask for a screenshot of the editor.
- **Extensions**: conditions, actions and expressions are named from the extension catalog, in the
  editor's syntax (`GroupItemValue("Ini", "Game", "sound")`). Since 2026-11-01 also in English (before,
  only the French export used the catalog). An extension missing from the catalog (or whose catalog
  entry does not match the parameters) still shows `<object> : Event ID 89, …` or
  `Expression ID 88("<object>")`. Find the extension's page in `bible/extensions/`:
  action / expression = 80 + code (89 → code 9), condition = −(81 + code).
- **Every expression tied to an object takes the object's name in quotes as its first parameter**
  (verified), before the ones listed in the bible: `GroupItemValue( "Ini", "Game", "sound" )`.
  Forgetting it in a suggestion gives an expression the editor rejects.
- A menu option shown as `[menu id 1010]` is not in the project's menu bar: an **orphan action**
  pointing to a deleted menu item (verified). The editor shows the action without any option name
  (`Disable menu option`). It does nothing: suggest removing it.
- When in doubt about a line, **ask for a screenshot of the event** rather than guessing.
- Validated on 162 projects (MFU2 builds 280 to 296, old MMF2 builds 241 to 258, multi-frame projects
  and projects with extensions).

### Recommended way of working

1. The user runs `MfaDump.exe` on their `.mfa` (drag and drop) and sends the `.txt`.
2. Analyze the logic from the export (state machine of the groups, timers, order).
3. Suggest the changes **as instructions for the Fusion editor** (which event, which condition/action,
   which object, which flag by name), because the tool is read-only. Use the user's language and the
   labels of their editor.
4. After saving in Fusion, run the export again to check the changes.
