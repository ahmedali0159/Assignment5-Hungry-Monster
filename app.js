const searchMeals = () => {
    const searchText = document.getElementById('search').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    const mealsDiv = document.getElementById('meals');
    mealsDiv.innerHTML = '';
    meals.forEach(food => {
        const mealDiv = document.createElement('div');
        mealDiv.className = `food`;
        const mealInfo = `
        <img style="width:200px; border-radius:20px;"src="${food.strMealThumb}">
        <h5 class ="food-strMeal">${food.strMeal}</h5>
        <button class="btn btn-primary" onclick="displayMealsDetail('${food.idMeal}')">Ingredient</button>
        `;
        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);
    });
}

const displayMealsDetail = list => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${list}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayItemDetails(data.meals[0]));  

}
const displayItemDetails = food => {
  const Ingredients = document.getElementById('mealsDetail');
  Ingredients.innerHTML = `
  <img style="width:300px; margin-bottom:20px;  border-radius:10px;" src="${food.strMealThumb}">
  <ul class ="food-ingredient">
      <li><h3>Ingredient<h3></li>
      <li><p>${food.strIngredient1}</p></li>
      <li><p>${food.strIngredient2}</p></li>
      <li><p>${food.strIngredient3}</p></li>
      <li><p>${food.strIngredient4}</p></li>
      <li><p>${food.strIngredient5}</p></li>
      <li><p>${food.strIngredient6}</p></li>
      <li><p>${food.strIngredient7}</p></li>
      <li><p>${food.strIngredient8}</p></li>
      <li><p>${food.strIngredient10}</p></li>
  <ul>  
  `
} 

      