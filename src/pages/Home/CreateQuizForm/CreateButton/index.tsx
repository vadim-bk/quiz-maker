import { css } from "@emotion/react";
import { Loader } from "./Loader";
const styles = {
  button: css`
    cursor: pointer;
    height: 40px;
    width: 100px;
  `,
};

type Props = {
  id: string;
  isDisabled: boolean;
  isLoading: boolean;
  onClick: () => void;
};

export const CreateButton = ({ isDisabled, isLoading, onClick, id }: Props) => {
  return (
    <button css={styles.button} id={id} onClick={onClick} disabled={isDisabled}>
      {isLoading ? <Loader /> : "Create"}
    </button>
  );
};
