import React from 'react';
import PropTypes from 'prop-types';

export const TEXT_ICONS = {
  CLOSE: 'close',
  DROPDOWN: 'dropdown',
  ARROW_LEFT: 'arrow_left',
  ARROW_RIGHT: 'arrow_right',
};

export default function TextIcon({ iconName, onClickIcon, size = 16 }) {
  let content;
  switch (iconName) {
    case TEXT_ICONS.CLOSE:
      content = '×';
      break;
    case TEXT_ICONS.DROPDOWN:
      content = '⌄';
      break;
    case TEXT_ICONS.ARROW_LEFT:
      content = '‹';
      break;
    case TEXT_ICONS.ARROW_RIGHT:
      content = '›';
      break;
    default:
      content = '';
      break;
  }
  return (
    <span
      role="button"
      onClick={onClickIcon}
      onKeyDown={onClickIcon}
      style={{ fontSize: size, fontWeight: 'bold', cursor: 'pointer' }}
    >
      {content}
    </span>
  );
}

TextIcon.propTypes = {
  iconName: PropTypes.string,
  onClickIcon: PropTypes.func,
  size: PropTypes.number,
};
