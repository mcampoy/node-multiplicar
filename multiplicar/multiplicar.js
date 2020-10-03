const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise ((resolve, reject) => {
        console.log('=========================='.green);
        console.log(`tabla de ${ base }`.green);
        console.log('=========================='.green);
        let resultado = ''
        for (let i = 1; i <= limite; i++){
           resultado += `${base} * ${i} = ${base * i} \n`;
        }
        resolve(resultado)})

    }

let crearArchivo = (base, limite = 10) => {
    return new Promise ((resolve, reject) => {


        if(!Number(base)) {
            reject(`El valor ingresado (${base}) no es un número`)
            return
        } 
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if(err) reject(err);

            else
            resolve(`tabla-${base}-al-${limite}.txt`)
        })

    })
}

module.exports = {crearArchivo, listarTabla}


