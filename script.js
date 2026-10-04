function generateGrid(rows, cols){
    const container = document.getElementById("grid-container");
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

generateGrid(16,16);