import React from "react"
import {Button, Grid, Image} from 'semantic-ui-react'
import {connect} from "react-redux";
import { Link } from 'react-router-dom'
class Question extends React.Component {
    render() {
        const { questions, users ,id } = this.props;
        const question = questions[id]
        const user = question ? users[question.author] : null
        return (
            <Grid>
                <Grid.Column width={4}>
                    <Image src={user.avatarURL} avatar size='tiny' />
                    <span>{question.author}</span>
                </Grid.Column>
                <Grid.Column width={9}>
                    <form>
                        <h3>Would you rather </h3>
                        <p>{question.optionOne.text} OR ...?</p>
                        <Button fluid onClick={(e) => {
                            e.preventDefault();}}> <Link to={`question/${id}`}>  a view poll</Link></Button>
                    </form>
                </Grid.Column>
            </Grid>
        )
    }}

const mapStateToProps = ({ users, authedUser,questions }, { id }) => ({
    authedUser,
    users,
    questions,
    id
});

export default connect(mapStateToProps)(Question);