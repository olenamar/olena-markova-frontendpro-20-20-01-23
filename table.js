const main = document.getElementById('main');
main.style.marginTop = '50px';
main.style.marginBottom = '50px';
 
main.append(tableRed());

function tableRed() {
    const table = document.createElement('table');
    table.style.border = '2px solid red';
    table.style.margin = '0 auto';
    table.style.color = 'red';
    table.style.width = '450px';
    table.style.height = '500px';
       
    let number = 0;
    let mainTabel = '';
   
    for(let i = 0; i < 10 ;i++) {
        mainTabel += `<tr>`;
        for(let j = 0; j < 10; j++) {
            mainTabel += `<td>${++number}</td>`;
        }
        mainTabel += `</tr>`;
    }
    table.innerHTML = mainTabel;
    
    return table;
}