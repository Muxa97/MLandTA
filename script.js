
let index = 0;

function Parse() {
    let str = document.getElementById('source').value;

    if (ParseExpression(str)) {
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

function ParseExpression(str) {
    let res = false;

    if (str.length === 0 || index === str.length) {
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