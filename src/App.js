// import { onSnapshot, query } from "firebase/firestore";
import { collection, onSnapshot, query, orderBy } from "@firebase/firestore";
import { useEffect, useState } from "react";
import "./App.css";
import { ArgoForm } from "./components/ArgoForm/ArgoForm";
import { ArgoList } from "./components/ArgoList/ArgoList";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { db } from "./firebase-config";
// import { db } from "./firebase-config";
// import { Main } from "./components/Main/Main";

function App() {
  const [argonautes, setArgonautes] = useState([]);
  // const [newArgonaute, setNewArgonaute] = useState("");
  // const userCollectionRef = collection(db, "users");

  function addArgonaute(newArgonaute) {
    const newArrayOfArgonautes = [...argonautes, newArgonaute];
    setArgonautes(newArrayOfArgonautes);
  }

  // const addArgonaute = async () => {
  //   await addDoc(userCollectionRef, { name: newArgonaute });
  // };

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(userCollectionRef);
  //     setArgonautes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getUsers();
  // }, []);
  useEffect(() => {
    console.log("useEffect Hook!!!");
    const q = query(collection(db, "users"));
    orderBy("datetime", "desc");
    onSnapshot(q, (snapshot) => {
      console.log("Firebase Snap!");
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
