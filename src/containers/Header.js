import React, { Component } from 'react';
import CircularPic from '../components/CircularPic';
import HeaderText from '../components/text/HeaderText';

class Header extends Component {
    render() {
        return (
            <div className="header" style={styles.header}>
                <CircularPic path="https://scontent.ftul1-1.fna.fbcdn.net/v/t1.0-9/22008474_1681911668487715_6843686677601592007_n.jpg?_nc_cat=0&oh=790923506ade07e72376439a0f202656&oe=5C0C6A88" alt="Uh-oh!"/>
                <HeaderText text="Austin Graham"/>
            </div>
        );
    }
}

var styles = {
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 400,
    }
}

export default Header;