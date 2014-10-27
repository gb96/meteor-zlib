// Unit tests for gb96:zlib
Tinytest.add('zlib', function (test) {
  var isDefined = false;
  try {
    zlib;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "zlib is not defined");
  test.isTrue(Package['gb96:zlib'].zlib, "Package.gb96:zlib.zlib is not defined");

  var gzip = zlib.gzip;
  test.isTrue(gzip);
  test.isTrue(gzipSync);
});
