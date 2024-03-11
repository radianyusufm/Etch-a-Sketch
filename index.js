
document.addEventListener('DOMContentLoaded', () => {

    createGrid()
    
    document.querySelector('button').addEventListener('click', () => {
        let n  = inputGrid()
        createGrid(n)
    })
})

function createGrid( n = 16 ){
    document.querySelector('.grid-container ').innerHTML = ''
    const container = document.querySelector('.grid-container ')
    for( let i = 0; i< n * n; i++) {
        const newDiv = document.createElement('div')
        newDiv.classList.add('grid')
        newDiv.style.width = `calc((100% /${n}))`
        newDiv.style.height = `calc((100% /${n}))`
        container.appendChild(newDiv)
    }

    hoverEffec()
}


function hoverEffec() {
    
    const grid = document.querySelectorAll('.grid');

    grid.forEach((element) => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        })
    })
}


function inputGrid(){
    n = prompt("Input Grid")
    
    if (isNaN(n) || (Number(n) < 1 || Number(n) > 100)){
        return 16
    } else {
        return Number(n)
    }
}
