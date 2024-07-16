document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;

    fetch('https://sheets.googleapis.com/v4/spreadsheets/1hB01lK_Io1ds3DK2NeqMUGs7T33rMPtTizKL3m3nQDY/values/current%20employee?key=AIzaSyCIRuMA5J88cDuJcy251w-JyO0sNLvU_K4')
        .then(response => response.json())
        .then(data => {
            let rows = data.values;
            let found = false;

            for (let i = 1; i < rows.length; i++) {
                if (rows[i][0] === firstName && rows[i][1] === lastName) {
                    document.getElementById('employeeId').textContent = `เลขพนักงาน: ${rows[i][2]}`;
                    found = true;
                    break;
                }
            }

            if (!found) {
                document.getElementById('employeeId').textContent = 'ไม่พบพนักงาน';
            }
        })
        .catch(error => console.error('Error:', error));
});
