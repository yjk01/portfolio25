module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Make sure to handle markdown files with raw-loader
      const fileLoaderRule = webpackConfig.module.rules.find(rule => 
        rule.test && rule.test.toString().includes('svg|')
      );
      
      if (fileLoaderRule) {
        // Exclude .md files from file-loader
        fileLoaderRule.exclude = /\.md$/;
      }
      
      webpackConfig.module.rules.push({
        test: /\.md$/,
        type: 'asset/source', // Modern equivalent of raw-loader in webpack 5
      });
      
      return webpackConfig;
    }
  }
};
