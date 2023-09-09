class Quiz {
constructor(question, answer) {
this.question = question;
this.answer = answer;
}
check(userAnswer) {
return this.answer === userAnswer;
}
}