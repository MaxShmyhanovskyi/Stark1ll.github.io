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
      id: 1001,
      category: 'soups',
      title: 'Chicken Soup with eggs',
      photo: soupChicken,
      description: `Tasty chiken soup. Ingredients: Pasta, Chiken breast, Eggs, Carrot. Weight: 220g`,
      price: 120,
    },
    soupCreamShrooms: {
      id: 1002,
      category: 'soups',
      title: 'Mushrooms Cream Soup',
      photo: soupCreamShrooms,
      description: `Cream soup with Shrooms. Ingredients: Champinones, Cheese. Weight: 220g`,
      price: 110
    },
    pastaCarbonara: {
      id: 2001,
      category: 'pastas',
      title: 'Pasta Carbonara',
      photo: pastaCarbonara,
      description: 'Classic Carbonara. Ingredients: Pasta, Beacon, Eggs, Parmesan, Creams. Weight: 250g',
      price: 150
    },
    pastaShrimps: {
      id: 2002,
      category: 'pastas',
      title: 'Alfredo with shrimps',
      photo: pastaShrimps,
      description: `Our remake of Alfredo pasta. Ingredients: Fetuccine, Shrimps, Parmesan, Creams. Weight: 250g`,
      price: 210
    },
    pasta4Cheses: {
      id: 2003,
      category: 'pastas',
      title: 'Pasta 4 Chises',
      photo: pasta4Cheses,
      description: 'For Chese Lovers. Ingredients: Farfalle, Parmesan, Dor-blue, Mozarella, Blue Chise. Weight: 240g',
      price: 190
    },
    pizzaSalami: {
      id: 3001,
      category: 'pizzas',
      title: 'Salami Pizza',
      photo: pizzaSalami,
      description: 'Napoli & Validzhiano salami, tomato sauce , Mozzarella . Garnished with arugula. Weight: 340g',
      price: 180
    },
    pizzaPineappleChicken: {
      id: 3002,
      category: 'pizzas',
      title: 'Hawaian pizza',
      photo: pizzaPineappleChicken,
      description: 'Tomato sauce, Mozzarella, chicken sousvide, pineapple. Garnished with arugula. Weight: 340g',
      price: 180
    },
    pizzaShroomsHam: {
      id: 3003,
      category: 'pizzas',
      title: 'Shrooms & Ham Pizza',
      photo: pizzaShroomsHam,
      description: 'Ham, mushrooms, parmesan cheese and mozzarella, arugula, tomato. Weight: 340g',
      price: 210
    },
    pizza4Cheses: {
      id: 3004,
      category: 'pizzas',
      title: 'Four Cheese Pizza',
      photo: pizza4Cheses,
      description: 'Combination of four Italian cheeses: Add Blue, Mozzarella, Maazdam, Parmesan. Weight: 340g',
      price: 240
    },
    saladBeef: {
      id: 4001,
      category: 'salads',
      title: 'Tongue & Arugula Salad',
      photo: saladBeef,
      description: 'Boiled tongue, leaves of lola-rosa salad & arugula, tomatoes, gherkins, boiled quail eggs & mustard sauce. Weight: 220g',
      price: 210
    },
    saladCezar: {
      id: 4002,
      category: 'salads',
      title: 'Cezar Salad',
      photo: saladCezar,
      description: 'Crisp lettuce & parmesan, fried chicken fillet,Cesar sauce with crunchy garlic toasts,  tomatoes & quail eggs. Weight: 270g',
      price: 186
    },
    saladGreek: {
      id: 4003,
      category: 'salads',
      title: 'Greek Salad',
      photo: saladGreek,
      description: 'Salad with tomatoes, cucumber, bell pepper, lettuce, blue onion, feta cheese and 2 olives. Weight: 210g',
      price: 175
    },
    cutletRabbit: {
      id: 5001,
      category: 'hot-dishes',
      title: 'Rabbit cutlets',
      photo: cutletRabbit,
      description: 'Rabbit cutlets with mushroom sauce and mashed potatoes. Weight: 140g',
      price: 190
    },
    cutletTurkey: {
      id: 5002,
      category: 'hot-dishes',
      title: 'Turkey cutlets',
      photo: cutletTurkey,
      description: 'Turkey cutlets with mashed potatoes and creamy spinach sauce. Weight: 120g',
      price: 210
    },
    duckLeg: {
      id: 5003,
      category: 'hot-dishes',
      title: 'Duck leg',
      photo: duckLeg,
      description: 'Duck leg with mashed potatoes and caramelized apples. Weight: 150/100g',
      price: 175
    },
}


