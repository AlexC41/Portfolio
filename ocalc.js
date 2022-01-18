let showMetal = document.querySelector("#showMetal")
let showCrystal = document.querySelector("#showCrystal")
let showDeuterium = document.querySelector("#showDeuterium")
let showEnergy = document.querySelector("#showEnergy")
let showTime = document.querySelector("#showTime")
let showPoints = document.querySelector("#showPoints")

// for the moment, here are only the base number for the buildings
const base = [
    // buildings
    // metal, crystal, deuterium, energy,  points 
    [60, 15, 0, 0, 0], // metal mine
    [48, 24, 0, 0, 0], // crystal mine
    [225, 75, 0, 0, 0], // deuterium synthesizer
    [75, 30, 0, 0, 0], // solar plant
    [900, 360, 180, 0, 0], // fusion reactor
    [1000, 0, 0, 0, 0], // metal storage
    [1000, 500, 0, 0, 0], // crystal storage
    [1000, 1000, 0, 0, 0], // deuterium tank
    [400, 120, 200, 0, 0], // robotics factory
    [400, 200, 100, 0, 0], // shipyard
    [200, 400, 2000, 0, 0], // research lab
    [20000, 40000, 0, 0, 0], // alliance depot
    [20000, 20000, 1000, 0, 0], // missile silo
    [1000000, 500000, 100000, 0, 0], // nanite factory
    [0, 50000, 100000, 1000, 0], // terraformer
    [200, 0, 50, 50, 0], // space dock

    // research
    // metal, crystal, deuterium, points
    [0, 800, 400, 0], // Energy Technology
    [200, 100, 0, 0], // Laser Technology
    [1000, 300, 100, 0], // Ion Technology
    [0, 4000, 2000, 0], // Hyperspace Technology
    [2000, 4000, 1000, 0], // Plasma Technology
    [800, 0, 1200, 0], // Combustion Drive
    [2000, 4000, 600, 0], // Impulse Drive
    [10000, 20000, 6000, 0], // Hyperspace Drive
    [200, 1000, 200, 0], // Espionage Technology
    [0, 400, 600, 0], // Computer Technology
    [3500, 7000, 3500, 0], // Astrophysics
    [240000, 400000, 160000, 0], // Intergalactic Research Network
    [800, 200, 0, 0], // Weapons Technology
    [200, 600, 0, 0], // Shielding Technology
    [2000, 0, 0, 0], // Armour Technology

    // fleet
    // metal, crystal, deuterium, points
    [2000, 2000, 0, 0], //Small Cargo
    [6000, 6000, 0, 0], //Large Cargo
    [10000, 20000, 10000, 0], //Colony Ship
    [10000, 6000, 0], //Recycler
    [0, 1000, 0, 0], //Espionage Probe
    [0, 2000, 500, 0], //Solar Satellite
    [2000, 2000, 1000, 0], //Crawler
    [3000, 1000, 0, 0], //Light Fighter
    [6000, 4000, 0, 0], //Heavy Fighter
    [20000, 7000, 2000, 0], //Cruiser
    [45000, 15000, 0, 0], //Battleship
    [30000, 40000, 15000, 0], //Battlecruiser
    [50000, 25000, 15000, 0], //Bomber
    [60000, 50000, 15000, 0], //Destroyer
    [5000000, 4000000, 1000000, 0], //Deathstar
    [85000, 55000, 20000, 0], //Reaper
    [8000, 15000, 8000, 0], //Pathfinder

    // defense
    // metal, crystal, deuterium, points
    [2000, 0, 0, 0], // Rocket Launcher
    [1500, 500, 0, 0], // Light Laser
    [6000, 2000, 0, 0], // Heavy Laser
    [20000, 15000, 2000, 0], // Gauss Cannon
    [2000, 6000, 0, 0], // Ion Cannon
    [50000, 50000, 30000, 0], // Plasma Turret
    [10000, 10000, 0, 0], // Small Shield Dome
    [50000, 50000, 0, 0], // Large Shield Dome
    [8000, 0, 2000, 0], // Anti-Ballistic Missiles
    [12500, 2500, 10000, 0] // Interplanetary Missiles    
]

// calculator for metal, crystal and deuterium
function resCalc (a,b,c){
    // a - building ; b - resource ; c - level  

    //for the first 4 elements of the array
    if (a <= 3) {
        if (a !=1 && a <=3) {
            // power value for the metal mine, deutherium synt and solar plant is 1.5  
            let output = Math.floor(base[a][b] * Math.pow(1.5,c-1));
            return output

        } else {
            // power value for the crystal plant is 1.6  
            let output = Math.floor(base[a][b] * Math.pow(1.6,c-1));
            return output
        }
    
    //for the rest elements of the array
    } else if (a == 15){
        let output = Math.floor(base[a][b] * Math.pow(5,c-1));
        return output
    } else {

        if (c == 1){

            return base[a][b]

        } else {

            let output = base[a][b]
            for(i = 0; i <= c-2; i++) {
                output += output
            }

            return output
        }
    };
}

