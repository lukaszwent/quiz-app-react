import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/UI/Layout";
import Categories from "./pages/Categories";
import InQuiz from "./pages/InQuiz";
import NotFound from "./pages/NotFound";
import Results from "./pages/Results";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="/categories" />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<InQuiz />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
