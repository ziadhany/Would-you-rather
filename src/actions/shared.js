import { addUsers } from './users';
import { addQuestions } from './questions';
import {_getUsers,_getQuestions} from "../_DATA";
export function handleInitialData() {
	return (dispatch) => {
		return Promise.all([_getUsers(),_getQuestions()]).then(([users,questions])=>{
			dispatch(addQuestions(questions));
			dispatch(addUsers(users));
		})
	};
}