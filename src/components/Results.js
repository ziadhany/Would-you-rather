import React from "react";
import {Header, Table , Rating } from "semantic-ui-react";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {FDate} from "../utils/formate"
import {Pvotes} from  "../utils/formate"
class Results extends React.Component {
    render() {
      const {questions} = this.props;
      const question = questions[this.props.params.id];
        return (
            <div className='App login-form'>
            <Table celled padded>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell singleLine>Author</Table.HeaderCell>
                  <Table.HeaderCell>Frist option</Table.HeaderCell>
                  <Table.HeaderCell>Second option</Table.HeaderCell>
                  <Table.HeaderCell>Date time</Table.HeaderCell>
                  <Table.HeaderCell>Frist option percentage</Table.HeaderCell>
                  <Table.HeaderCell>Second option percentage</Table.HeaderCell>
                  <Table.HeaderCell>Total votes</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Header as='h2' textAlign='center'>
                     {question.author}
                    </Header>
                  </Table.Cell>
                  <Table.Cell singleLine>{question.optionOne.text}</Table.Cell>
                  <Table.Cell>
                    {question.optionTwo.text}
                  </Table.Cell>
                  <Table.Cell textAlign='right'>
 					{FDate(question.timestamp)}
                  </Table.Cell>
                  <Table.Cell>
{Pvotes(question.optionOne.votes.length,question.optionTwo.votes.length + question.optionOne.votes.length )} %
                  </Table.Cell>
                <Table.Cell>
                    {Pvotes(question.optionTwo.votes.length,question.optionTwo.votes.length + question.optionOne.votes.length )} %
                  </Table.Cell>
                 <Table.Cell>
                  {question.optionTwo.votes.length + question.optionOne.votes.length} 
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>

            </div>
        )
    }}
const withRouter = WrappedComponent => props => {
  const params = useParams();
  return ( <WrappedComponent {...props} params={params} /> );
};
const mapStateToProps = ({ users, authedUser,questions },id) => ({
    authedUser,
    users,
    questions,
    id
});

export default connect(mapStateToProps)(withRouter(Results));