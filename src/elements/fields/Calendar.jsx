import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Types from '../../helpers/types';
import {
  getDaysInMonth,
  getMonthName,
  getWeekdayName,
  getDateString,
} from '../../helpers/calendar';
import { getDropdownStyle } from '../../helpers/style';
import { getDropdownClasses } from '../../helpers/theme';
import { TEXT_ICONS } from '../../helpers/constants';
import Dropdown from './Dropdown';
import Specials from '../specials';

const PAD_STYLE = {
  width: '14%',
  height: 30,
  textAlign: 'center',
};

const CELL_STYLE = {
  ...PAD_STYLE,
  cursor: 'pointer',
};

export default function Calendar({
  disabled,
  style,
  name,
  value,
  theme,
  placeholder,
  onChange,
  error,
}) {
  const classes = getDropdownClasses(theme, disabled, error);

  const initialDate = value || new Date();
  const [showPopup, setShowPopup] = useState(false);
  const [displayYear, setDisplayYear] = useState(initialDate.getFullYear());
  const [displayMonth, setDisplayMonth] = useState(initialDate.getMonth());
  const onClickField = () => {
    if (disabled) return;
    setShowPopup(true);
  };

  const onClickPrevious = (e) => {
    e.stopPropagation();
    setDisplayYear(displayYear - 1);
  };

  const onClickNext = (e) => {
    e.stopPropagation();
    setDisplayYear(displayYear + 1);
  };

  const onClickPopup = (e) => {
    e.stopPropagation();
    setShowPopup(false);
  };

  const onClickCell = (e, dateIndex) => {
    e.stopPropagation();
    const selectedDate = new Date(displayYear, displayMonth, dateIndex);
    onChange(name, selectedDate);
    setShowPopup(false);
  };

  const onClickIcon = (e) => {
    e.stopPropagation();
    if (value) {
      onChange(name, null);
    } else {
      onClickField();
    }
  };

  const monthSelectorRender = () => {
    const monthList = [];
    for (let i = 0; i < 12; i += 1) {
      monthList.push({
        label: getMonthName(i),
        value: i,
      });
    }
    return (
      <Dropdown
        options={monthList}
        value={displayMonth}
        name="month"
        allowClear={false}
        onChange={(selectedName, selectedValue) => setDisplayMonth(selectedValue)}
      />
    );
  };

  const weekdaysRender = () => {
    const weekdays = [];
    for (let i = 0; i <= 6; i += 1) {
      weekdays.push(
        <div key={i} style={PAD_STYLE}>
          {getWeekdayName(i)}
        </div>,
      );
    }
    return weekdays;
  };

  const isSelectedDate = (dateIndex) => (
    value
    && displayYear === value.getFullYear()
    && displayMonth === value.getMonth()
    && dateIndex === value.getDate()
  );

  const daysRender = () => {
    const firstDate = new Date(displayYear, displayMonth);
    const firstDateDay = firstDate.getDay();
    const paddingDays = firstDateDay === 7 ? 0 : firstDateDay;
    const totalDays = getDaysInMonth(displayYear, displayMonth);
    const cells = [];
    for (let i = 0; i < paddingDays; i += 1) {
      cells.push(
        <div key={`padding-${i}`} style={PAD_STYLE} />,
      );
    }
    for (let j = 1; j <= totalDays; j += 1) {
      cells.push(
        <div
          key={j}
          style={CELL_STYLE}
          onClick={(e) => onClickCell(e, j)}
          onKeyDown={(e) => onClickCell(e, j)}
          role="button"
        >
          <span
            style={{
              border: isSelectedDate(j) && '1px solid black',
              borderRadius: 12,
              width: 24,
              height: 24,
              lineHeight: '22px',
              display: 'inline-block',
            }}
          >
            {j}
          </span>
        </div>,
      );
    }
    return cells;
  };

  return (
    <div
      className={classes.group}
      onClick={onClickField}
      onKeyDown={onClickField}
      role="button"
      disabled={disabled}
      style={{
        ...style,
        ...getDropdownStyle(showPopup, disabled),
      }}
    >
      {
        !showPopup && (
          <>
            {value && (
              <div className={classes.text}>
                {getDateString(value)}
              </div>
            )}
            {placeholder && !value && (
              <div className={classes.placeholder}>
                {placeholder}
              </div>
            )}
            {
              !value && !placeholder && <div />
            }
            {!disabled && (
              <Specials.TextIcon
                iconName={value ? TEXT_ICONS.CLOSE : TEXT_ICONS.DROPDOWN}
                onClickIcon={onClickIcon}
              />
            )}
          </>
        )
      }
      <div
        style={{
          display: showPopup ? 'block' : 'none',
          paddingTop: 10,
          overflow: 'visible',
          maxHeight: 'unset',
          width: '100%',
        }}
        role="button"
        onClick={onClickPopup}
        onKeyDown={onClickPopup}
        className={classes.popup}
      >
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 5%',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Specials.TextIcon
              onClickIcon={(e) => onClickPrevious(e)}
              iconName={TEXT_ICONS.ARROW_LEFT}
              size={30}
            />
            <p
              style={{
                marginLeft: 10,
                marginRight: 10,
                marginTop: 0,
                marginBottom: 0,
                padding: 0,
                fontWeight: 'bold',
              }}
            >
              {displayYear}
            </p>
            <Specials.TextIcon
              onClickIcon={(e) => onClickNext(e)}
              iconName={TEXT_ICONS.ARROW_RIGHT}
              size={30}
            />
          </div>
          {monthSelectorRender()}
        </header>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            paddingTop: 10,
            paddingLeft: '4.1%',
            paddingRight: '4.1%',
          }}
        >
          {weekdaysRender()}
          {daysRender()}
        </div>
      </div>
    </div>
  );
}

Calendar.propTypes = {
  ...Types.ELEMENT_TYPE,
  value: PropTypes.instanceOf(Date),
};
