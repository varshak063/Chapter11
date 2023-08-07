import { Component } from "react";
import { UserClass } from "./UserClass";
// import { Users } from "./Users";
export class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent component constructor");
  }
  componentDidMount() {
    // console.log("parents componentDidMount");
  }
  render() {
    // console.log("Parent render");
    return (
      <div className="about">
        <h1>This is About Page</h1>
        <p>Welcome to About Page!!</p>
        <h1>User informations</h1>
        {/* <Users name="Varsha"/> */}
        <UserClass name="First" location="pune" />
      </div>
    );
  }
}

export default About;
