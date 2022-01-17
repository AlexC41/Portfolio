let options = document.querySelector(".options");
// let clock1 = document.querySelector(".")

let cl1 = document.querySelector("#cl1")
let cl2 = document.querySelector("#cl2")
let date = document.querySelector(".date");

let dateEdit = document.querySelector(".dateEdit")
let clockEdit = document.querySelector(".clockEdit")

let clock = document.querySelector(".clock")


function HidenSeek(x) {
    if (x.style.display === "none") {
        x.style.display = "block";
    }else {
        x.style.display = "none"
    }
}

function colorChanger(x, y) {
    let a =`#` +  y.id ;
    x.style.color = document.querySelector(a).value;
}

function textDeco(a, b, c, d, e, f) {
    let shadowH = `#` +  b.id
    shadowH = document.querySelector(shadowH).value
    let shadowV = `#` +  c.id
    shadowV = document.querySelector(shadowV).value
    let shadowB = `#` +  d.id
    shadowB = document.querySelector(shadowB).value
    let shadowCP = `#` +  e.id
    shadowCP = document.querySelector(shadowCP).value
    let fontSize = `#` +  f.id
    fontSize = document.querySelector(fontSize).value

    a.style.fontSize = fontSize + "px";
    a.style.textShadow = shadowH + "px" + ' ' + shadowV + "px" + ' ' + shadowB + "px" + ' ' + shadowCP;
}

// Work In Progress to read and apply URL for font change
function fontClock(x, y){
    let URL = document.querySelector(".fontURLContC")
    if (y.value === "Add URL") {
        URL.style = "display: flex; justify-content: space-between"
    } else {
        x.style.fontFamily = y.value
        URL.style = "display: none"
    }
}

function fontDate(x, y){
    let URL = document.querySelector(".fontURLContD")
    if (y.value === "Add URL") {
        URL.style = "display: block; display: flex; justify-content: space-between"
    } else {
        x.style.fontFamily = y.value
        URL.style = "display: none"
    }
}

// selection of which type of clock to show
function typeSelect (x){
    switch (x.value) {
        case "type1":
            cl1.style.display = "block"
            cl2.style.display = "none"
            date.style.alignSelf = "flex-start"
            cl3.style.display = "none"
            dateEdit.style.display = "block"
            clockEdit.style.display = "block"
            setClock1()
            break;
        case "type2":
            cl1.style.display ="none"
            cl2.style.display = "flex"
            cl2.style.alignSelf = "center"
            date.style.alignSelf = "center"
            cl3.style.display = "none"
            dateEdit.style.display = "block"
            clockEdit.style.display = "block"

            setClock2()
            break;
        case "type3":
            cl1.style.display ="none"
            cl2.style.display = "none"
            date.style.display = "none"
            date.style.alignSelf = "none"
            cl3.style.display = "flex"
            dateEdit.style.display = "none"
            clockEdit.style.display = "none"

            setClock3()
            break;
        default:
            cl1.style.display === "block"
            cl2.style.display === "flex"
            break;
    }
}

    
function dateSet (){
    let datert = new Date();
    let day = datert.getDate();
    let mo = datert.getMonth();
    let y = datert.getFullYear();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
        let finalDate = months[mo] + " " + day +  " , " + y
    date.innerHTML = finalDate;

}

window.document.onload = dateSet();
window.document.onload = setClock1();
setInterval (setClock1, 100);

// first digital clock type === setClock1
function setClock1 () {

    let dateCl = new Date();
    let h = dateCl.getHours();
    let m = dateCl.getMinutes();
    let s = dateCl.getSeconds();
    let forma = ["AM", "PM"];

    // "0" before hours, minutes, seconds
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // 24h and 12h format area
    if(document.querySelector("#formatSlide").checked === true) {
        if (h <= 12) {
            let form = 0;
            h = h > 12 ? h - 12 : h;
            let finalTime = h + " : " + m + " : " + s + " " + forma[form];
            cl1.innerHTML = finalTime;
        } else {
            let form = 1;
            h = h > 12 ? h - 12 : h;
            let finalTime = h + " : " + m + " : " + s + " " + forma[form];
            cl1.innerHTML = finalTime;
        }
    } else {
        let finalTime = h + " : " + m + " : " + s;
        cl1.innerHTML = finalTime;
    }


}

// second digital clock type === setClock2

function setClock2 (){ 

// Number formation
const numbers = [
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1], // no 0
    [0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1], // no 1
    [1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1], // no 2
    [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // no 3
    [1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1], // no 4
    [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // no 5
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // no 6
    [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0], // no 7
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // no 8
    [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // no 9
];

const blocks = [];
const digs = Array.from(document.querySelectorAll(".block"));

//block delimitation 
for (let i = 0; i < 4; i++) {
    blocks.push(digs.slice(i * 15, i * 15 + 15))
}

//number show/hide
const setNum = (block, num) => {
	let n = numbers[num];
	for (let i = 0; i < block.length; i++) {
		block[i].classList[ n[i] === 1 ?  'add' : 'remove']('active');
	}
};

const time = {
    s: ' ',
    m: ' ',
    h: ' ',
    p: null,
}

//animation...
function animation () {
    let dateCl = new Date();
    let h = dateCl.getHours().toString();
    let m = dateCl.getMinutes().toString();
    let s = dateCl.getSeconds().toString();
    
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    if (s !== time.s) {
        for (let i = 0; i < digs.length; i++) {
            let dateCl = digs[i];
            if (i === +s) {
                dateCl.classList.add('second');
                if (time.p !== null)
                digs[time.p].classList.remove('second');
                time.p = i;
                time.s = s;
            }
        }
    }

    if (m !== time.m) {
        setNum(blocks[2], m[0]);
        setNum(blocks[3], m[1]);
        time.m = m;
    }
    
    if (h !== time.h) {
        setNum(blocks[0], h[0]);
        setNum(blocks[1], h[1]);
        time.h = h;
    }
    window.requestAnimationFrame(animation)
}

// init
window.requestAnimationFrame(animation)

}

// third digital clock type === setClock3

function setClock3 (){

const stripes = Array.from(document.querySelectorAll(".stripe"));
const numSize = "8"

function highlight (stripe, l) {
    
    stripes[stripe].querySelector(`.nums:nth-of-type(${l+1})`).classList.add("pop");
    
    setTimeout(() => {
        stripes[stripe].querySelector(`.nums:nth-of-type(${l+1})`).classList.remove("pop");
    }, 950);
}

function stripeSlide(stripe, nums) {
    let l1 = Math.floor(nums / 10);
    let l2 = nums % 10;

    // console.log(stripes[stripe])
    stripes[stripe].style.transform = `translateY(${l1}20px)`;
    highlight(stripe, l1);
    stripes[stripe + 1].style.transform = `translateY(${l2}vmin)`;
    highlight(stripe + 1, l2);
}

setInterval(() => {
    
    // const time = new Date();
    // const hour = time.getHours();
    // const minutes = time.getMinutes();
    // const seconds = time.getSeconds();

    stripeSlide(0, 18)  // instead of 18 add hour
    stripeSlide(2, 53)  // instead of 53 add minutes
    stripeSlide(4, 04)  // instead of 04 add seconds



    }, 100
);

}