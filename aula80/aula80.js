const pessoas = [
    {id: 3, none: 'Luiz'},
    {id: 2, none: 'Maria'},
    {id: 1, none: 'Helena'},
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa }; 
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

for (const pessoas of novasPessoas) {
    console.log(pessoas);
}
