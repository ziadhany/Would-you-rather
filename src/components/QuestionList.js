import React from "react";
import {Button, Header, Image, Table} from "semantic-ui-react";
class QuestionList extends React.Component {
    render() {
        return (
            <div className='App login-form'>
                <h1>Would you rather</h1>
                <hr/>
                <a>
                    <Image src='https://avatars.githubusercontent.com/u/29133904?v=4' avatar size='tiny' />Ziad hany
                </a>
                <br/>
                <br/>
                <Button.Group>
                    <Button>write JavaScript</Button>
                    <Button.Or text='or' />
                    <Button positive>write Swift</Button>
                </Button.Group>
                <hr/>
                <a>
                    <Image src='https://avatars.githubusercontent.com/u/29133904?v=4' avatar size='tiny' />Ziad hany
                </a>
                <br/>
                <br/>
                <Button.Group>
                    <Button>write JavaScript</Button>
                    <Button.Or text='or' />
                    <Button positive>write Swift</Button>
                </Button.Group>
                <hr/>
                <a>
                    <Image src='https://avatars.githubusercontent.com/u/29133904?v=4' avatar size='tiny' />Ziad hany
                </a>
                <br/>
                <br/>
                <Button.Group>
                    <Button>write JavaScript</Button>
                    <Button.Or text='or' />
                    <Button positive>write Swift</Button>
                </Button.Group>
                <hr/>

            </div>
        )
    }}
export default QuestionList;