import swaggerJsdoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Fitness Gym API",
      version: "1.0.0",
      description: "API documentation for Fitness Gym application",
    },
  },
  apis: ["**/swaggerInfo.js"], // Путь к вашим файлам с комментариями Swagger
};

const specs = swaggerJsdoc(options);

export default specs;
