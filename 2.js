const Array = [60, 40, 55, 75, 64];
const b=[];

function alternatingSums(a) {
    const b=[0, 0];
    for(let i=0; i<Array.length; i++){
        if(i % 2 == 0 ){
            b[0] += Array[i]
        } else {
            b[1] += Array[i]
        }
    }
    console.log(b)
}

alternatingSums(Array) 