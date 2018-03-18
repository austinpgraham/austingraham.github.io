import React, { Component } from 'react';
import CircularPic from '../components/CircularPic';
import HeaderText from '../components/text/HeaderText';

class Home extends Component {
    render() {
        return (
            <div className="home" style={styles.homePage}>
                <CircularPic path="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/22008474_1681911668487715_6843686677601592007_n.jpg?oh=a3e8df9a39fa6396892664a48b86ec57&oe=5B46A988" alt="Uh-oh!"/>
                <HeaderText text="Austin Graham"/>
            </div>
        );
    }
}

var styles = {
    homePage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(139,0,0)',
        height: 400,
        borderRadius: 10,
        border: '1px solid black'
    }
}

export default Home;