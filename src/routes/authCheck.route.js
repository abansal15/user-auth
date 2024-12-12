import { Router } from 'express';
import { authCheck } from '../controllers/authCheck.controller.js';

const router = Router();

/**
 * @swagger
 * /auth/status:
 *   post:
 *     summary: Check authentication status
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Authentication status checked successfully
 */
router.route('/status').post(authCheck);

export default router;
