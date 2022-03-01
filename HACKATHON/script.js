

async function fetchpokemon(i) {
    var url='https://pokeapi.co/api/v2/pokemon/' + i
    const response = await fetch(url)



.then(response=>response.json())


.then(data=>{
const para = document.createElement("p");
const para2= document.createElement("p")
var ability=[]
for (a=0;a<data.abilities.length;a++){
    ability.push(JSON.stringify(data.abilities[a].ability.name))
}
console.log(ability)
var tag = "<ul>";
for (let b = 0; b < ability.length; b++) {
  tag += "<li>" + ability[b] + "</li>";
}
tag += "</ul>";
var name=JSON.stringify(data.name)
var weight=JSON.stringify(data.weight)
para.innerText="Name : " + name + "\n" + "Weight : " + weight + "\n" + "Abilities : \n"
para2.innerHTML = tag;
document.body.append(para);
document.body.append(para2);
}
)
}
for(i=0;i<50;i++){
fetchpokemon(i)
}
