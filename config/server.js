module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "869aee9e31e0a41761ab149682194d62"),
    },
    url: "/dashboard",
  },
});
