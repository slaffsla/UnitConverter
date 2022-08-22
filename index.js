/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meter = 3.281
const liter = 0.264
const kilogram = 2.204
const inputBox = document.getElementById("input-box")
const inputBtn = document.getElementById("input-btn")
const contentArea = document.getElementById("content-area")
const content1 = document.getElementById("content1")
const content2 = document.getElementById("content2")
const content3 = document.getElementById("content3")
let content = ""
let contentArr=["Length (Meter/Feet)", "Volume (Liters/Gallons)", "Mass (Kilograms/Pounds)"]
inputBtn.addEventListener("click", function() {
    content1.innerHTML = `
            <h3>${contentArr[0]}</h3>
            <p>${inputBox.value} meters = ${(inputBox.value*meter).toFixed(3)} feet | ${inputBox.value} feet = ${(inputBox.value/meter).toFixed(3)} meters</p>
            `
            content2.innerHTML = `
            <h3>${contentArr[1]}</h3>
            <p>${inputBox.value} liters = ${(inputBox.value*liter).toFixed(3)} gallons | ${inputBox.value} gallon = ${(inputBox.value/liter).toFixed(3)} liters</p>
            `
            content3.innerHTML = `
            <h3>${contentArr[2]}</h3>
            <p>${inputBox.value} kilogram = ${(inputBox.value*kilogram).toFixed(3)} pound | ${inputBox.value} pound = ${(inputBox.value/kilogram).toFixed(3)} kilogram</p>
            `
})