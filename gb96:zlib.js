var originalDefineMethods = zlib.defineMethods;

// wrap async methods:
zlib.defineMethods = function defineMethods(z) {
    originalDefineMethods(z);

    // todo: remove AWS dependency
    Npm.require('AWS').util.each(z.prototype.api.operations, function iterator(method) {
        var syncMethod = method + 'Sync';
        if (!z.prototype[method]) return;
        if (z.prototype[syncMethod]) return;
        z.prototype[syncMethod] = Meteor.wrapAsync(z.prototype[method]);
    });
};
