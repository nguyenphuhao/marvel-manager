import React, { Component } from 'react';
class ErrorPanel extends Component {
    render() {
        const errorPanel = (
            <div className="row">
                <div className="col s12">
                    <div className="card-panel red accent-1">{this.props.error ? this.props.error.errorMsg : ""}</div>
                </div>
            </div>
        );

        if (this.props.error && this.props.error.hasError === true) {
            return errorPanel;
        }else{
            return "";
        }
    }
}
export default ErrorPanel