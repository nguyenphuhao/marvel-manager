import React, { Component } from 'react';
import CharacterList from './../marvel/characters/CharacterList';
class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12">
                        <CharacterList />
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard