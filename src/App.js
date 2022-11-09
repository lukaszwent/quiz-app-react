import { Route, Routes } from "react-router-dom";
import Layout from "./components/UI/Layout";
import Categories from "./pages/Categories";
import NotFound from "./pages/NotFound";
import Start from "./pages/Start";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
