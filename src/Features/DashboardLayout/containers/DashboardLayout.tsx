import React from 'react';
import { connect } from 'react-redux';
import { AppState } from 'Core/store';

class DashboardLayout extends React.Component<any, AppState> {
    render() {
        return (
            <div>
                THIS WORKS!
            </div>
        )
    }
}

export default DashboardLayout;