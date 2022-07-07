import React from 'react';
import "./Home.css";

class Home extends React.Component {
    // Constructor method..
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    // Async function for data fetching..
    async fetchData() {
        try {
            const response = await fetch('/api/example/about');
            const fetchedData = await response.json();
            this.setState({
                ...this.state.data,
                data: fetchedData
            });
        } catch (err) {
            console.log('ERR! -- from -- ', err);
        }
    }

    // ComponentDidMount..
    componentDidMount() {
        this.fetchData();
    }

    // To rendering data to home..
    renderDataToHome = (DATA) => {
        if (DATA) {
            let UI = null;
            Object.values(DATA).forEach(item => {
                UI = (
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item.p}</p>
                    </div>
                );
            });
            return UI;
        }

        return (
            <h3>Loading...</h3>
        );
    }

    // render method...
    render() {
        return (
            <>
                <h1>Hello I'm from Home</h1>
                {this.renderDataToHome(this.state.data)}
            </>
        );
    }
}

export default Home;