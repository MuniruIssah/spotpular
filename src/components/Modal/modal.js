import styles from "./Modal.module.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Modal = () => {
  const [visible, setVisible] = useState(true);
  const closeModal=()=>{
    setVisible(false)
  }
  return (
    <>
      {visible && (
        <div className={styles.modal}>
          <div className={styles.modalForm}>
            <div onClick={closeModal} className={styles.closeButton}><FontAwesomeIcon icon={faPlus} /></div>
            <span className={styles.modalHeading}>Get Started</span>
            <ModalForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

const ModalForm = () => {
  return (
    <form className={styles.modalFormWrapper}>
      <label className={styles.formLabels}>Select Game Type</label>
      <RadioGroup />
      <label className={styles.formLabels}>Select List Height</label>
      <SelectNumber />
      <label className={styles.formLabels}>Select List Mode</label>
      <SelectMode />

      <button className={styles.modalFormButton}>Let's See You Go</button>
    </form>
  );
};

const RadioButton = ({ title }) => {
  const radioRef = React.createRef(null);
  const handleChange = () => {
    alert(radioRef.current.checked);
  };
  return (
    <>
      <input
        type="radio"
        value={`${title}`}
        name="gameType"
        ref={radioRef}
        style={{ display: "none" }}
      />
      <button
        type="button"
        onClick={handleChange}
        className={styles.radioButton}
      >
        {title}
      </button>
    </>
  );
};

const RadioGroup = () => {
  const radioTypes = ["Spot The Pop", "Sort The Spots"];
  return (
    <div className={styles.radioButtonGroup}>
      {radioTypes.map((radioType) => (
        <RadioButton key={radioType} title={radioType} />
      ))}
    </div>
  );
};

const SelectNumber = () => {
  return <input type="number" className={styles.numberSelect} min={2} />;
};

const SelectMode = () => {
  const selectOptions = ["Epic", "Race Against Time"];
  return (
    <select className={styles.modeSelect}>
      {selectOptions.map((selectOption) => (
        <option key={selectOption} value={selectOption}>
          {selectOption}
        </option>
      ))}
    </select>
  );
};
