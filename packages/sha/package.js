Package.describe({
  version: '1.0.4-beta.15',
  summary: 'SHA256 implementation',
  git: 'https://github.com/meteor/meteor'
});

Package.onUse(function (api) {
  api.export('SHA256');
  api.addFiles('sha256.js');
});
