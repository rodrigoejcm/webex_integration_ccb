// Create a new Webex app instance
var app = new window.Webex.Application();

// Wait for onReady() promise to fulfill before using framework
app.onReady().then(() => {
    log("App ready. Instance", app);
}).catch((errorcode) =>  {
    log("Error with code: ", Webex.Application.ErrorCodes[errorcode])
});

window.onload = function(event) {
    console.log("page loaded");
    document.getElementById("conceptboard_iframe").addEventListener('load',  iframeLoad(), false);
};



function iframeLoad(){
    console.log("session  ", sessionStorage.getItem("board_url"));
    document.getElementById("conceptboard_iframe").src = sessionStorage.getItem("board_url") ;
}

// Button click handler to set share URL
function handleSetShare() {
    // Replace this with the URL of your shared page
    var url = "https://app.conceptboard.com/boards#"
    // "Shared App" is the title of the window or tab that will be created
    app.setShareUrl(url, "", "Shared Conceptboard").then(() => {
        log("Set share URL", url);
    }).catch((errorcode) => {
        log("Error: ", Webex.Application.ErrorCodes[errorcode])
    });
}

// Utility function to log app messages
function log(type, data) {
    var ul = document.getElementById("console");
    var li = document.createElement("li");
    var payload = document.createTextNode(`${type}: ${JSON.stringify(data)}`);
    li.appendChild(payload)
    ul.prepend(li);
}