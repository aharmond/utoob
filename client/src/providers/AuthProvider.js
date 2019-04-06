import React from "react";
import axios from "axios";

const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { user: null, };

  handleRegister = (user, history) => {
    axios.post("/api/auth", user)
      .then( res => {
        this.setState({ user: res.data.data, });
        history.push("/");
      })
      .catch( err => {
        alert(err);
      })
  }

  handleLogin = (user, history) => {
    axios.post("/api/auth/sign_in", user)
      .then( res => {
        this.setState({ user: res.data.data, });
        history.push("/");
      })
      .catch( err => {
        alert(err);
      })
  }

  handleLogout = () => {
    axios.delete("/api/auth/sign_out")
      .then( res => {
        this.setState({ user: null, });
      })
      .catch( err => {
        alert(err);
      })
  }

  updateUser = (id, user) => {
    let data = new FormData();
    data.append('file', user.file);
    axios.put(`/api/user/${id}?name=${user.name}&email=${user.email}`, data)
      .then( res => this.setState({ user: res.data, }) )
  }

  render() {
    return (
      <AuthContext.Provider value={{
        ...this.state,
        authenticated: this.state.user !== null,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        setUser: (user) => this.setState({ user, }),
        updateUser: this.updateUser,
      }}>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
};
