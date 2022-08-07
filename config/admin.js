module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ec80aa60755bb4e2b0677bd33aa67121'),
  },
});
