const dataCenter = (targetArea) => {
    // Your code
    const raiz = Math.sqrt(targetArea);
    let altura = 0;
    let base = 0;
    let perimetro = 0;
    let min = 999999999;
    // 1° Obtener Base y Altura de nuestro Rectangulo
    // Ya que nuestra Area esta en metros cuadrados deberemos obtener la raiz cuadrada
    // para poder iterar sobre ella y encontrar el valor minimo, asi evitaremos realizar iteraciones inecesarias
    for( let i = 1 ; i <= raiz; i++ ){

        if( targetArea % i === 0 ){
    // Mediante el uso del maximo comun divisor obtendremos nuestra base
            base=i;
    // Y para obtener nuestra altura deberemos restar la Base entre nuesta Area
            altura=(targetArea/base);
        }
    // 2° Obtener perimetro del Rectangulo
        perimetro=(2*altura)+(2*base);
    // Validacion para obtener el valor minimo que se solicita
        if(perimetro<min){
            min=perimetro;
        }
    }

    return  console.log(min);

}


dataCenter(36);