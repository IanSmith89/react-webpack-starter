import React from 'react';
import { observer } from 'mobx-react';
import HomeView from './HomeView';

@observer
class HomePage extends React.Component {
    render() {
        return (
            <HomeView />
        );
    }
}

export default HomePage;
