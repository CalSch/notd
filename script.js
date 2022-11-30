// Hash the date for the number
let num=Math.round(((Math.round(Date.now()/1000/60/60/24)%2143)**4)/425131)%300;
let trivia="";
let math="";

async function dataUpdate() {
	num=Math.round(((Math.round(Date.now()/1000/60/60/24)%2143)**4)/425131)%300;
	trivia=await (await fetch(`http://numbersapi.com/${num}/trivia`)).text()
	math=await (await fetch(`http://numbersapi.com/${num}/math`)).text()

	await update()
}
async function update() {
	document.getElementById('number').innerText=num;
	document.getElementById('trivia').innerText=trivia;
	document.getElementById('math').innerText=math;
}

dataUpdate()