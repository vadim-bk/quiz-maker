import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Results } from "../pages/Results";
import { Layout } from "./Layout";
import { ROUTES } from "../constants/routes";

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Route>

      <Route element={<Layout />}>
        <Route path={ROUTES.RESULTS} element={<Results />} />
      </Route>
    </Routes>
  );
};
