process.env.VUE_APP_IP_ADDRESS = "http://admin.infokejadiansemarang.com/api/";

module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  transpileDependencies: ["vuetify"],
};
