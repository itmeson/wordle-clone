const row1 = 'qwertyuiop';
const row2 = 'asdfghjkl';
const row3 = 'zxcvbnm';

/*Create outputgrid letter elements matching rows of the keyboard*/
function createOutputBox(row) {
    let letterrow = document.createElement('div');
    letterrow.setAttribute('class', 'outrow');
    letterrow.setAttribute('id', row);
    document.getElementById('outputgrid').appendChild(letterrow);

    for (let i = 0; i < row.length; i++) {
        let letter = document.createElement('div');
        letter.setAttribute('type', 'text');
        letter.setAttribute('id', row[i]);
        letter.setAttribute('class', 'alphabox');
        letter.setAttribute('maxlength', 1);
        letter.setAttribute('size', 1);
        letter.innerHTML = row[i];
        document.getElementById(row).appendChild(letter);
    }
}

createOutputBox(row1);
createOutputBox(row2);
createOutputBox(row3);
