export type QuizItem = {
  answer?: string;
  answerOptions: string[];
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};
