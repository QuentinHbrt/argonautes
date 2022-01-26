// import { onSnapshot, query } from "firebase/firestore";
import { collection, onSnapshot, query, orderBy } from "@firebase/firestore";
import { useEffect, useState } from "react";
import "./App.css";
import { ArgoForm } from "./components/ArgoForm/ArgoForm";
import { ArgoList } from "./components/ArgoList/ArgoList";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { db } from "./firebase-config";

function App() {
  const [argonautes, setArgonautes] = useState([]);

  function addArgonaute(newArgonaute) {
    const newArrayOfArgonautes = [...argonautes, newArgonaute];
    setArgonautes(newArrayOfArgonautes);
  }

  useEffect(() => {
    const q = query(collection(db, "users"));
    orderBy("datetime", "desc");
    onSnapshot(q, (snapshot) => {
      setArgonautes(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            name: doc.data().name,
          };
        })
      );
    });
  }, []);

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
