
//EJECUTIVOS
var ejecs = document.querySelector("#empr-cont").children;
for(var i = 0; i<ejecs.length; i++){
    console.log(ejecs[i]);
    ejecs[i].addEventListener('click', (function(el){
        return function(){
            var newTop = Math.random()*100;
            var newLeft = Math.random()*100;
            newLeft += "%";
            newTop += "%";
            el.style.top = newTop;
            el.style.left = newLeft;
        };
    })(ejecs[i]));
}

//Natulareza
var natu = document.querySelector("#natu-cont").children;
console.log(natu);
for(var i = 0; i<natu.length; i++){
    natu[i].addEventListener('click', (function(el){
        return function(){
            var newTop = Math.random()*100;
            var newLeft = Math.random()*100;
            newLeft += "%";
            newTop += "%";
            el.style.top = newTop;
            el.style.left = newLeft;
        };
    })(natu[i]));
}
var chiq = document.querySelector("#chiquitos-nat").children;
for(var i = 0; i<chiq.length; i++){
    chiq[i].addEventListener('click', (function(el){
        return function(){
            var newTop = Math.random()*100;
            var newLeft = Math.random()*100;
            newLeft += "%";
            newTop += "%";
            el.style.top = newTop;
            el.style.left = newLeft;
        };
    })(chiq[i]));
}

//Trabajadores
var trab = document.querySelector("#trabaj-cont").children;
for(var i = 0; i<trab.length; i++){
    console.log(trab[i]);
    trab[i].addEventListener('click', (function(el){
        return function(){
            var newTop = Math.random()*100;
            var newLeft = Math.random()*100;
            newLeft += "%";
            newTop += "%";
            el.style.top = newTop;
            el.style.left = newLeft;
        };
    })(trab[i]));
}

//Monedas
var coins = document.querySelector("#coins-cont").children;
for(var i = 0; i<coins.length; i++){
    console.log(coins[i]);
    coins[i].addEventListener('click', (function(el){
        return function(){
            var newTop = Math.random()*100;
            var newLeft = Math.random()*100;
            newLeft += "%";
            newTop += "%";
            el.style.top = newTop;
            el.style.left = newLeft;
        };
    })(coins[i]));
}

//Mundo
var wor = document.querySelector('#world')
wor.addEventListener('click', function(){
        var newTop = Math.random()*100;
        var newLeft = Math.random()*100;
        newLeft += "%";
        newTop += "%";
        wor.style.top = newTop;
        wor.style.left = newLeft;
    })


    

