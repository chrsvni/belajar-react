import { Component } from 'react';

export default class WelcomeClass extends Component {
    render() {
        return <h2>Selamat datang, {this.props.name}!</h2>;
    }
}