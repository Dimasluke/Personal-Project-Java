const initalState = {
    champions: []
}

const GET_CHAMPIONS = 'GET_CHAMPIONS'


function reducer(state = initalState, action){
    switch(action.type){
        case GET_CHAMPIONS:
            return {...state, champions: action.payload}
        default: 
            console.log(state)
            return state;
    }
}

export function getSavedChampions ( championInfo ) {
    return {
        type: 'GET_CHAMPIONS',
        payload: championInfo
    }
}

export default reducer;