


let start=20
let end=30

function sumEvens(start, end) {
    let suma =0
    console.log(start, end)
    for (let i = start+1; i<end; i++){
        if(i%2==0){
            suma+=i
        }
    }


    return suma
}
//   console.log(sumEvens(start, end));










number = 20
limit = 100





function getMultiples(number, limit) {
    // escribe tu solución aquí
    let salida = [];
    console.log(number)
    for (let i= number+1; i<limit;i ++){
        if(i%number==0 )
        salida.push(i)
        console.log(i)
    }

   
    return salida
}
console.log(getMultiples(number, limit))










































