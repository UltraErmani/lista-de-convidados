let nomes = []
function enviarnomes() {
    let nome = document.getElementById("nomes").value;
    nomes.push(nome);
    document.getElementById("mostrarnomes").innerHTML = nomes.toString();
}