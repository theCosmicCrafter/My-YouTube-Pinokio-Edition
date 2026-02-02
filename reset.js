module.exports = {
  run: [
    {
      method: "fs.rm",
      params: {
        path: "env"  // Remove the Python virtual environment
      }
    },
    {
      method: "fs.rm",
      params: {
        path: "cache"  // Remove the cache folder
      }
    },
    {
      method: "notify",
      params: {
        html: "Reset complete! Virtual environment and cache have been removed. Click Install to reinstall dependencies."
      }
    }
  ]
}
