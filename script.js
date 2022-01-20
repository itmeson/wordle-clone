var currentWord = randomWord();
var currentRow = 0;
var currentLetter = 0;
var guessword = '';

/*Make 6 by 5 grid of text input boxes*/
for (let i = 0; i < 6; i++) {
    let row = document.createElement("div");
    let rowname = `row${i}`;
    row.setAttribute("id", rowname); /*make classname with row number*/
    row.setAttribute("class", "row");
    document.getElementById("inputgrid").appendChild(row);

    for (let j = 0; j < 5; j++) {
        let input = document.createElement("div");
        input.setAttribute("type", "text");
        input.setAttribute("id", `${i}${j}`);
        input.setAttribute("class", "letterbox");
        input.setAttribute("maxlength", 1);
        input.setAttribute("size", 1);
        document.getElementById(rowname).appendChild(input);
    }
}



document.addEventListener('keydown', keyDown);


function randomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function keyDown(e) {
    let key = e.key;
    //check if key is a letter
    if (key.length === 1 && key.match(/[a-z]/i) && currentLetter < 5) {
        //display letter in input box
        //console.log('matched', `${currentRow}${currentLetter}`)
        document.getElementById(`${currentRow}${currentLetter}`).innerHTML = key;
        currentLetter += 1;
        guessword += key;
    } else if (key === "Backspace") {
        //remove last letter
        if (currentLetter > 0) {
            currentLetter -= 1;
            document.getElementById(`${currentRow}${currentLetter}`).innerHTML = "";
            guessword = guessword.slice(0, -1);
        }
    } else if (key === "Enter" && currentLetter === 5) {
        //check if word is correct
        if (!words.includes(guessword) && !weird.includes(guessword)) {
            console.log('word not in list')
        } else {
            let wordcomparison = currentWord;
            for (let i=0; i < 5; i++) {
                if (guessword[i] === wordcomparison[i]) {
                    document.getElementById(`${currentRow}${i}`).style.backgroundColor = "green";
                    document.getElementById(guessword[i]).style.backgroundColor = 'green';

                    wordcomparison = wordcomparison.replace(guessword[i], ' ');
                }
                else if (wordcomparison.includes(guessword[i]) ) {
                    document.getElementById(`${currentRow}${i}`).style.backgroundColor = "yellow";
                    wordcomparison = wordcomparison.replace(guessword[i], ' ');
                    console.log(wordcomparison), 'removed letter';
                }
                else {
                    document.getElementById(`${currentRow}${i}`).style.backgroundColor = "darkgrey";
                    document.getElementById(guessword[i]).style.backgroundColor = 'darkgrey';
                }
            }
            if (guessword === currentWord) {
                document.removeEventListener('keydown', keyDown);
            }
            currentRow += 1;
            currentLetter = 0;
            guessword = '';
        }

    }
    console.log(key, guessword);
}
