Package.describe({
  name: 'gb96:zlib',
  summary: 'zlib compression library wrapped for meteor. Includes blocking versions of async methods.',
  version: '0.1.1',
  git: 'https://github.com/gb96/meteor-zlib.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.4');
  api.use('peerlibrary:blocking@0.4.2', 'server');

  api.addFiles('gb96:zlib.js');

  // Export async convenience methods from zlib:
  api.export('Deflate', 'server');
  api.export('Inflate', 'server');
  api.export('Gzip', 'server');
  api.export('Gunzip', 'server');
  api.export('DeflateRaw', 'server');
  api.export('InflateRaw', 'server');
  api.export('Zip', 'server');
  api.export('Unzip', 'server');

  // Export wrapped (blocking) convenience methods:
  api.export('DeflateSync', 'server');
  api.export('InflateSync', 'server');
  api.export('GzipSync', 'server');
  api.export('GunzipSync', 'server');
  api.export('DeflateRawSync', 'server');
  api.export('InflateRawSync', 'server');
  api.export('ZipSync', 'server');
  api.export('UnzipSync', 'server');
});

// Unit tests:
Package.onTest(function(api) {
  api.use('tinytest');
  api.use('gb96:zlib', 'server');
  api.addFiles('gb96:zlib-tests.js', 'server');
});
