import React, { Component } from 'react';
// Import the Grid component.
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { connect } from 'react-redux';
import { fetchCharacters, selectCharacter } from '../../../store/actions/characterActions';
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
        return (
            <div className="section character-list">
                <h5>All Marvels</h5>
                <Grid
                    data={character.characters.map(
                        (item) => ({ ...item, selected: item.id === character.selectedId }))
                    }
                    selectedField="selected"
                    skip={character.gridProps.offset}
                    take={character.gridProps.limit}
                    total={character.gridProps.total}
                    pageable={true}
                    onPageChange={this.handlePageChange}
                    onRowClick={this.handleRowClick}
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
    handleRowClick = (event) => {
        window.location.href=process.env.REACT_APP_BASE_NAME + "/character/" + event.dataItem.id;
    }
}

const mapStateToProps = (state) => {
    return {
        character: state.character
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCharacters: (params) => dispatch(fetchCharacters(params)),
        selectCharacter: (id) => dispatch(selectCharacter(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CharacterGrid);