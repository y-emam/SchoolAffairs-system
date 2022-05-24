
// get button and table div in html form
let btnget = document.querySelector('button');
let mytable = document.querySelector('#table');

// create a dummy data of students
let students = [
    {
        'Number': '1', 'Name': 'Yasser', 'ID': '20201010'
    },
    {
        'Number': '2', 'Name': 'Saad', 'ID': '20201020'
    }, {
        'Number': '3', 'Name': 'Reem', 'ID': '20201030'
    }, {
        'Number': '4', 'Name': 'Ahmed', 'ID': '20201040'
    }
]

// headers of table
let headers = ['Number', 'Name', 'ID', 'Register'];

// when the button is clicked
btnget.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    headers.forEach((headertext) => {
        let headeer = document.createElement('th');
        let textNode = document.createTextNode(headertext);
        headeer.appendChild(textNode);
        headerRow.appendChild(headeer);
    });

    table.appendChild(headerRow);

    students.forEach(emp => {
        let row = document.createElement('tr');

        Object.values(emp).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);

        });

        // Create anchor element.
        var a = document.createElement('a'); 
                  
        // Create the text node for anchor element.
        var link = document.createTextNode("Register");
          
        // Append the text node to anchor element.
        a.appendChild(link); 

        // Set the href property.
        a.href = "department"; 


        row.appendChild(a);

        // row.appendChild(registerLink);
        table.appendChild(row);
    });

    mytable.appendChild(table);
});