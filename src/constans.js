import soupChicken from './assets/images/menu/soupChicken.jpg'
import soupCreamShrooms from './assets/images/menu/soupCreamShrooms.jpg'

import pastaCarbonara from './assets/images/menu/pastaCarbonara.jpg'
import pastaShrimps from './assets/images/menu/pastaShrimps.jpg'
import pasta4Cheses from './assets/images/menu/pasta4Cheses.jpg'

import pizzaSalami from './assets/images/menu/pizzaSalami.jpg'
import pizzaPineappleChicken from './assets/images/menu/pizzaPineappleChicken.jpg'
import pizzaShroomsHam from './assets/images/menu/pizzaShroomsHam.jpg'
import pizza4Cheses from './assets/images/menu/pizza4Cheses.jpg'

import saladBeef from './assets/images/menu/saladBeef.jpg'
import saladCezar from './assets/images/menu/saladCezar.jpg'
import saladGreek from './assets/images/menu/saladGreek.jpg'

import cutletRabbit from './assets/images/menu/cutletRabbit.jpg'
import cutletTurkey from './assets/images/menu/cutletTurkey.jpg'
import duckLeg from './assets/images/menu/duckLeg.jpg'


export const menu = {
    soups: {
      chickenSoup: {
        title: 'Chicken Soup with eggs',
        photo: soupChicken,
        description: `Tasty chiken soup. Ingredients: Pasta, Chiken breast, Eggs, Carrot. weight: 220g`,
        price: '120 Uah',
      },
      soupCreamShrooms: {
        title: 'Mushrooms Cream Soup',
        photo: soupCreamShrooms,
        description: `Cream soup with Shrooms. Ingredients: Champinones, Cheese. weight: 220g`,
        price: '110 Uah'
      },
    },
    pastas: {
      pasta1: {
        title: 'Pasta Carbonara',
        photo: pastaCarbonara,
        description: 'Classic Carbonara. Ingredients: Pasta, Beacon, Eggs, Parmesan, Creams. weight: 250g',
        price: '150 Uah'
      },
      pasta2: {
        title: 'Alfredo with shrimps',
        photo: pastaShrimps,
        description: `Our remake of Alfredo pasta. Ingredients: Fetuccine, Shrimps, Parmesan, Creams. weight: 250g`,
        price: '210 Uah'
      },
      pasta3: {
        title: 'Pasta 4 Chises',
        photo: pasta4Cheses,
        description: 'For Chese Lovers. Ingredients: Farfalle, Parmesan, Dor-blue, Mozarella, Blue Chise. weight: 240g',
        price: '190 Uah'
      },
    },
    pizzas: {
      pizzaSalami: {
        title: 'Salami Pizza',
        photo: pizzaSalami,
        description: 'Napoli & Validzhiano salami, tomato sauce , Mozzarella . Garnished with arugula. weight: 340g',
        price: '180 Uah'
      },
      pizzaPineappleChicken: {
        title: 'Hawaian pizza',
        photo: pizzaPineappleChicken,
        description: 'Tomato sauce, Mozzarella, chicken sousvide, pineapple. Garnished with arugula. weight: 340g',
        price: '180 Uah'
      },
      pizzaShroomsHam: {
        title: 'Mushrooms & Ham Pizza',
        photo: pizzaShroomsHam,
        description: 'Ham, mushrooms, parmesan cheese and mozzarella, arugula, tomato. weight: 340g',
        price: '210 Uah'
      },
      pizza4Cheses: {
        title: 'Four Cheese Pizza',
        photo: pizza4Cheses,
        description: 'Combination of four Italian cheeses: Add Blue, Mozzarella, Maazdam, Parmesan. weight: 340g',
        price: '240 Uah'
      },
    },
    salads: {
      saladBeef: {
        title: 'Tongue & Arugula Salad',
        photo: saladBeef,
        description: 'Salad with boiled tongue, leaves of lola-rosa salad and arugula, tomatoes, gherkins, boiled quail eggs and mustard sauce. weight: 220g',
        price: '210 Uah'
      },
      saladCezar: {
        title: 'Cezar Salad',
        photo: saladCezar,
        description: 'Crisp romaine lettuce & parmesan cheese, fried chicken fillet, special Cesar sauce with crunchy garlic toasts,  tomatoes and quail eggs. weight: 270g',
        price: '186 Uah'
      },
      saladGreek: {
        title: 'Four Cheese Pizza',
        photo: saladGreek,
        description: 'Salad with tomatoes, cucumber, bell pepper, lettuce, blue onion, feta cheese and two types of olives. weight: 210g',
        price: '175 Uah'
      },
    },
    hotDishes: {
      cutletRabbit: {
        title: 'Rabbit cutlets',
        photo: cutletRabbit,
        description: 'Rabbit cutlets with mushroom sauce and mashed potatoes. weight: 140g',
        price: '190 Uah'
      },
      cutletTurkey: {
        title: 'Turkey cutlets',
        photo: cutletTurkey,
        description: 'Turkey cutlets with mashed potatoes and creamy spinach sauce. weight: 120g',
        price: '210 Uah'
      },
      duckLeg: {
        title: 'Duck leg',
        photo: duckLeg,
        description: 'Duck leg with mashed potatoes and caramelized apples. weight: 150/100g',
        price: '175 Uah'
      },
    }
}