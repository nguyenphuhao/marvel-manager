import React, { Component } from 'react';
// Import the Grid component.
import { Grid, GridColumn } from '@progress/kendo-react-grid';

class CharacterList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                { ProductName: "Chai", Price: 10 },
                { ProductName: "Chang", Price: 20 }
            ],
            title: "Hello from KendoReact!"
        }
    }
    render() {
        return (
            <div className="container section character-list">
                <h5>All Marvels</h5>
                <Grid data={this.state.data}>
                    <GridColumn field="ProductName" title="Product name" />
                    <GridColumn field="Price" />
                </Grid>
            </div>
        )
    }
}
export default CharacterList;
