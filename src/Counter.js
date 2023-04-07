import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter : 1}
    }
    componentDidMount() {
        this.count = setInterval(
            () => this.tick(this.state),
            1000
          );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState(
            x => ({counter: x.counter + 1})
        );
    }
    render() {
        return (
            <div>
                <h2>You have been here for:</h2>
                <h2>{this.state.counter} seconds</h2>
            </div>
        )
    }
}
export default Counter;