function getValue(e) {
    var a = document.getElementById('result')
    a.value += e
}
function calculate() {
    var a = document.getElementById('result')
    var va = a.value
    var final = eval(va)
    a.value = final
}
function last() {
    var a = document.getElementById('result')
    a.value = ''
}
