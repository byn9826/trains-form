import PropTypes from 'prop-types';

export const dataDefault = {};
export const dataTypes = PropTypes.objectOf(PropTypes.any);

export const fieldDefault = {};
export const fieldTypes = PropTypes.shape({
  type: PropTypes.oneOf(['TEXT']).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  width: PropTypes.number,
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
