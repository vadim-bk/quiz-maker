import { useCallback } from "react";
import { css } from "@emotion/react";
import { QuizItem } from "../../types/quizItem";
const styles = {
  answersContainer: css`
    display: flex;
    gap: 12px;
  `,
  answerButton: (
    isAnswered: boolean,
    showResult: boolean,
    isCorrect: boolean,
    isIncorrectAnswer: boolean
  ) => {
    const getBackgroundColor = () => {
      if (showResult) {
        if (isIncorrectAnswer) {
          return "red";
        }

        if (isCorrect) {
          return "green";
        }

        return "transparent";
      }

      if (isAnswered) {
        return "green";
      }

      return "transparent";
    };

    return css`
      height: 40px;
      background-color: ${getBackgroundColor()};
      border: 1px solid green;
      border-radius: 4px;
      padding: 0 12px;

      &:hover {
        cursor: pointer;
        background-color: green;
      }

      &:active {
        background-color: green;
      }
    `;
  },
};

type Props = {
  item: QuizItem;
  showResult?: boolean;
  onAnswer?: (value: string) => void;
};

export const Question = ({ item, showResult = false, onAnswer }: Props) => {
  const { answer, answerOptions, correct_answer, question } = item;

  const handleOptionClick = useCallback(
    (value: string) => () => {
      onAnswer?.(value);
    },
    [onAnswer]
  );

  return (
    <>
      <p>{question}</p>

      <div css={styles.answersContainer}>
        {answerOptions.map((answerOption) => (
          <button
            css={styles.answerButton(
              Boolean(answer && answer === answerOption),
              showResult,
              answerOption === correct_answer,
              answerOption !== correct_answer && answer === answerOption
            )}
            key={answerOption}
            onClick={handleOptionClick(answerOption)}
          >
            {answerOption}
          </button>
        ))}
      </div>
    </>
  );
};
