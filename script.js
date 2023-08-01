let numBoxes = 16

const container = document.querySelector('.container')
for (let i = 0; i < numBoxes; i++ ) {
    for (let j = 0; j < numBoxes; j++) {
        let div = document.createElement('div')
        container.appendChild(div)
    }
}