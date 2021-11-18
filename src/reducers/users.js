import {ADD_USERS} from "../actions/users";
import {SET_ANSWER_USER} from "../actions/users";
import {SET_QUESTION_USER} from "../actions/users";
export default function users(state= {}, action){
    switch (action.type){
        case ADD_USERS:
            return {
                ...state,
                ...action.users
            }
        case SET_QUESTION_USER:
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            };
        case SET_ANSWER_USER:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            };

        default:
            return state
    }
}
