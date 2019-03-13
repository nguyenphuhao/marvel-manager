import React, { Component } from 'react';
// Import the Grid component.
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { connect } from 'react-redux';
import { fetchCharacters, selectCharacter } from '../../../store/actions/characterActions';
import { Link } from 'react-router-dom';
import LoadingPanel from '../../common/LoadingPanel';
class CharacterGrid extends Component {

    componentDidMount() {
        var params = {
            limit: 20,
            offset: 0,
        }
        this.props.fetchCharacters(params);
    }
    render() {
        const { grid } = this.props;

        const gridStyle = {
            height: '700px'
        }
        return (
            <div className="section character-list">
                <h5>All Marvels</h5>
                <Grid style={gridStyle}
                    data={grid.data ? grid.data.map(
                        (item) => ({ ...item, selected: item.id === grid.selectedId }))
                    : []}
                    selectedField="selected"
                    skip={grid.offset}
                    take={grid.limit}
                    total={grid.total}
                    pageable={true}
                    onPageChange={this.handlePageChanged}
                    onRowClick={this.handleRowClick}
                >
                    <GridColumn field="name" width="150" title="Name" />
                    <GridColumn field="description" className='nowrap' title="Description" />
                    <GridColumn field="thumbnail" width="200" title=" " cell={(props) => (
                        <td>
                            <Link to={'/character/' + props.dataItem['id']}>
                                <img className="img-responsive" alt="" height='150' src={`${props.dataItem[props.field].path}.${props.dataItem[props.field].extension}`} />
                            </Link>
                        </td>
                    )} />
                </Grid>
                <LoadingPanel loaded={grid.loaded} />
            </div>
        )
    }
    handlePageChanged = (event) => {
        var params = {
            limit: event.page.take,
            offset: event.page.skip,
        }
        this.props.fetchCharacters(params);
    }
    handleRowClick = (event) => {
        this.props.selectCharacter(event.dataItem.id);
    }
}

const mapStateToProps = (state) => {
    return {
        grid: {
            loaded: state.character.loaded,
            selectedId: state.character.selectedId,
            offset: state.character.offset,
            limit: state.character.limit,
            total: state.character.total,
            data: state.character.results
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCharacters: (params) => dispatch(fetchCharacters(params)),
        selectCharacter: (id) => dispatch(selectCharacter(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CharacterGrid);
