
//const fs = require('fs');//importacion de file system
//const { lightseagreen } = require('color-name');
//const { basename } = require('path/posix');
//const { option } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

//console.log(process.argv);
//console.log(argv);
//console.log('base: yargs', argv.b);



//console.log(process.argv);

//jamas hacerlo de esta manera por lo tedioso, y pk si no mando la base como yo la quiero me va a arrojar cosas que yo no quiero
// const [, ,arg3='base=5']=process.argv;
// const [, base ]=arg3.split('=');
// console.log(base);

//const base=3;

crearArchivo(argv.b, argv.l, argv.h)
  .then (nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));


//let salida='';

//for(let i=1; i<=10 ; i++){
    //console.log(`${base} x ${i} = ${base * i}`);
 //   salida += `${base} x ${i} = ${base * i}\n`;
//}

//console.log(salida);

//fs.writeFileSync(`tabla-${base}.txt`, salida); //(err)=>{
    //if(err) throw err;

   // console.log(`tabla-${base}.txt creado`);
//});
//console.log(`tabla-${base}.txt creado`);



