const getColor = () =>{
    const randomNo =Math.floor( Math.random() * 16777215);
    const colorRandom = "#"+randomNo.toString(16);

    console.log(randomNo);
    console.log(colorRandom);
    document.body.style.background=colorRandom;
    document.getElementById("code").innerHTML=colorRandom;
}

// click call 
document.getElementById("btn").addEventListener("click",getColor);


// intial call
getColor();