
async function loadNames() {
    var shd = "shadman";
    const response = await fetch('https://v2.jokeapi.dev/joke/Programming');
    const names = await response.json();
    // logs [{ name: 'Joker'}, { name: 'Batman' }]
    console.log(names.delivery,names.category);
    document.getElementById("info").innerHTML = "Joke: "+names.delivery +'<br>' + "Category: "+names.category +'<br>'+"author: "+shd;
    document.getElementById("info").style.border = "2px solid powderblue";
  }
loadNames();

