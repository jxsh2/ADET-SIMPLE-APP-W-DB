const firebaseConfig = {
    apiKey: "AIzaSyB25dU8ICCkbHzYCKS9oK87V84sMLy8VBs",
    authDomain: "diarydb-624ec.firebaseapp.com",
    databaseURL: "https://diarydb-624ec-default-rtdb.firebaseio.com",
    projectId: "diarydb-624ec",
    storageBucket: "diarydb-624ec.appspot.com",
    messagingSenderId: "730454202942",
    appId: "1:730454202942:web:4968a5b682a8d70c0c0f6f"
};

// initializing firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var diaryDB = firebase.database().ref('diaryEntry');

document.getElementById('sub_btn').addEventListener('click', submitForm);

function submitForm(e) {
    e.preventDefault();

    var entries = getElementVal('ent_num');
    var date = getElementVal('date');
    var title = getElementVal('title');
    var content = getElementVal('msgContent');

    console.log(entries, date, title, content);

   saveMessages(entries, date, title, content);

   // show alert msg
   document.querySelector(".alert").style.display = "block";

   // remove alert
   setTimeout (() =>{
    document.querySelector(".alert").style.display = "none";
   }, 700);

   // reset the whole form
   document.getElementById('myForm').reset();
}

const saveMessages = (entries, date, title, content) => {

    var newDiaryDB = diaryDB.push();
    
    newDiaryDB.set({

        entry_no : entries,
        date : date,
        title : title,
        content: content,

    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};