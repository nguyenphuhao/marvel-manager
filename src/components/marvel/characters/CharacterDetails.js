import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacterById } from '../../../store/actions/characterActions';
import LoadingPanel from '../../common/LoadingPanel';
import { Redirect, Link } from 'react-router-dom';
class CharacterDetails extends Component {
    constructor(props) {
        super();
    }
    componentDidMount() {
        this.props.fetchCharacterById(this.props.id);
        console.log(this.props);
    }
    render() {
        const { loaded } = this.props;

        if (this.props.loaded && this.props.loaded === true) {
            const { data } = this.props;
            const ch = data && data.length > 0 ? data[0] : null;
            if (!ch) {
                return <Redirect to='/' />
            } else {
                return (
                    <div className="container section character-details">
                        <div className="container">
                            <h4>{ch.name}</h4>
                            <div className="card">
                                <div className="card-image">
                                    <img alt={ch.name} className="img-responsive" src={ch.thumbnail.path + "." + ch.thumbnail.extension} />
                                    <span className="card-title">{ch.name}</span>
                                </div>
                                <div className="card-content">
                                    <p>{ch.description}</p>
                                </div>
                                <div className="card-action">
                                    <Link to='/'> Back </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        } else {
            return <LoadingPanel loaded={loaded} />;
        }
    }
}
const mapStateToProps = (state) => {
    return {
        loaded: state.character.loaded,
        data: state.character.results
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCharacterById: (id) => dispatch(fetchCharacterById(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);