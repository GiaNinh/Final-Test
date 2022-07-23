const Array = []
let i=0;
function submitForm(event){ 
    event.preventDefault();
    var ele1 = document.getElementById(`num`).value;
    Array.push(ele1);    
    adjacentElementsProduct(Array)
}

function adjacentElementsProduct(inputArray) {
    let max=0;
    for (let i=0; i<inputArray.length-1; i++){

        if((inputArray[i] * inputArray[i+1]) > max){
            max = inputArray[i] * inputArray[i+1];
        }
    }
    
    console.log(max);
}



