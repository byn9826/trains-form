import PropTypes from 'prop-types';
import {
  MODES,
  TYPES,
  THEMES,
} from './constants';

export const VALUE_TYPE = PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]);
export const ARRAY_VALUE_TYPE = PropTypes.array;

export const MODE_TYPE = PropTypes.oneOf(MODES);

export const FIELD_TYPE = PropTypes.shape({
  type: PropTypes.oneOf(TYPES).isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  width: PropTypes.number,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  default: PropTypes.oneOfType([VALUE_TYPE, ARRAY_VALUE_TYPE]),
  max: PropTypes.number,
  maxErrorMessage: PropTypes.string,
  min: PropTypes.number,
  minErrorMessage: PropTypes.string,
  disabled: PropTypes.bool,
});
export const FIELDS_TYPE = PropTypes.arrayOf(FIELD_TYPE);

export const VALUES_TYPE = PropTypes.objectOf(PropTypes.any);

export const ELEMENT_OPTIONS_TYPE = PropTypes.arrayOf(PropTypes.shape({
  label: PropTypes.isRequired,
  value: PropTypes.isRequired,
}));

export const FORM_OPTIONS_TYPE = PropTypes.objectOf(ELEMENT_OPTIONS_TYPE);

export const CONFIGS_TYPE = PropTypes.shape({
  spacing: PropTypes.number,
  innerSpacing: PropTypes.number,
  theme: PropTypes.oneOf(THEMES),
  submitTitle: PropTypes.string,
  submitError: PropTypes.string,
  allowSubmitButton: PropTypes.bool,
  validateOnChange: PropTypes.bool,
});

export const STYLE_TYPE = PropTypes.objectOf(PropTypes.any);

export const ELEMENT_TYPE = {
  type: PropTypes.oneOf(TYPES),
  field: FIELD_TYPE,
  style: STYLE_TYPE,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: VALUE_TYPE,
  options: ELEMENT_OPTIONS_TYPE,
  theme: PropTypes.oneOf(THEMES),
  onChange: PropTypes.func,
};
