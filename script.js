const getSumBtn = document.createElement("button");
const table = document.getElementById("table");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices = document.querySelectorAll(".price")
	const total = 0
	prices.forEach((price)=>{
		total += Number(price.textContent)
	})
	let resultRow = document.createElement("tr");
	let td = document.createElement("td");
	td.textContent = total
	resultRow.appendChild(td)
	table.appendChild(resultRow)
};

getSumBtn.addEventListener("click", getSum);

