import {
    _saveQuestionAnswer,
    _saveQuestion,
    _getUsers,
    _getQuestions
  } from './_DATA.js'

  
  export function addPoll(details) {
    return _saveQuestion(details)
  }
  export function addQAns(details) {
    return _saveQuestionAnswer(details)
  }
