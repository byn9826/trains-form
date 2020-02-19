import PropTypes from 'prop-types';
import {
  VIEW_MODE,
  EDIT_MODE,
  TEXT_TYPE,
  NOTE_TYPE,
  MESSAGE_TYPE,
  SEMANTIC_THEME,
} from './constants';

export const MODE_TYPE = PropTypes.oneOf([VIEW_MODE, EDIT_MODE]);

export const FIELD_TYPE = PropTypes.shape({
  type: PropTypes.oneOf([TEXT_TYPE, NOTE_TYPE, MESSAGE_TYPE]).isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  width: PropTypes.number,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  default: PropTypes.string,
  max: PropTypes.number,
  maxErrorMessage: PropTypes.string,
  min: PropTypes.number,
  minErrorMessage: PropTypes.string,
  disabled: PropTypes.bool,
});
export const FIELDS_TYPE = PropTypes.arrayOf(FIELD_TYPE);

export const VALUES_TYPE = PropTypes.objectOf(PropTypes.any);

export const CONFIGS_TYPE = PropTypes.shape({
  spacing: PropTypes.number,
  innerSpacing: PropTypes.number,
  theme: PropTypes.oneOf([SEMANTIC_THEME]),
});

export const STYLE_TYPE = PropTypes.objectOf(PropTypes.any);

export const ELEMENT_TYPE = {
  field: FIELD_TYPE,
  elementStyle: STYLE_TYPE,
  disabled: PropTypes.bool,
};
