import { useCallback } from "react";
import { css } from "@emotion/react";
import { QuizItem } from "../../types/quizItem";
import { OptionButton } from "./OptionButton";

const styles = {
  answersContainer: css`
    display: flex;
    gap: 12px;
  `,
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
        {answerOptions.map((option) => (
          <OptionButton
            key={option}
            isCorrect={option === correct_answer}
            isIncorrect={answer === option && option !== correct_answer}
            isSelected={answer === option}
            option={option}
            showResult={showResult}
            onClick={handleOptionClick(option)}
          />
        ))}
      </div>
    </>
  );
};
