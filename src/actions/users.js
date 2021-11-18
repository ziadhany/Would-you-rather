export const ADD_USERS ='ADD_USERS'
export function addUsers(users){
    return{
        type: ADD_USERS,
        users
    }
}
export const SET_ANSWER_USER ='SET_ANSWER_USER'
export function setAnswer(authedUser, qid, answer) {
    return {
        type: SET_ANSWER_USER,
        authedUser,
        qid,
        answer
    };
}
export const SET_QUESTION_USER ='SET_QUESTION_USER'
export function setQuestion(question) {
    return {
        type: SET_QUESTION_USER,
        question
    };
}