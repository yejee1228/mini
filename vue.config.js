module.exports = {
  indexPath:"../static/index.html",
  devServer:{proxy:"http://52.79.81.155:8123/"},chainWebpack:config=>{
    const svgRule=config.module.rule("svg");svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");}};
