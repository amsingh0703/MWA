function calculate(opr){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let res;

    if(opr === "+"){
        res = num1+num2;
    }else if(opr === "-"){
        res = num1-num2;
    }else if(opr === "*"){
        res = num1*num2;
    }else if(opr === "/"){
        if(num2 === 0){
            document.getElementById("result").innerText = "Cannot divide by Zero.";
            return;
        }
        res = num1/num2;
    }

    document.getElementById("result").innerText = "Result: "+res;

}