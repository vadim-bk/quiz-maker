import { CreateQuizForm } from "./CreateQuizForm";
import { useCallback, useMemo } from "react";
import { useQuiz } from "../../store/useQuiz";
import { css } from "@emotion/react";
import { LinkButton } from "../../components/LinkButton";
import { Question } from "../../components/Question";
import { PageTitle } from "../../components/PageTitle";
import { ROUTES } from "../../constants/routes";

const styles = {
  container: css`
    margin-top: 40px;
  `,
  buttonContainer: css`
    display: flex;
    justify-content: center;
  `,
};

export const Home = () => {
  const { quizItems, setQuizItems } = useQuiz();

  const isSubmitAllowed = useMemo(
    () =>
      quizItems?.length > 0 && quizItems.every((quizItem) => quizItem.answer),
    [quizItems]
  );

  const handleAnswerClick = useCallback(
    (question: string, value: string) => {
      setQuizItems((prev) =>
        prev.map((item) =>
          item.question === question ? { ...item, answer: value } : item
        )
      );
    },
    [setQuizItems]
  );

  return (
    <>
      <PageTitle title="QUIZ MAKER" />

      <CreateQuizForm />

      {quizItems.length > 0 && (
        <div css={styles.container}>
          {quizItems.map((quizItem) => (
            <Question
              key={quizItem.question}
              item={quizItem}
              onAnswer={(value) => handleAnswerClick(quizItem.question, value)}
            />
          ))}
        </div>
      )}

      {isSubmitAllowed && (
        <div css={[styles.container, styles.buttonContainer]}>
          <LinkButton to={ROUTES.RESULTS}>Submit</LinkButton>
        </div>
      )}
    </>
  );
};
