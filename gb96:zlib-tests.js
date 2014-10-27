// Unit tests for gb96:zlib
Tinytest.add('always pass', function (test) {
  test.isTrue(true, "This test always passes");
});

Tinytest.add('Deflate method defined', function (test) {
  var isDefined = false;
  try {
    Deflate;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "Deflate is not defined");
});

Tinytest.add('Deflate defined in package', function (test) {
  test.isTrue(Package['gb96:zlib'].Deflate, "Package.gb96:zlib.Deflate is not defined");
});

Tinytest.add('DeflateSync method defined', function (test) {
  var isDefined = false;
  try {
    DeflateSync;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "DeflateSync is not defined");
});

Tinytest.add('DeflateSync defined in package', function (test) {
  test.isTrue(Package['gb96:zlib'].DeflateSync, "Package.gb96:zlib.DeflateSync is not defined");
});

Tinytest.add('Inflate method defined', function (test) {
  var isDefined = false;
  try {
    Inflate;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "Inflate is not defined");
});

Tinytest.add('Inflate defined in package', function (test) {
  test.isTrue(Package['gb96:zlib'].Inflate, "Package.gb96:zlib.Inflate is not defined");
});

Tinytest.add('InflateSync method defined', function (test) {
  var isDefined = false;
  try {
    InflateSync;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "InflateSync is not defined");
});

Tinytest.add('InflateSync defined in package', function (test) {
  test.isTrue(Package['gb96:zlib'].InflateSync, "Package.gb96:zlib.InflateSync is not defined");
});
