import {SET_QUESTION_VOTE, ADD_QUESTION, ADD_QUESTIONS} from '../actions/questions';

export default function questions(state = {}, action) {
	switch (action.type) {
		case ADD_QUESTION:
             const { question } = action;
             return { ...state,
                     [question.id]: question 
             
                    };
		case ADD_QUESTIONS:
			return {
				...state,
				...action.questions
			}

		case SET_QUESTION_VOTE:
			return {
				...state,
				[action.qid]: {
					...state[action.qid],
					[action.ans]: {
						...state[action.qid][action.ans],
						votes: state[action.qid][action.ans].votes.concat([action.authedUser])
					}
				}
			};

		default:
			return state;
	}
}