meteor-zlib
===========

Meteor smart package wrapper for node builtin [zlib](http://nodejs.org/api/zlib.html).
Currently server-side only.
This is an early work-in-progress and possibly not ready for public use.

This package wraps some async [zlib convenience methods](http://nodejs.org/api/zlib.html#zlib_convenience_methods) methods with blocking versions as well as exposing the original versions:

*  Inflate -> InflateSync
*  Deflate -> DeflateSync
*  InflateRaw -> InflateRawSync
*  DeflateRaw -> DeflateRawSync
*  GunzipRaw -> GunzipRawSync
*  GzipRaw -> GzipRawSync
*  GunzipRaw -> GunzipRawSync
*  GzipRaw -> GzipRawSync

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
Deflate(uncompressedBuffer, function(err, compressedResult) { ... });
// Decompress a buffer:
Inflate(compressedBuffer, function(err, decompressedResult) { ... });
```

Calling Sync Methods
---------------------
These methods are blocking, implemented via [Meteor.wrapAsync()](http://docs.meteor.com/#meteor_wrapasync).

What happens in the event of an error is not well documented. Possibly a null value is returned.

```
// Compress a buffer:
var compressedResult = DeflateSync(uncompressedBuffer);
// Decompress a buffer:
var decompressedResult = Inflate(compressedBuffer);
```
