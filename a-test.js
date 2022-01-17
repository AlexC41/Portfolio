// let test = document.querySelector(".test")


// let str = '';
// for (let i = 0; i <= 9; i++) {
//     str += i;
// }
// console.log(str);
// test.innerHTML = strc;

function setClock1 () {
    
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let day = currentTime.getDate();
    let month = currentTime.getMonth();
    let year = currentTime.getFullYear();

    if (minutes < 10) {
        minutes = "0" + minutes
    };

    if (seconds < 10) {
        seconds = "0" + seconds
    };

    if (day < 10) {
        day = "0" + day
    };

    // let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let format = ["AM", "PM"]

    // 24h and 12h format area \/\/\/

    if(document.querySelector("#formatSlide").checked === true) {
        // console.log("true")
        if (hours <= 12) {
            let form = 0;
            if (hours > 12) {
                hours = hours - 12
            }
            if (hours < 10) {
                hours = "0" + hours
            };
            let finalTime = hours + " : " + minutes + " : " + seconds + " " + format[form];
            clock1.innerHTML = finalTime;
        } else {
            let form = 1;
            if (hours > 12) {
                hours = hours - 12
            }
            if (hours < 10) {
                hours = "0" + hours
            };
            let finalTime = hours + " : " + minutes + " : " + seconds + " " + format[form];
            clock1.innerHTML = finalTime;
        }
        
        
    } else {
        // console.log("false")
        if (hours < 10) {
            hours = "0" + hours
        };
        let finalTime = hours + " : " + minutes + " : " + seconds;
        clock1.innerHTML = finalTime;
    }

// 24h and 12h format area /\/\/\

    let finalDate = day + " / " + months[month] + " / " + year

    date.innerHTML = finalDate;
}


const numbers = [
	[1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1], // 0
	[1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1], // 1
	[1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1], // 2
	[1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 3
	[1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1], // 4
	[1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // 5
	[1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], // 6
	[1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0], // 7
	[1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], // 8
	[1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1]  // 9
];

const blocks = [];
const digits = Array.from(document.querySelectorAll('.block'));

for (let i = 0; i < 4; i++) {
	blocks.push(digits.slice( i * 15, i * 15 + 15 ));
}

const setNum = (block, num) => {
	let n = numbers[num];
	for (let i = 0; i < block.length; i++) {
		 block[i].classList[ n[i] === 1 ?  'add' : 'remove']('active');
	}
};

const time = {
	s: '',
	m: '',
	h: '',
	p: null
};

// time loop
const animator = () => {
	let d = new Date(),
		h = d.getHours().toString(),
		m = d.getMinutes().toString(),
		s = d.getSeconds().toString();
	
	s = s.length === 1 ? '0' + s : s;
	m = m.length === 1 ? '0' + m : m;
	h = h.length === 1 ? '0' + h : h;
	
	if (s !== time.s) {
		for (let i = 0; i < digits.length; i++) {
			let d = digits[i];
			if (i === +s) {
				d.classList.add('second');
				if (time.p !== null)
					digits[time.p].classList.remove('second');
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
 	window.requestAnimationFrame(animator)
}

// init
window.requestAnimationFrame(animator)

// toggle button

const body = document.querySelector('body');
changeTheme = ev => {
	body.classList.toggle('light-theme');
};