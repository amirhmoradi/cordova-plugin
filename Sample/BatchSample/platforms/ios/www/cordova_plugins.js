cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.batch.cordova/www/batch.js",
        "id": "com.batch.cordova.batch",
        "clobbers": [
            "batch"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.batch.cordova": "1.4",
    "cordova-plugin-statusbar": "1.0.1"
}
// BOTTOM OF METADATA
});