import React, { useState } from 'react';
import { FormComponents, FORM_CONSTANTS } from '../src';

export const autoAppendTitleExample = (fields) => fields.map((field) => ({
  ...field,
  title: `${field.type} Field`,
}));

const THEME_OPTIONS = FORM_CONSTANTS.THEMES.map((theme) => ({
  label: theme,
  value: theme,
}));

export function useThemeSwitcher() {
  const [theme, setTheme] = useState(FORM_CONSTANTS.BOOTSTRAP_THEME);

  const themeSwitcherRender = () => (
    <FormComponents.Radio
      name="theme"
      value={theme}
      theme={theme}
      options={THEME_OPTIONS}
      onChange={(name, value) => setTheme(value)}
    />
  );

  return [theme, themeSwitcherRender];
}
