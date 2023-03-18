let height = document.getElementById("height");
let weight = document.getElementById("weight"); // get the element of height and weight to get the value of it

let Dresult = document.getElementById("result"); //use result and category to display the output in html
let category = document.getElementById("category");
let calcBtn = document.querySelector(".calcBtn"); //for button to click



//event listener with arrow function
calcBtn.addEventListener('click', () => {

    let finalHeight = Number(height.value); //convert two input to  number
    let kg = Number(weight.value);


    if (isCheck(finalHeight) || isCheck(kg)) { // use other function to check if the input is null

        Dresult.innerHTML = "*Input Field is Required";
        Dresult.style.color = "red";
        Dresult.style.fontSize = ".9rem";
        category.textContent = "";
        return false;

    } else {
        Dresult.style.color = "";

        let results = Bmi(kg, finalHeight); // use  function with parameter to calculate the BMI
        console.log(results);

        if (results >= 30.0) {

            Dresult.textContent = `Your Bmi is ${results}`;
            category.textContent = "Obese";



        } else if (results >= 25.0 && results <= 29.9) {
            Dresult.textContent = `Your Bmi is ${results}`;
            category.textContent = "OverWeight";

        } else if (results >= 18.5 && results <= 25.0) {

            Dresult.textContent = `Your Bmi is ${results}`;
            category.textContent = "Normal";


        } else {

            Dresult.textContent = `Your Bmi is ${results}`;
            category.textContent = "UnderWeight";

        }
    }

    setTimeout(function() {
        Dresult.textContent = "";
        category.textContent = "";
    }, 1000);

    height.value = '';
    weight.value = '';
});

// arrow function
const Bmi = (weight, height) => {

    let bmi = weight / ((height * height) / 10000);


    return bmi.toFixed(2);

}

// arrow function
const isCheck = input => {

    return input === 0 || input == '';



}