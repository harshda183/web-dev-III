const os=require('os');
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length);
console.log(os.freemem());
console.log((os.totalmem() / (1024 * 1024 * 1024)).toFixed(2) + " GB ");