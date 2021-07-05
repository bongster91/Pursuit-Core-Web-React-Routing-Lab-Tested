import React, { Component } from 'react';
import catsAPI from './CatsAPI';

class CatRandomNum extends Component {
    constructor() {
        super();
        this.state = {
            catUrls: [],
        };
    };
    
    async componentDidMount() {
        const cats = await catsAPI.getMultipleCats(this.props.num);
        this.setState({ catUrls: cats });
    };

    render() {
        const { num } = this.props;
        const { catUrls } = this.state;
        return (
            <div>
                <h1>{num}</h1>
                {catUrls.map((url, i) => (
                    <img
                        key={i}
                        src={url}
                        alt={`random cat ${i + 1} of ${catUrls.length}`}
                        style={{height: '300px'}}
                    />
                ))};
            </div>
        );
    };
};

export default CatRandomNum;
