export const autoAppendTitle = (fields) => fields.map((field) => ({
  ...field,
  title: `${field.type} Field`,
}));
