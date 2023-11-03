// Inputs elements..
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const age = document.getElementById('age');
const gender = document.getElementById('gender');
const activity = document.getElementById('activityLevel');
const generateBtn = document.getElementById('generate-Btn');

// input error divs...
const heightError = document.querySelector('.height-error');
const weightError = document.querySelector('.weight-error');
const ageError = document.querySelector('.age-error');
const genderError = document.querySelector('.gender-error');
const activityErrpr = document.querySelector('.activity-errorr');
const inputData = document.querySelector('.input')

// card section elements...
const cardDiv = document.querySelector('.cards-div');

const bfImg = document.querySelector('.bf-img');
const lunchImg = document.querySelector('.lunch-img');
const dinnerImg = document.querySelector('.dinner-img');

const bfTitle = document.querySelector('.bf-name');
const lunchTitle = document.querySelector('.lunch-name');
const dinnerTitle = document.querySelector('.dinner-name');

const bfPrepTime = document.querySelector('.bf-prep-time');
const lunchPrepTime = document.querySelector('.l-prep-time');
const dinnerPrepTime = document.querySelector('.d-prep-time');
const colories = document.querySelector('.colories');

const bfRecipe = document.getElementById('bf-recipe');
const lunchRecipe = document.getElementById('lunch-recipe');
const dinnerRecipe = document.getElementById('dinner-recipe');

// Recipe div...
const recipeDiv = document.querySelector('.recipe-Maindiv');
const ingridientsPara = document.getElementById('ingredients-para');




console.log(25);

let bfId = 0;
let lunchId = 0;
let dinnerId = 0;

