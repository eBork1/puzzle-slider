document.body.onload = onStart;
tileContainer = document.createElement('div');

// Variables
let tiles = [];
let indexOfBlankTile = 3;

// Objects
class Tile {
    constructor(tileName) {
        this.tileName = tileName;
    }
}

// Handle initializing the application
function onStart() {
    // Create Tiles, use letters instead of numbers to  not mix up tile and col
    const FIRST_CHAR_CODE = 97;
    for (var i = 0; i < 16; i++) {
        var newTileName = String.fromCharCode(FIRST_CHAR_CODE + i);
        var newTile = new Tile(newTileName);
        tiles[i] = newTile;

        if (i == indexOfBlankTile) {
            tiles[indexOfBlankTile].tileName = '';
        }
    }
    console.log(tiles);

    // Draw layout
    layout();
}

// Create UI, 1 row 16 col, 4x4 grid
function layout() {
    // Title
    var title = document.createElement('h2');
    title.innerHTML = "Puzzle Slider";
    title.className = "h2 text-center";
    app.appendChild(title);

    // Main container
    var container = document.createElement('div');
    container.setAttribute('class', 'container');

    // Tile Container
    tileContainer.setAttribute('class', 'row justify-content-center');
    drawTiles();

    container.appendChild(tileContainer);
    app.appendChild(container);

    // Shuffle button
    var shuffleBtn = document.createElement('button');
    shuffleBtn.setAttribute('type', 'button');
    shuffleBtn.setAttribute('class', 'btn-primary');
    shuffleBtn.innerHTML = "Shuffle";
    shuffleBtn.addEventListener('click', shuffle);
    container.appendChild(shuffleBtn);
}

// Redraw the game board based off the updates tiles array
function drawTiles() {
    tileContainer.innerHTML = '';

    for (var i = 0; i < tiles.length; i++) {
        var newTile = document.createElement('div');
        newTile.setAttribute('class', 'col-3 border text-center');
        newTile.id = i;
        newTile.innerHTML = tiles[i].tileName;
        newTile.addEventListener('click', handleClick);
        tileContainer.appendChild(newTile);
    }
}

// Swap the blank tile with the clicked tile 
function handleClick() {
    let indexOfTheTileClicked = parseInt(this.id);

    console.log({ indexOfTheTileClicked, indexOfBlankTile })
    console.log({
        "+1": indexOfTheTileClicked + 1,
        "-1": indexOfTheTileClicked - 1,
        "+4": indexOfTheTileClicked + 4,
        "-4": indexOfTheTileClicked - 4
    })

    function swapTiles() {
        // Swap the blank tile with the selected tile
        console.log("before", tiles)
        let tileClicked = tiles[indexOfTheTileClicked]
        tiles[indexOfTheTileClicked] = tiles[indexOfBlankTile];
        tiles[indexOfBlankTile] = tileClicked;
        indexOfBlankTile = indexOfTheTileClicked;
        console.log("after", tiles)
        // Redraw the board based off the updated array
        drawTiles();
    }

    // If the tile clicked is either 1 or 4 spots away from the blank tile in the array, swap tiles
    if ((indexOfTheTileClicked % 4) == 1 ||
        (indexOfTheTileClicked % 4) == 2) {
        console.log('in first if')
        if (indexOfTheTileClicked - 1 == indexOfBlankTile ||
            indexOfTheTileClicked + 1 == indexOfBlankTile ||
            indexOfTheTileClicked - 4 == indexOfBlankTile ||
            indexOfTheTileClicked + 4 == indexOfBlankTile) {

            swapTiles();
        }
    }
    if (((indexOfTheTileClicked + 1) % 4) == 0) {
        console.log('in first if')
        if (indexOfTheTileClicked - 1 == indexOfBlankTile ||
            indexOfTheTileClicked - 4 == indexOfBlankTile ||
            indexOfTheTileClicked + 4 == indexOfBlankTile) {


            swapTiles();
        }
    }
    if ((indexOfTheTileClicked % 4) == 0) {
        console.log('in second if')
        if (indexOfTheTileClicked + 1 == indexOfBlankTile ||
            indexOfTheTileClicked + 4 == indexOfBlankTile ||
            indexOfTheTileClicked - 4 == indexOfBlankTile) {

            swapTiles();
        }
    }
}

function shuffle() {

    const CLICK_AMOUNT = 500

    for (var i = 0; i < CLICK_AMOUNT; i++) {
        let randomNum = Math.floor(Math.random() * 16);
        document.getElementById(randomNum).click();
    }
}

function checkWin() {


}


