import React, { Component } from "react";

const UserContext = React.createContext();
//provider, consumer

export class UserProvider extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Şevval Akıllı",
        salary: "10000",
        department: "Bilişim",
      },
      {
        id: 2,
        name: "Mehmet Emre",
        salary: "11000",
        department: "Bilişim",
      },
      {
        id: 3,
        name: "Zeynep İrem",
        salary: "9000",
        department: "Pazarlama",
      },
    ],
  };
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children} 
      </UserContext.Provider> /*indexjs'teki app buraya geliyor gibi düşünebilirsin */
    );
  }
}
const UserConsumer= UserContext.Consumer;

export default UserConsumer;
