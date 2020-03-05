module.exports = {
  stories: ['../stories/**/*.stories.jsx'],
  addons: ['@storybook/addon-storysource'],
  webpackFinal: async config => {
    // do mutation to the config
    return config;
  },
};
