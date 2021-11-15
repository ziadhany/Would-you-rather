import React from "react";
import {Button, Image} from "semantic-ui-react";
import {connect} from "react-redux";
import { Link } from 'react-router-dom'
import {useParams} from "react-router-dom";
import { setQuestionVote } from '../actions/questions'
class QuestionView extends React.Component {  
      handleAnsQ = (e,op) => {
        e.preventDefault()
        const { dispatch, users  ,authedUser  } = this.props;
        const qid = this.props.params.id;
        dispatch(setQuestionVote(authedUser, qid, "optionOne"))
      }
    render() {
           const { dispatch, questions, users ,authedUser  } = this.props;
           const id = this.props.params.id;
   		   const question = questions[id]
           const user = question ? users[question.author] : null
        return (
            <div className='App login-form'>
                <h1>Would you rather</h1>
                <hr/>
                <a>
                    <Image src={ user.avatarURL } avatar size='tiny' />{question.author}
                </a>
                <br/>
                <br/>
                <Button.Group>
    <Button onClick={this.handleAnsQ.bind('optionOne')}> 
    <Link to={`/result/${id}`}> {question.optionOne.text} </Link>
    </Button> 

          <Button.Or text='or' onClick={(e) => {e.preventDefault();}} /> 
          
    <Button positive onClick={this.handleAnsQ.bind('optionTwo')} >
    <Link to={`/result/${id}`} >{question.optionTwo.text}</Link>
    </Button>
                </Button.Group>
            </div>
        )
    }}
const withRouter = WrappedComponent => props => {
  const params = useParams();
  return ( <WrappedComponent {...props} params={params} /> );
};
function mapStateToProps({ authedUser, questions ,users}) {
     return {
     	authedUser,
        questions,
        users,
    }}

export default connect(mapStateToProps)(withRouter(QuestionView));