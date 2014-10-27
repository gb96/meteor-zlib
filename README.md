meteor-zlib
===========

Meteor smart package wrapper for node builtin zlib.
Currently server-side only.
This is an early work-in-progress and is not ready for public use.

In addition to stardard zlib methods, this package wraps some async zlib methods with blocking versions:

*  inflate -> inflateSync
*  deflate -> deflateSync
*  inflateRaw -> inflateRawSync
*  deflateRaw -> deflateRawSync
*  gunzipRaw -> gunzipRawSync
*  gzipRaw -> gzipRawSync
*  gunzipRaw -> gunzipRawSync
*  gzipRaw -> gzipRawSync

Installation
------------

```
meteor add gb96:zlib
```
