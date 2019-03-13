import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacterDetails } from '../../../store/actions/characterActions';
import LoadingPanel from '../../common/LoadingPanel';
import ComicList from '../comics/ComicList';
import ErrorPanel from '../../common/ErrorPanel';
import Mousetrap from 'mousetrap';
import { Link } from 'react-router-dom';
class CharacterDetails extends Component {
    constructor(props) {
        super();
    }
    componentWillMount() {
        Mousetrap.unbind('esc');
    }
    componentDidMount() {
        this.props.fetchCharacterDetails(this.props.id);
        Mousetrap.bind('esc', function () {
            document.querySelector('.back-link').click();
        });
    }
    render() {
        const { loaded, error } = this.props;
        console.log(this.props);

        const { characters, comics } = this.props;
        const ch = characters && comics && characters.length > 0 && comics.length > 0 ? characters[0] : null;
        if (ch && loaded === true) {
            return (
                <div className="container section character-details desktop-device">
                    <div className="row">
                        <div className="col s12 m4">
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
                        <div className="col s12 m8">
                            <h4>{ch.name}</h4>
                            <p>{ch.description}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <ComicList comics={comics} />
                        </div>

                    </div>
                    <div className="center-align"><Link className='back-link' to='/'>Go Back</Link></div>
                </div>
            )
        }
        return (
            <div>
                <ErrorPanel error={error} />
                <LoadingPanel loaded={loaded} />
            </div>
        )
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