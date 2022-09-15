import dayjs from 'dayjs';
import { ReactComponent as LeftArrow } from '../../../img/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../../img/right-arrow.svg';
import s from './DatePicker.module.css';
import PropTypes from 'prop-types';
import React from 'react';

const DatePicker = ({ monthAndYear, handleButtonClick, setMonthAndYear }) => {
  return (
    <div className={s.datePicker}>
      <button name="decrement" onClick={handleButtonClick} className={s.btn}>
        <LeftArrow className={s.icon} />
      </button>
      <span className={s.date}>{monthAndYear.format('MMMM YYYY')}</span>
      <button name="increment" onClick={handleButtonClick} className={s.btn}>
        <RightArrow className={s.icon} />
      </button>
      <span className={s.datepicker_toggle}>
        <span className={s.datepicker_toggle_button}></span>
        <input
          type="month"
          className={s.datepicker_input}
          onChange={e => {
            const value = dayjs(e.currentTarget.value);
            setMonthAndYear(value);
          }}
        />
      </span>
    </div>
  );
};

export default DatePicker;

DatePicker.propTypes = {
  setMonthAndYear: PropTypes.func,
  handleButtonClick: PropTypes.func,
  monthAndYear: PropTypes.string,
};
