let div = document.getElementById("content");
let p =  document.querySelector('p')
let h1 =document.querySelector('h1')
let h2 = document.querySelector('h2')

function myfunction(e) {
    
    if (e.target ==  div ) {
        div.style.border="1px solid blue";
    }
    else if (e.target == p){
        p.style.fontWeight ="bolder";
        p.style.color="red";
        
    }
    else if (e.target==h1){
        h1.style.textDecoration="underline"
    }
    else if (e.target==h2){
        h2.innerText = h2.innerText.slice(h2.length,-1)
    }
}

div.addEventListener('click',myfunction)


let text ="Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"

let section = document.querySelector("section")
let p2 = document.querySelector("section p")
section.style.height="200px"
section.addEventListener('mouseover',()=>{
    p2.innerText = text
})