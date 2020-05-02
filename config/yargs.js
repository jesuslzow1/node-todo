const argv = require('yargs')
            .command('crear', 'Crear un elemento por hacer',{
                descripcion: {
                    demand: true, 
                    alias: 'd',
                    desc: 'Dscripcion de la tarea por hacer'
                }
            })
            .command('actualizar', 'Actualizar el estado completado de una tarea', {
                descripcion: {
                    demand: true,
                    alias: 'd',
                    desc: 'Descripcion de la tarea por hacer'
                },
                completado: {
                    default: true,
                    alias: 'c',
                    desc: 'Marcar como completado o pendiente la tarea'
                }
            })
            .command('borrar', 'Borra una tarea por la descripcion que se especifique', {
                descripcion: {
                    demand: true,
                    alias: 'd',
                    dsc: 'Dscripcion de la tarea que se quiere borrar'
                }
            })
            .help()
            .argv;


module.exports = {
    argv
}