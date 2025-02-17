import { Outlet } from "react-router-dom";
import { css } from "@emotion/react";

const styles = {
  container: css`
    margin: 0 auto;
    width: 600px;
  `,
};

export const Layout = () => (
  <div css={styles.container}>
    <Outlet />
  </div>
);
