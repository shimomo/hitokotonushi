var config = {
  mode: 'debug',

  debug: {
    scheme: 'http',
    host: 'debug.example.com'
  },

  release: {
    scheme: 'https',
    host: 'release.example.com'
  },

  path: {
    users: '/api/v1/users',
    groups: '/api/v1/groups'
  }
};
