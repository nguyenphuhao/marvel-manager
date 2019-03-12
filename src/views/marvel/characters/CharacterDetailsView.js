import React, { Component } from 'react';
import CharacterDetails from '../../../components/marvel/characters/CharacterDetails';
class CharacterDetailsView extends Component {
    render() {
        return (
            <div className="charactergrid-view container">
                <CharacterDetails id={this.props.match.params.id} />
            </div>
        )
    }
}
export default CharacterDetailsView;
