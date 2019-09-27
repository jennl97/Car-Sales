//step 5 - create actions
//actions
//action creators - a function that creates an action by return action objects from it
//action types

export const ADD_FEATURE = 'ADD_FEATURE';

export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = item => {
    return{
        type: ADD_FEATURE,
        payload: item
    }
}

export const removeFeature = item => {
    return{
        type: REMOVE_FEATURE,
        payload: item
    }
}