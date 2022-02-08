// const fetchPokemon = () => {
//     const url = "https://pokeapi.co/api/v2/pokemon/1";
//     fetch(url)
//         .then(res => {res.json();
//         })
//         .then(data =>{
//             console.log(data);
//             // const pokemon = {
//             //     name: data.name,
//             //     id:   data.id,
//             //     image:data.sprites['front_default'],
//             //     type: data.types.map((types) => types.type.name).join(', ')

//             // };


//             const pokemon = results.map(data => ({
//                 name: data.name,
//                 id: data.id,
//                 image: data.sprites["front_default"],
//                 type: data.types.map(type => type.type.name).join(", "),
//               }));

//             // pokemon['name'] = data.name;
//             // pokemon['id'] = pokemon.id;
//             // pokemon['image'] = data.sprites['front_default'];
//             // pokemon['type'] = data.types.map((type) => type.type.name).join(', ');
            
            
            
//             // data.types.forEach(type => {
//             //     pokemon['type'] = pokemon['type'] + ", " + type.name;
//             // });

//             console.log(pokemon);
//         });
// }

// fetchPokemon();



const poke_container = document.getElementById('poke_container');
const numbersOfPkm = 151;

const fetchPokemon = async () => {
    for(let i = 1; i <= numbersOfPkm; i++){
       await getPokemon(i);
    }
}


const getPokemon = async (id) =>{
    const url = 'https://pokeapi.co/api/v2/pokemon/'+id.toString();


    const res = await fetch(url);
    const pokemon = await res.json();
    cratePkmCard(pokemon);
}

const cratePkmCard = (pokemon) => {
    
    const {name, types, sprites, id} = pokemon;
    const type = types[0].type.name;
    const pokemonEL = document.createElement('div');
    pokemonEL.classList.add("pokemon");
    pokemonEL.classList.add("grow");
    const pokeInnerHtml = `
    <div class="img_container">
        <img src="${sprites.front_default}" alt="${name}">
        <div class="info">
    <span class="number">${id}</span>
    <h3 class="info" >${name}</h3>
    <small class="type">${type}</small>
</div>
    </div>
    
    
    `;
    pokemonEL.innerHTML = pokeInnerHtml;
    poke_container.appendChild(pokemonEL);
}

fetchPokemon();