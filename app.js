const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const {
    crearArchivo,
    listarTabla
} = require('./multiplicar/multiplicar')

let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(lista => console.log(lista))
            .catch(err => console.error(err))
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: ' + colors.green(archivo)))
            .catch(err => console.error(err))
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

// let argv2 = process.argv;
// let param = argv[2];
// let base = param.split('=')[1]
// console.log(argv)