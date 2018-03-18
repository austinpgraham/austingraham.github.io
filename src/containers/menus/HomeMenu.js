import React, { Component } from 'react';
import MenuButton from '../../components/buttons/MenuButton';

class HomeMenu extends Component {

    constructor(props) {
        super(props);
        this.navigateHome = this.navigateHome.bind(this);
        this.navigateLab = this.navigateLab.bind(this);
        this.navigateGit = this.navigateGit.bind(this);
    }

    navigateHome () {
        window.location.href = "/";
    }

    navigateLab () {
        window.location.href = "https://oudalab.github.io";
    }

    navigateGit () {
        window.location.href = "https://github.com/austinpgraham";
    }

    render () {
        return (
            <div className="home-menu" style={styles.menu}>
                <MenuButton text="Home" onClick={this.navigateHome}/>
                <MenuButton text="Lab" onClick={this.navigateLab} />
                <MenuButton text="GitHub" onClick={this.navigateGit} />
            </div>
        );
    }
}

var styles = {
    menu: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
    }
}

export default HomeMenu;