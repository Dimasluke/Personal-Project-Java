const initalState = {
    champions: [],
    championInfo: {},
    championStats: {id: '', damage: 0, toughness: 0, crowdControl: 0, mobility: 0, utility: 0},
    user: null,
    team: [],
    savedTeams: []
}

const ADD_CHAMPION = 'ADD_CHAMPION'
const GET_CHAMPIONS = 'GET_CHAMPIONS'
const SELECT_CHAMPION = 'SELECT_CHAMPION'
const CHAMPION_INFO = 'CHAMPION_INFO'
const USER_SESSION = 'USER_SESSION'
const REMOVE_CHAMPION = 'REMOVE_CHAMPION'
const RESET_TEAM = 'RESET_TEAM'
const GET_TEAMS = 'GET_TEAMS'


function reducer(state = initalState, action){
    switch(action.type){
        case GET_TEAMS:
            return {...state, savedTeams: action.payload}
        case RESET_TEAM:
            return { ...state, team: [] }
        case REMOVE_CHAMPION:
        let removeTeamArray = state.team.splice(action.payload, 1)
        console.log("reducer state.team -->", state.team)
            return { team: state.team}
        case ADD_CHAMPION:
            let addTeamArray = state.team.concat(action.payload)
            return {...state, team: addTeamArray };
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

export function addChampion ( championInfo ) {
    return {
        type: 'ADD_CHAMPION',
        payload: championInfo
    }
}

export function removeChampion ( championIndex ) {
    return {
        type: 'REMOVE_CHAMPION',
        payload: championIndex
    }
}

export function resetTeam () {
    return {
        type: 'RESET_TEAM',
        payload: null
    }
}

export function savedTeams ( savedTeams ) {
    return {
        type: 'GET_TEAMS',
        payload: savedTeams
    }
}

export default reducer;