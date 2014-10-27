var zlib = require('zlib');
var originalDefineMethods = zlib.defineMethods;

// wrap async methods:
zlib.defineMethods = function defineMethods(z) {
    originalDefineMethods(z);

    var methodNames = ['deflate', 'deflateRaw', 'gzip', 'gunzip', 'inflate', 'inflateRaw'];
    methodNames.map( function (methodName) {
        var methodNameSync = methodName + 'Sync';
        if (!z.prototype[methodName]) return;
        if (z.prototype[methodNameSync]) return;
        z.prototype[methodNameSync] = Meteor.wrapAsync(z.prototype[methodName]);
    });
};
