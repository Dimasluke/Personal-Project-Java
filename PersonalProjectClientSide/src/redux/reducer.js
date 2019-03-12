

const initalState = {
    champions: [],
    championInfo: {},
    championStats: {id: '', damage: 0, toughness: 0, crowdControl: 0, mobility: 0, utility: 0},
    user: null,
    team: [],
    savedTeams: [],
    teamShow: [],
    userToken: '',
    teamInfo: {id:''},
    teamEdit: false,
    teamDamage: 0,
    teamToughness: 0,
    teamCrowdControl: 0,
    teamUtility: 0,
    teamMobility: 0,
    teamName: ''
}

const ADD_CHAMPION = 'ADD_CHAMPION'
const GET_CHAMPIONS = 'GET_CHAMPIONS'
const SELECT_CHAMPION = 'SELECT_CHAMPION'
const CHAMPION_INFO = 'CHAMPION_INFO'
const USER_SESSION = 'USER_SESSION'
const REMOVE_CHAMPION = 'REMOVE_CHAMPION'
const RESET_TEAM = 'RESET_TEAM'
const GET_TEAMS = 'GET_TEAMS'
const GET_TEAM = 'GET_TEAM'
const USER_TOKEN = 'USER_TOKEN'
const SET_TEAM_EDIT = 'SET_TEAM_EDIT'
const TEAM_EDIT = 'TEAM_EDIT'
const RESET_TEAM_STATS = 'RESET_TEAM_STATS'
const UPDATE_TEAM_PLUS = 'UPDATE_TEAM_PLUS'
const UPDATE_TEAM_MINUS = 'UPDATE_TEAM_MINUS'
const UPDATE_TEAM_NAME = 'UPDATE_TEAM_NAME'

function reducer(state = initalState, action){
    switch(action.type){
        case UPDATE_TEAM_NAME:
            return {...state, teamName: action.payload}
        case UPDATE_TEAM_MINUS:
            return {
                ...state,
                teamDamage: state.teamDamage - action.payload.damage,
                teamToughness: state.teamToughness - action.payload.toughness,
                teamCrowdControl: state.teamCrowdControl - action.payload.crowdControl,
                teamUtility: state.teamUtility - action.payload.utility,
                teamMobility: state.teamMobility - action.payload.mobility,
            }
        case UPDATE_TEAM_PLUS:
            return {
                ...state,
                teamDamage: state.teamDamage + action.payload.damage,
                teamToughness: state.teamToughness + action.payload.toughness,
                teamCrowdControl: state.teamCrowdControl + action.payload.crowdControl,
                teamUtility: state.teamUtility + action.payload.utility,
                teamMobility: state.teamMobility + action.payload.mobility,
            }
        case TEAM_EDIT:
            return {...state, teamEdit: action.payload}
        case SET_TEAM_EDIT: 
            return {...state, teamInfo: action.payload}
        case USER_TOKEN:
            return {...state, userToken: action.payload}
        case GET_TEAM:
            return {...state, teamShow: action.payload}
        case GET_TEAMS:
            return {...state, savedTeams: action.payload}
        case RESET_TEAM:
            return { ...state, team: [] }
        case REMOVE_CHAMPION:
        let removeTeamArray = state.team.splice(action.payload, 1)
            return {...state, team: state.team}
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
        case RESET_TEAM_STATS: 
            return {
                ...state,
                teamDamage: 0,
                teamToughness: 0,
                teamCrowdControl: 0,
                teamUtility: 0,
                teamMobility: 0,
            }
        default: 
            return state;
    }
}

export function updateTeamName (string) {
    return{
        type: 'UPDATE_TEAM_NAME',
        payload: string
    }
}

export function updateTeamMinus (champion) {
    return {
        type: 'UPDATE_TEAM_MINUS',
        payload: champion
    }
}

export function updateTeamPlus (champion) {
    return {
        type: 'UPDATE_TEAM_PLUS',
        payload: champion
    }
}


export function resetTeamStats () {
    return {
        type: 'RESET_TEAM_STATS',
        payload: null
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

export function getTeam ( teamInfo ) {
    return {
        type: 'GET_TEAM',
        payload: teamInfo
    }
}

export function setToken ( userToken ) {
    return {
        type: 'USER_TOKEN',
        payload: userToken
    }
}

export function setTeamEdit (teamInfo) {
    return {
        type: 'SET_TEAM_EDIT',
        payload: teamInfo
    }
}

export function teamEdit ( teamEdit ) {
    return {
        type: 'TEAM_EDIT',
        payload: teamEdit
    }
}

export default reducer;