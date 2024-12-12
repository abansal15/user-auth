import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerConfig.js';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "10kb" }))
app.use(express.urlencoded({ extended: true, limit: "10kb" }))
app.use(express.static("public"))
app.use(cookieParser())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// routes import
import userRouter from './routes/user.routes.js';
import healthcheckRouter from "./routes/healthcheck.routes.js"
import authCheck from "./routes/authCheck.route.js"

// routes declaration
app.use("/api/v1/users", userRouter)
app.use("/api/v1/healthcheck", healthcheckRouter)
app.use("/api/v1/auth", authCheck)
app.get('/swagger-json', (req, res) => {
    res.json(swaggerSpec);
});


//  for eg 
// http://localhost:8000/api/v1/users/register

export { app }

