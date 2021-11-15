import React from "react";
import {Header, Image, Table} from "semantic-ui-react";
class RowLeaderboard extends React.Component {
    render() {
       const {leader} = this.props;
        return (
<>
    <Table.Row>
        <Table.Cell>{leader.id}</Table.Cell>
        <Table.Cell>
            <Header as='h4' image>
                <Image src={leader.avatarURL ? leader.avatarURL :'https://react.semantic-ui.com/images/avatar/small/lena.png' }
  rounded size='mini' />
                <Header.Content>
                    {leader.name}
                    <Header.Subheader>{leader.id}</Header.Subheader>
                </Header.Content>
            </Header>
        </Table.Cell>
        <Table.Cell>{leader.questions.length}</Table.Cell>
        <Table.Cell>{Object.keys(leader.answers).length}</Table.Cell>
        <Table.Cell>{leader.score}</Table.Cell>
    </Table.Row>
</>
        )
    }}
export default RowLeaderboard;