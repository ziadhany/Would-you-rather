import "../App.css"
import React from "react"
import {Button, Dropdown} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {connect} from "react-redux";
import { setAuthedUser } from '../actions/authedUser'


class Login extends React.Component {
    handleLogin = (e) => {
        e.preventDefault();
        const { value } = this.state;
        const {dispatch ,users} = this.props;
        const user = Object.values(users).filter(user => user.name === value);
        dispatch(setAuthedUser(user[0].id));
    }
    handleChange = (e, { value }) => this.setState({ value })
    render() {
        const {users, authedUser} = this.props;
        const options = Object.values(users).map((user)=>{
            return {
                key: user.id,
                text: user.name,
                value: user.name,
                image: { avatar: true, src: user.avatarURL}}
        })
        console.log(options)
        return (
            <div className="login-form">
                <form onSubmit={this.handleLogin}>
                    <h2>Login</h2>
                    <hr/>
                    <label>Choose a username:</label>
                    <br/>
                    <br/>
                    <Dropdown
                        inline
                        options={options}
                        onChange={this.handleChange}
                        defaultValue={authedUser ? options.find((a) => a["key"] === authedUser ).value : null }
                    />
                    <br/>
                    <br/>
                    <Button primary>Login</Button>

                </form>
            </div>
        )
    }}

function mapStateToProps({users,authedUser}){
    return {
        users,
        authedUser,

    }
}

export default connect(mapStateToProps)(Login)


