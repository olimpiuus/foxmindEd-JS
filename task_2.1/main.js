const btn = document.querySelector('#btn')
const colorName = document.querySelector('#colorName')
const bodyStyle = document.body.style
    // const typeOfGeneration = document.querySelector('input[name="typeGeneration"]:checked').value;


const randomArrayElem = arrayName => arrayName[Math.floor(Math.random() * arrayName.length)]

// RGBA
const randomValue0to255 = () => Math.round(Math.random() * 255)
const randomDecimal0to1 = () => Math.round(Math.random() * 10) / 10
const randomColorRgba = () => `rgba(${randomValue0to255()},${randomValue0to255()},${randomValue0to255()},${randomDecimal0to1()})`

// HEX

const randomHexValues = () => '#' + Math.floor(Math.random() * (0xffffff + 1)).toString(16).padStart(6, '0')

// NAMES

const colorsNames = ["IndianRed", "LightCoral", "Salmon", "DarkSalmon", "LightSalmon", "Crimson", "Red", "FireBrick", "DarkRed", "Pink", "LightPink", "HotPink", "DeepPink", "MediumVioletRed", "PaleVioletRed", "LightSalmon", "Coral", "Tomato", "OrangeRed", "DarkOrange", "Orange", "Gold", "Yellow", "LightYellow", "LemonChiffon", "LightGoldenrodYellow", "PapayaWhip", "Moccasin", "PeachPuff", "PaleGoldenrod", "Khaki", "DarkKhaki", "Lavender", "Thistle", "Plum", "Violet", "Orchid", "Fuchsia", "Magenta", "MediumOrchid", "MediumPurple", "RebeccaPurple", "BlueViolet", "DarkViolet", "DarkOrchid", "DarkMagenta", "Purple", "Indigo", "SlateBlue", "DarkSlateBlue", "MediumSlateBlue", "GreenYellow", "Chartreuse", "LawnGreen", "Lime", "LimeGreen", "PaleGreen", "LightGreen", "MediumSpringGreen", "SpringGreen", "MediumSeaGreen", "SeaGreen", "ForestGreen", "Green", "DarkGreen", "YellowGreen", "OliveDrab", "Olive", "DarkOliveGreen", "MediumAquamarine", "DarkSeaGreen", "LightSeaGreen", "DarkCyan", "Teal", "Aqua", "Cyan", "LightCyan", "PaleTurquoise", "Aquamarine", "Turquoise", "MediumTurquoise", "DarkTurquoise", "CadetBlue", "SteelBlue", "LightSteelBlue", "PowderBlue", "LightBlue", "SkyBlue", "LightSkyBlue", "DeepSkyBlue", "DodgerBlue", "CornflowerBlue", "MediumSlateBlue", "RoyalBlue", "Blue", "MediumBlue", "DarkBlue", "Navy", "MidnightBlue", "Cornsilk", "BlanchedAlmond", "Bisque", "NavajoWhite", "Wheat", "BurlyWood", "Tan", "RosyBrown", "SandyBrown", "Goldenrod", "DarkGoldenrod", "Peru", "Chocolate", "SaddleBrown", "Sienna", "Brown", "Maroon", "White", "Snow", "HoneyDew", "MintCream", "Azure", "AliceBlue", "GhostWhite", "WhiteSmoke", "SeaShell", "Beige", "OldLace", "FloralWhite", "Ivory", "AntiqueWhite", "Linen", "LavenderBlush", "MistyRose", "Gainsboro", "LightGray", "Silver", "DarkGray", "Gray", "DimGray", "LightSlateGray", "SlateGray", "DarkSlateGray", "Black"];
const randomNameColor = () => randomArrayElem(colorsNames)


btn.addEventListener('click', () => {
    let randomColor = ''

    if (!document.querySelector('input[name="typeGeneration"]:checked')) {
        const randomColors = [randomNameColor(), randomHexValues(), randomColorRgba()];
        randomColor = randomArrayElem(randomColors)
    } else {
        const typeOfGeneration = document.querySelector('input[name="typeGeneration"]:checked').value;

        if (typeOfGeneration === 'Random') {
            const randomColors = [randomNameColor(), randomHexValues(), randomColorRgba()];
            randomColor = randomArrayElem(randomColors)
        }

        if (typeOfGeneration === 'Hex') {
            randomColor = randomHexValues()
        }
        if (typeOfGeneration === 'Rgba') {
            randomColor = randomColorRgba()
        }
        if (typeOfGeneration === 'Names') {
            randomColor = randomNameColor()
        }
    }

    bodyStyle.backgroundColor = randomColor
    colorName.textContent = randomColor
    colorName.style.color = randomColor



})