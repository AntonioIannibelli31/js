let btn = document.getElementById("button");
let div = document.getElementById("container");
btn.addEventListener("click", () => {
  let inp = document.getElementById("nomePokemon");
  fetch("https://pokeapi.co/api/v2/pokemon/" + inp.value)
    .then((res) => res.json())
    .then((el) => {
      el.abilities.forEach((element) => console.log(element.ability.name));
      console.log(el.name);
      console.log(el.base_experience);
      el.sprites.front_default;
      let img = document.createElement("img");
      img.src = el.sprites.front_default;
      div.appendChild(img);
      let ul = document.createElement("ul");
      let li = document.createElement("li");
      li.innerText = el.name;
      let li2 = document.createElement("li");
      li2.innerText = el.base_experience;
      ul.appendChild(li);
      ul.appendChild(li2);
      div.appendChild(ul);
    })

    .catch((err) => console.error(err));
});
