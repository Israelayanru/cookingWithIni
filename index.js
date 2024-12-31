function showAllRecipes() {
    const hiddenRecipes = document.querySelectorAll('.hidden');
    hiddenRecipes.forEach(recipe => recipe.classList.remove('hidden'));
}

function filterRecipes(category) {
    const allRecipes = document.querySelectorAll('.recipe-card');
    allRecipes.forEach(recipe => {
        if (recipe.dataset.category === category || category === 'all') {
            recipe.classList.remove('hidden');
        } else {
            recipe.classList.add('hidden');
        }
    });
}