export function getUnAnsQ(questions, ans_qId) {
  let unAnswered_q = Object.keys(questions).filter(question_id => !(ans_qId.includes(question_id)))
  return Object.values(questions).filter(id => id === unAnswered_q );
}
export function getAnsQ(users,questions,authedUser){
  let answerd_q = Object.keys(users[authedUser].answers)
  return Object.values(questions).find(i => Object.values(answerd_q).include(Object.keys(i)))
}

export function getAnsQIds(authedUser,users){
  return Object.keys(users[authedUser].answers)
}

export function q_sortByTime(questions, questionIds) {
  return Object.keys(questions).sort((x,y) => questions[x].timestamp - questions[y].timestamp);
}

export function FDate(timestamp) {
  const time = new Date(timestamp);
  return time.toLocaleDateString();
}

export function Pvotes(option, total) {
  return Math.round((option/total)*100).toString();
}

export function FLeaderBoard (users) {
  const leaderboard = Object.keys(users).map((id) => {
    let user = users[id];
    user['score'] = Object.keys(user['answers']).length + user['questions'].length;
    return user;
  });
  return leaderboard.sort((x,y) => x.score - y.score);
}