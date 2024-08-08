var isSelecting = false
var isSelectingAll = false
var isAdding = false
var isEditing = false
var isConfirming = false
var dialogOpen = ""
var userCount = 0
var medCount = 0
var inventoryCount = 0
var transactionCount = 0
var userRecord_template = ``
var medRecord_template = ``
var inventoryRecord_template = ``
var transactionRecord_template = ``
var selectAllIcon = document.querySelector(".selectall-icon")
var selectionIcon = document.querySelectorAll(".selection-icon")
var dialogOptions = document.querySelector(".dialog-options")
var usersGroup = document.querySelector(".users-group")
var medsGroup = document.querySelector(".meds-group")
var inventoryGroup = document.querySelector(".inventory-group")
var transactionsGroup = document.querySelector(".transactions-group")
var usersTitle = document.querySelector("#users")
var medsTitle = document.querySelector("#meds")
var inventoryTitle = document.querySelector("#inventory")
var transactionsTitle = document.querySelector("#transactions")
var recordsRow = document.querySelectorAll(".text-editable")
var confirmButtons = document.querySelector(".confirm-buttons")
var addUserFields = document.querySelectorAll(".add")

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
    console.log(str)

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

function changeFrag(str){
    usersGroup.style.display = "none"
    medsGroup.style.display = "none"
    inventoryGroup.style.display = "none"
    transactionsGroup.style.display = "none"
    usersTitle.style.borderBottom = "0"
    medsTitle.style.borderBottom = "0"
    inventoryTitle.style.borderBottom = "0"
    transactionsTitle.style.borderBottom = "0"

    const docSamp = document.body.querySelector("."+str+"-group")
    docSamp.style.display = "grid"

    const docSamp2 = document.body.querySelector("#"+str)
    docSamp2.style.borderBottom = "3px solid #1436a1"
}

function init(){
    for(let i = 0; i < 20; i++){
                
        usersGroup.innerHTML += `
        <div class="records-row selection-icon" id="user-selection${userCount}" onclick="toggleSelectionButton('#user-selection${userCount}')">&cir;</div>
        <div class="records-row"> <img class="circle-small" src="assets/ic_profpic.webp"></div>
        <div class="records-row text-editable"> Christian Paolo Reyes</div>
        <div class="records-row text-editable"> cpaolo852@gmail.com</div>
        <div class="records-row text-editable"> Fairview</div>
        <div class="records-row text-editable"> Manager</div>
        <div class="records-row text-editable"> May 10, 2024</div>
        <div class="records-row text-editable"> Juan Dela Cruz</div>
        `
        
        medsGroup.innerHTML += `
        <div class="records-row selection-icon" id="med-selection${medCount}" onclick="toggleSelectionButton('#med-selection${medCount}')">&cir;</div>
        <div class="records-row"> <img class="circle-small" src="assets/ic_medbox.png"> </div>
        <div class="records-row">Chlorphenamine Maleate</div>
        <div class="records-row">Neozep</div>
        <div class="records-row">50</div>
        <div class="records-row">365</div>
        <div class="records-row">A pill box is a container used to organize your medication doses for a certain length of time. A pill box is also called a pill container or pill case.</div>
        `

        inventoryGroup.innerHTML += `
        <div class="records-row selection-icon" id="inventory-selection${inventoryCount}" onclick="toggleSelectionButton('#inventory-selection${inventoryCount}')">&cir;</div>
        <div class="records-row">1</div>
        <div class="records-row">Chlorphenamine Maleate</div>
        <div class="records-row">Neozep</div>
        <div class="records-row">50</div>
        <div class="records-row">365</div>
        <div class="records-row">Test</div>
        <div class="records-row">Test</div>
        `

        transactionsGroup.innerHTML += `
        <div class="records-row selection-icon" id="transaction-selection${transactionCount}" onclick="toggleSelectionButton('#transaction-selection${transactionCount}')">&cir;</div>
        <div class="records-row"> <img class="circle-small" src="assets/ic_profpic.webp"></div>
        <div class="records-row text-editable"> Christian Paolo Reyes</div>
        <div class="records-row text-editable"> cpaolo852@gmail.com</div>
        <div class="records-row text-editable"> Fairview</div>
        <div class="records-row text-editable"> Manager</div>
        <div class="records-row text-editable"> May 10, 2024</div>
        <div class="records-row text-editable"> Juan Dela Cruz</div>
        `

        userCount += 1
        medCount += 1
        inventoryCount += 1
        transactionCount += 1
    }
    
    selectAllIcon = document.querySelector(".selectall-icon")
    selectionIcon = document.querySelectorAll(".selection-icon")
    dialogOptions = document.querySelector(".dialog-options")
    usersGroup = document.querySelector(".users-group")
    medsGroup = document.querySelector(".meds-group")
    inventoryGroup = document.querySelector(".inventory-group")
    transactionsGroup = document.querySelector(".transactions-group")
    usersTitle = document.querySelector("#users")
    medsTitle = document.querySelector("#meds")
    inventoryTitle = document.querySelector("#inventory")
    transactionsTitle = document.querySelector("#transactions")
    recordsRow = document.querySelectorAll(".text-editable")
    confirmButtons = document.querySelector(".confirm-buttons")
    addUserFields = document.querySelectorAll(".add")
}
init()