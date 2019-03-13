import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class LoadingPanel extends Component {
    render() {
        const loadingPanel = (
            <div className="k-loading-mask">
                <span className="k-loading-text">Loading</span>
                <div className="k-loading-image"></div>
                <div className="k-loading-color"></div>
            </div>
        );

        const gridContent = document && document.querySelector('.k-grid-content');
        if (this.props.loaded && this.props.loaded === true) {
            return ""
        }else{
            return gridContent ? ReactDOM.createPortal(loadingPanel, gridContent) : loadingPanel;
        }
    }
}
export default LoadingPanel