function trestres(){
let num1 = document.getElementById("eq11").value;
let num2= document.getElementById("eq12").value;
let num3 = document.getElementById("eq13").value;
let num4 = document.getElementById("eq21").value;
let num5 = document.getElementById("eq22").value;
let num6 = document.getElementById("eq23").value;
let num7 = document.getElementById("eq31").value;
let num8 = document.getElementById("eq32").value;
let num9 = document.getElementById("eq33").value;




let ecuacion1 = [[num1],[num2],[num3]];
let ecuacion2 = [[num4],[num5],[num6]];
let ecuacion3 = [[num7],[num8],[num9]];

/*for(let i = 0; i<3;i++){
    let nums1 = Number(prompt(`Ingrese el numero ${i+1} de la primera ecuacion: `));
    ecuacion1[i].push(nums1)
}
for(let j = 0; j<3;j++){
    let nums2 = Number(prompt(`Ingrese el numero ${j+1} de la segunda ecuacion: `));
    ecuacion2[j].push(nums2)
}
for(let l = 0; l<3;l++){
    let nums3 = Number(prompt(`Ingrese el numero ${l+1} de la tercera ecuacion: `));
    ecuacion3[l].push(nums3)
}*/
console.log(ecuacion1);
console.log(ecuacion2);
console.log(ecuacion3);
console.log(ecuacion1);
console.log(ecuacion2);
let divec = document.getElementById("ecuaciontotal");
divec.innerHTML = `
${ecuacion1}<br>
${ecuacion2}<br>
${ecuacion3}<br>
`;

let determinante = (
    (ecuacion1[0] * ecuacion2[1] * ecuacion3[2]) +
    (ecuacion2[0] * ecuacion3[1] * ecuacion1[2]) +
    (ecuacion3[0] * ecuacion1[1] * ecuacion2[2]) -
    (ecuacion1[2] * ecuacion2[1] * ecuacion3[0]) -
    (ecuacion2[2] * ecuacion3[1] * ecuacion1[0]) -
    (ecuacion3[2] * ecuacion1[1] * ecuacion2[0])
);

/*let coeficiente1 = Number(prompt("Ingresa el coeficiente de la primera ecuacion: "));
let coeficiente2 = Number(prompt("Ingresa el coeficiente de la segunda ecuacion: "));
let coeficiente3 = Number(prompt("Ingresa el coeficiente de la tercera ecuacion: "));
*/
let coeficiente1 = document.getElementById("=1").value;
let coeficiente2 = document.getElementById("=2").value;
let coeficiente3 = document.getElementById("=3").value;

let determinanteX = (
    (coeficiente1 * ecuacion2[1] * ecuacion3[2]) +
    (coeficiente2 * ecuacion3[1] * ecuacion1[2]) +
    (coeficiente3 * ecuacion1[1] * ecuacion2[2]) -
    (ecuacion1[2] * ecuacion2[1] * coeficiente3) -
    (ecuacion2[2] * ecuacion3[1] * coeficiente1) -
    (ecuacion3[2] * ecuacion1[1] * coeficiente2)
);

let determinanteY = (
    (ecuacion1[0] * coeficiente2 * ecuacion3[2]) +
    (ecuacion2[0] * coeficiente3 * ecuacion1[2]) +
    (ecuacion3[0] * coeficiente1 * ecuacion2[2]) -
    (ecuacion1[2] * coeficiente2 * ecuacion3[0]) -
    (ecuacion2[2] * coeficiente3 * ecuacion1[0]) -
    (ecuacion3[2] * coeficiente1 * ecuacion2[0])
);

let determinanteZ = (
    (ecuacion1[0] * ecuacion2[1] * coeficiente3) +
    (ecuacion2[0] * ecuacion3[1] * coeficiente1) +
    (ecuacion3[0] * ecuacion1[1] * coeficiente2) -
    (coeficiente1 * ecuacion2[1] * ecuacion3[0]) -
    (coeficiente2 * ecuacion3[1] * ecuacion1[0]) -
    (coeficiente3 * ecuacion1[1] * ecuacion2[0])
);
resultado = document.getElementById("resultado");
resultado.innerHTML = `
Determinante general: ${determinante}<br>
Determinante de X: ${determinanteX}<br>
Determinante de y: ${determinanteY}<br>
Determinante de Z: ${determinanteZ}<br>`
;
console.log(`Determinante general: ${determinante}`);
console.log(`Determinante de X: ${determinanteX}`);
console.log(`Determinante de Y: ${determinanteY}`)
console.log(`Determinante de X: ${determinanteZ}`);
}