import { css } from "@emotion/react";
import { Dropdown } from "../../../components/Dropdown";
import { CreateButton } from "./CreateButton";
import { useCallback } from "react";
import { useDifficulty } from "./useDifficulty";
import { useCategory } from "./useCategory";
import { useQuiz } from "../../../store/useQuiz";

const styles = {
  form: css`
    display: flex;
    justify-content: center;
    width: 100%;
  `,
  errorContainer: css`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    color: red;
  `,
};

export const CreateQuizForm = () => {
  const { isLoading, responseCode, fetchQuizItems } = useQuiz();

  const { categories, selectedCategoryId, selectCategory } = useCategory();

  const { difficulties, selectedDifficulty, selectDifficulty } =
    useDifficulty();

  const handleCreate = useCallback(() => {
    if (selectedCategoryId && selectedDifficulty) {
      fetchQuizItems(selectedCategoryId, selectedDifficulty);
    }
  }, [fetchQuizItems, selectedCategoryId, selectedDifficulty]);

  return (
    <>
      <div css={styles.form}>
        <Dropdown
          id="categorySelect"
          options={categories}
          placeholder="Select a category"
          onChange={selectCategory}
        />

        <Dropdown
          id="difficultySelect"
          options={difficulties}
          placeholder="Select difficulty"
          onChange={selectDifficulty}
        />

        <CreateButton
          id="createBtn"
          isDisabled={!selectedCategoryId || !selectedDifficulty}
          isLoading={isLoading}
          onClick={handleCreate}
        />
      </div>

      {responseCode > 0 && (
        <div css={styles.errorContainer}>
          <p>Something went wrong, try again.</p>
        </div>
      )}
    </>
  );
};
