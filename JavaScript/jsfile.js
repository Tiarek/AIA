
var amount = 0;
function newBook() {
    amount++;
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    idRow = "row" + amount;
    row.id = idRow;

    cell1.id = "cell1-" + amount;
    cell2.id = "cell2-" + amount;

    
    idAuthor = "author" + amount;
    idTitle = "title" + amount;

    cell1.innerHTML = "<input id="+ idAuthor +">";
    cell2.innerHTML = "<input id="+ idTitle + ">";
    cell3.innerHTML = '<button id="saveButton' + amount + '" onclick="saveBook(\'' + amount + '\')">Save</button> <button onclick="removeBook(\'' + idRow + '\')" >Remove</button>';
}

function removeBook(id){
    document.getElementById(id).remove();
}

function saveBook(nr){
    // alert(nr);
    idAuthor = "author" + nr;
    idTitle = "title" + nr;

    author = document.getElementById(idAuthor);
    title = document.getElementById(idTitle);

    document.getElementById(idAuthor).remove();
    document.getElementById(idTitle).remove();

    // Add Value
    
    idAuthorCell = "cell1-" + nr;
    idTitleCell = "cell2-" + nr;
    cellAuthor = document.getElementById(idAuthorCell);
    cellTitle = document.getElementById(idTitleCell);

    cellAuthor.innerHTML = author.value;
    cellTitle.innerHTML = title.value;

    saveButton = document.getElementById("saveButton"+nr);
    saveButton.innerHTML = "Edit";
    saveButton.setAttribute('onclick', 'editBook('+ nr +')');
    saveButton.setAttribute('id', 'editButton' + nr);
}

function editBook(nr){
    cell1 = document.getElementById("cell1-"+nr);
    cell2 = document.getElementById("cell2-"+nr);
    cellValue1 = cell1.innerHTML;
    cellValue2 = cell2.innerHTML;

    idAuthor = "author" + nr;
    idTitle = "title" + nr;

    cell1.innerHTML = "<input id="+ idAuthor + " value=" + cellValue1 + ">";
    cell2.innerHTML = "<input id="+ idTitle + " value=" + cellValue2 + ">";
    
    // button
    saveButton = document.getElementById("editButton"+nr);
    saveButton.innerHTML = "Save";
    saveButton.setAttribute('onclick', 'saveBook('+ nr +')');
    saveButton.setAttribute('id', 'saveButton' + nr);
}

