var zlib = Npm.require('zlib');
// Export some async convenience methods from zlib:
Deflate = zlib.Deflate;
Inflate = zlib.Inflate;
Gzip = zlib.Gzip;
Gunzip = zlib.Gunzip;
DeflateRaw = zlib.DeflateRaw;
InflateRaw = zlib.InflateRaw;
Zip = zlib.Zip;
Unzip = zlib.Unzip;

// Export wrapped async methods:
DeflateSync = blocking(zlib, Deflate);
InflateSync = blocking(zlib, Inflate);
GzipSync = blocking(zlib, Gzip);
GunzipSync = blocking(zlib, Gunzip);
DeflateRawSync = blocking(zlib, DeflateRaw);
InflateRawSync = blocking(zlib, InflateRaw);
ZipSync = blocking(zlib, Zip);
UnzipSync = blocking(zlib, Unzip);

//DeflateSync = Meteor.wrapAsync(Deflate);
//InflateSync = Meteor.wrapAsync(Inflate);
//GzipSync = Meteor.wrapAsync(Gzip);
//GunzipSync = Meteor.wrapAsync(Gunzip);
//DeflateRawSync = Meteor.wrapAsync(DeflateRaw);
//InflateRawSync = Meteor.wrapAsync(InflateRaw);
//ZipSync = Meteor.wrapAsync(Zip);
//UnzipSync = Meteor.wrapAsync(Unzip);
