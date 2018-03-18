import React, { Component } from 'react';

class MenuButton extends Component {

    constructor(props) {
        super(props);
        this.state = {style: styles.defaultButton}
        this.doClick = this.doClick.bind(this);
    }

    doClick() {
        // this.setState(state => ({
        //     style: styles.activeButton
        // }));
        this.props.onClick();
    }

    render () {
        return (
            <button onClick={this.doClick} style={this.state.style}>
                {this.props.text}
            </button>
        );
    }
}

var styles = {
    defaultButton: {
        border: '1px solid rgb(139,0,0)',
        borderRadius: 5,
        color: 'rgb(139,0,0)',
        fontFamily: 'helvetica',
        fontSize: 25,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 2,
        marginRight: 2
    },
    activeButton: {
        backgroundColor: 'rgb(139,0,0)',
        borderRadius: 5,
        color: 'white',
        fontFamily: 'helvetica',
        fontSize: 25,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 2,
        marginRight: 2
    }
}

export default MenuButton;