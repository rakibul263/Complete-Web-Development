const productContainer = document.getElementById('product-container');
const mealDetailsContainer = document.getElementById('meal-details-container');
const searchInput = document.getElementById('search-input');

const fetchMeals = async () => {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const allMeals = [];

    for (const letter of letters) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
        const data = await response.json();
        if (data.meals) {
            allMeals.push(...data.meals);
        }
    }
    displayMeals(allMeals);
};

const displayMeals = (meals) => {
    productContainer.innerHTML = '';

    meals.forEach(meal => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3 class="meal-name">${meal.strMeal}</h3>
        `;
        card.addEventListener('click', () => displayMealDetails(meal));
        productContainer.appendChild(card);
    });
};


const displayMealDetails = async (meal) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`);
    const data = await response.json();
    const mealDetail = data.meals[0];
    
    mealDetailsContainer.innerHTML = `
        <div class="meal-detail-card">
            <img src="${mealDetail.strMealThumb}" alt="${mealDetail.strMeal}">
            <h2>${mealDetail.strMeal}</h2>
            <p><strong>Category:</strong> ${mealDetail.strCategory}</p>
            <p><strong>Area:</strong> ${mealDetail.strArea}</p>
            <p><strong>Instructions:</strong> ${mealDetail.strInstructions}</p
        </div>
    `;
};

const searchMeals = async () => {
    const query = searchInput.value.toLowerCase();
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();
    
    if (data.meals) {
        displayMeals(data.meals);
    } else {
        productContainer.innerHTML = '<p>No meals found matching your search.</p>';
    }
};

fetchMeals();
