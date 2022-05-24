// change the text in the placeholder
function show(department) {
    document.getElementById('input').placeholder = department;
}

// when the user clicks the drop down menu
let menu = document.querySelector('#dropdown')
menu.onclick = function() {
    menu.classList.toggle('active');
}



// change information of student
info("Yasser", "20200000");
function info(nameInp, idInp) {
    var nameTag = document.getElementById('name-data');
    var idTag = document.getElementById('id-data');
    nameTag.innerHTML = nameInp;
    idTag.innerHTML = idInp;
}

//register the student
function register() {
    // take parameters from dropdown menu and register
    var department = document.getElementById('input').placeholder;

    // check if the user enters a value or not
    if (department === "Choose a department...") {
        alert('Shit');
    } else {
        console.log('registered for department: ' + department);
        alert('registered');
    }
}
