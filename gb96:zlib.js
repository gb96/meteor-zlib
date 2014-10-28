/**
 * Copyright Greg Bowering <gerg.bowering@gmail.com> 2014 All Rights Reserved
 *
 * This simple Meteor library wrapper package was inspired by other similar
 * packages, including "AWS SDK smart package" by Peerlibrary:
 * https://github.com/peerlibrary/meteor-aws-sdk/tree/meteor0.9.0
 *
 * @author Greg Bowering <gerg.bowering@gmail.com>
 */

var zlib = Npm.require('zlib');

// Export some async convenience methods from zlib:
deflate = zlib.deflate;
inflate = zlib.inflate;
gzip = zlib.gzip;
gunzip = zlib.gunzip;
deflateRaw = zlib.deflateRaw;
inflateRaw = zlib.inflateRaw;
unzip = zlib.unzip;

// Export wrapped async methods.
// XXX note zlib *Sync methods planned for inclusion in nodejs v0.11 (currently unstable)
deflateSync = blocking(zlib.deflate);
inflateSync = blocking(zlib.inflate);
gzipSync = blocking(zlib.gzip);
gunzipSync = blocking(zlib.gunzip);
deflateRawSync = blocking(zlib.deflateRaw);
inflateRawSync = blocking(zlib.inflateRaw);
unzipSync = blocking(zlib.unzip);
