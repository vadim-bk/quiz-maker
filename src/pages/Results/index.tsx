import { useQuiz } from "../../store/useQuiz";
import { Question } from "../../components/Question";
import { css } from "@emotion/react";
import { LinkButton } from "../../components/LinkButton";
import { PageTitle } from "../../components/PageTitle";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useScore } from "./useScore";

const styles = {
  infoSection: css`
    margin-top: 40px;
    display: flex;
    justify-content: center;
  `,
  scoreContainer: (score: number) => {
    const getBackgroundColor = () => {
      if (score < 2) return "red";
      if (score < 4) return "yellow";

      return "green";
    };

    return css`
      background-color: ${getBackgroundColor()};
      color: black;
      width: 250px;
      text-align: center;
    `;
  },
};

export const Results = () => {
  const { quizItems, resetQuizItems } = useQuiz();

  const { score } = useScore(quizItems);

  if (quizItems.length === 0) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return (
    <>
      <PageTitle title="RESULTS" />

      {quizItems.map((item) => (
        <Question key={item.question} item={item} showResult />
      ))}

      {score !== null && (
        <div css={styles.infoSection}>
          <span css={styles.scoreContainer(score)}>
            You scored: {score} out of {quizItems.length}
          </span>
        </div>
      )}

      <div css={styles.infoSection}>
        <LinkButton to={ROUTES.HOME} onClick={resetQuizItems}>
          Create a new quiz
        </LinkButton>
      </div>
    </>
  );
};
