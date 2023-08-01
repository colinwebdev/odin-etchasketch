let numBoxes = 16
const width = 960
const container = document.querySelector('.container')

function makeBoxes() {
    let boxWidth = Math.floor(width/numBoxes)
    for (let i = 0; i < numBoxes; i++ ) {
        for (let j = 0; j < numBoxes; j++) {
            let div = document.createElement('div')
            container.appendChild(div)
            div.style.width = boxWidth + "px"
            div.style.height = boxWidth + "px"
            div.addEventListener("mouseover", ()=> {
                div.classList.add("dark")
            })
        }
    }
}

function changeSize() {
    numBoxes = prompt("Enter a size of 100 or less")
    if (isNaN(numBoxes) || numBoxes > 100 || numBoxes < 1) {
        changeSize()
    } else {
        container.innerHTML = ""
        makeBoxes()
    }
}

makeBoxes()