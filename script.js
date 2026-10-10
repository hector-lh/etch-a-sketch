function generateGrid(rows, cols){
    const container = document.getElementById("grid-container");
    // Empty container
    container.replaceChildren();
    // Create rows
    for (let r = 0; r < rows; r++){
        const row = document.createElement("div");
        row.classList.add("row");
        // Create columns for each row
        for (let c = 0; c < cols; c++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseenter", () => {
                square.style.background = "black";
            })
            row.appendChild(square);
        }
        container.appendChild(row);
    }
};

function changeGridSize(){
    size = prompt("What size grid?");
    if (size > 100){
        alert("The grid can't be bigger than a 100x100");
        return;
    }
    if (size !== null){
        generateGrid(size,size);
    }
};

generateGrid(16,16);