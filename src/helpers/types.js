import PropTypes from 'prop-types';
import {
  MODES,
  TYPES,
  THEMES,
} from './constants';

export const VALUE_TYPE = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.array,
  PropTypes.instanceOf(Date),
]);

export const MODE_TYPE = PropTypes.oneOf(MODES);

export const MIN_MAX_TYPE = PropTypes.oneOfType([
  PropTypes.number, PropTypes.instanceOf(Date),
]);

export const FIELD_TYPE = PropTypes.shape({
  type: PropTypes.oneOf(TYPES).isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  width: PropTypes.number,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  default: VALUE_TYPE,
  max: MIN_MAX_TYPE,
  maxErrorMessage: PropTypes.string,
  min: MIN_MAX_TYPE,
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
  allowSubmitButton: PropTypes.bool,
  validateOnInitial: PropTypes.bool,
  validateOnChange: PropTypes.bool,
  viewAsMessage: PropTypes.bool,
  submitTitle: PropTypes.string,
  submitError: PropTypes.string,
  requiredError: PropTypes.string,
});

export const STYLE_TYPE = PropTypes.objectOf(PropTypes.any);

export const THEME_TYPE = PropTypes.oneOf(THEMES);

export const ELEMENT_TYPE = {
  type: PropTypes.oneOf(TYPES),
  field: FIELD_TYPE,
  style: STYLE_TYPE,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: VALUE_TYPE,
  options: ELEMENT_OPTIONS_TYPE,
  theme: THEME_TYPE,
  onChange: PropTypes.func,
  error: PropTypes.string,
};
