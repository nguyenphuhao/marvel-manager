import React, { Component } from 'react';
import CharacterGrid from '../marvel/characters/CharacterGrid';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <CharacterGrid />
            </div>
        )
    }
}

export default Dashboard;