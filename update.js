module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "git pull",
        path: "."  // Pull the launcher repo
      }
    },
    {
      when: "{{exists('app')}}",  // Only if app folder exists
      method: "shell.run",
      params: {
        message: "git pull",
        path: "app"  // Pull the app repo too
      }
    },
    {
      method: "notify",
      params: {
        html: "Update complete! Both launcher and app have been updated."
      }
    }
  ]
}