export const getRegisterFormControlValues = (getValues) => 

  ({
  fullName: {
    type: "text",
    placeholder: 'Full Name',
    name: 'fullName',
    options: {
      required: "Full Name required",
      maxLength: {
        value: 40,
        message: 'Maximum 40 characters!'
      },
      pattern: {
        value: /\w+\s\w+/,
        message: 'Please, enter correct Full Name',
      }
    }
  },
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
  phoneNumber: {
    type: 'tel',
    placeholder: "Phone: +380XXXXXXXXX",
    name: 'phoneNumber',
    options: {
      required: "Phone number required",
      pattern: {
        value: /^[\+]?[0-9]{12}$/,
        message: 'Inccorect phone number',
        }
    }
  },
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
});


export const getBookingFormControlValues = () => ({
  fistName: {
    type: "text",
    placeholder: "First name",
    name: 'firstName',
    options: {
      required: "First Name required",
      maxLength: 20
    }
  },
  lastName: {
    type: "text",
    placeholder: 'Last Name',
    name: 'lastName',
    options: {
      required: "Last Name required",
      maxLength: 25,
    }
  },
  phoneNumber: {
    type: 'tel',
    placeholder: "Phone: +380XXXXXXXXX",
    name: 'phoneNumber',
    options: {
      required: "Phone number required",
      pattern: {
        value: /^[\+]?[0-9]{12}$/,
        message: 'Inccorect phone number',
        }
    }
  },
  seatCount: {
    type: 'number',
    placeholder: 'Seats Count',
    name: 'seatCount',
    options: {
      required: "Please, Choose seats count",
      min: 1,
      max: {
        value: 25,
        message: `If you need more than 25 seats, \n please call us to discuss Your visit`
      }
    }
  },
  desiredDate: {
    type: 'date',
    placeholder: 'Desired Date',
    name: 'desiredDate',
    options: {
      required: "Please, set the date of a visit",
      min: {
        value: `${new Date().toISOString().slice(0, 10)}`,
        message: "Can't set past date!"
      },
      max: {
        value: '2022-08-31',
        message: "We're taking bookings only for this summer"
      }
    }
  }
});

// export const getUserInfoFormControlValues = (getValues) => ({

//   fullName: {
//     type: "text",
//     placeholder: 'Full Name',
//     name: 'fullName',
//     options: {
//       required: "Full Name required",
//       maxLength: {
//         value: 40,
//         message: 'Maximum 40 characters!'
//       },
//       pattern: {
//         value: /\w+\s\w+/,
//         message: 'Please, enter correct Full Name',
//       }
//     }
//   },
//   phoneNumber: {
//     type: 'tel',
//     placeholder: "Phone: +380XXXXXXXXX",
//     name: 'phoneNumber',
//     options: {
//       required: "Phone number required",
//       pattern: {
//         value: /^[\+]?[0-9]{12}$/,
//         message: 'Inccorect phone number',
//         }
//     }
//   },
//   email: {
//     type: 'email',
//     placeholder: 'Enter E-mail address',
//     name: 'email',
//     options: {
//       required: "E-mail address is required",
//       pattern: {
//         value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
//         message: 'Please, enter correct E-mail'
//         }
//     }
//   },
//   password: {
//     type: 'password',
//     placeholder: 'Enter Password',
//     name: 'password',
//     options: {
//       required: "This field is required",
//       minLength: { value: 8, message: 'Minimum 8 characters'},
//       maxLength: { value: 25, message: 'Maximum 25 characters'},
//     }
//   },
//   password_repeat: {
//     type: 'password',
//     placeholder: 'Confirm password',
//     name: 'password_repeat',
//     options: {
//       required: "Password confirmation is required",
//       validate: value =>
//         value === getValues('password') || "The passwords do not match",         
//     }
//   },
// });