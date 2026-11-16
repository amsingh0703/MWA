function calculate(){
    let str = document.getElementById("str").value;
    let count = 0;

    for(let i = 0; i < str.length; i++){
        let ch = str[i].toLowerCase();

        if(ch === 'a'|| ch === 'e'||ch === 'i'||ch === 'o'||ch === 'u'){
            count++;
        }
    }

    document.getElementById("result").innerText = "Vowels: "+count;

}