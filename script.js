let isRandomColors = false;
let isDarkenMode = false;

function createGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = '';
    
    const squareSize = 960 / size;
    
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.dataset.opacity = '0';
        
        square.addEventListener('mouseover', changeColor);
        container.appendChild(square);
    }
}

function changeColor(e) {
    if (isRandomColors) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    } else if (isDarkenMode) {
        let currentOpacity = parseFloat(e.target.dataset.opacity);
        if (currentOpacity < 1) {
            currentOpacity += 0.1;
            e.target.dataset.opacity = currentOpacity;
            e.target.style.backgroundColor = `rgba(0,0,0,${currentOpacity})`;
        }
    } else {
        e.target.style.backgroundColor = '#333';
    }
}

function changeGridSize() {
    let size = prompt('Enter number of squares per side (max 100):');
    size = parseInt(size);
    
    if (size && size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert('Please enter a valid number between 1 and 100');
    }
}

function toggleRandomColors() {
    isRandomColors = !isRandomColors;
    isDarkenMode = false;
}

function toggleDarkenMode() {
    isDarkenMode = !isDarkenMode;
    isRandomColors = false;
}

function clearGrid() {
    const squares = document.getElementsByClassName('grid-square');
    Array.from(squares).forEach(square => {
        square.style.backgroundColor = 'white';
        square.dataset.opacity = '0';
    });
}

// Initialize with 16x16 grid
createGrid(16);
