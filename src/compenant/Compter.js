import React from 'react'

class Compter extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>{this.props.count}</h2>
                <button className="left" onClick={() => {
                    this.props.substract()
                }}><strong>-</strong>
                </button>
                <button className="right" onClick={() => {
                    this.props.increment()
                }}> <strong>+</strong>
                </button>
            </div>
        )
    }
}
export default Compter;