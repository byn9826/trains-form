import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Types from '../helpers/types';
import { SEMANTIC_THEME } from '../helpers/constants';
import { buildClassNames } from '../helpers/builder';
import {
  getDaysInMonth,
  getMonthName,
  getWeekdayName,
  getDateString,
} from '../helpers/calendar';
import { getDropdownStyle } from '../helpers/style';
import Dropdown from './Dropdown';

const PAD_STYLE = {
  width: '14%',
  height: 30,
  textAlign: 'center',
};

const CELL_STYLE = {
  ...PAD_STYLE,
  cursor: 'pointer',
};

const ARROW_STYLE = {
  cursor: 'pointer',
};

const YEAR_STYLE = {
  margin: 0,
  padding: 0,
  fontWeight: 'bold',
};

export default function Calendar({
  disabled,
  style,
  name,
  value,
  theme,
  placeholder,
  onChange,
}) {
  const initialDate = value || new Date();

  const [showPopup, setShowPopup] = useState(false);
  const [displayYear, setDisplayYear] = useState(initialDate.getFullYear());
  const [displayMonth, setDisplayMonth] = useState(initialDate.getMonth());

  const onClickField = () => setShowPopup(true);

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
    for (let i = 1; i <= 7; i += 1) {
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
    && displayYear === value.getUTCFullYear()
    && displayMonth === value.getUTCMonth()
    && dateIndex === value.getUTCDate()
  );

  const daysRender = () => {
    const firstDate = new Date(displayYear, displayMonth);
    const firstDateDay = firstDate.getUTCDay();
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

  switch (theme) {
    case SEMANTIC_THEME:
    default:
      return (
        <div
          className={buildClassNames({
            'ui selection dropdown': true,
            disabled,
          })}
          onClick={onClickField}
          onKeyDown={onClickField}
          role="button"
          style={{
            ...style,
            ...getDropdownStyle(showPopup),
          }}
        >
          {
            !showPopup && (
              <>
                {value && (
                  <div className="text">
                    {getDateString(value)}
                  </div>
                )}
                {placeholder && !value && (
                  <div className="default text">
                    {placeholder}
                  </div>
                )}
                {
                  !value && !placeholder && <div />
                }
                {!disabled && (
                  <i
                    className={buildClassNames({
                      icon: true,
                      'calendar outline': !value,
                      close: value,
                    })}
                    onClick={onClickIcon}
                    onKeyDown={onClickIcon}
                    role="button"
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
                <i
                  className="icon angle left"
                  onClick={(e) => onClickPrevious(e)}
                  onKeyDown={(e) => onClickPrevious(e)}
                  role="button"
                  style={ARROW_STYLE}
                />
                <p
                  style={YEAR_STYLE}
                >
                  {displayYear}
                </p>
                <i
                  className="icon angle right"
                  onClick={(e) => onClickNext(e)}
                  onKeyDown={(e) => onClickNext(e)}
                  role="button"
                  style={ARROW_STYLE}
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
}

Calendar.propTypes = {
  ...Types.ELEMENT_TYPE,
  value: PropTypes.instanceOf(Date),
};
