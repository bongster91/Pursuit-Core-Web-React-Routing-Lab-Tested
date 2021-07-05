import React, { Component } from 'react';
import catsAPI from './CatsAPI';

class CatRandom extends Component {
    constructor() {
        super()
        this.state = {
            catURL: '',
        };
    };

    newCat = async () => {
        const catURL = await catsAPI.getCat();
        this.setState({ catURL });
    };

    componentDidMount() {
        this.newCat();
    };

    render() {
        const { catURL } = this.state;
        return (
            <div>
                <h1>Random Cat Component</h1>
                <button onClick={this.newCat}>Click for Cat!</button>
                <img src={catURL} alt='a random cat'style={{height: '400px'}}/>
            </div>
        );
    };
};

export default CatRandom;
