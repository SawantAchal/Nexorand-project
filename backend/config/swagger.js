import swaggerUi from 'swagger-ui-express';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// Load Swagger JSON file
const swaggerDocument = JSON.parse(readFileSync(resolve('swagger/swagger.json'), 'utf-8'));

// Function to setup Swagger UI
export const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
