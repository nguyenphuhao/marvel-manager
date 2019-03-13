import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class ErrorPanel extends Component {
    render() {
        const errorPanel = (
            <div className="k-loading-mask">
                <span className="k-loading-text">Loading</span>
                <div className="k-loading-image"></div>
                <div className="k-loading-color"></div>
            </div>
        );

        if (this.props.loaded && this.props.loaded === true) {
            return ""
        }else{
            return loadingPanel;
        }
    }
}
export default ErrorPanel