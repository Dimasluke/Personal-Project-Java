const initalState = {
    champions: [],
    championInfo: {},
    championStats: {id: '', damage: 0, toughness: 0, crowdControl: 0, mobility: 0, utility: 0},
    user: null
}

const GET_CHAMPIONS = 'GET_CHAMPIONS'
const SELECT_CHAMPION = 'SELECT_CHAMPION'
const CHAMPION_INFO = 'CHAMPION_INFO'
const USER_SESSION = 'USER_SESSION'


function reducer(state = initalState, action){
    switch(action.type){
        case USER_SESSION:
            return {...state, user: action.payload}
        case CHAMPION_INFO:
            return {...state, championStats: action.payload}
        case GET_CHAMPIONS:
            return {...state, champions: action.payload}
        case SELECT_CHAMPION:
            return {...state, championInfo: action.payload}
        default: 
            return state;
    }
}

export function getSavedChampions ( championInfo ) {
    return {
        type: 'GET_CHAMPIONS',
        payload: championInfo
    }
}

export function selectChampion ( championInfo ) {
    return {
        type: 'SELECT_CHAMPION',
        payload: championInfo
    }
}

export function championStats ( championInfo ) {
    return {
        type: 'CHAMPION_INFO',
        payload: championInfo
    }
}

export function userSession ( userInfo ) {
    return {
        type: 'USER_SESSION',
        payload: userInfo
    }
}

export default reducer;