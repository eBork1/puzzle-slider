document.body.onload = layout;
let count = 0;


// Create UI
function layout() {
    //title
    var title = document.createElement('h2');
    title.innerHTML = "Puzzle Slider";
    title.className = "h2 text-center";
    app.appendChild(title);

    // Main container
    var container = document.createElement('div');
    container.setAttribute('class', 'container');

    // Row
    var row = document.createElement('div');
    row.setAttribute('class', 'row justify-content-center');
    
    // Columns
    counter = 0;
    for (var i = 0; i < 16; i++) {
        var col = document.createElement('div');
        col.setAttribute('class', 'col-3 border text-center');
        col.id = i;
        col.addEventListener('click', handleClick);
        row.appendChild(col);
    }
    container.appendChild(row);
    app.appendChild(container);
}

// Tile constructor 
function tileConstructor(tileNumber, position, type) {
    this.tileNumber = tileNumber;
    this.position = position;
    this.type = type;
    let displayText = document.createElement('div');
    displayText.innerHTML = tileNumber;
    this.content = displayText;
}

// Create moving tile objects
let tile = [];
for (var i = 1; i <= 16; i++) {
    count++;

    tile[i] = {
        tileNumber: count,
        position: count,
        type: 1,
    }
}
console.log(tile);

// Get tiles on grid


// Get click, 
function handleClick() {
    console.log("worked");
   let getClick = this.id;
}