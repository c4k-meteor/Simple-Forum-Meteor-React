Package.describe({
  name: 'simpleforum:forum',
  version: '0.0.1',
  summary: 'SimpleForum forum package',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use([
    'simpleforum:lib',
    'simpleforum:users'
  ])

  api.addFiles([
    'lib/categories.js',
    'lib/threads.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/components/categories/add.jsx',
    'lib/client/components/categories/list-item.jsx',
    'lib/client/components/categories/list.jsx',
    'lib/client/components/categories/manage.jsx',
    'lib/client/components/threads/add.jsx',
    'lib/client/components/threads/list.jsx',
    'lib/client/components/threads/list-item.jsx',
    'lib/client/components/threads/create-button.jsx'
  ], 'client');

  api.addFiles([
    'lib/server/methods/categories.js',
    'lib/server/publications/categories.js',
    'lib/server/methods/threads.js',
    'lib/server/publications/threads.js',
    'lib/server/bootstrap.js'
  ], 'server');

  api.export([
    'Categories',
    'CategoriesManage',
    'CategoriesList',
    'Threads',
    'ThreadsAdd',
    'ThreadsList',
    'ThreadsCreateButton'
  ]);
});

// TODO
// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('kam:forum');
//   api.addFiles('forum-tests.js');
// });
