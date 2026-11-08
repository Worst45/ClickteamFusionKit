# Extension mode7ex

- File: `mode7ex.mfx` — third-party extension (shipped with a downloaded project)
- Exporters: not checked (extension not installed where the runtimes were read)
- Numbers in events: condition = −(81 + code), action / expression = 80 + code
- Writing an expression in the editor: expression name, then **the object name as 1st parameter**, then the parameters of the table — e.g. `GroupItemValue( "Ini", "Game", "sound" )` (the MfaDump export writes it this way; an extension missing from the catalog shows `Expression ID 83("Ini")` instead)

## Actions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 2 | 82 | Render Options > Transparency Mode > Enable | `Make Black Invisible.` |  |  |
| 3 | 83 | Render Options > Transparency Mode > Disable | `Make Black Visible.` |  |  |
| 4 | 84 | Images > Main Image Map > Load File | `Load File <p0> into Main Image Map.` |  | file name “Select an image file” |
| 5 | 85 | Size > Set Width | `Set width to <p0>.` |  | numeric expression “Set Width” |
| 6 | 86 | Size > Set Height | `Set height to <p0>.` |  | numeric expression “Set Height” |
| 8 | 88 | Rotation > Rotation Angle (Y) | `Set Rotation (Y) Angle to <p0> degrees.` |  | numeric expression “Enter an angle (degrees)” |
| 10 | 90 | Set Origin > X | `Set X Origin to <p0>.` |  | numeric expression “Enter a coordinate” |
| 11 | 91 | Set Origin > Z (Elevation) | `Set Z Origin to <p0>.` |  | numeric expression “Enter a coordinate” |
| 12 | 92 | Set Origin > Y | `Set Y Origin to <p0>.` |  | numeric expression “Enter a coordinate” |
| 16 | 96 | Render Options > Set Zoom factor | `Set Zoom factor to <p0>%%.` |  | numeric expression “Enter a percent” |
| 17 | 97 | Redraw > Force Redraw | `Force recalculation and redraw display.` |  |  |
| 18 | 98 | Rotation > Adjust Rotation Angle (Y) | `Adjust Rotation (Y) Angle by <p0> degrees.` |  | numeric expression “Enter an adjustment angle (degrees)” |
| 19 | 99 | Set Origin > Slide X | `Slide X origin by <p0>.` |  | numeric expression “Enter an adjustment amount” |
| 20 | 100 | Set Origin > Slide Y | `Slide Y origin by <p0>.` |  | numeric expression “Enter an adjustment amount” |
| 21 | 101 | Set Origin > Slide Z | `Slide Elevation (z origin) by <p0>.` |  | numeric expression “Enter an adjustment amount” |
| 22 | 102 | Set Origin > Walk Forward | `Walk forward <p0>.` |  | numeric expression “Enter a distance” |
| 23 | 103 | Set Origin > Walk Back | `Walk backward <p0>.` |  | numeric expression “Enter a distance” |
| 24 | 104 | Set Origin > Walk Left (Strafe) | `Walk left (strafe) <p0>.` |  | numeric expression “Enter a distance” |
| 25 | 105 | Set Origin > Walk Right (Strafe) | `Walk right (strafe) <p0>.` |  | numeric expression “Enter a distance” |
| 26 | 106 | Render Options > Wrap Mode > Enable Horizontal Wrap | `Horizontal wrap on.` |  |  |
| 27 | 107 | Render Options > Wrap Mode > Disable Horizontal Wrap | `Horizontal wrap off.` |  |  |
| 28 | 108 | Render Options > Wrap Mode > Enable Vertical Wrap | `Vertical wrap on.` |  |  |
| 29 | 109 | Render Options > Wrap Mode > Disable Vertical Wrap | `Vertical wrap off.` |  |  |
| 30 | 110 | Render Options > Display Resolution > Set Resolution Size | `Set resolution to <p0>x<p1>.` |  | numeric expression “Enter Horizontal Resolution (1-1000)”; numeric expression “Enter Vertical Resolution (1-1000)” |
| 31 | 111 | Render Options > Display Resolution > Set Resolution Mode | `Set resolution mode to <p0> (param: <p1>).` |  | numeric expression “Resolution Mode (0=quick, 1=full, 2=scan lines, 3=percent scan lines)”; numeric expression “Parameter (0:n/a, 1:n/a, 2:n/a, 3:0-255)” |
| 32 | 112 | Render Options > Thickness and Height > Set Thickness | `Set thickness to <p0>.` |  | numeric expression “Enter Elevation Thickness” |
| 35 | 115 | Render Options > Display Resolution > Set Horizontal Resolution | `Set horizontal resolution to <p0>.` |  | numeric expression “Enter Horizontal Resolution (1-1000)” |
| 36 | 116 | Render Options > Display Resolution > Set Vertical Resolution | `Set vertical resolution to <p0>.` |  | numeric expression “Enter Vertical Resolution (1-1000)” |
| 37 | 117 | Images > Main Image Map > Load Image number | `Load Image <p0> into Main Image Map.` |  | numeric expression “Enter Internal Image ID Number (0 index)” |
| 38 | 118 | Images > Main Image Map > Load Image name | `Load Image <p0> into Main Image Map.` |  | string expression “Enter Internal Image Name” |
| 39 | 119 | Images > Secondary Image Map > Load File | `Load File <p0> into Secondary Image Map.` |  | file name “Select an image file” |
| 40 | 120 | Images > Secondary Image Map > Load Image number | `Load Image <p0> into Secondary Image Map.` |  | numeric expression “Enter Internal Image ID Number (0 index)” |
| 41 | 121 | Images > Secondary Image Map > Load Image name | `Load Image <p0> into Secondary Image Map.` |  | string expression “Enter Internal Image Name” |
| 42 | 122 | Images > Image Height Map > Load File | `Load File <p0> into Image Height Map.` |  | file name “Select an image file” |
| 43 | 123 | Images > Image Height Map > Load Image number | `Load Image <p0> into Image Height Map.` |  | numeric expression “Enter Internal Image ID Number (0 index)” |
| 44 | 124 | Images > Image Height Map > Load Image name | `Load Image <p0> into Image Height Map.` |  | string expression “Enter Internal Image Name” |
| 45 | 125 | Images > Secondary Image Map > Unload | `Unload Image from Secondary Image Map.` |  |  |
| 46 | 126 | Images > Image Height Map > Unload | `Unload Image from Image Height Map.` |  |  |
| 47 | 127 | Render Options > Fog > Enable | `Enable Fog` |  |  |
| 48 | 128 | Render Options > Fog > Disable | `Disable Fog` |  |  |
| 49 | 129 | Render Options > Fog > Color > Choose Color | `Set Fog Color to <p0>.` |  | color “Choose a Fog Color” |
| 50 | 130 | Render Options > Fog > Color > Set Color | `Set Fog Color to RGB( <p0> , <p1>, <p2> ).` |  | numeric expression “Enter a Red Value (0-255)”; numeric expression “Enter a Green Value (0-255)”; numeric expression “Enter a Blue Value (0-255)” |
| 51 | 131 | Render Options > Fog > Color > Set Red | `Set Fog Red to <p0>.` |  | numeric expression “Enter a Red Value (0-255)” |
| 52 | 132 | Render Options > Fog > Color > Set Green | `Set Fog Green to <p0>.` |  | numeric expression “Enter a Green Value (0-255)” |
| 53 | 133 | Render Options > Fog > Color > Set Blue | `Set Fog Blue to <p0>.` |  | numeric expression “Enter a Blue Value (0-255)” |
| 54 | 134 | Render Options > Fog > Set Amount | `Set Fog Distance to <p0>.` |  | numeric expression “Enter a Fog Amount” |
| 57 | 137 | Secondary Layer > Slide X Origin | `Slide X Origin of Secondary Layer to <p0>.` |  | numeric expression “Enter an adjustment amount” |
| 58 | 138 | Secondary Layer > Slide Y Origin | `Slide Y Origin of Secondary Layer to <p0>.` |  | numeric expression “Enter an adjustment amount” |
| 60 | 140 | Secondary Layer > Adjust Rotation Angle (Y) | `Adjust Rotation Angle (Y) of Secondary Layer by <p0> degrees.` |  | numeric expression “Enter an adjustment angle (degrees)” |
| 61 | 141 | Render Options > Thickness and Height > Set Thickness Mode | `Set Thickness Mode to <p0>.` |  | numeric expression “Enter a Thickness Mode (0=fast, 1=fill, 2=full)” |
| 62 | 142 | Render Options > Interpolation > Enable Image Interpolation | `Enable Image Interpolation` |  |  |
| 63 | 143 | Render Options > Interpolation > Disable Image Interpolation | `Disable Image Interpolation` |  |  |
| 64 | 144 | Render Options > Interpolation > Enable Elevation Interpolation | `Enable Elevation Interpolation` |  |  |
| 65 | 145 | Render Options > Interpolation > Disable Elevation Interpolation | `Disable Elevation Interpolation` |  |  |
| 66 | 146 | Render Options > Mip-Mapping > Enable Image Mip-Mapping | `Enable Image Mip-Mapping` |  |  |
| 67 | 147 | Render Options > Mip-Mapping > Disable Image Mip-Mapping | `Disable Image Mip-Mapping` |  |  |
| 68 | 148 | Render Options > Mip-Mapping > Enable Secondary Image Mip-Mapping | `Enable Secondary Image Mip-Mapping` |  |  |
| 69 | 149 | Render Options > Mip-Mapping > Disable Secondary Image Mip-Mapping | `Disable Secondary Image Mip-Mapping` |  |  |
| 70 | 150 | Render Options > Mip-Mapping > Enable Image Height Map Mip-Mapping | `Enable Image Height Map Mip-Mapping` |  |  |
| 71 | 151 | Render Options > Mip-Mapping > Disable Image Height Map Mip-Mapping | `Disable Image Height Map Mip-Mapping` |  |  |
| 72 | 152 | Redraw > Enable Auto Redraw | `Enable Auto-Redraw` |  |  |
| 73 | 153 | Redraw > Disable Auto-Redraw | `Disable Auto-Redraw` |  |  |
| 74 | 154 | Render Options > Mip-Mapping > Set Mip-Map Transparent Color | `Set Mip-Map Transparent Color to <p0>` |  | color “Choose a Transparency Color for Mip-Mapping” |
| 75 | 155 | Render Options > Mip-Mapping > Clear Mip-Map Transparent Color | `Clear Mip-Map Transparency Color` |  |  |

