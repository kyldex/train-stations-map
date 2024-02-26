# Train Stations Map

Train stations map showing the number of passengers by year in the Île-de-France region.

## Dev

You need A MapTiler API key, you can get one for free : https://www.maptiler.com. Then set the environment variable in your own .env at the root of the directory (see .env.example).

```bash
# install dependencies
npm i
# run the project locally
npm start
```

Requires WebGL 2 compatible browsers and graphics hardware, due to maplibre v3.  

Node.js 18.2.0 or higher is required, due to webpack-dev-server v5 and css-minimizer-webpack-plugin v6.
