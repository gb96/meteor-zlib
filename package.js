Package.describe({
  name: 'gb96:zlib',
  summary: 'zlib compression library wrapped for meteor. Includes blocking versions of async methods.',
  version: '0.1.0',
  git: 'https://github.com/gb96/meteor-zlib.git'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.4');
  api.addFiles('gb96:zlib.js');

  api.export('zlib');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('gb96:zlib');
  api.addFiles('gb96:zlib-tests.js');
});
