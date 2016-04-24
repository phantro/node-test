/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var jsonfile = require('jsonfile');
var util = require('util');

var file = './tmp/data.json';

//asincrono
jsonfile.readFile(file, function(err, obj) {
  console.dir(obj);
  console.log(obj.lastName);
  console.log(obj.employees[0].firstName + " " + obj.employees[0].lastName);
});

//sincrono

console.dir(jsonfile.readFileSync(file));

//escribir

var file = './tmp/dataout.json';
var obj = {name: 'JP'};

jsonfile.writeFile(file, obj, {spaces: 2}, function(err) {
  console.error(err);
});


//escribir sincrono
var filesincrono = './tmp/dataoutsincrono.json';
var objsincrono = {name: 'BO'};

jsonfile.writeFileSync(filesincrono, objsincrono);


//con espacio

var fileespacio = './tmp/dataespacio.json';
var objespacio = {name: 'PE'};

jsonfile.writeFileSync(fileespacio, objespacio, {spaces: 2});


//espacio de 4

jsonfile.spaces = 4;

var filecuatro = './tmp/datacuatro.json';
var objcuatro = {name: 'AR'};

// json file has four space indenting now
jsonfile.writeFile(filecuatro, objcuatro, function (err) {
  console.error(err);
});


//espace 4 32
var filetreinta = './tmp/datacuatrotreinta.json';
var objtreinta = {name: 'AR',bol:'como'};

jsonfile.spaces = 4;
jsonfile.writeFileSync(filetreinta, objtreinta); // will have 4 spaces indentation

var myCrazyObj = {spaces: 32};
myCrazyObj.writeJsonSync = jsonfile.writeFileSync;
myCrazyObj.writeJsonSync(filetreinta, objtreinta); // will have 32 space indentation
myCrazyObj.writeJsonSync(filetreinta, objtreinta, {spaces: 2}); // will have only 2