process.env.VUE_APP_IP_ADDRESS = "http://localhost:8000/api/";

module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  transpileDependencies: ["vuetify"],
};