generateBtn.addEventListener('click', function handleClick(event) {

    let heightValue = Number(height.value);
    let weightValue = Number(weight.value);
    let ageValue = Number(age.value);

    console.log('hello', heightValue, weightValue, ageValue);
    event.preventDefault();

    if (height.value < 30 || height.value > 280 || height.value === " ") {

        heightError.innerText = "Height should be between 30 cm and 280 cm.";
        age.value = "";

    } else {
        heightError.innerText = "";
    }

    if (Number(weight.value) < 0 || Number(weight.value) > 500 || weight.value === "") {

        weightError.innerText = "Weight should be between 0 kg and 500 kg."
    } else {
        weightError.innerText = "";
    }

    if (Number(age.value) < 1 || Number(age.value) > 500 || age.value === "") {

        ageError.innerText = "Age should be between 1 and 99."
    } else {
        ageError.innerText = "";
    }

    if (gender.value === "gender") {
        genderError.innerText = "please select a gender.";
    } else {
        genderError.innerText = "";
    }

    if (activity.value === "ActivityLevel") {
        activityErrpr.innerText = "Please select an activity level."
    } else {
        activityErrpr.innerText = "";
    }

    //inputData.value = "";
    let bmr = 0;
    /****For women**, BMR = 655.1 + (9.563 x weight in kg) + (1.850 x height in cm) - (4.676 x age in years)

   **For men**, BMR = 66.47 + (13.75 x weight in kg) + (5.003 x height in cm) - (6.755 x age in years) */
    if (gender.value === "female") {
        bmr = 655.1 + (weightValue * 9.563) + (1.850 * heightValue) - (4.676 * ageValue);
    }
    if (gender.value === "male") {
        bmr = 66.47 + (13.75 * weightValue) + (5.003 * heightValue) - (6.755 * ageValue);

    }

    let level = 0;
    if (activity.value === "light") {
        level = bmr * 1.375;
    }
    if (activity.value === "Moderate") {
        level = bmr * 1.55;
    }
    if (activity.value === "Extreme") {
        level = bmr * 1.725;
    }

    if (level > 3000) {
        level = 3000;
    }

    console.log(level, "level check");
    const url = "https://content.newtonschool.co/v1/pr/64995a40e889f331d43f70ae/categories"

    async function fetchData(url) {
        let promise = await fetch(url);
        let data = await promise.json();
        let srcUrl = "";
        if (level >= 500 && level <= 1000) {
            console.log(data[0].breakfast);

            //b-f
            bfTitle.innerHTML = data[0].breakfast.title;
            bfImg.src = data[0].breakfast.image;
            bfPrepTime.innerText = "Time for Preparation : " + data[0].breakfast.readyInMinutes + " min";
            bfId = data[0].breakfast.id;
            // lunch
            lunchTitle.innerHTML = data[0].lunch.title;
            lunchImg.src = data[0].lunch.image;
            lunchPrepTime.innerText = "Time for Preparation : " + data[0].lunch.readyInMinutes + " min";
            lunchId = data[0].lunch.id;
            // dinner
            dinnerTitle.innerHTML = data[0].dinner.title;
            dinnerImg.src = data[0].dinner.image;
            dinnerPrepTime.innerText = "Time for Preparation : " + data[0].dinner.readyInMinutes + " min";
            dinnerId = data[0].dinner.id;


        }
        if (level >= 1001 && level <= 2000) {
            console.log(data[1].breakfast);

            // b-f 
            bfTitle.innerHTML = data[1].breakfast.title;
            bfImg.src = data[1].breakfast.image;
            bfPrepTime.innerText = "Time for Preparation : " + data[1].breakfast.readyInMinutes + " min";
            bfId = data[1].breakfast.id;
            // lunch
            lunchTitle.innerHTML = data[1].lunch.title;
            lunchImg.src = data[1].lunch.image;
            lunchPrepTime.innerText = "Time for Preparation : " + data[1].lunch.readyInMinutes + " min";
            lunchId = data[1].lunch.id;
            // dinner
            dinnerTitle.innerHTML = data[1].dinner.title;
            dinnerImg.src = data[1].dinner.image;
            dinnerPrepTime.innerText = "Time for Preparation : " + data[1].dinner.readyInMinutes + " min";
            dinnerId = data[1].dinner.id;

            //console.log(bfId, lunchId, dinnerId, " ids")

        }
        if (level >= 2001 && level <= 3000) {
            console.log(data[2].breakfast);
            srcUrl = data[2].breakfast.image;
            console.log(srcUrl);

            // b-f
            bfTitle.innerHTML = data[2].breakfast.title;
            bfImg.src = data[2].breakfast.image;
            bfPrepTime.innerText = "Time for Preparation : " + data[2].breakfast.readyInMinutes + " min";
            bfId = data[2].breakfast.id;
            // lunch
            lunchTitle.innerText = data[2].lunch.title;
            lunchImg.src = data[2].lunch.image;
            lunchPrepTime.innerText = "Time for Preparation : " + data[2].lunch.readyInMinutes + " min";
            lunchId = data[2].lunch.id;
            // dinner
            dinnerTitle.innerText = data[2].dinner.title;
            dinnerImg.src = data[2].dinner.image;
            dinnerPrepTime.innerText = "Time for Preparation : " + data[2].dinner.readyInMinutes + " min";
            dinnerId = data[2].dinner.id;

        }


    }

    fetchData(url);
    if (level >= 500) {
        cardDiv.hidden = false;
    }

    console.log(bfId, lunchId, dinnerId, 'ids');

    const recipeUrl = "https://content.newtonschool.co/v1/pr/64996337e889f331d43f70ba/recipes";



    bfRecipe.addEventListener('click', async() => {
        let promise = await fetch(recipeUrl);
        let data = await promise.json();
        console.log(data);
        let count = 0;
        const result = data.filter((data) => {
            return data.id === bfId;

        })

        console.log(result, 'b--f');

        ingridientsPara.innerHTML = result[0].ingredients;

        recipeDiv.hidden = false;

    })

    lunchRecipe.addEventListener('click', async() => {
        let promise = await fetch(recipeUrl);
        let data = await promise.json();
        console.log(data);
        let count = 0;
        const result = data.filter((data) => {
            return data.id === lunchId;

        })
        console.log(result, 'lunch');

        ingridientsPara.innerHTML = result[0].ingredients;

        recipeDiv.hidden = false;
    })


    dinnerRecipe.addEventListener('click', async() => {
        let promise = await fetch(recipeUrl);
        let data = await promise.json();
        console.log(data);
        let count = 0;
        const result = data.filter((data) => {
            return data.id === dinnerId;

        })

        console.log(result, 'dinner');

        ingridientsPara.innerHTML = result[0].ingredients;

        recipeDiv.hidden = false;
    })








})