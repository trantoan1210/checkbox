function good() {
    if (document.getElementById('fast').checked==true&&document.getElementById('cheap').checked==true){
        document.getElementById('fast').checked=false
    }
}
function cheap() {
    if (document.getElementById('good').checked==true&&document.getElementById('fast').checked==true){
        document.getElementById('good').checked=false
    }
}
function fast() {
    if (document.getElementById('good').checked==true&&document.getElementById('cheap').checked==true){
        document.getElementById('cheap').checked=false
    }
}