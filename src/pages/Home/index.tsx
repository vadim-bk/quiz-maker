import { css } from "@emotion/react";
import { Dropdown } from "../../components/Dropdown";
import { useCallback } from "react";
import { CreateButton } from "./CreateButton";
import { useCategory } from "./useCategory";
import { useDifficulty } from "./useDifficulty";

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  `,
  form: css`
    display: flex;
    justify-content: center;
    width: 100%;
  `,
};

export const Home = () => {
  const { categories, selectedCategoryId, selectCategory } = useCategory();

  const { difficulties, selectedDifficulty, selectDifficulty } =
    useDifficulty();

  const handleCreate = useCallback(() => {
    console.log(selectedCategoryId, selectedDifficulty);
  }, [selectedCategoryId, selectedDifficulty]);

  return (
    <div css={styles.container}>
      <h2>QUIZ MAKER</h2>

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
          onClick={handleCreate}
        />
      </div>
    </div>
  );
};
