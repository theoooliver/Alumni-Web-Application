import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.SWAGGER_PORT || 2456;

// Enable CORS
app.use(cors());

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Alumni Portal API',
      version: '1.0.0',
      description: 'API for Alumni Portal web application',
      contact: {
        name: 'Your Name',
        email: 'your.email@example.com',
      },
    },
    servers: [
      {
        url: `http://${process.env.API_HOST || 'localhost'}:${process.env.PORT || 5000}/api`,
        description: 'Development server',
      },
    ],
  },
  apis: ['./**/**.routes.js'], // Path to the API routes files
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Swagger UI route
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs, { 
  explorer: true,
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "Alumni Portal API Documentation"
}));

// Start the server
app.listen(PORT, () => {
  console.log(`Swagger documentation available at http://localhost:${PORT}`);
});
