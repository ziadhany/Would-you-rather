import React from "react";
import {Container, Table} from "semantic-ui-react";
import {connect} from "react-redux";
import RowLeaderboard from "./RowLeaderboard";
import { FLeaderBoard } from '../utils/formate';
class Leaderboard extends React.Component {
    render() {
    const { leaderboard } = this.props;
    return (
        <Container className="login-form">
            <Table basic='very' celled collapsing centred>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>-</Table.HeaderCell>
                    <Table.HeaderCell>Users</Table.HeaderCell>
                    <Table.HeaderCell>The number of questions the user asked</Table.HeaderCell>
                    <Table.HeaderCell>The number of questions the user answered</Table.HeaderCell>
                    <Table.HeaderCell>The Score</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
            {leaderboard.map(leader => {
            return ( <RowLeaderboard leader={leader} /> );
                })}
            </Table.Body>
        </Table>
        </Container>
        )
    }}


const mapStateToProps = ({ users, authedUser }) => ({
    authedUser: authedUser  ,
    leaderboard : FLeaderBoard(users)
});

export default connect(mapStateToProps)(Leaderboard);