import React, { Component } from 'react';
import HomeMenu from './menus/HomeMenu';
import Header from './Header';
import SubHeaderText from '../components/text/SubHeaderText';

class Home extends Component {
    render() {
        return (
            <div className="home-page" style={styles.page}>
                <Header />
                <div className="inner-container" style={styles.inner}>
                    <HomeMenu />
                    <SubHeaderText text="About"/>
                </div>
            </div>
        );
    }
}

var styles = {
    page: {
        backgroundColor: 'rgb(139,0,0)',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    inner: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        marginLeft: 100,
        marginRight: 100,
        border: '1px solid black',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export default Home;