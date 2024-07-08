import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props,"class");
        this.state={
            count: 0,
        }
    }
    render(){
        const {name,location} = this.props;
        const {count} = this.state;
        return(
        <div className="user-card">
        <h2>Count: {count}</h2>
        <button onClick={()=>
        this.setState({
            count: this.state.count + 1
        })
          } > count button </button>
        <h3>Name:{name}</h3>
        <h3>Location:{location}</h3>
        </div>
        );
    }
}
export default UserClass;