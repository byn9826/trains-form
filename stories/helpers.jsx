export const autoAppendTitleExample = (fields) => fields.map((field) => ({
  ...field,
  title: `${field.type} Field`,
}));
