export const getDropdownStyle = (isPopupOpen) => ({
  display: 'flex',
  justifyContent: 'space-between',
  paddingLeft: 10,
  paddingRight: 10,
  zIndex: isPopupOpen ? 999 : 'unset',
  minWidth: 80,
  minHeight: 38,
});
