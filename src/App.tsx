import React, { useState } from "react";
import "./App.css";
import Dialog from "./components/dialog";

function App() {
  const [isOpen, toggleIsOpen] = useState(false);

  return (
    <div className="App">
      {/* echo open state */}
      <p>Dialog is open: {isOpen ? "yes" : "no"}</p>

      {/* our modal, it exists in the DOM all the time but is hidden by default */}
      <Dialog
        open={isOpen}
        title="A demo dialog"
        onClose={() => toggleIsOpen(false)}
      >
        Quite nice dialog isn't it? You can pass children to the dialog to
        determine content outside the dialog.
      </Dialog>

      {/* a button to open the modal */}
      <button onClick={() => toggleIsOpen(true)}>Open dialog</button>
    </div>
  );
}

export default App;
