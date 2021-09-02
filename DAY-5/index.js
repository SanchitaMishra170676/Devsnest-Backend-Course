const fs = require('fs');
fs.mkdirSync('Folder-1');
fs.writeFileSync('Folder-1/index.txt','Hello Beautiful');
fs.appendFileSync('Folder-1/index.txt',' World');
const data = fs.readFileSync('Folder-1/index.txt','utf-8');
console.log(data);
fs.renameSync('Folder-1/index.txt','Folder-1/Hello.txt');
fs.unlinkSync('Folder-1/hello.txt');
fs.rmdirSync('Folder-1');

const test = require('./require_test.js');
var txt = new test.Test();
console.log(txt.print());

const test2= require('./require_test');
var txt2 = new test2.Test2();
console.log(txt2.print());