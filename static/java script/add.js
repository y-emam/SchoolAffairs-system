const form = document.querySelector('#form');
const Name = document.querySelector('#Name');
const ID = document.querySelector('#ID');
const Email = document.querySelector('#email');
const Phone = document.querySelector('#mobile');


let username = 0;
let id = 0;
let phone = 0;
let email = 0;

form.addEventListener('submit', event => {

    validateForm();
    if (username == 0 || id == 0 || phone == 0 || email == 0) {
        event.preventDefault();
    } else {
        alert('the student has been added successfully')
            // $(document).on('submit', '#post-form', function(e) {
            //     e.preventDefault();

        //     $.ajax({
        //         type: 'POST',
        //         url: '/create',
        //         data: {
        //             name: $('#name').val(),
        //             si: $('#ID').val(),
        //             gpa: $('#message').val(),
        //             username: $('#GPA').val(),
        //             gender: $('#gender').val(),
        //             level: $('#level').val(),
        //             status: $('#status').val(),
        //             email: $('#email').val(),
        //             mobile: $('#mobile').val(),
        //             dateOfBirth: $('#dateOfBirth').val(),
        //             Department: $('#department').val(),
        //             csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
        //         },
        //         success: function(data) {
        //             alert(data)
        //         }
        //     });
        // });

    }
});

function validateForm() {
    //ID
    if (ID.value.trim() == '') {
        setError(ID, 'ID can not be empty');
    } else if (ID.value.trim().length < 8) {
        setError(ID, 'ID must be 8 digits');
    } else {
        setSuccess(ID);
        id = 1;
    }
    //Name
    if (Name.value.trim() == '') {
        setError(Name, 'Name can not be empty');
    } else if (Name.value.trim().length < 5) {
        setError(Name, 'Name must be Min 5');
    } else if (isNameVaild(Name.value)) {
        setSuccess(Name);
        username = 1;
    } else {
        setError(Name, 'The name  must contain only alphanumeric characters');
    }
    //Email
    if (Email.value.trim() == '') {
        setError(Email, 'provide email address');
    } else if (isEmailValid(Email.value)) {
        setSuccess(Email);
        email = 1;
    } else {
        setError(Email, 'provide valide email address')
    }
    //phone
    if (Phone.value.trim() == '') {
        setError(Phone, 'Phone can not be empty');
    } else if (Phone.value.trim().length == 11 && isPhoneVaild(Phone.value)) {
        setSuccess(Phone);
        phone = 1;
    } else {
        setError(Phone, 'In vaild');
    }

}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if (parent.classList.contains('success')) {
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('small');
    paragraph.textContent = errorMessage;
}

function setSuccess(element) {
    const parent = element.parentElement;
    if (parent.classList.contains('error')) {
        parent.classList.remove('error');
    }
    parent.classList.add('success');
    const paragraph = parent.querySelector('small');
    paragraph.textContent = '';
}

function isEmailValid(email) {
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return reg.test(email);
}

function isPhoneVaild(phone) {
    const reg = /^[0-9]{11}$/;
    return reg.test(phone);
}

function isNameVaild(name) {
    const reg = /^[A-Za-z]*\s{1}[A-Za-z]*$/;
    return reg.test(name);
}

function isNameVaild2(name) {
    const reg = /^[A-Za-z]/;
    return reg.test(name);
}