let pokeName = document.querySelector(".name")
let poke = document.querySelector("img.poke")
let desc = document.querySelector(".desc")
let moveDesc = document.querySelector(".moveDesc")
let powType = document.querySelector("#moveType")
let weakImg = document.querySelector("#weakImg") 
let strImg = document.querySelector("#strImg")
let btn = document.querySelector("#button")

btn.addEventListener("click", pokemonFn);
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        console.log(event.keyCode)
        pokemonFn();
    }
});

btn.addEventListener("click", historyFn);
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        console.log(event.keyCode)
        historyFn();
    }
});

function pokemonFn() {
    let input = document.querySelector("#input").value;
    let pokeId = "https://pokeapi.co/api/v2/pokemon/" + input;
    // let pokeId = "https://pokeapi.co/api/v2/pokemon/5"
    fetch(pokeId)
        .then(response => response.json())
        .then(pokemon => {
            console.log(pokemon)
            // pokemon's name  .name
            pokeName.innerHTML = pokemon.name
            // pokemon's description, height + weight .desc
            desc.innerHTML = "Height: " + pokemon.height + `", Weight: ` + pokemon.weight + "lbs."
            // pokemon's sprite  .img
            poke.src = pokemon.sprites.front_default
            // pokemon's first ability .powMove
            fetch(pokemon.abilities[0].ability.url)
                .then(response => response.json())
                .then(ability => {
                    // console.log(ability)
                    // console.log("The name of the base ability is " + ability.name)
                    if (ability.effect_entries[1].language.name =="en") {
                        moveDesc.innerHTML = ability.names[7].name + " -> " + ability.effect_entries[1].short_effect
                    } else {
                        moveDesc.innerHTML = ability.names[7].name + " -> " + ability.effect_entries[0].short_effect
                    }
                })
            // pokemon's type
            fetch(pokemon.types[0].type.url)
                .then(response => response.json())
                // pokeType1 + moveType
                .then(type => {
                    switch (type.name) {
                        case `normal`:
                            pokeType1.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/768px-Pok%C3%A9mon_Normal_Type_Icon.svg.png`
                            powType.src = pokeType1.src
                            break;
                        case `fire`:
                            pokeType1.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/768px-Pok%C3%A9mon_Fire_Type_Icon.svg.png`
                            moveType.src = pokeType1.src
                            break;
                        case `fighting`:
                            pokeType1.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/768px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png`
                            powType.src = pokeType1.src
                            break;                    
                        case `water`:
                            pokeType1.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/768px-Pok%C3%A9mon_Water_Type_Icon.svg.png`
                            powType.src = pokeType1.src
                            break;
                        case `flying`:
                            pokeType1.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/768px-Pok%C3%A9mon_Flying_Type_Icon.svg.png`
                            powType.src = pokeType1.src
                            break;
                        case `grass`:
                            pokeType1.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/768px-Pok%C3%A9mon_Grass_Type_Icon.svg.png`
                            powType.src = pokeType1.src
                            break;
                        case `poison`:
                            pokeType1.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/768px-Pok%C3%A9mon_Poison_Type_Icon.svg.png`
                            powType.src = pokeType1.src
                            break;
                        case `electric`:
                            pokeType1.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/768px-Pok%C3%A9mon_Electric_Type_Icon.svg.png`
                            powType.src = pokeType1.src
                            break;
                        case `ground`:
                            pokeType1.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/768px-Pok%C3%A9mon_Ground_Type_Icon.svg.png`
                            powType.src = pokeType1.src
                            break;
                        case `psychic`:
                            pokeType1.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/768px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png`
                            powType.src = pokeType1.src
                            break;
                        case `rock`:
                            pokeType1.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/768px-Pok%C3%A9mon_Rock_Type_Icon.svg.png`
                            powType.src = pokeType1.src
                            break;
                        case `ice`:
                            pokeType1.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/768px-Pok%C3%A9mon_Ice_Type_Icon.svg.png`
                            powType.src = pokeType1.src
                            break;
                        case `bug`:
                            pokeType1.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/768px-Pok%C3%A9mon_Bug_Type_Icon.svg.png`
                            powType.src = pokeType1.src
                            break;
                        case `dragon`:
                            pokeType1.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/768px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png`
                            powType.src = pokeType1.src
                            break;
                        case `ghost`:
                            pokeType1.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/768px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png`
                            powType.src = pokeType1.src
                            break;
                        case `dark`:
                            pokeType1.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/768px-Pok%C3%A9mon_Dark_Type_Icon.svg.png`
                            powType.src = pokeType1.src
                            break;
                        case `steel`:
                            pokeType1.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/768px-Pok%C3%A9mon_Steel_Type_Icon.svg.png`
                            powType.src = pokeType1.src
                            break;
                        case `fairy`:
                            pokeType1.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/768px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png`
                            powType.src = pokeType1.src
                            break;
                        default:
                            alert("Dude, ceva nu ai facut bine pe acolo, verifica, ce mai stai? :))")
                    }
                })
                // console.log(pokemon)
                // pokeType2
                .then(type => {
                    try {
                    fetch(pokemon.types[1].type.url)
                        .then(response => response.json())
                        .then(type => {
                            pokeType2.style.display = "inline"
                            switch (type.name) {
                            case `normal`:
                                pokeType2.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/768px-Pok%C3%A9mon_Normal_Type_Icon.svg.png`
                                break;
                            case `fire`:
                                pokeType2.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/768px-Pok%C3%A9mon_Fire_Type_Icon.svg.png`
                                break;
                            case `fighting`:
                                pokeType2.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/768px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png`
                                break;                    
                            case `water`:
                                pokeType2.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/768px-Pok%C3%A9mon_Water_Type_Icon.svg.png`
                                break;
                            case `flying`:
                                pokeType2.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/768px-Pok%C3%A9mon_Flying_Type_Icon.svg.png`
                                break;
                            case `grass`:
                                pokeType2.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/768px-Pok%C3%A9mon_Grass_Type_Icon.svg.png`
                                break;
                            case `poison`:
                                pokeType2.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/768px-Pok%C3%A9mon_Poison_Type_Icon.svg.png`
                                break;
                            case `electric`:
                                pokeType2.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/768px-Pok%C3%A9mon_Electric_Type_Icon.svg.png`
                                break;
                            case `ground`:
                                pokeType2.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/768px-Pok%C3%A9mon_Ground_Type_Icon.svg.png`
                                break;
                            case `psychic`:
                                pokeType2.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/768px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png`
                                break;
                            case `rock`:
                                pokeType2.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/768px-Pok%C3%A9mon_Rock_Type_Icon.svg.png`
                                break;
                            case `ice`:
                                pokeType2.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/768px-Pok%C3%A9mon_Ice_Type_Icon.svg.png`
                                break;
                            case `bug`:
                                pokeType2.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/768px-Pok%C3%A9mon_Bug_Type_Icon.svg.png`
                                break;
                            case `dragon`:
                                pokeType2.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/768px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png`
                                break;
                            case `ghost`:
                                pokeType2.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/768px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png`
                                break;
                            case `dark`:
                                pokeType2.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/768px-Pok%C3%A9mon_Dark_Type_Icon.svg.png`
                                break;
                            case `steel`:
                                pokeType2.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/768px-Pok%C3%A9mon_Steel_Type_Icon.svg.png`
                                break;
                            case `fairy`:
                                pokeType2.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/768px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png`
                                break;
                            default:
                                alert("Dude, ceva nu ai facut bine pe acolo, verifica, ce mai stai? :))")
                            }
                        })  
                    } catch (error) {
                        pokeType2.style.display = "none"
                    }
                })
                .then(type => {
                    // console.log(types)
                    fetch(pokemon.types[0].type.url)
                        .then(response => response.json())
                        .then(type => {
                        console.log(type)
                        // weak against
                        try {
                            fetch(pokemon.types[0].type.url)
                                .then(response => response.json())
                                .then(type => {
                                    switch (type.damage_relations.half_damage_to[0].name) {
                                        case `normal`:
                                            weakImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/768px-Pok%C3%A9mon_Normal_Type_Icon.svg.png`
                                            break;
                                        case `fire`:
                                            weakImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/768px-Pok%C3%A9mon_Fire_Type_Icon.svg.png`
                                            break;
                                        case `fighting`:
                                            weakImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/768px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png`
                                            break;                    
                                        case `water`:
                                            weakImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/768px-Pok%C3%A9mon_Water_Type_Icon.svg.png`
                                            break;
                                        case `flying`:
                                            weakImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/768px-Pok%C3%A9mon_Flying_Type_Icon.svg.png`
                                            break;
                                        case `grass`:
                                            weakImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/768px-Pok%C3%A9mon_Grass_Type_Icon.svg.png`
                                            break;
                                        case `poison`:
                                            weakImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/768px-Pok%C3%A9mon_Poison_Type_Icon.svg.png`
                                            break;
                                        case `electric`:
                                            weakImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/768px-Pok%C3%A9mon_Electric_Type_Icon.svg.png`
                                            break;
                                        case `ground`:
                                            weakImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/768px-Pok%C3%A9mon_Ground_Type_Icon.svg.png`
                                            break;
                                        case `psychic`:
                                            weakImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/768px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png`
                                            break;
                                        case `rock`:
                                            weakImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/768px-Pok%C3%A9mon_Rock_Type_Icon.svg.png`
                                            break;
                                        case `ice`:
                                            weakImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/768px-Pok%C3%A9mon_Ice_Type_Icon.svg.png`
                                            break;
                                        case `bug`:
                                            weakImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/768px-Pok%C3%A9mon_Bug_Type_Icon.svg.png`
                                            break;
                                        case `dragon`:
                                            weakImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/768px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png`
                                            break;
                                        case `ghost`:
                                            weakImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/768px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png`
                                            break;
                                        case `dark`:
                                            weakImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/768px-Pok%C3%A9mon_Dark_Type_Icon.svg.png`
                                            break;
                                        case `steel`:
                                            weakImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/768px-Pok%C3%A9mon_Steel_Type_Icon.svg.png`
                                            break;
                                        case `fairy`:
                                            weakImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/768px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png`
                                            break;
                                        default:
                                            alert("Dude, ceva nu ai facut bine pe acolo, verifica, ce mai stai? :))")
                                    }
                            })
                        } catch (error) {
                                console.log(error)
                        }
                        // strong
                        try {
                            fetch(pokemon.types[0].type.url)
                                .then(response => response.json())
                                .then(type => {
                                    switch (type.damage_relations.double_damage_to[0].name) {
                                        case `normal`:
                                            strImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/768px-Pok%C3%A9mon_Normal_Type_Icon.svg.png`
                                            break;
                                        case `fire`:
                                            strImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/768px-Pok%C3%A9mon_Fire_Type_Icon.svg.png`
                                            break;
                                        case `fighting`:
                                            strImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/768px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png`
                                            break;                    
                                        case `water`:
                                            strImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/768px-Pok%C3%A9mon_Water_Type_Icon.svg.png`
                                            break;
                                        case `flying`:
                                            strImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/768px-Pok%C3%A9mon_Flying_Type_Icon.svg.png`
                                            break;
                                        case `grass`:
                                            strImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/768px-Pok%C3%A9mon_Grass_Type_Icon.svg.png`
                                            break;
                                        case `poison`:
                                            strImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/768px-Pok%C3%A9mon_Poison_Type_Icon.svg.png`
                                            break;
                                        case `electric`:
                                            strImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/768px-Pok%C3%A9mon_Electric_Type_Icon.svg.png`
                                            break;
                                        case `ground`:
                                            strImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/768px-Pok%C3%A9mon_Ground_Type_Icon.svg.png`
                                            break;
                                        case `psychic`:
                                            strImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/768px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png`
                                            break;
                                        case `rock`:
                                            strImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/768px-Pok%C3%A9mon_Rock_Type_Icon.svg.png`
                                            break;
                                        case `ice`:
                                            strImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/768px-Pok%C3%A9mon_Ice_Type_Icon.svg.png`
                                            break;
                                        case `bug`:
                                            strImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/768px-Pok%C3%A9mon_Bug_Type_Icon.svg.png`
                                            break;
                                        case `dragon`:
                                            strImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/768px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png`
                                            break;
                                        case `ghost`:
                                            strImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/768px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png`
                                            break;
                                        case `dark`:
                                            strImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/768px-Pok%C3%A9mon_Dark_Type_Icon.svg.png`
                                            break;
                                        case `steel`:
                                            strImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/768px-Pok%C3%A9mon_Steel_Type_Icon.svg.png`
                                            break;
                                        case `fairy`:
                                            strImg.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/768px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png`
                                            break;
                                        default:
                                            alert("Dude, ceva nu ai facut bine pe acolo, verifica, ce mai stai? :))")
                                    }
                            })
                        } catch (error) {
                                console.log(error)
                        }
                        })  
                })
            })
}

let nrHistory = [];

function historyFn() {
    let x = document.querySelector("#history");
    let input = document.querySelector("#input").value;
    let pokeId = "https://pokeapi.co/api/v2/pokemon/" + input;
    // let pokeId = "https://pokeapi.co/api/v2/pokemon/5"
    fetch(pokeId)
        .then(response => response.json())
        .then(pokemon => {
            // console.log(pokemon)
            // pokemon's name  .name
            pokeName.innerHTML = pokemon.name
            // let z = pokemon.name;
            console.log("test + " + pokemon.name);
            
            nrHistory.push(input + " -> " + pokemon.name);
            x.innerHTML = nrHistory.join('<br/>'); 

        })

        
    
}

