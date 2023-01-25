console.defaultLog = console.log.bind(console);
console.logs = [];
console.log = function(){
    // default &  console.log()
    console.defaultLog.apply(console, arguments);
    // new & array data
    console.logs.push(Array.from(arguments));
    printLoggs(Array.from(arguments));
}

console.defaultError = console.error.bind(console);
console.errors = [];
console.error = function(){
    // default &  console.error()
    console.defaultError.apply(console, arguments);
    // new & array data
    console.errors.push(Array.from(arguments));
    printLoggs(Array.from(arguments));
}

console.defaultDebug = console.debug.bind(console);
console.debugs = [];
console.debug = function(){
    // default &  console.debug()
    console.defaultDebug.apply(console, arguments);
    // new & array data
    console.debugs.push(Array.from(arguments));
    printLoggs(Array.from(arguments));
}

console.defaultWarn = console.warn.bind(console);
console.warns = [];
console.warn = function(){
    // default &  console.warn()
    console.defaultWarn.apply(console, arguments);
    // new & array data
    console.warns.push(Array.from(arguments));
    printLoggs(Array.from(arguments));
}


//document.getElementById("conceptboard_iframe").contentWindow.console.addEventListener("load", function (value) {
//    console.log.apply(null, value);
//    console.log(value);
//  });


function printLoggs(logs) {
    
    if (document.getElementById("logs")){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(logs));
        document.getElementById("logs").appendChild(li);
    }else{
        console.log("not ready");
    }

    
}
