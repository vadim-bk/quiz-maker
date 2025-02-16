import { css } from "@emotion/react";

const styles = {
  button: css`
    height: 30px;
    width: 70px;
  `,
};

type Props = {
  id: string;
  isDisabled: boolean;
  onClick: () => void;
};

export const CreateButton = ({ isDisabled, onClick, id }: Props) => {
  return (
    <button css={styles.button} id={id} onClick={onClick} disabled={isDisabled}>
      Create
    </button>
  );
};
