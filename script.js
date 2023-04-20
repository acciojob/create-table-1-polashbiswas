function insert_Row() {
    //Write your code here
  const table = document.getElementById("sampleTable");
	// let tr = document.createElement("tr");
	// let td1 = document.createElement("td");
	// let td2 = document.createElement("td");
 //    td1.innerHTML = "New Cell1";
 //    td2.innerHTML = "New Cell2";
 //    tr.appendChild(td1);
 //    tr.appendChild(td2);
	// table.insertBefore(tr, table.firstChild);
	const row = table.insertRow(0);
	const cell1 = row.insertCell(0);
	cell1.innerText = "New Cell1";
	const cell2 = row.insertCell(1);
	cell2.innerText = "New Cell2"	
}
