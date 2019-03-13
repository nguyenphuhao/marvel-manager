import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacterDetails } from '../../../store/actions/characterActions';
import LoadingPanel from '../../common/LoadingPanel';
import { Redirect } from 'react-router-dom';
import ComicList from '../comics/ComicList';
class CharacterDetails extends Component {
    constructor(props) {
        super();
    }
    componentDidMount() {
        this.props.fetchCharacterDetails(this.props.id);
        console.log(this.props.id)
    }
    render() {
        const { loaded } = this.props;
        console.log(this.props);
        if (this.props.loaded && this.props.loaded === true) {
            const { characters, comics } = this.props;
            const ch = characters && characters.length > 0 ? characters[0] : null;
            if (!ch) {
                return <Redirect to='/' />
            } else {
                return (
                    <div className="container section character-details">
                        <div className="row">
                            <div className="col s4">
                                <div className="card">
                                    <div className="card-image" style={{
                                        border: '1px solid #ddd',
                                        borderRadius: '4px',
                                        padding: '5px',

                                    }}>
                                        <img alt={ch.name} className="img-responsive" src={ch.thumbnail.path + "." + ch.thumbnail.extension} />
                                    </div>
                                </div>
                            </div>
                            <div className="col s8">
                                <h4>{ch.name}</h4>
                                <p>{ch.description}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <ComicList comics={comics} />
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
        ...state.character
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCharacterDetails: (id) => dispatch(fetchCharacterDetails(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);