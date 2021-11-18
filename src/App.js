import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Leaderboard from "./components/Leaderboard";
import QuestionView from "./components/QuestionView";
import Results from "./components/Results";
import React from "react";
import AddQuestion from "./components/AddQuestion";
import { connect } from 'react-redux';
import {handleInitialData} from "./actions/shared";
class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        const {authedUser} = this.props;
        return (
            <BrowserRouter>
                <Navbar/>
                { authedUser ? <Routes>
                        <Route path="/login" element={<Login/>} />
                        <Route path="/" element={<Home/>} />
                        <Route path="/leaderboard" element={<Leaderboard/>}/>
                        <Route path="/add" element={<AddQuestion/>} />
                        <Route path="/question/:id" element={<QuestionView/>} />
                        <Route path="/result/:id" element={<Results/>} />
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                    : <Routes> <Route path="*" element={<Login/>} /></Routes>}
            </BrowserRouter>
        );}
}

function mapStateToProps({authedUser,users,questions})
{
    return {
        users,
        questions,
        authedUser : authedUser
    }
}

export default connect(mapStateToProps)(App);