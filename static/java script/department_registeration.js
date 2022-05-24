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
info(getName(), getId());
function info(nameInp, idInp) {
    var nameTag = document.getElementById('name-data');
    var idTag = document.getElementById('id-data');
    nameTag.value = nameInp;
    idTag.value = idInp;
}

//register the student
function validateForm() {
    // take parameters from dropdown menu and register
    let department = document.getElementById('input').placeholder;

    // check if the user enters a value or not
    if (department === "Artifical Intelegence") {
        department = "Artifical Intelegence";
    } else if (department === "Computer Science") {
        department = "Computer Science";
    } else if (department === "Decision Support") {
        department = "Decision Support";
    } else if (department === "Information System") {
        department = "Information System";
    } else if (department === "Information Technology") {
        department = "Information Technology";
    } else {
        alert('Please select a department');
        return false;
    }
    
    return true
}

// this function returns the name of the student
function getName() {
    let params = new URLSearchParams(location.search);

    return params.get('name');
}

// this function returns the id of the student
function getId() {
    let params = new URLSearchParams(location.search);

    return params.get('id');
}
