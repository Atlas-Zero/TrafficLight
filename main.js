
// lights
const lr = document.querySelector('#l1'),
    ly = document.querySelector('#l2'),
    lg = document.querySelector('#l3')

// times for each phase
const tr = 8000,
    trd = 3000,
    tg = 8000,
    tb = 500, // (4 repeats, 2 times on/off) = 4000ms
    ty = 3000

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

console.log(lr,ly,lg)

async function logic(state) {
	switch (state) {
		case 'red':
            lr.style.backgroundColor = "#cf021a"
            lr.style.boxShadow = "0 0 150px crimson"
            ly.style.backgroundColor = "#783900"
            ly.style.boxShadow = "0 0 0"
			await sleep(tr)
			return 'redyellow'

		case 'redyellow':
            ly.style.backgroundColor = "#f5a524"
            ly.style.boxShadow = "0 0 150px goldenrod"
			await sleep(trd)
			return 'green'

		case 'green':
            lr.style.backgroundColor = "#5a0000"
            lr.style.boxShadow = "0 0 0"
            ly.style.backgroundColor = "#783900"
            ly.style.boxShadow = "0 0 0"
            lg.style.backgroundColor = "#09c707"
            lg.style.boxShadow = "0 0 150px green"
			await sleep(tg)
			return 'blinking'

		case 'blinking':
            for (let x = 0; x <= 3; x++) {
                lg.style.backgroundColor = "#1a5e00"
                lg.style.boxShadow = "0 0 0"
                await sleep(tb)
                lg.style.backgroundColor = "#09c707"
                lg.style.boxShadow = "0 0 150px green"
                await sleep(tb)
            }
			return 'yellow'

        case 'yellow':
            ly.style.backgroundColor = "#f5a524"
            ly.style.boxShadow = "0 0 150px goldenrod"
            lg.style.backgroundColor = "#1a5e00"
            lg.style.boxShadow = "0 0 0"
			await sleep(ty)
			return 'red'
	}
}

async function runLogic() {
	let state = 'green'
	while (true) {
		state = await logic(state)
        console.log(state)
	}
}
