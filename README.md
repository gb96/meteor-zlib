meteor-zlib
===========

Meteor smart package wrapper for node builtin [zlib](http://nodejs.org/api/zlib.html).
Currently server-side only.

This package wraps some async [zlib convenience methods](http://nodejs.org/api/zlib.html#zlib_convenience_methods) methods with blocking versions as well as exposing the original versions:

*  inflate -> inflateSync
*  deflate -> deflateSync
*  inflateRaw -> inflateRawSync
*  deflateRaw -> deflateRawSync
*  gunzip -> gunzipSync
*  gzip -> gzipSync
*  unzip -> unzipSync

The unzip and unzipSync methods are special in that they auto-detect which decompression method to use based on the header read from the Buffer.


Installation
------------

```
meteor add gb96:zlib
```

Calling Async Methods
---------------------
These methods are non-blocking and require a callback function passed as 2nd argument:

```
// Compress a buffer:
deflate(uncompressedBuffer, function(err, compressedResult) { ... });
// Decompress a buffer:
inflate(compressedBuffer, function(err, decompressedResult) { ... });
```

Calling Sync Methods
---------------------
These methods are blocking, implemented via [peerlibrary:blocking](https://atmospherejs.com/peerlibrary/blocking).

What happens in the event of an error is not well documented. Possibly a null value is returned, with error
printed to console.

```
// Compress a buffer:
var compressedResult = deflateSync(uncompressedBuffer);
// Decompress a buffer:
var decompressedResult = inflateSync(compressedBuffer);
```
