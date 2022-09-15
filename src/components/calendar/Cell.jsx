import s from './Cell.module.css';
import { useState } from 'react';
import TransitionsModal from '../Modal/Modal';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import React from 'react';

const Cell = ({
  date,
  day,
  arrayOfTasks,
  setTasks,
  tasks,
  cell,
  monthAndYear,
}) => {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [idTask, setIdTask] = useState(null);

  const disabledDays = () => {
    if (cell.format('MM') !== monthAndYear.format('MM')) {
      return s.cell__disabled;
    }
    return s.cell;
  };

  const currentDate = () => {
    const today = dayjs().format('DD/MM/YY');
    if (today === cell.format('DD/MM/YY')) {
      return s.cell__current;
    }
    return;
  };

  const toggleModal = e => {
    if (!modalIsActive) {
      const taskId = e.currentTarget.getAttribute('id');
      setIdTask(taskId);
    }
    setModalIsActive(!modalIsActive);
  };

  return (
    <div className={`${s.cell} ${disabledDays()} ${currentDate()}`}>
      <div className={s.dateWrapper}>
        <span className={s.cell__date}>{date}</span>
        <span className={s.cell__day}>{day}</span>
      </div>
      <div className={s.cell__taskList}>
        {arrayOfTasks.length > 0 &&
          arrayOfTasks.map(task => (
            <p
              className={s.cell__task}
              key={task.id}
              id={task.id}
              onClick={toggleModal}
            >
              {task.title}
            </p>
          ))}
        {modalIsActive && (
          <TransitionsModal
            setTasks={setTasks}
            toggleModal={toggleModal}
            title="Edit task"
            tasks={tasks}
            id={idTask}
          />
        )}
      </div>
    </div>
  );
};
export default Cell;

Cell.propTypes = {
  date: PropTypes.string,
  day: PropTypes.string,
  arrayOfTasks: PropTypes.array,
  setTasks: PropTypes.func,
  tasks: PropTypes.array,
  cell: PropTypes.string,
  monthAndYear: PropTypes.string,
};
