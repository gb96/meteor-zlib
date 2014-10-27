// Export some async convenience methods from zlib:
Deflate = Npm.require('zlib').Deflate;
Inflate = Npm.require('zlib').Inflate;
Gzip = Npm.require('zlib').Gzip;
Gunzip = Npm.require('zlib').Gunzip;
DeflateRaw = Npm.require('zlib').DeflateRaw;
InflateRaw = Npm.require('zlib').InflateRaw;
Zip = Npm.require('zlib').Zip;
Unzip = Npm.require('zlib').Unzip;

// Export wrapped async methods:
DeflateSync = Meteor.wrapAsync(Deflate);
InflateSync = Meteor.wrapAsync(Inflate);
GzipSync = Meteor.wrapAsync(Gzip);
GunzipSync = Meteor.wrapAsync(Gunzip);
DeflateRawSync = Meteor.wrapAsync(DeflateRaw);
InflateRawSync = Meteor.wrapAsync(InflateRaw);
ZipSync = Meteor.wrapAsync(Zip);
UnzipSync = Meteor.wrapAsync(Unzip);
