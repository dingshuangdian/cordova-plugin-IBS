var exec = require('cordova/exec');

var BSTool = function () {};

BSTool.prototype.getNVInfo = function (arg0, success, error) {
    exec(success, error, "BSTool", "getNVInfo", [arg0]);
};


BSTool.prototype.backNavi = function (success, error) {
    exec(success, error, "BSTool", "backNavi", []);
};

BSTool.prototype.pushBSView = function (arg0, success, error) {
    exec(success, error, "BSTool", "pushBSView", [arg0]);
}

module.exports = new BSTool();