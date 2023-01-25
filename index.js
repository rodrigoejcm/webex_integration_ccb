// Create a new Webex app instance
var app = new window.Webex.Application();

// Wait for onReady() promise to fulfill before using framework
app.onReady().then(() => {
    log("App ready. Instance", app);
    console.log(app.context);
    if (app.isShared) {
        document.getElementById("footer").style.display = "none";
    }
}).catch((errorcode) =>  {
    log("Error with code: ", Webex.Application.ErrorCodes[errorcode])
});




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

