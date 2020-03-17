module.exports = {
  stories: ['../stories/**/*.stories.jsx'],
  webpackFinal: async config => {
    // do mutation to the config
    return config;
  },
};
