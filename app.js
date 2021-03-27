var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var form = document.getElementById("form");

const validateForm=()=>{
    if(age.value==""|| height.value==""|| weight.value==""){
        alert("Hey! Fill in all fields!");
        document.getElementById("submit").removeEventListener("click",countBmi);
    }else{
        countBmi();
    }
}

document.getElementById("submit").addEventListener("click",validateForm);

const countBmi=()=>{
    var p=[age.value, height.value, weight.value];
    form.reset();

    var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);

    var result='';

    if(bmi<18.5){
        result='Noooo! You are underweight. Try adding a few more kilos :)';
    }else if (18.5<=bmi&&bmi<=24.9){
        result='Woohoo! You are healthy! Treat yourself to a pizza or two🍕';
    }else if (25<=bmi&&bmi<=29.9){
        result='Oops! You gotta cut down on unhealthy stuff and go to the gym!';
    }else if(30<=bmi&&bmi<=34.9){
        result='Uh-oh! I think it is time to stop eating junk :(';
    }else if(30<=bmi){
        result='Ack! Obesity alert! No more junk ❌';
    }

    var h1=document.createElement("h1");
    var pr=document.createElement("p");

    var t =document.createTextNode(result);

    var b =document.createTextNode('BMI');

    var r =document.createTextNode(parseFloat(bmi).toFixed(2));

    h1.appendChild(b);

    h1.appendChild(r);

    pr.appendChild(t);

    document.body.appendChild(h1);
    
    document.body.appendChild(pr);

    document.getElementById("submit").removeEventListener("click", countBmi);

    document.getElementById("submit").removeEventListener("click", validateForm);

}

document.getElementById("submit").addEventListener("click", countBmi);