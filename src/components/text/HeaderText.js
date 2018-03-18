import React, { Component } from 'react';

class HeaderText extends Component {
    render() {
        return (
            <h1 style={styles.text}>{this.props.text}</h1>
        );
    }
}

var styles = {
    text: {
        color: 'white',
        fontFamily: 'helvetica',
        fontSize: 40
    }
}

export default HeaderText;