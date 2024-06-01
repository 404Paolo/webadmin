// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAx8WMofz0uMKfh4a7vbBuJglD--i14OA",
  authDomain: "queens-clinic.firebaseapp.com",
  databaseURL: "https://queens-clinic-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "queens-clinic",
  storageBucket: "queens-clinic.appspot.com",
  messagingSenderId: "972726756476",
  appId: "1:972726756476:web:b8189fd9052bc645a2d5f9",
  measurementId: "G-D5P6EZ0V5F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function writeUserData(userId, name, email, imageUrl) {
    database.ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
}

function addUser(){
    const username = document.querySelector("#uname_add")
    const password = document.querySelector("#password_add")

    console.log(username.value)
    console.log(password.value)
}

// var starCountRef = database.ref('posts/' + postId + '/starCount');
// starCountRef.on('value', (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });


//////////////////////////////////////////////////////////////FRONT-END FUNCS//////////////////////////////////////////////////////////////////////////
{
    let isEditing = false
    let isSelecting = false
    let isSelectingAll = false
    let dialogOpen = ""
    const selectAllIcon = document.querySelector(".selectall-icon")
    const selectionIcon = document.querySelectorAll(".selection-icon")
    const dialogOptions = document.querySelector(".dialog-options")
    const recordsRow = document.querySelectorAll(".text-editable")
    const confirmButtons = document.querySelector(".confirm-buttons")

    function toggleVisibility(str = dialogOpen){
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
}