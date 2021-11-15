export const ADD_QUESTION='ADD_QUESTION'
export const ADD_QUESTIONS='ADD_QUESTIONS'
export const SET_QUESTION_VOTE='SET_QUESTION_VOTE'
export function addQuestion(question){
    return{
        type: ADD_QUESTION,
        question
    }
}

export function addQuestions(questions){
    return{
        type: ADD_QUESTIONS,
        questions
    }
}


export function setQuestionVote(authedUser, qid, ans){
    return{
        type: SET_QUESTION_VOTE,
        authedUser,
        qid,
        ans
    }
}




