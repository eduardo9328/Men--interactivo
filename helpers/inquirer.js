const clrs =  require('colors');
const inquire  = require('inquirer');

const preguntas = [
    {
        type: 'list',
        name: 'opt',
        message: 'Que desea hacer ?',
        choices: [
            {
                value: '1',
                name: '1. crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tareas(S)'
            },
            {
                value: '6',
                name: '6. Borar tareas'
            },
            {
                value: '0',
                name: '0. Salir'
            },
            
        ]

    }
];

const inquirerMenu = async() =>{

    console.clear();
    console.log('\n ==========================='.green);
    console.log('  SELECCIONE UNA OPCION    '.green);
    console.log(' =========================== \n'.green );

   const { opt } = await inquire.prompt(preguntas)

   return opt;
}


const pausa = async() =>{

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `\nPresione ${'ENTER'.yellow} para continuar `

        }
    ]


    console.log('\n')
    await inquire.prompt(question);
}


module.exports = {
    inquirerMenu,
    pausa
}