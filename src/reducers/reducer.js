import React from 'react';
import { createStore } from 'redux';


const initialState = {
    prop: ''
};

function reducer(state, action) {
    switch (action.type) {
        case ('add'):
            return {}
        case ('remove'):
            return {}

        default:
            return state;

    }


    const store = createStore(reducer())