import { Route, Routes } from "react-router";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Hello World</div>} />
    </Routes>
  );
};
