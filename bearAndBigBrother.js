const bearAndBigBrither = (a, b) => {
    // Your code
    // Objetivo: obtener el numero de años en el que A superara a B 
    let years = 0;
    // Establecer ciclo para iterar mientras que A sea Menor o Igual a B
    while( a <= b ){
    // A debera crecer el triple cada año
        a = a * 3;
    // B debera crecer el doble cada año
        b = b * 2;
    // Deberemos ahumentar nuestro contador de años mientras se cumpla nuestra condicion
        years ++;
    }
    return console.log(years);
    }
    


    bearAndBigBrither( 1, 2 );