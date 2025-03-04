import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header";
import Background from "./components/Background";
import Container from "./components/Container";

const Home = lazy(() => import("./pages/Home"));
const Destination = lazy(() => import("./pages/Destination"));
const Crew = lazy(() => import("./pages/Crew"));
const Technology = lazy(() => import("./pages/Technology"));

function App() {
  return (
    <main className="w-dvw text-white font-barlow">
      <Router>
        <Background />
        <Header />
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destination" element={<Destination />} />
              <Route path="/crew" element={<Crew />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="*" element={<div>404, page not found</div>} />
            </Routes>
          </Suspense>
        </Container>
      </Router>
    </main>
  );
}

export default App;