## Expressions

| Code | Event no. | Menu | Display text (EN) | FR | Parameters |
|---|---|---|---|---|---|
| 0 | 80 | Size > Get Width | `Width(` |  |  |
| 1 | 81 | Size > Get Height | `Height(` |  |  |
| 2 | 82 | Images > Main Image Map > Get Image Width | `ImageWidth(` |  |  |
| 3 | 83 | Images > Main Image Map > Get Image Height | `ImageHeight(` |  |  |
| 4 | 84 | Images > Main Image Map > Get Image Name | `ImageName$(` |  | → string |
| 5 | 85 | Render Options > Transparency Mode > Get Enabled (1=on) | `Transparency(` |  |  |
| 8 | 88 | Rotation > Get Rotation Angle (Y) | `Rotation(` |  |  |
| 10 | 90 | Origin > Get X | `X Origin(` |  |  |
| 11 | 91 | Origin > Get Z (Elevation) | `Z Origin(` |  |  |
| 12 | 92 | Origin > Get Y | `Y Origin(` |  |  |
| 16 | 96 | Render Options > Get Zoom factor | `Zoom(` |  |  |
| 17 | 97 | Render Options > Wrap Mode > Get Horizontal (1=on) | `WrapX(` |  |  |
| 18 | 98 | Render Options > Wrap Mode > Get Vertical (1=on) | `WrapY(` |  |  |
| 19 | 99 | Sprite Mapping > Get on-screen X from X,Y | `GetMapX(` |  | number; number |
| 20 | 100 | Sprite Mapping > Get on-screen Y from X,Y | `GetMapY(` |  | number; number |
| 21 | 101 | Sprite Mapping > Get on-screen X from X,Y,Z | `GetMapXZ(` |  | number; number; number |
| 22 | 102 | Sprite Mapping > Get on-screen Y from X,Y,Z | `GetMapYZ(` |  | number; number; number |
| 23 | 103 | Sprite Mapping > Get on-screen width from X,Y,W,H | `GetMapWidth(` |  | number; number; number; number |
| 24 | 104 | Sprite Mapping > Get on-screen height from X,Y,W,H | `GetMapHeight(` |  | number; number; number; number |
| 27 | 107 | Sprite Mapping > Get on-screen angle from X,Y,A | `GetMapAngle(` |  | number; number; number |
| 28 | 108 | Sprite Mapping > Visible at X,Y,W,H (1=visible) | `GetMapVisible(` |  | number; number; number; number |
| 29 | 109 | Render Options > Display Resolution > Get Horizontal Resolution | `ResolutionX(` |  |  |
| 30 | 110 | Render Options > Display Resolution > Get Vertical Resolution | `ResolutionY(` |  |  |
| 31 | 111 | Render Options > Display Resolution > Get Resolution Mode | `ResolutionMode(` |  |  |
| 32 | 112 | Render Options > Display Resolution > Get Resolution Mode Parameter | `ResolutionModeParam(` |  |  |
| 33 | 113 | Render Options > Thickness and Height > Get Thickness | `Thickness(` |  |  |
| 34 | 114 | Images > Main Image Map > Get Image Number | `ImageNumber(` |  |  |
| 35 | 115 | Images > Secondary Image Map > Get Image Width | `SecondaryImageWidth(` |  |  |
| 36 | 116 | Images > Secondary Image Map > Get Image Height | `SecondaryImageHeight(` |  |  |
| 37 | 117 | Images > Secondary Image Map > Get Image Number | `SecondaryImageNumber(` |  |  |
| 38 | 118 | Images > Secondary Image Map > Get Image Name | `SecondaryImageName$(` |  | → string |
| 39 | 119 | Images > Image Height Map > Get Image Width | `HeightImageWidth(` |  |  |
| 40 | 120 | Images > Image Height Map > Get Image Height | `HeightImageHeight(` |  |  |
| 41 | 121 | Images > Image Height Map > Get Image Number | `HeightImageNumber(` |  |  |
| 42 | 122 | Images > Image Height Map > Get Image Name | `HeightImagName$(` |  | → string |
| 43 | 123 | Images > Image Height Map > Get Height At | `HeightAt(` |  | number; number |
| 44 | 124 | Render Options > Fog > Enabled Mode (1=on) | `Fog(` |  |  |
| 45 | 125 | Render Options > Fog > Color > Get Red | `FogRed(` |  |  |
| 46 | 126 | Render Options > Fog > Color > Get Green | `FogGreen(` |  |  |
| 47 | 127 | Render Options > Fog > Color > Get Blue | `FogBlue(` |  |  |
| 48 | 128 | Render Options > Fog > Get Amount | `FogDistance(` |  |  |
| 49 | 129 | Secondary Layer > Get X Origin | `SecondaryXOffset(` |  |  |
| 50 | 130 | Secondary Layer > Get Y Origin | `SecondaryYOffset(` |  |  |
| 51 | 131 | Secondary Layer > Get Rotation Angle (Y) | `SecondaryAngle(` |  |  |
| 52 | 132 | Render Options > Thickness and Height > Get Thickness Mode | `ThicknessMode(` |  |  |
| 53 | 133 | Render Options > Interpolation > Image Interpolation Mode (1=on) | `ImageInterpolation(` |  |  |
| 54 | 134 | Render Options > Interpolation > Elevation Interpolation Mode (1=on) | `ElevationInterpolation(` |  |  |
| 55 | 135 | Render Options > Mip-Mapping > Get Image Mip-Mapping Mode (1=on) | `ImageMipMap(` |  |  |
| 56 | 136 | Render Options > Mip-Mapping > Get Secondary Image Mip-Mapping Mode (1=on) | `SecondaryImageMipMap(` |  |  |
| 57 | 137 | Render Options > Mip-Mapping > Get Image Height Map Mip-Mapping Mode (1=on) | `ElevationMipMap(` |  |  |
| 58 | 138 | Redraw > Auto-Redraw Enabled (1=on) | `AutoRedraw(` |  |  |
| 59 | 139 | Sprite Mapping > Visible at X,Y,Z,W,H (1=visible) | `GetMapVisibleZ(` |  | number; number; number; number; number |
