import { QuizItem } from "../types/quizItem";
import { atom, useAtom } from "jotai";
import { useCallback } from "react";

const initialValue: QuizItem[] = [];

const quizItemsAtom = atom<QuizItem[]>(initialValue);
const loadingAtom = atom<boolean>(false);
const responseCodeAtom = atom<number>(0);

export const useQuiz = () => {
  const [quizItems = [], setQuizItems] = useAtom(quizItemsAtom);
  const [isLoading, setIsLoading] = useAtom(loadingAtom);
  const [responseCode, setResponseCode] = useAtom(responseCodeAtom);

  const mapQuizItems = useCallback(
    (items: QuizItem[]) =>
      items.map((item) => ({
        ...item,
        answerOptions: [...item.incorrect_answers, item.correct_answer],
      })),
    []
  );

  const fetchQuizItems = useCallback(
    async (selectedCategoryId: string, selectedDifficulty: string) => {
      try {
        setIsLoading(true);

        const response = await fetch(
          `https://opentdb.com/api.php?amount=5&category=${selectedCategoryId}&difficulty=${selectedDifficulty}&type=multiple`
        );

        const data = await response.json();

        setQuizItems(mapQuizItems(data.results));
        setResponseCode(data.response_code);
      } finally {
        setIsLoading(false);
      }
    },
    [mapQuizItems, setIsLoading, setQuizItems, setResponseCode]
  );

  const resetQuizItems = useCallback(() => {
    setQuizItems(initialValue);
  }, [setQuizItems]);

  return {
    isLoading,
    quizItems,
    responseCode,
    fetchQuizItems,
    resetQuizItems,
    setQuizItems,
  };
};
