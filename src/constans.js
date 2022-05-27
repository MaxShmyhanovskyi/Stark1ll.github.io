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
    chickenSoup: {
      category: 'soups',
      title: 'Chicken Soup with eggs',
      photo: soupChicken,
      description: `Tasty chiken soup. Ingredients: Pasta, Chiken breast, Eggs, Carrot. weight: 220g`,
      price: '120 Uah',
    },
    soupCreamShrooms: {
      category: 'soups',
      title: 'Mushrooms Cream Soup',
      photo: soupCreamShrooms,
      description: `Cream soup with Shrooms. Ingredients: Champinones, Cheese. weight: 220g`,
      price: '110 Uah'
    },
    pastaCarbonara: {
      category: 'pastas',
      title: 'Pasta Carbonara',
      photo: pastaCarbonara,
      description: 'Classic Carbonara. Ingredients: Pasta, Beacon, Eggs, Parmesan, Creams. weight: 250g',
      price: '150 Uah'
    },
    pastaShrimps: {
      category: 'pastas',
      title: 'Alfredo with shrimps',
      photo: pastaShrimps,
      description: `Our remake of Alfredo pasta. Ingredients: Fetuccine, Shrimps, Parmesan, Creams. weight: 250g`,
      price: '210 Uah'
    },
    pasta4Cheses: {
      category: 'pastas',
      title: 'Pasta 4 Chises',
      photo: pasta4Cheses,
      description: 'For Chese Lovers. Ingredients: Farfalle, Parmesan, Dor-blue, Mozarella, Blue Chise. weight: 240g',
      price: '190 Uah'
    },
    pizzaSalami: {
      category: 'pizzas',
      title: 'Salami Pizza',
      photo: pizzaSalami,
      description: 'Napoli & Validzhiano salami, tomato sauce , Mozzarella . Garnished with arugula. weight: 340g',
      price: '180 Uah'
    },
    pizzaPineappleChicken: {
      category: 'pizzas',
      title: 'Hawaian pizza',
      photo: pizzaPineappleChicken,
      description: 'Tomato sauce, Mozzarella, chicken sousvide, pineapple. Garnished with arugula. weight: 340g',
      price: '180 Uah'
    },
    pizzaShroomsHam: {
      category: 'pizzas',
      title: 'Mushrooms & Ham Pizza',
      photo: pizzaShroomsHam,
      description: 'Ham, mushrooms, parmesan cheese and mozzarella, arugula, tomato. weight: 340g',
      price: '210 Uah'
    },
    pizza4Cheses: {
      category: 'pizzas',
      title: 'Four Cheese Pizza',
      photo: pizza4Cheses,
      description: 'Combination of four Italian cheeses: Add Blue, Mozzarella, Maazdam, Parmesan. weight: 340g',
      price: '240 Uah'
    },
    saladBeef: {
      category: 'salads',
      title: 'Tongue & Arugula Salad',
      photo: saladBeef,
      description: 'Boiled tongue, leaves of lola-rosa salad & arugula, tomatoes, gherkins, boiled quail eggs & mustard sauce. weight: 220g',
      price: '210 Uah'
    },
    saladCezar: {
      category: 'salads',
      title: 'Cezar Salad',
      photo: saladCezar,
      description: 'Crisp lettuce & parmesan, fried chicken fillet,Cesar sauce with crunchy garlic toasts,  tomatoes & quail eggs. weight: 270g',
      price: '186 Uah'
    },
    saladGreek: {
      category: 'salads',
      title: 'Greek Salad',
      photo: saladGreek,
      description: 'Salad with tomatoes, cucumber, bell pepper, lettuce, blue onion, feta cheese and 2 olives. weight: 210g',
      price: '175 Uah'
    },
    cutletRabbit: {
      category: 'hot-dishes',
      title: 'Rabbit cutlets',
      photo: cutletRabbit,
      description: 'Rabbit cutlets with mushroom sauce and mashed potatoes. weight: 140g',
      price: '190 Uah'
    },
    cutletTurkey: {
      category: 'hot-dishes',
      title: 'Turkey cutlets',
      photo: cutletTurkey,
      description: 'Turkey cutlets with mashed potatoes and creamy spinach sauce. weight: 120g',
      price: '210 Uah'
    },
    duckLeg: {
      category: 'hot-dishes',
      title: 'Duck leg',
      photo: duckLeg,
      description: 'Duck leg with mashed potatoes and caramelized apples. weight: 150/100g',
      price: '175 Uah'
    },
}


export const getRegisterFormControlValues = (getValues) => 

  ({
  //   userName: {
  //   type: 'text',
  //   placeholder: 'User Name',
  //   name: 'userName',
  //   options: {
  //     required: "Please, set your User Name",
  //     minLength: { value: 6, message: 'Minimum 6 characters'},
  //     maxLength: { value: 25, message: 'Maximum 25 characters'},
  //   }
  // },
  email: {
    type: 'email',
    placeholder: 'Enter E-mail address',
    name: 'email',
    options: {
      required: "E-mail address is required",
      pattern: {
        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: 'Please, enter correct E-mail'
        }
    }
  },
  password: {
    type: 'password',
    placeholder: 'Enter Password',
    name: 'password',
    options: {
      required: "This field is required",
      minLength: { value: 8, message: 'Minimum 8 characters'},
      maxLength: { value: 25, message: 'Maximum 25 characters'},
    }
  },
  password_repeat: {
    type: 'password',
    placeholder: 'Confirm password',
    name: 'password_repeat',
    options: {
      required: "Password confirmation is required",
      validate: value =>
        value === getValues('password') || "The passwords do not match",         
    }
  },

  // phoneNumber: {
  //   type: 'tel',
  //   placeholder: 'Telephone',
  //   name: 'phoneNumber',
  //   options: {
  //     required: "This field is required",
  //     pattern: {
  //       value:/^[\+]?[0-9]{12}$/,
  //       message: 'Incorrect phone number'
  //     },
  //   }
  // },
});

export const getSignInFormControlValues = () => ({
  email: {
    type: 'email',
    placeholder: 'Enter E-mail address',
    name: 'email',
    options: {
      required: "E-mail address is required",
      pattern: {
        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: 'Please, enter correct E-mail'
        }
    }
  },
  password: {
    type: 'password',
    placeholder: 'Password',
    name: 'password',
    options: {
      required: 'Please,enter your password',
    }
  }
})


