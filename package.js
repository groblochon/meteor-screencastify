Package.describe({
  name: 'picman:screencastify',
  version: '0.0.2',
  summary: "Screencastify for Meteor",
  git: 'https://github.com/groblochon/meteor-screencastify',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.add_files(".npm/plugin/compileTraceur/node_modules/traceur/bin/traceur-runtime.js");
  api.add_files('castify-api.js', 'client');
});

Package._transitional_registerBuildPlugin({
  name: "compileTraceur",
  use: [],
  sources: [
    "plugin/compile-traceur.js"
  ],
  npmDependencies: {"traceur": "0.0.41"}
});