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
    let level = getLevel();

    console.log(level);

    // check if the user enters a value or not
    if (level !== '3') {
        alert("You must be at level 3 to register");
        return false;
    } else if (department.value === "Artifical Intelegence" || department.value === "Computer Science"
        || department.value === "Decision Support" || department.value === "Information System"
        || department.value === "Cyber Security") {
        return true;
    } else {
        alert('Please select a department');
        return false;
    }
    
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

// this function returns the level of the student
function getLevel() {
    let params = new URLSearchParams(location.search);

    return params.get('level');
}
