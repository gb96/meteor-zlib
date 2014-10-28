/**
 * Copyright Greg Bowering <gerg.bowering@gmail.com> 2014 All Rights Reserved
 */
Package.describe({
  name: 'gb96:zlib',
  summary: 'zlib compression library wrapped for meteor. Includes blocking versions of async methods.',
  version: '0.2.0',
  git: 'https://github.com/gb96/meteor-zlib.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.4');

  // peerlibrary:blocking used to create blocking versions of zlib aynchronous methods.
  // can possibly be removed when nodejs v.0.11 is stable since it will include
  // syncrhonous zlib convenience methods.
  api.use('peerlibrary:blocking@0.4.2', 'server');

  api.addFiles('gb96:zlib.js');

  // Export async convenience methods from zlib:
  api.export('deflate', 'server');
  api.export('inflate', 'server');
  api.export('gzip', 'server');
  api.export('gunzip', 'server');
  api.export('deflateRaw', 'server');
  api.export('inflateRaw', 'server');
  api.export('unzip', 'server');

  // Export wrapped (blocking) convenience methods:
  api.export('deflateSync', 'server');
  api.export('inflateSync', 'server');
  api.export('gzipSync', 'server');
  api.export('gunzipSync', 'server');
  api.export('deflateRawSync', 'server');
  api.export('inflateRawSync', 'server');
  api.export('unzipSync', 'server');
});

// Unit tests:
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('gb96:zlib', 'server');
  api.addFiles('gb96:zlib-tests.js', 'server');
});
