import React, { Component } from 'react';
import Dashboard from './../../components/dashboard/Dashboard';
class DashboardView extends Component {
    render() {
        return (
            <div className="dashboard-view container">
                <Dashboard />
            </div>
        )
    }
}
export default DashboardView;