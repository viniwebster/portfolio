import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Project from "./pages/Project/Project";
import DefaultPage from "./pages/DefaultPage/DefaultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<HomePage />} />
            <Route path="/:id" element={<Project />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
