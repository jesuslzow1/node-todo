const fs = require('fs');


let listadoPorhacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorhacer);
    fs.writeFile('db/db.json', data, (err) => {
        if (err) throw new Error('no se pudo grabar la info', err);
    })
}

const cargarDB = () => {
    try {
        listadoPorhacer = require('../db/db.json');
    } catch (error) {
        listadoPorhacer = [];        
    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion, //es lo mismo que escribir descripcion: descripcion
        completado: false
    };

    listadoPorhacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorhacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorhacer.findIndex( tarea => {
        return tarea.descripcion == descripcion;
    })

    if (index >= 0 ){
        listadoPorhacer[index].completado = completado; 
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorhacer.findIndex(tarea => {
        return tarea.descripcion == descripcion;
    })
    console.log(index);
    if(index >= 0){
        listadoPorhacer.splice(index, 1);
        guardarDB();
        return true;
    }else{
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}