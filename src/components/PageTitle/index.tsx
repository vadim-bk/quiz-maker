import { css } from "@emotion/react";

const styles = {
  title: css`
    text-align: center;
  `,
};

type Props = {
  title: string;
};

export const PageTitle = ({ title }: Props) => {
  return <h2 css={styles.title}>{title}</h2>;
};
