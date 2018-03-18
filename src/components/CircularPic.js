import React, { Component } from 'react';

class CircularPic extends Component {
    render() {
        return (
            <img src={this.props.path} alt={this.props.alt} style={styles.pic}/>
        );
    }
}

var styles = {
    pic: {
        border: '1px solid black',
        borderRadius: 50,
        width: 100,
        height: 100
    }
}

export default CircularPic;