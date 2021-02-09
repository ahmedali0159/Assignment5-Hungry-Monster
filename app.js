const searchMeals = () => {
    const searchText = document.getElementById('search').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    const mealsDiv = document.getElementById('meals');
    meals.forEach(food => {

  //  for (let i = 0; i < meals.length; i++) {
        //const food = meals[i];
        const mealDiv = document.createElement('div');
        
        // const h3 = document.createElement('h3');
        // h3.innerText = food.strMeal;
        // const img = document.createElement('img');
        // img.innerText = food.strMealThumb;
        // mealDiv.appendChild(h3);
        // mealDiv.appendChild(img);
        mealDiv.className = `food`;
        const mealInfo = `
        <h5 class ="food-strMeal">${food.strMeal}</h5>
        <button onclick="displayFoodDetails('${food.strMeal}')">details</button>
        `;
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    });

      // console.log(food.strMeal);
   // }
}

       displayFoodDetails = list => {
       const url = `https://www.themealdb.com/api/json/v1/1/categories.php?s=${list}`    
       fetch(url)
       .then(res => res.json())
       .then(data => renderFoodInfo(data.meals));
       
}

        const renderFoodInfo = food => {
        console.log(food);
      const mealDiv = document.getElementById('mealsDetail');
      mealDiv .innerHTML = `
      
      `  
     }