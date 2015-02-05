# Example Node Server

### Running the Server

```bash
$ npm install
$ node app.js
```

### Check it out

Navigate to http://localhost:3000. You should see "hello world" in your browser.

Now that we've added some middlewares, you should see some things getting logged to the server console (in your terminal). Navigating to ANY route should cause it to print

```bash
I am a middleware!
some value
```

If you navigate to http://localhost:3000/middleware/test, it won't look great in the browser, but you should see an extra log from the route-specific middleware we added:

```bash
I am a middleware!
I only run on /middleware/test
some value
```