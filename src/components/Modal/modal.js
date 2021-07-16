import styles from "./Modal.module.css";
import React from "react";

const Modal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalForm}>
        <div className={styles.closeButton}>+</div>
        <span className={styles.modalHeading}>Get Started</span>
        <ModalForm />
      </div>
    </div>
  );
};

export default Modal;

const ModalForm = () => {
  return (
    <form className={styles.modalFormWrapper}>
      <label className={styles.formLabels}>Select Game Type</label>
        <RadioGroup/>
      <label className={styles.formLabels}>Select List Height</label>
      <SelectNumber/>

      <button className={styles.modalFormButton}>Let's See You Go</button>
    </form>
  );
};

const RadioButton = ({ title }) => {
    const radioRef=React.createRef(null);
    const handleChange=()=>{
        alert(radioRef.current.checked)

    }
  return (
    <>
      <input type="radio" value={`${title}`} name='gameType' ref={radioRef} style={{ display: "none" }} />
      <button type='button' onClick={handleChange} className={styles.radioButton}>{title}</button>
    </>
  );
};

const RadioGroup = () => {
  return (
    <div className={styles.radioButtonGroup}>
      <RadioButton title="Spot The Pop" />
      <RadioButton title="Sort The Spots" />
    </div>
  );
};

const SelectNumber=()=>{
    return(
        <input type='number' className={styles.numberSelect} min={2}/>
    );
}
