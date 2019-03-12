import React, { Component } from 'react';
import CharacterGrid from './../../../components/marvel/characters/CharacterGrid';
class CharacterGridView extends Component {
    render() {
        return (
            <div className="charactergrid-view">
                <CharacterGrid />
            </div>
        )
    }
}
export default CharacterGridView;
