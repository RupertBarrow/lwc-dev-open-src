// Find the full example of all available configuration options at
// https://github.com/muenzpraeger/lwc-create-app/blob/master/packages/lwc-services/example/lwc-services.config.js
//module.exports = {
    //resources: [{ from: 'src/resources', to: 'dist/resources' }]
//};
const outputDir = '../WEBSERVER/LWC4WEBSERVER';
// eslint-disable-next-line no-undef
module.exports = {
  buildDir: `${outputDir}`,
  resources: [{from:'src/resources', to:`${outputDir}/resources`}]
};

