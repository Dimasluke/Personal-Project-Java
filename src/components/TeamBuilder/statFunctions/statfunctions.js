module.exports = {
    resetTeamStats: () => {
        this.setState({
            teamDamage: 0,
            teamToughness: 0,
            teamCrowdControl: 0,
            teamUtility: 0,
            teamMobility: 0,
        })
    } 
}
