function recursiva(max) {
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(0);

// Função recursiva é uma função que se chama de volta