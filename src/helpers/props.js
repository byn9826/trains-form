import PropTypes from 'prop-types';

export const dataDefault = {};
export const dataTypes = PropTypes.objectOf(PropTypes.any);

export const modeDefault = 'View';
export const modeTypes = PropTypes.oneOf(['View', 'Creation', 'Updation', 'Deletion']);

export const fieldDefault = {};
export const fieldTypes = PropTypes.shape({
  type: PropTypes.oneOf(['Text']).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  width: PropTypes.number,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
});

export const fieldsDefault = [];
export const fieldsTypes = PropTypes.arrayOf(
  fieldTypes,
);

export const configsDefault = {
  spacing: 20,
  innerSpacing: 10,
  theme: 'Semantic',
};
export const configsTypes = PropTypes.shape({
  spacing: PropTypes.number,
  innerSpacing: PropTypes.number,
  theme: PropTypes.oneOf(['Semantic']),
});
