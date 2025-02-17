import { PropsWithChildren, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";

const styles = {
  button: css`
    cursor: pointer;
    height: 40px;
    width: 300px;
  `,
};

type Props = PropsWithChildren<{
  to: string;
  onClick?: () => void;
}>;

export const LinkButton = ({ to, children, onClick }: Props) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    onClick?.();
    navigate(to, { replace: true });
  }, [navigate, to, onClick]);

  return (
    <button css={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
};
