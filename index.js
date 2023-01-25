

function openConceptboardUrl(){
    var boardURL = document.getElementById("boardLink").value;
    console.log(boardURL);
    sessionStorage.setItem("board_url", boardURL);
    window.location.href = 'index_frame.html';
}


// Utility function to log app messages
function log(type, data) {
    var ul = document.getElementById("console");
    var li = document.createElement("li");
    var payload = document.createTextNode(`${type}: ${JSON.stringify(data)}`);
    li.appendChild(payload)
    ul.prepend(li);
}