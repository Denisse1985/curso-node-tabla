const argv = require('yargs')//.argv;//yargs me da acceso al objeto
                  .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'es la tabla de multiplicar'
                  })
                  .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default:false,
                    describe: 'muestra la tabla en consola'
                  })
                  .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default:10,
                    describe: 'numero hasta donde quieres que llegue la tabla'
                  })
                  .check((argv, options)=>{
                    if(isNaN(argv.b)){
                      throw 'La base tiene que ser un número'
                    }
                    return true;
                  })
                  .argv;


module.exports= argv;