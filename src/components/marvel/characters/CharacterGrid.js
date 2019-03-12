import React, { Component } from 'react';
// Import the Grid component.
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { connect } from 'react-redux';
import { fetchCharacters } from '../../../store/actions/characterActions';
class CharacterGrid extends Component {
    componentDidMount() {
        var params = {
            limit: 5,
            offset: 0,
        }
        this.props.fetchCharacters(params);
    }
    render() {
        const { character } = this.props;
        console.log(character)
        return (
            <div className="section character-list">
                <h5>All Marvels</h5>
                <Grid
                    data={character.results}
                    skip={character.offset}
                    take={character.limit}
                    total={character.total}
                    pageable={true}
                    onPageChange={this.handlePageChange}
                >
                    <GridColumn field="name" width="150" title="Name" />
                    <GridColumn field="description" className='nowrap' title="Description" />
                    <GridColumn field="thumbnail" width="160"  title=" " cell={(props) => (
                        <td>
                            <img className="img-responsive" alt="" height='95' src={`${props.dataItem[props.field].path}.${props.dataItem[props.field].extension}`} />
                        </td>
                    )} />
                </Grid>
            </div>
        )
    }
    handlePageChange = (event) => {
        var params = {
            limit: event.page.take,
            offset: event.page.skip,
        }
        this.props.fetchCharacters(params);
    }
}

const mapStateToProps = (state) => {
    return {
        character: state.characterRes.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCharacters: (params) => dispatch(fetchCharacters(params))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CharacterGrid);
