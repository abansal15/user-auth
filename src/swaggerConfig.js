import swaggerJsdoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Documentation",
            version: "1.0.0",
            description: "Documentation for your API",
        },
        servers: [
            {
                url: "http://localhost:8000/api/v1", // Base URL for API
            },
        ],
    },
    // Path to the route files with Swagger annotations
    apis: ["./src/routes/*.js"], // Update the path to match your folder structure
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
