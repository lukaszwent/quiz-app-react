import { Route, Routes } from "react-router-dom";
import Layout from "./components/UI/Layout";
import Categories from "./pages/Categories";
import InQuiz from "./pages/InQuiz";
import LastTries from "./pages/LastTries";
import NotFound from "./pages/NotFound";
import Results from "./pages/Results";
import Start from "./pages/Start";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<InQuiz />} />
        <Route path="/results" element={<Results />} />
        <Route path="/last" element={<LastTries />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
