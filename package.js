Package.describe({
  name: 'groblochon:screencastify',
  version: '0.0.1',
  summary: "Screencastify for Meteor",
  git: 'https://github.com/groblochon/meteor-screencastify',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.add_files('castify-api.js', 'client');
});
