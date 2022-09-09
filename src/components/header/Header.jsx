import DatePicker from "./datePicker/DatePicker";
import { useState } from "react";
import TransitionsModal from "../Modal/Modal";
import { ReactComponent as PlusIcon } from "../../img/plus.svg";
import s from "./Header.module.css";

const Header = ({
  monthAndYear,
  handleButtonClick,
  setMonthAndYear,
  setTasks,
}) => {
  const [modalIsActive, setModalIsActive] = useState(false);
  const toggleModal = () => {
    setModalIsActive(!modalIsActive);
  };
  return (
    <header className={s.header}>
      <button type="button" onClick={toggleModal} className={s.btn}>
        <PlusIcon className={s.plusIcon} />
      </button>
      {modalIsActive && (
        <TransitionsModal
          setTasks={setTasks}
          toggleModal={toggleModal}
          title={"Add new idea"}
        />
      )}
      <h1 className={s.header__title}>Calendar ToDo</h1>
      <DatePicker
        monthAndYear={monthAndYear}
        handleButtonClick={handleButtonClick}
        setMonthAndYear={setMonthAndYear}
      />
    </header>
  );
};

export default Header;
