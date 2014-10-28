/**
 * Copyright Greg Bowering <gerg.bowering@gmail.com> 2014 All Rights Reserved
 *
 * Unit tests for gb96:zlib
 */

var uncompressedString = 'The quick brown fox jumped over the lazy dog.';
var uncompressedBuffer = new Buffer(uncompressedString, 'utf-8');

Tinytest.add('deflate method defined', function (test) {
  var isDefined = false;
  try {
    deflate;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "deflate is not defined");
});

Tinytest.add('deflate defined in package', function (test) {
  test.isTrue(Package['gb96:zlib'].deflate, "Package.gb96:zlib.deflate is not defined");
});

Tinytest.add('deflateSync method defined', function (test) {
  var isDefined = false;
  try {
    deflateSync;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "deflateSync is not defined");
});

Tinytest.add('deflateSync defined in package', function (test) {
  test.isTrue(Package['gb96:zlib'].deflateSync, "Package.gb96:zlib.deflateSync is not defined");
});

Tinytest.add('inflate method defined', function (test) {
  var isDefined = false;
  try {
    inflate;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "inflate is not defined");
});

Tinytest.add('inflate defined in package', function (test) {
  test.isTrue(Package['gb96:zlib'].inflate, "Package.gb96:zlib.inflate is not defined");
});

Tinytest.add('inflateSync method defined', function (test) {
  var isDefined = false;
  try {
    inflateSync;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "inflateSync is not defined");
});

Tinytest.add('inflateSync defined in package', function (test) {
  test.isTrue(Package['gb96:zlib'].inflateSync, "Package.gb96:zlib.inflateSync is not defined");
});

// Test gzipping then gunzipping to get back original string:
Tinytest.add('Call gzipSync then gunzipSync', function (test) {
  var compressedBuffer = gzipSync(uncompressedBuffer);
  test.isTrue(compressedBuffer, "gzipSync failed to return a value");

  var uncompressedBuffer2 = gunzipSync(compressedBuffer);
  test.isTrue(uncompressedBuffer2, "gunzipSync failed to return a value");

  var uncompressedString2 = uncompressedBuffer2.toString('utf-8');
  //console.log('uncompressedString2=' + uncompressedString2);
  test.equal(uncompressedString, uncompressedString2, "Expected original string to be returned after compress+uncompress.");
});

// Test deflating then inflating to get back original string:
Tinytest.add('Call deflateSync then inflateSync', function (test) {
  var compressedBuffer = deflateSync(uncompressedBuffer);
  test.isTrue(compressedBuffer, "deflateSync failed to return a value");

  var uncompressedBuffer2 = inflateSync(compressedBuffer);
  test.isTrue(uncompressedBuffer2, "inflateSync failed to return a value");

  var uncompressedString2 = uncompressedBuffer2.toString('utf-8');
  //console.log('uncompressedString2=' + uncompressedString2);
  test.equal(uncompressedString, uncompressedString2, "Expected original string to be returned after compress+uncompress.");
});

// Test deflating then unzipping to get back original string:
Tinytest.add('Call gzipSync then unzipSync', function (test) {
  var compressedBuffer = gzipSync(uncompressedBuffer);
  test.isTrue(compressedBuffer, "gzipSync failed to return a value");

  var uncompressedBuffer2 = unzipSync(compressedBuffer);
  test.isTrue(uncompressedBuffer2, "unzipSync failed to return a value");

  var uncompressedString2 = uncompressedBuffer2.toString('utf-8');
  //console.log('uncompressedString2=' + uncompressedString2);
  test.equal(uncompressedString, uncompressedString2, "Expected original string to be returned after compress+uncompress.");
});

// Test deflating then unzipping to get back original string:
Tinytest.add('Call deflateSync then unzipSync', function (test) {
  var compressedBuffer = deflateSync(uncompressedBuffer);
  test.isTrue(compressedBuffer, "deflateSync failed to return a value");

  var uncompressedBuffer2 = unzipSync(compressedBuffer);
  test.isTrue(uncompressedBuffer2, "unzipSync failed to return a value");

  var uncompressedString2 = uncompressedBuffer2.toString('utf-8');
  //console.log('uncompressedString2=' + uncompressedString2);
  test.equal(uncompressedString, uncompressedString2, "Expected original string to be returned after compress+uncompress.");
});


// TODO test deflateRawSync and inflateRawSync

