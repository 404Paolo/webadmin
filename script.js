let confirmSelectionToggle = false
let selectionCount = 0
const confirmSelectionIcon = document.querySelector(".confirmselection-icon")
const selectionIcon = document.querySelectorAll(".selection-icon")
const dialogOptions = document.querySelector(".dialog-options")

function toggleVisibility(str){
    const docSamp = document.querySelector(str)
    if (docSamp.style.visibility == "visible"){
        docSamp.style.visibility = "hidden"
    }

    else{
        docSamp.style.visibility = "visible"
    }
}

function toggleSelection(str){
    const docSamp = document.querySelector(str)

    if(docSamp.innerHTML == "○"){
        docSamp.innerHTML = "&#x25CF;"
        selectionCount += 1
    }

    else{
        docSamp.innerHTML = "&cir;"
        selectionCount -= 1
    }

    if(selectionCount > 0){
        confirmSelectionIcon.style.color = "white"
        confirmSelectionIcon.style.backgroundColor = "#cccccc"
    }

    
    else if(selectionCount <= 0){
        confirmSelectionIcon.style.color = "#00000099"
        confirmSelectionIcon.style.backgroundColor = "transparent"
    }

    console.log(selectionCount)
}

function startSelection(){
    confirmSelectionIcon.style.visibility = "visible"
    confirmSelectionIcon.style.marginRight = "30px"
    
    selectionIcon.forEach(element => {
        element.style.visibility = "visible"
        element.style.marginRight = "30px"
    })

    dialogOptions.style.visibility = "hidden"
}