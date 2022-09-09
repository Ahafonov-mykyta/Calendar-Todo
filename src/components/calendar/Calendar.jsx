import { useEffect, useState } from "react";
import Cell from "./Cell";
import s from "./Calendar.module.css";
import { fillMonthArray } from "../../helpers/fillMonthArray";
import dayjs from "dayjs";

const Calendar = ({ monthAndYear, tasks, setTasks }) => {
  const [arrayOfCells, setArrayOfCells] = useState(() => fillMonthArray());

  useEffect(() => {
    setArrayOfCells(fillMonthArray(monthAndYear.month()));
  }, [monthAndYear]);

  return (
    <div className={s.calendar}>
      {arrayOfCells.map((cell, index) => (
        <Cell
          cell={cell}
          monthAndYear={monthAndYear}
          tasks={tasks}
          setTasks={setTasks}
          date={cell.date()}
          day={cell.format("dd")}
          arrayOfTasks={tasks.filter(
            (task) =>
              dayjs(task.date).format("DD/MM/YY") === cell.format("DD/MM/YY")
          )}
          key={index}
        />
      ))}
    </div>
  );
};

export default Calendar;
