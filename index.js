

function openConceptboardUrl(){
    var boardURL = document.getElementById("boardLink").value;
    console.log(boardURL);
    sessionStorage.setItem("board_url", boardURL);
    window.location.href = 'index_frame.html';
}


