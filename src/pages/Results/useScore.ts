import { useEffect, useState } from "react";
import { QuizItem } from "../../types/quizItem";

export const useScore = (quizItems: QuizItem[]) => {
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    setScore(
      quizItems.filter(
        (quizItem) => quizItem.answer === quizItem.correct_answer
      ).length
    );
  }, [quizItems]);

  return {
    score,
  };
};
