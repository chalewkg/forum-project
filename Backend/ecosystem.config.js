module.exports = {
  apps: [
    {
      name: 'forum-project-backend',
      script: 'app.js',
      env: {
        HOST: '127.0.0.1',
        USER: 'evangadi_db',
        PASSWORD: '0001password',
        DATABASE: 'evangadi_db',
        PORT: 5500,
        JWT_SECRET: '9QhsdGsANubkUGHEhaMwBvRbAvLiquHTehjlpds7888',
        FRONTEND_URL: 'http://evngadiforum.com'
      }
    }
  ]
};
