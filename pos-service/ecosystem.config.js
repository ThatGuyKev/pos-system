module.exports = {
  apps: [
    {
      name: "pos-service",
      script: "dist/bundle.js",
      env: {
        PORT: 80,
        NODE_ENVE: "production",
      },
      error_file: "err.log",
      out_file: "out.log",
      log_file: "combined.log",
      time: true,
    },
  ],
};
