module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1635056f357ab694dcc838894ddf5570'),
  },
});
