// change the text in the placeholder
function show(department) {
    document.getElementById('input').value = department;
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
    let department = document.getElementById('input');

    // check if the user enters a value or not
    if (department.value === "Artifical Intelegence") {
        return true;
    } else if (department.value === "Computer Science") {
        return true;
    } else if (department === "Decision Support") {
        return true;
    } else if (department === "Information System") {
        return true;
    } else if (department === "Information Technology") {
        return true;
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
