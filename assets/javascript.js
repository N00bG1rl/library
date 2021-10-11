function addRow() {
  "use strict";
  var table = document.getElementById("table");
  var row = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var td5 = document.createElement("td");

  var title = document.getElementById("title");
  var author = document.getElementById("author");
  var pages = document.getElementById("pages");

  td1.innerHTML = `<input type="button" value="X" onclick="deleteRow(this)"/>`;
  td2.innerHTML = title.value;
  td3.innerHTML = author.value;
  td4.innerHTML = pages.value;
  td5.innerHTML = `<select name="booklist" form="bookform" id="read">
                      <option value="Not readed">Not readed</option>
                      <option value="Readed">Readed</option>
                    </select>`;
  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  row.appendChild(td4);
  row.appendChild(td5);
  
  if (title.value == '' || author.value == '') {
    alert("Please fill in required fields!");
  } else {
    table.children[0].appendChild(row);
  }
  title.value = ""
  author.value = ""
  pages.value = ""
}


function deleteRow(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}