import "../App.css"
import React from "react"
import {Button, Tab} from 'semantic-ui-react'
import Question from './Question'
import {connect} from "react-redux";
class Home extends React.Component {
    render() {
        const { users , questions , authedUser } = this.props;
      	const ansQIds = Object.keys(questions).filter((id) => users[authedUser].answers.hasOwnProperty(id)).sort((a, b) => questions[b].timestamp - questions[a].timestamp);

	   const unAnsQIds = Object.keys(questions).filter((id) => !users[authedUser].answers.hasOwnProperty(id)).sort((a, b) => questions[b].timestamp - questions[a].timestamp);
      console.log(ansQIds);
	  console.log(unAnsQIds);
      const panes = [
            {
                menuItem: 'Unanswered Question',
                render: () => <Tab.Pane attached={false}>{unAnsQIds.map((id)=><Question id={id} key={id}/> )}</Tab.Pane>,
            },
            {
                menuItem: 'Answered Question',
                render: () => <Tab.Pane attached={false}>{ansQIds.map((id)=><Question id={id} key={id} /> )}</Tab.Pane>,
                
            },
        ]
        return (
            <form className="App">
        <Button.Group>
            <Tab menu={{ pointing: true }} panes={panes} />
        </Button.Group>
            </form>
        )
    }}

const mapStateToProps = ({ users, authedUser,questions }) => ({
    authedUser  ,
    users,
    questions
});

export default connect(mapStateToProps)(Home);