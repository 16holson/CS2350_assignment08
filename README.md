# Starter Project
A starter project for CS2350 powered by webpack.

## Instructions
After you clone or download this repository from GitHub, run the following to install required NPM packages. You only need to do this once.

```bash
npm install
```

Run the following to start the local development server:

```bash
npm start
```

If asked to deploy your application to a web server, run the following to compile and deploy your project from `src` to `dist`:
```bash
npm run deploy
```
and then upload the contents of the `dist` folder into the web server.


Visit http://localhost:8080/ in your browser (Chrome and/or Firefox are recommended) to view your site. With the development server running, any change you make is compiled and seen automatically in the browser.

**NOTE**: All your HTML/CSS/Javascript code should go into the correct files under the `src` folder and not under `dist` folder. The contents of the `dist` folder are what gets deployed to the server and rendered to the browser; they from compiling the `src` folder. 
