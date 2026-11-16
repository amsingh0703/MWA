function reverse(){
    let st = document.getElementById("str").value;

    let reverse = st.split("").reverse().join("");

    document.getElementById("ReverseRes").innerText = "Reversed: "+reverse;
}

function arrayopr(){
    let input = document.getElementById("array").value;
    let arr = input.split(",").map(Number);

    arr.sort(function(a,b){
        return a - b;
    })

    let maximum = Math.max(...arr);
    let minimum = Math.min(...arr);

    document.getElementById("result").innerHTML = "Sorted Array : "+arr + "<br>"+ "Maximum : "+maximum+"<br>"+"Minimum: "+minimum
}