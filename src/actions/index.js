//step 5 - create actions
//actions
//action creators - a function that creates an action by return action objects from it
//action types - variables that hold the action name. Used to avoid spelling errors.

export const ADD_FEATURE = 'ADD_FEATURE';

export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = feature => {
    return{
        type: ADD_FEATURE,
        payload: feature
    }
}

export const removeFeature = feature => {
    return{
        type: REMOVE_FEATURE,
        payload: feature
    }
}
