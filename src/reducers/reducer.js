import React from 'react';
import { createStore } from 'redux';


const initialState = {
    car: {
        additionalPrice: 0,
        price: 26395,
        name: '2019 Ford Mustang',
        image:
          'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: [ {id: 1, name: 'V-6 engine', price: 1500}]
      },
      additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
      ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ('add'):
            return {}
        case ('remove'):
            return {}

        default:
            return state;

    }
}
