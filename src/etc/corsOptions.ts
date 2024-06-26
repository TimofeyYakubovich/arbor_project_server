export const corsOptions = {
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    // credentials: true,
    // origin: 'https://arbor-project-client.vercel.app',
    // exposedHeaders: '*',

    // "origin": "https://arbor-project-client.vercel.app",
    "origin": true,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
};