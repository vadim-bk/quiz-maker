import { css } from "@emotion/react";

const styles = {
  answerButton: (
    isCorrect: boolean,
    isIncorrect: boolean,
    isSelected: boolean,
    showResult: boolean
  ) => {
    const getBackgroundColor = () => {
      if (showResult) {
        if (isIncorrect) {
          return "red";
        }

        if (isCorrect) {
          return "green";
        }

        return "transparent";
      }

      if (isSelected) {
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
  isCorrect: boolean;
  isIncorrect: boolean;
  isSelected: boolean;
  option: string;
  showResult: boolean;
  onClick: () => void;
};

export const OptionButton = ({
  isCorrect,
  isIncorrect,
  isSelected,
  option,
  showResult,
  onClick,
}: Props) => {
  return (
    <button
      css={styles.answerButton(isCorrect, isIncorrect, isSelected, showResult)}
      onClick={onClick}
    >
      {option}
    </button>
  );
};
