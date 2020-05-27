module.exports = {
  mode: "production",
  entry: __dirname + "/modules/index.js", //项目入口
  devtool: "source-map",
  output: {
    //webpack output
    path: __dirname + "/assets/modules",
    filename: "mm.js",
    libraryTarget: "umd"
  }
};
