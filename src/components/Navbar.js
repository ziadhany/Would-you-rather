import React from 'react';
import {connect} from "react-redux";
import {
    AiOutlineHome,
    RiLoginBoxLine,
    MdOutlineLeaderboard,
    IoIosAddCircleOutline,
    RiLogoutBoxRLine
} from "react-icons/all";
import { Link } from "react-router-dom";
import '../App.css';
import { unAuthedUser } from '../actions/authedUser'
class Navbar extends React.Component {
  handelLogout(e) {
    e.preventDefault();    
    const { dispatch } = this.props;
    dispatch(unAuthedUser());
  }
    render() {
        return (
<div>
   <div className="title"><h2>Question-Udacity </h2></div>
    <ul>
        <li><Link to="/" ><AiOutlineHome/>  Home</Link></li>
        <li><Link to="login" ><RiLoginBoxLine/>  Login</Link></li>
        <li><Link to="add" ><IoIosAddCircleOutline/>  Add Question</Link></li>
        <li><Link to="leaderboard" ><MdOutlineLeaderboard/>  leaderboard</Link></li>
        <li><a to="logout" onClick={this.handelLogout.bind(this)} ><RiLogoutBoxRLine/> Logout</a>  </li>
 		 <li><h2 className="name" > { this.props.authedUser} </h2>  </li>
     </ul>
</div>
        )

    }
}
function mapStateToProps({authedUser,users}){
    return {
        authedUser,
    }
}
export default connect(mapStateToProps)(Navbar)