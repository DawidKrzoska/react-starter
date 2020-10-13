function createTable() {
  const rootNode = document.querySelector(".root");
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const tableHeader = document.createElement("th");

  instructors = ["mikolaj", "jarek", "marta"];
  hours = [];

  rootNode.appendChild(table);
  table.classList.add("table");
  table.append(tableHead);

  tableHead.appendChild(tableHeader);

  tableHeader.append("Hours");

  for (var i in instructors) {
    tableHead.appendChild(document.createElement("th"));
    document.querySelector("thead").lastChild.textContent = instructors[i];
  }

  for (var i = 8; i < 21; i++) {
    let tostring = i + ":00";
    hours.push(tostring);
  }

  var x = table.appendChild(document.createElement("tbody"));

  for (var j in hours) {
    var tablerow = x.appendChild(document.createElement("tr"));
    tablerow.appendChild(document.createElement("th"));
    tablerow.lastChild.textContent = hours[j];
    tablerow.lastChild.classList.add("row-" + hours[j]);
    for (var i = 0; i < instructors.length; i++) {
      tablerow.appendChild(document.createElement("td"));
      tablerow.lastChild.classList.add(
        "row-" + hours[j] + "-" + instructors[i]
      );
    }
  }
}

createTable();
