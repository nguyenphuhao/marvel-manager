import React, { Component } from 'react';
// Import the Grid component.
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { connect } from 'react-redux';
import { fetchCharacters, selectCharacter, enterCharacter } from '../../../store/actions/characterActions';
import { Link, Redirect } from 'react-router-dom';
import LoadingPanel from '../../common/LoadingPanel';
import ErrorPanel from '../../common/ErrorPanel';
import Mousetrap from 'mousetrap';
class CharacterGrid extends Component {
    componentWillMount() {
        Mousetrap.unbind('tab');
        Mousetrap.unbind('shift+tab');
        Mousetrap.unbind('enter');
    }
    componentDidMount() {
        var props = this.props;
        var params = {
            limit: 20,
            offset: 0,
        }
        props.fetchCharacters(params);
    }
    render() {
        const { grid, error, pressEnter } = this.props;
        if (pressEnter === true) {
            return <Redirect to={'/character/' + grid.selectedId} />
        }
        return (
            <div className="section character-list">
                <ErrorPanel error={error} />
                <div className="row">
                    <div className="col s12">
                        <h5>All Marvels</h5>
                        <Grid
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
                            onSelectionChange={this.selectionChange}
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
                </div>
            </div>
        )
    }
    handlePageChanged = (event) => {
        var params = {
            limit: event.page.take,
            offset: event.page.skip,
        }
        this.props.fetchCharacters(params);
        var tr = document.querySelectorAll(".k-master-row");
        tr[0].querySelectorAll('td')[0].click();
        tr[0].querySelectorAll('td')[0].scrollIntoView();
        Mousetrap.unbind('tab');
        Mousetrap.unbind('shift+tab');
        Mousetrap.unbind('enter');
    }
    handleRowClick = (event) => {
        var id = event.dataItem.id;
        
        var props = this.props;
        var index = 0;
        Mousetrap.unbind('tab');
        Mousetrap.unbind('shift+tab');
        Mousetrap.unbind('enter');
        Mousetrap.bind('enter', function (e) {
            e.preventDefault();
            props.enterCharacter(id);
        });
        Mousetrap.bind('tab', function (e) {
            e.preventDefault();
            index = props.grid.data.findIndex(dataItem => dataItem.id === id);
            index++;
            if (index === props.grid.data.length) {
                index = 0;
            }
            var tr = document.querySelectorAll(".k-master-row");
            tr[index].querySelectorAll('td')[0].click();
            tr[index].querySelectorAll('td')[0].scrollIntoView();

        });
        Mousetrap.bind('shift+tab', function (e) {
            e.preventDefault();
            index = props.grid.data.findIndex(dataItem => dataItem.id === id);
            index--;
            if (index < 0) {
                index = 0;
            }
            var tr = document.querySelectorAll(".k-master-row");
            tr[index].querySelectorAll('td')[0].click();
            tr[index].querySelectorAll('td')[0].scrollIntoView();
        });
        this.props.selectCharacter(id);
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
        },
        error: state.character.error,
        pressEnter: state.character.pressEnter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCharacters: (params) => dispatch(fetchCharacters(params)),
        enterCharacter: (id) => dispatch(enterCharacter(id)),
        selectCharacter: (id) => dispatch(selectCharacter(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CharacterGrid);
