function info(msg){
    console.log(msg);
}

function warn(msg){
    console.log("\033[1;33m" + msg + "\033[0m");
}

function error(msg){
    console.log("\033[31m" + msg + "\033[0m");
}
module.exports = {
    info: info,
    warn: warn,
    error: error
}