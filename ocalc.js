let showMetal = document.querySelector("#showMetal")
let showCrystal = document.querySelector("#showCrystal")
let showDeuterium = document.querySelector("#showDeuterium")
let showEnergy = document.querySelector("#showEnergy")
let showTime = document.querySelector("#showTime")
let showPoints = document.querySelector("#showPoints")


const base = [
  //metal, crystal, deuterium, energy, time, points 
    [60, 15, 0, 0, 0, 0], // metal mine
    [48, 24, 0, 0, 0, 0], // crystal mine
    [225, 75, 0, 0, 0, 0], // deuterium synthesizer
    [75, 30, 0, 0, 0, 0], // solar plant
    [900, 360, 180, 0, 0, 0], // fusion reactor
    [1000, 0, 0, 0, 0, 0], // metal storage
    [1000, 500, 0, 0, 0, 0], // crystal storage
    [1000, 1000, 0, 0, 0, 0], // deuterium tank
    [400, 120, 200, 0, 0, 0], // robotics factory
    [400, 200, 100, 0, 0, 0], // shipyard
    [200, 400, 2000, 0, 0, 0], // research lab
    [20000, 40000, 0, 0, 0, 0] // alliance depot
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

function timeRed (x){

        switch (x) {
            case value:
                
                break;
        
            default:
                break;
        }


    // if (){
        
    // } if () {
        
    // }

 return x
}

// calculator for energy, construction time, points 
function detailCalc () {

/*
literal formula for constrTime = 
(metal cost + crystal cost) / (2500 * (1 + robotic factory) * universe speed * (2 ^ nanite factory level))   
calculated in hours
*/
    let constrTime = 
        (resCalc(check()[1],0,check()[0]) + resCalc(check()[1],1,check()[0]))  
        /
        (2500 * (1 + check()[2]) * check()[6] * Math.pow(2,check()[3]));

    //time transform


    // 2h 37min 12 sec  === 9432

    let hours = 5.343
    let seconds = hours * 3600

    let h = Math.floor(seconds / 3600);
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor(seconds % 3600 % 60);



    // let h = Math.floor(x)
    // let m = Math.floor(x * 60)
    // let s = Math.floor((x % 60) * 60 * 60)

    s = s < 10 ? "0" + s : s; 
    m = m < 10 ? "0" + m : m; 
    h = h < 10 ? "0" + h : h; 

    let time = h + " : " + m + " : " + s


    let energy = 0;
    if (check()[1] <=4) {
        if (check()[1] <= 2) {
            if ( check()[1] == 2 ) {
                energy = -Math.floor( 20 * check()[0] * Math.pow(1.1,check()[0]))
            } else {
                energy = -Math.floor( 10 * check()[0] * Math.pow(1.1,check()[0]))
            }
        } else {
            if (check()[1] == 3) {
                energy = Math.floor(20 * check()[0] * Math.pow(1.1,check()[0]))
            } else {
                energy = Math.floor(30 * check()[0] * Math.pow(1.05 + (0.01 * check()[9]),check()[0]))
            }
        } 
    } else {
        energy = 0;
    }


//metal cost = resCalc(build,0,level)
//crystal cost = resCalc(build,1,level)



    

        return [energy, time]
};

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
    return [level, build, robFac, nanFac, shipyard, resLab, uniSpeed, technocrat, chClass, energyTech]
}


function show () {
    showMetal.innerHTML = resCalc(check()[1],0,check()[0]).toLocaleString()
    showCrystal.innerHTML = resCalc(check()[1],1,check()[0]).toLocaleString()
    showDeuterium.innerHTML = resCalc(check()[1],2,check()[0]).toLocaleString()
    showEnergy.innerHTML = detailCalc()[0].toLocaleString()
    showTime.innerHTML = detailCalc()[1]
    // showPoints.innerHTML = 
}



// function test () {

//     let a = 25;
//     let b = 24;
//     let c = a + b;

//     let x = 12;
//     let y = 13;
//     let z = x + y;

//     return[c, z]

// }

// console.log(test())