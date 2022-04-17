
function getNumber() {
    let num
    do {
        num = Number(prompt("100"))
        if (num < 100 || isNaN(num)) {
            alert("ошибка")
        }
    } while (isNaN(num) || num === null || num < 100)
    alert('good')
    return num
}
getNumber()