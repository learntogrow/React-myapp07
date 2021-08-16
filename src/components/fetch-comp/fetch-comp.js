import React, { Component} from "react";


export default class FetchComp extends Component {
    constructor(props) {
       super(props);
       this.state = {
         user: null
       }
    }


    async componentDidMount() {
     try {
         const res = await fetch("http://localhost:5000/user");
         if (res.status >= 400)
            throw new Error("something went wrong");

         const user = await res.json();
         this.setState({ user });
      } catch (err) {
        console.error(err);
      }
   }


   render() {
       return (
         <div>
           <h2>Using Fetch</h2>
            
            {this.state.user ?
            <p className="user">user:{this.state.user.userName}</p>
             :
             <span className="spinner"></span>}
         </div>
      );
    }
}
