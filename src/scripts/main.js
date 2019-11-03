// Lightning Exercise 1: Create an object to represent your favorite dinner item (e.g. meatloaf, spaghetti, fried fish, gumbo). Each object should have a name property, but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.

const favoriteDinners = [
   {
    name: 'Shrimp Scampi',
    pescatarian: true,
    ingredients: [
        '1 pound linguini', 
        '4 tablespoons butter',
        '4 tablespoons extra-virgin olive oil (plus more for drizzling)',
        '2 shallots, finely diced',
        '2 cloves garlic, minced',
        'Pinch red pepper flakes, optional',
        '1 pound shrimp, peeled and deveined',
        'Kosher salt and freshly ground black pepper',
        '1/2 cup dry white wine',
        'Juice of 1 lemon',
        '1/4 cup finely chopped parsley leaves'
    ],
    cookingMethod: 'pan-fry',
    ethnicity: 'italian',
    cookTime: '25 minutes'
   },
   {
    name: 'Kung Pao Brussel Sprouts',
    pescatarian: true,
    ingredients: [
        '2 lb. Brussels sprouts, halved',
        '2 tbsp. extra-virgin olive oil',
        'Kosher salt',
        'Freshly ground black pepper',
        '1 tbsp. sesame oil',
        '2 cloves garlic, minced',
        '1 tbsp. cornstarch',
        '1/2 c. low-sodium soy sauce',
        '1/2 c. water',
        '2 tsp. apple cider vinegar',
        '1 tbsp. hoisin sauce',
        '1 tbsp. brown sugar',
        '2 tsp. garlic chili sauce',
        'pinch red pepper flakes',
        'Sesame seeds, for garnish',
        'Green onions, for garnish',
        'Chopped roasted peanuts, for garnish'
    ],
    cookingMethod: 'bake',
    ethnicity: 'chinese',
    cookTime: '20 minutes'
   }
]

// Lightning Exercise 2: Output all of the key/value pairs into the DOM inside an <article> element with a class of food.

const foodContainer = document.querySelector('.food')
foodContainer.innerHTML += `<h1>Favorite Dinners</h1>`

favoriteDinners.forEach(favoriteDinner => {
    for (const entry of Object.entries(favoriteDinner) ) {
        foodContainer.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }
})