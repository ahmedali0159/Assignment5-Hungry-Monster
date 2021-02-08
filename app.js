const search = document.getElementById('search'),
      submit = document.getElementById('search-btn'),
      meals = document.getElementById('meals'),
      resultHeading = document.getElementById('result-heading'),
      singel_meal = document.getElementById('single-meal');
      
function searchMeal(e){
    e.preventDefault();

    singel_meal.innerHTML = '';

    const term = search.Value;
    if(term.trim()){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${'term'}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
            if(data.meals === null) {
                
            }
        })
    }
    else{
        alert('Search for a meal');
    }
}

submit.addEventListener('search-btn', searchMeal);      


    

