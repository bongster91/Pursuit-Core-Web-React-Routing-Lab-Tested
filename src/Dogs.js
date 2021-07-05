import React, { Component } from 'react';
import axios from 'axios';



class Dogs extends Component {
    constructor() {
        super()
        this.state = {
            doggos: []
        };
    };

    async componentDidMount() {
        const dogs = await axios.get('https://dog.ceo/api/breeds/image/random')
        this.setState({
            doggo: dogs
        });
    };

    renderDoggo = (props) => {
        const message = props.match.params.message;
        const { dog } = this.state;
        const woof = dog.find((woof) => woof.message === message);

        if(!woof) {
            return <h1>woof not found</h1>
        }
    };

    render() {
        return (
            <div>
                <button onClick={this.renderDoggo}>woof me</button>
                
            </div>
        );
    };
};

export default Dogs;
