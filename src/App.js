import "./App.css";
import Header from "./components/Header";
import Students from "./components/Students";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [modalAction, setModalaction] = useState(null);
  const [modal, setModal] = useState(false);
  const [stId, setStId] = useState(null);
  // const [student, setStudent] = useState(null);

  // const toggle = (id, action) => {

  //   setModalaction(action);
  //   setModal(!modal);
  //   setStId(id);
  // };
  return (
    <div className="App">
      <h1>React Students CRUD App</h1>
      <Header
        setModal={setModal}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        modalAction={modalAction}
        setModalaction={setModalaction}
      />
      <Students
        stId={stId}
        modal={modal}
        setStId={setStId}
        setModal={setModal}
        searchQuery={searchQuery}
        modalAction={modalAction}
        setModalaction={setModalaction}
      />
      <footer>Seytech LLC. All Rights Reserved.</footer>
    </div>
  );
}

export default App;
