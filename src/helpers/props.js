import PropTypes from 'prop-types';

export const dataDefault = {};
export const dataTypes = PropTypes.objectOf(PropTypes.any);

export const modeDefault = 'View';
export const modeTypes = PropTypes.oneOf(['View', 'Edit']);

export const fieldDefault = {};
export const fieldTypes = PropTypes.shape({
  type: PropTypes.oneOf(['Text', 'Label']).isRequired,
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

export const fieldsDefault = [];
export const fieldsTypes = PropTypes.arrayOf(
  fieldTypes,
);

export const configsDefault = {
  spacing: 20,
  innerSpacing: 10,
  theme: 'Semantic',
  mode: 'View',
  data: {},
};
export const configsTypes = PropTypes.shape({
  spacing: PropTypes.number,
  innerSpacing: PropTypes.number,
  theme: PropTypes.oneOf(['Semantic']),
});

export const styleDefault = {};
export const styleTypes = PropTypes.objectOf(PropTypes.any);
