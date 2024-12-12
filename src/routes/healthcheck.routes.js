import { Router } from 'express';
import { healthcheck } from '../controllers/healthcheck.controller.js';

const router = Router();

/**
 * @swagger
 * /healthcheck:
 *   get:
 *     summary: Perform a health check
 *     responses:
 *       200:
 *         description: Server is healthy
 */
router.route('/').get(healthcheck);

export default router;
