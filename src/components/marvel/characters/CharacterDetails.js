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
        const {character} = this.props;
        console.log(character.characters);
        return (
            <div className="container section character-details">
                <h5>Character Details</h5>
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <div className="card-image">
                            <img width="100" className="img-responsive" src={character && character.characters && character.characters.length  ? character.characters[0].thumbnail.path + "." + character.characters[0].thumbnail.extension : ""} />
                                <span className="card-title">Card Title</span>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                                <a href="#">This is a link</a>
                            </div>
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