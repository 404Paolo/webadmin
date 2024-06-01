var isSelecting = false
var isSelectingAll = false
var isAdding = false
var isEditing = false
var dialogOpen = ""
const selectAllIcon = document.querySelector(".selectall-icon")
const selectionIcon = document.querySelectorAll(".selection-icon")
const dialogOptions = document.querySelector(".dialog-options")
const recordsRow = document.querySelectorAll(".text-editable")
const confirmButtons = document.querySelector(".confirm-buttons")
const addUserFields = document.querySelectorAll(".add")

function toggleAddMode(){
    if(isEditing){
        toggleEditingMode()
    }

    else if(isSelecting){
        toggleSelectionMode()
    }


    if(!isAdding){
        addUserFields.forEach(element =>{
            element.style.display = "block"
            isAdding = true
        })
    }

    else if(isAdding){
        addUserFields.forEach(element => {
            element.style.display = "none"
            isAdding = false
        })
    }
    
    dialogOptions.style.visibility = "hidden"
}


function toggleVisibility(str){
    const docSamp = document.querySelector(str)
    if (docSamp.style.visibility == "visible"){
        docSamp.style.visibility = "hidden"
    }

    else{
        docSamp.style.visibility = "visible"
    }
}
function makeVisible(str){
    const docSamp = document.querySelector(str)
    docSamp.style.visibility = "visible"
}


function makeHidden(){
    if(isSelecting){
        toggleSelectionMode()
    }

    else if(isEditing){
        toggleEditingMode()
    }

    else if(isAdding){
        toggleAddMode()
    }

    confirmButtons.style.visibility = "hidden"
}

function toggleSelectionButton(str){
    const docSamp = document.querySelector(str)

    if(docSamp.innerHTML == "○"){
        docSamp.innerHTML = "&#x25CF;"
    }

    else{
        docSamp.innerHTML = "&cir;"
    }
}
function toggleSelectionMode(){
    if(isEditing){
        toggleEditingMode()
    }

    else if(isAdding){
        toggleAddMode()
    }

    let visibility = ""
    let marginRight = "0"

    if(!isSelecting){
        visibility = "visible"
        marginRight = "30px"
        isSelecting = true
    }

    else{
        visibility = "hidden"
        isSelecting = false
    }

    selectAllIcon.style.visibility = visibility
    selectAllIcon.style.marginRight = marginRight
    
    selectionIcon.forEach(element => {
        element.style.visibility = visibility
        element.style.marginRight = marginRight
    })

    dialogOptions.style.visibility = "hidden"
}
function toggleEditingMode(){
    if(isSelecting){
        toggleSelectionMode()
    }

    else if(isAdding){
        toggleAddMode()
    }


    if(!isEditing){
        recordsRow.forEach(element =>{
            let placeholder = element.innerText
            element.innerHTML = '<input class="edit-form" type="text" placeholder="' + placeholder + '">'
        })

        isEditing = true
    }

    else{
        recordsRow.forEach(element =>{
            element.innerHTML = element.querySelector('.edit-form').placeholder
        })

        isEditing = false
    }
    
    dialogOptions.style.visibility = "hidden"
}
function toggleSelectAll(){
    if(!isSelectingAll){
        selectAllIcon.style.color = "white"
        selectAllIcon.style.backgroundColor = "#cccccc"
    
        selectionIcon.forEach(icon => {
            icon.innerHTML = "&#x25CF;"
        })

        isSelectingAll = true
    }

    else{
        selectAllIcon.style.color = "#cccccc"
        selectAllIcon.style.backgroundColor = "white"

        selectionIcon.forEach(icon => {
            icon.innerHTML = "&cir;"
        })

        isSelectingAll = false
    }
}