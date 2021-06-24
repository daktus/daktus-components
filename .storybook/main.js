const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.{tsx,mdx}'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-actions/register',
    '@storybook/addon-viewport/register',
  ],
  babel: async options => ({
    ...options,
  }),
  webpackFinal: async config => {
    // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
    const fileLoaderRule = config.module.rules.find(
      rule => rule.test && rule.test.test('.svg'),
    )
    fileLoaderRule.exclude = /\.svg$/

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      use: [require.resolve('@svgr/webpack'), require.resolve('url-loader')],
    })

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src/'),
    }
    return config
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
}
