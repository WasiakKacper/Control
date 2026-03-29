import "./scss/Modal.scss";
import { useTrackerContext } from "../../../hooks/useTrackerContext";
import { useState } from "react";

type ModalTypes = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FC<ModalTypes> = ({ isOpen, setIsOpen }) => {
  const { handleAddTask } = useTrackerContext();
  const [name, setName] = useState<string>("");
  const [alert, setAlert] = useState<string>("");

  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  if (!isOpen) return null;

  return (
    <dialog className="modal" open>
      <h3 className="modalTitle">Add task:</h3>
      <p className="modalAlert">{alert}</p>
      <input
        className="modalInput"
        type="text"
        onChange={handleSetName}
        autoFocus
      />
      <div className="modalButtons">
        <button
          className="modalButton"
          onClick={() => {
            if (name.trim() !== "") {
              handleAddTask(name);
              setIsOpen(false);
              setName("");
              setAlert("");
            } else {
              setAlert("Task needs a name!");
            }
          }}
        >
          Add
        </button>
        <button
          className="modalButton"
          onClick={() => {
            setIsOpen(false);
            setName("");
            setAlert("");
          }}
        >
          Close
        </button>
      </div>
    </dialog>
  );
};

export default Modal;
