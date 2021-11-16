import React from 'react';
import {Button, Form} from "semantic-ui-react";
import {BsFillSignpostSplitFill} from "react-icons/all";
import '../App.css'
import {addQuestion} from "../actions/questions";
import { connect } from 'react-redux';
import {formatQuestion} from "../_DATA"
class AddQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            option_one : '',
            option_two : ''
        }
        this.handleChangeOpOne = this.handleChangeOpOne.bind(this);
        this.handleChangeOpTwo = this.handleChangeOpTwo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeOpOne = (e) => {
        this.setState((state) => ({
            ...state,
            option_one: e.target.value
        }))
    }

    handleChangeOpTwo = (e) => {
        this.setState((state) => ({
            ...state,
            option_two:e.target.value
        }))}
  
    handleSubmit = (e) =>{
        e.preventDefault()
        const {dispatch,authedUser} = this.props
        const {option_one, option_two} = this.state
        dispatch(addQuestion(formatQuestion(option_one,option_two,authedUser)))
    }
    render(){
        return(
            <div className='login-form'>
                <h1>Would You Rather ..? </h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                            <input  onChange={this.handleChangeOpOne} />
                        <span>OR <BsFillSignpostSplitFill/></span>
                            <input  onChange={this.handleChangeOpTwo}/>
                        <div className='mybuttons'>
                        <Button positive >Submit</Button>
                        </div>
                    </Form.Field>
                </Form>
            </div>
        );
    }}
function mapStateToProps({authedUser,users,questions}){
    return {
      authedUser,
      users,
      questions
    }
}
export default connect(mapStateToProps)(AddQuestion)
