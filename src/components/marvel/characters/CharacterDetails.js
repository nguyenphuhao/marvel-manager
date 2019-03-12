import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacterById } from '../../../store/actions/characterActions';
class CharacterDetails extends Component {
    constructor(props){
        super();
    }
    componentDidMount() {
        this.props.fetchCharacterById(this.props.id);
    }
    render() {
        return (
            <div className="container section character-details">
                <h5>Character Details</h5>
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