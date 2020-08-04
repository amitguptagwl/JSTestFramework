export function info(msg: string): void{
    console.log(msg);
}

export function warn(msg: string): void{
    console.log("0o33[1;33m" + msg + "0o33[0m");
}

export function error(msg: string): void{
    console.log("0o33[31m" + msg + "0o33[0m");
}
