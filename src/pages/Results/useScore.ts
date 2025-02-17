import { useEffect, useRef } from "react";
import { QuizItem } from "../../types/quizItem";

export const useScore = (quizItems: QuizItem[]) => {
  const score = useRef<number | null>(null);

  useEffect(() => {
    const value = quizItems.filter(
      (quizItem) => quizItem.answer === quizItem.correct_answer
    ).length;

    score.current = value;
  }, [quizItems]);

  return {
    score: score.current,
  };
};
