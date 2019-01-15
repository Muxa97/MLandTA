
let index = 0;

function GetResult() {
    let str = document.getElementById('source').value;

    if (Parse(str)) {
        let element = document.createElement("div");
        element.className = 'result good';
        element.innerHTML = `
            <span>` + str + `</span>: Good
        `;
        document.getElementsByClassName('results')[0].appendChild(element);
    }
    else {
        let element = document.createElement("div");
        element.className = 'result not-good';
        element.innerHTML = `
            <span>` + str + `</span>: Not good
        `;
        document.getElementsByClassName('results')[0].appendChild(element);
    }
    index = 0;
}

function CheckInput(event) {
    if (event.key === 'Enter') {
        GetResult();
    }
    else {
        let input = document.getElementById('source');
        input.classList.remove('valid', 'invalid');
        let str = input.value;

        document.getElementById('source').classList.add(Parse(str) ? 'valid' : 'invalid');
        index = 0;
    }
}

function Parse(str) {
    return ParseExpression(str);
}

function ParseExpression(str) {
    let res = false;

    if (str.length !== 0 && index === str.length) {
        res = true;
    }
    else if (str[index] === '1') {
        index++;
        res = ParseExpression(str);
    }
    else if (str[index] === '2') {
        index++;
        res = ParseAfter2(str);
        res = res && ParseExpression(str);
    }

    return res;
}

function ParseAfter2(str) {
    let res = false;

    if (str[index] === '0') {
        index++;
        res = true;
    }
    else if (str[index] === '1') {
        index++;
        res = ParseAfter2(str);
    }
    else if (str[index] === '2') {
        index++;
        res = ParseAfter2(str);
        res = res && ParseAfter2(str);
    }

    return res;
}