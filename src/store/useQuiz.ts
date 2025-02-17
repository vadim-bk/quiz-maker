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
        answerOptions: [...item.incorrect_answers, item.correct_answer].sort(
          () => Math.random() - 0.5
        ),
      })),
    []
  );

  const resetQuizItems = useCallback(() => {
    setQuizItems(initialValue);
  }, [setQuizItems]);

  const fetchQuizItems = useCallback(
    async (selectedCategoryId: string, selectedDifficulty: string) => {
      try {
        setIsLoading(true);

        const response = await fetch(
          `https://opentdb.com/api.php?amount=5&category=${selectedCategoryId}&difficulty=${selectedDifficulty}&type=multiple`
        );

        const data = await response.json();

        if (data.response_code === 0) {
          setQuizItems(mapQuizItems(data.results));
          setResponseCode(0);
          return;
        }

        setResponseCode(data.response_code);
        resetQuizItems();
      } finally {
        setIsLoading(false);
      }
    },
    [mapQuizItems, resetQuizItems, setIsLoading, setQuizItems, setResponseCode]
  );

  return {
    isLoading,
    quizItems,
    responseCode,
    fetchQuizItems,
    resetQuizItems,
    setQuizItems,
  };
};
