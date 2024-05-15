export const corsOptions = {
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    // origin: 'http://localhost:3000',
    origin: 'https://arbor-project-client.vercel.app',
    exposedHeaders: '*',
};