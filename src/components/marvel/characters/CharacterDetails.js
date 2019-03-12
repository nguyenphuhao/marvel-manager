import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacterById } from '../../../store/actions/characterActions';
class CharacterDetails extends Component {
    constructor(props) {
        super();
    }
    componentDidMount() {
        this.props.fetchCharacterById(this.props.id);
    }
    render() {
        const { character } = this.props;
        console.log(character.characters);
        const ch = character && character.characters && character.characters.length ? character.characters[0] : null;
        return (
            <div className="container section character-details">
                <div className="container">
                    <h4>{ch.name}</h4>
                    <div className="card">
                        <div className="card-image">
                            <img width="100" className="img-responsive" src={character && character.characters && character.characters.length ? character.characters[0].thumbnail.path + "." + character.characters[0].thumbnail.extension : ""} />
                            <span className="card-title">{ch.name}</span>
                        </div>
                        <div className="card-content">
                            <p>{ch.description}</p>
                        </div>
                        <div className="card-action">
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        character: state.character
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCharacterById: (id) => dispatch(fetchCharacterById(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);