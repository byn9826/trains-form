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

export function useThemeSwitcher({ fileName }) {
  const [theme, setTheme] = useState(FORM_CONSTANTS.SEMANTIC_THEME);

  const themeSwitcherRender = () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 5%',
      }}
    >
      <FormComponents.Radio
        name="theme"
        value={theme}
        theme={theme}
        options={THEME_OPTIONS}
        onChange={(name, value) => setTheme(value)}
      />
      <FormComponents.Button
        theme={theme}
        title="Link to Source Code"
        onClick={() => {
          const link = `https://github.com/byn9826/trains-forms/blob/master/stories/${fileName}.stories.jsx`;
          window.open(link, '__target');
        }}
      />
    </div>
  );

  return [theme, themeSwitcherRender];
}
