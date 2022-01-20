import { useState } from "react";
import "./App.css";
import { ArgoForm } from "./components/ArgoForm/ArgoForm";
import { ArgoList } from "./components/ArgoList/ArgoList";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
// import { Main } from "./components/Main/Main";

function App() {
  const [argonautes, setArgonautes] = useState([]);

  function addArgonaute(newArgonaute) {
    const newArrayOfArgonautes = [...argonautes, newArgonaute];
    setArgonautes(newArrayOfArgonautes);
  }

  return (
    <div className="App">
      <Header />
      <ArgoForm onSubmitArgonaute={addArgonaute} />
      <ArgoList argonautes={argonautes} />
      <Footer />
    </div>
  );
}

export default App;
