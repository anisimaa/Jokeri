const button = document.getElementById("button");
const rowCountDisplay = document.getElementById("rowCount");
let rowCount = 0;

  button.addEventListener("click", function() {
    addJokeriRow();
    rowCount++;
    rowCountDisplay.textContent = "Valmiit rivit: " + rowCount;
  });

  function addJokeriRow() {
    const jokeriTable = document.getElementById("jokeriTable");
    const row = document.createElement("tr");
    

    for (let i = 0; i < 7; i++) {
      const cell = document.createElement("td");
      cell.classList.add("jokeriNumber");
      const randomNumber = Math.floor(Math.random() * 10);
      cell.textContent = randomNumber;
      row.appendChild(cell);
    }
   
    jokeriTable.appendChild(row);
  }
