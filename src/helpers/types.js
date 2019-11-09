import PropTypes from 'prop-types';

export const defaultProps = {
  data: {},
  fields: [],
  spacing: 20,
  innerSpacing: 10,
  theme: 'Semantic',
};

export const propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['TEXT']).isRequired,
      name: PropTypes.string.isRequired,
      label: PropTypes.string,
      width: PropTypes.number,
    }),
  ),
  configs: PropTypes.shape({
    spacing: PropTypes.number,
    innerSpacing: PropTypes.number,
    theme: PropTypes.oneOf(['Semantic']),
  }),
  children: PropTypes.node,
};
