import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import { connect } from 'react-redux';
import { championStats, selectChampion } from '../../redux/reducer';


class ChampionRadar extends Component {

    render () {
        console.log(this.props)
        const { championInfo } = this.props
        // const { champion } = this.props
        // const { info } = this.props.champion
        console.log("this.props on ChampionRadar-->", this.props)
    
        var data = {
            labels: ['Attack', 'Toughness', 'Crowd Control', 'Mobility', 'Utility'],
            datasets: [
                {
                    label: "Stats",
                    backgroundColor: "rgba(17, 182, 247, 0.35)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [championInfo.damage, 
                            championInfo.toughness, 
                            championInfo.crowdControl, 
                            championInfo.mobility, 
                            championInfo.utility]
                }
            ]
        };
        const options = {
            scale: {
                ticks: {
                    min: 0,
                    max: 10
                }        
            }
        };
        return (
            <Radar
            data={data}
            width={70}
            height={28}
            options={options}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        champion: state.championInfo,
        championInfo: state.championStats
    }
}

export default connect (mapStateToProps, { championStats, selectChampion } )(ChampionRadar)
