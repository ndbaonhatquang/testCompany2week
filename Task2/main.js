const submit = document.querySelector('input[type="submit"]');
const tableBody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const infinityScroll = document.querySelector('input[type="button"]');
let dataHtml = '';
let table = [];

function createTable(rowNum, columnNum) {
    let dataHtml = '';
    let stt = '';
    for (let i = 0; i < columnNum; i++) {
        stt += `<th>${i + 1}</th>`
    }
    for (let i = 0; i < rowNum; i++) {
        dataHtml += `<tr></tr>`;
        
        let line = [];
        for (let j = 0; j < columnNum; j++) {
            let temp = Math.floor(Math.random()*1000 + 1);
            dataHtml += `<td>${temp}</td>`
            line.push(temp);
        }
        table.push(line);
    }
    thead.innerHTML = stt;
    tableBody.innerHTML = dataHtml;
}

function createData() {
    let stt = '';
    for (let i = 0; i < 10; i++) {
        stt += `<th>${i + 1}</th>`
    }
    thead.innerHTML = stt;
    for (let i = 0; i < 100; i++) {
        dataHtml += `<tr></tr>`;
        let line = [];
        for (let j = 0; j < 10; j++) {
            let temp = Math.floor(Math.random()*1000 + 1);
            dataHtml += `<td>${temp}</td>`
            line.push(temp);
        }
        table.push(line);
    }
    tableBody.innerHTML = dataHtml;
}

function clearData() {
    dataHtml = '';
    stt = '';
    thead.innerHTML = stt;
    tableBody.innerHTML = dataHtml;
}

function scrollFunc() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        createData();
    }
    window.addEventListener('scroll', scrollFunc);
    sortTable();
}

function sortTable() {
    const stt = document.querySelectorAll('th');
    stt.forEach(button => button.addEventListener('click', sortColumn));
}

function sortColumn() {
    let temp = this.innerHTML - 1;
    table.sort(function (a, b) {
        return a[temp] < b[temp] ? -1 : 1;
    });
    dataHtml = '';

    for (let i = 0; i < table.length; i++) {
        dataHtml += `<tr></tr>`;
        for (let j = 0; j < table[i].length; j++) {
            dataHtml += `<td>${table[i][j]}</td>`
        }
    }
    tableBody.innerHTML = dataHtml;
}

document.gridForm.addEventListener('submit', function(e) { 
    e.preventDefault();
    let rowNum = this.row.value;
    let columnNum = this.column.value;
    createTable(rowNum, columnNum);
    sortTable();
});
infinityScroll.addEventListener('click', clearData);
infinityScroll.addEventListener('click', scrollFunc);
