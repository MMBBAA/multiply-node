//requireds
const fs = require('fs');
const color = require('colors');

let listarTabla = (base, limite) => {

    if (!Number(base) || !Number(limite)) {
        console.log("No es un número")
        return;
    }

    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${i}*${base} = ${i*base}\n`;
    };
    console.log("limite =l base =b");
    console.log("l-b")
    console.log(color.green(data));
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject('No es un número')
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `
                    ${ i } * ${ base } = ${ i * base }\
                    n `;
        }

        fs.writeFile(`tablas/tabla-${ base }-al-${limite}.txt `, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla - ${ base }-al-${limite}.txt`);

        });
    });
}

//objeto modulo lo usamos para exportar la función
module.exports = {
    crearArchivo,
    listarTabla
}