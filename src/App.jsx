import { useState } from "react";
import "./App.scss";
import Attribute from "./components/Attribute";
import Form from "./components/Form";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Success from "./components/Success";
import { AnimatePresence } from "framer-motion";

function App() {
  const [email, setEmail] = useState("");

  return (
    <div className="App">
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              exact
              path="/"
              element={<Form email={email} setEmail={setEmail} />}
            />
            <Route
              path="/success"
              element={<Success email={email} setEmail={setEmail} />}
            />
          </Routes>
        </AnimatePresence>
      </Router>
      <Attribute />
    </div>
  );
}

export default App;