// calculator for energy, construction time, points (when I will find the formula...)
function detailCalc () {

/*
literal formula for constrTime = 
(metal cost + crystal cost) / (2500 * (1 + robotic factory) * universe speed * (2 ^ nanite factory level))   
calculated in hours
*/
    let constrTime = (resCalc(check()[1],0,check()[0]) + resCalc(check()[1],1,check()[0])) / (2500 * (1 + check()[2]) * (check()[6]) * Math.pow(2,check()[3]));
       // NOTE : something is wrong with the formula... either the formula that I wrote, either the formula from https://ogame.fandom.com/wiki/Formulas 

    //time transform

    let seconds = constrTime * 3600
    let h = Math.floor(seconds / 3600);
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor(seconds % 3600 % 60);

    s = s < 10 ? "0" + s : s; 
    m = m < 10 ? "0" + m : m; 
    h = h < 10 ? "0" + h : h; 

    let time = h + " : " + m + " : " + s


    let energy = 0;

/*  negative : 
        formula : check()[1] = [ 0, 1, 2 ]
        unique value : check()[1] = [ 14, 15, 27 ]  1000, 50, 300000

    positive :
        formula : check()[1] = [ 3, 4, 36 ]  for 36 = (T/4 + 20)  ; T = max temp

*/
    switch (check()[1]) {
        //negative with a formula
        case "0":
        case "1":
            energy = -Math.floor( 10 * check()[0] * Math.pow(1.1,check()[0])) + 
                    Math.floor( 10 * check()[0]-1 * Math.pow(1.1,check()[0]-1));
            break;
        case "2":
            energy = -Math.floor( 20 * check()[0] * Math.pow(1.1,check()[0]))
                    Math.floor( 20 * check()[0]-1 * Math.pow(1.1,check()[0]-1));
            break;

        // negative with a number
        case "14":
            energy = -Math.floor(1000 * Math.pow(2,check()[0]-1));
            break;
        case "15":
            energy = -Math.floor(50 * Math.pow(2.5, check()[0]-1));
            break;
        case "27":
            energy = -300000;
            break;

        // positive
        case "3":
            energy = Math.floor(20 * check()[0] * Math.pow(1.1,check()[0]));
            break;
        case "4":
            energy = Math.floor(30 * check()[0] * Math.pow(1.05 + (0.01 * check()[9]),check()[0]));
            break;
        case "36":
            energy = (check()[10]/4) + 20;
            break;
        
        default:
            energy = 0;
            break;
    }

    return [energy, time]
};

// check what is selected from the list
function check () {
    let level = document.querySelector("#bla").value; // check()[0]
    let build = document.querySelector(".test").value; // check()[1]
    let robFac =  document.querySelector("#robFac").value// check()[2]
    let nanFac =  document.querySelector("#nanFac").value// check()[3]
    let shipyard =  document.querySelector("#shipyard").value// check()[4]
    let resLab =   document.querySelector("#resLab").value// check()[5]
    let uniSpeed =  document.querySelector("#uniSpeed").value// check()[6]
    let technocrat = document.querySelector("#technocrat").value// check()[7]
    let chClass = document.querySelector("#chClass").value // check()[8]
    let energyTech = document.querySelector("#enTech").value // check()[9]
    let maxTemp = document.querySelector("#maxTemp").value // check()[10]
    return [level, build, robFac, nanFac, shipyard, resLab, uniSpeed, technocrat, chClass, energyTech, maxTemp]
}


function show () {
    showMetal.innerHTML = resCalc(check()[1],0,check()[0]).toLocaleString()
    showCrystal.innerHTML = resCalc(check()[1],1,check()[0]).toLocaleString()
    showDeuterium.innerHTML = resCalc(check()[1],2,check()[0]).toLocaleString()
    showEnergy.innerHTML = detailCalc()[0].toLocaleString()
    showTime.innerHTML = detailCalc()[1]
    // showPoints.innerHTML = 
}

let buildings = document.querySelector("#buildings")
let research = document.querySelector("#research")
let fleet = document.querySelector("#fleet")
let defense = document.querySelector("#defense")

console.log(document.querySelector(".test"))

function HidenSeek(x) {

    switch (x) {
        case buildings:
            
            
            break;
        case research:
            
            break;
        case fleet:
            
            break;
        case defense:
            
            break;
    
        default:
            console.log("test")

            break;
    }



}
