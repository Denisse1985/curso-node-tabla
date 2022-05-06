//const { rejects } = require('assert');
const fs = require('fs');//importacion de file system
const colors = require('colors');
//const { resolve } = require('path/posix');

//**tarea crear promesa 1*/
// const crearArchivo = (base=5)=> {
//     return new Promise((resolve, rejects)=>{

//         console.log('*******************************************');
//         console.log('           tabla del : ' , base             );
//         console.log('*******************************************');
        
            
//         let salida='';
        
//         for(let i=1; i<=10 ; i++){
//             //console.log(`${base} x ${i} = ${base * i}`);
//             salida += `${base} x ${i} = ${base * i}\n`;
//         }
        
//         console.log(salida);
        
//         fs.writeFileSync(`tabla-${base}.txt`, salida); //(err)=>{
//             //if(err) throw err;        
//            // console.log(`tabla-${base}.txt creado`);
//         //});
//         //console.log(`tabla-${base}.txt creado`);
//         resolve(`tabla-${base}.txt`);
        
        
        
//     });
// }


  /**tarea crear promesa 2*/
const crearArchivo = async (base=5,listar=false, hasta =10)=> {   

    try{    
        let salida, consola ='';
        //let consola ='';//evitamos que los colores interfieran con lo que se guarda, ya que en cconsola se ven los colores per en el archivo no
        
        for(let i=1; i<=hasta ; i++){
            //console.log(`${base} x ${i} = ${base * i}`);
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        if(listar){
            console.log('*******************************************'.green);
            console.log('           tabla del : '.green, colors.blue (base)      );
            console.log('*******************************************'.green);
            console.log(consola);
        }        
        
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); //(err)=>{
            //if(err) throw err;        
           // console.log(`tabla-${base}.txt creado`);
        //});
        //console.log(`tabla-${base}.txt creado`);
       return`tabla-${base}.txt`;
    }catch(err){
        throw err;
    }

}    
        
        module.exports={
            crearArchivo
        }
 
    
