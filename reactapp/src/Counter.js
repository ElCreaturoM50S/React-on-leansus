import { Component } from "react";

class Counter extends Component{
    state = {
        count: 0
    }

    formatCount(){
        const { count } = this.state;
            return count === 0 ? "Zero" : count ;
    }

    render(){
        return(
            <>
                <span className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-success btn-sm" onClick={()=>{this.setState({count: this.state.count+1})}}>Increment</button>
                <button className="btn btn-danger btn-sm" onClick={()=>{this.setState({count: this.state.count-1})}}>Decrement</button>
            </>
        )
    }
}

export default Counter ;