import express from 'express';
import majors from './major.controller.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Major:
 *       type: object
 *       required:
 *         - name
 *         - department
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the major
 *         department:
 *           type: string
 *           description: Department offering the major
 *         description:
 *           type: string
 *           description: Description of the major
 *         degree_types:
 *           type: array
 *           items:
 *             type: string
 *           description: Types of degrees offered (BA, BS, etc)
 */

/**
 * @swagger
 * /api/majors:
 *   post:
 *     summary: Create a new major
 *     tags: [Majors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Major'
 *     responses:
 *       200:
 *         description: Major created successfully
 *       400:
 *         description: Required fields cannot be empty
 */
router.post('/', majors.create);

/**
 * @swagger
 * /api/majors:
 *   get:
 *     summary: Get all majors
 *     tags: [Majors]
 *     responses:
 *       200:
 *         description: List of all majors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Major'
 */
router.get('/', majors.findAll);

/**
 * @swagger
 * /api/majors/{name}:
 *   get:
 *     summary: Get a major by name
 *     tags: [Majors]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Major data
 *       404:
 *         description: Major not found
 */
router.get('/:name', majors.findOne);

/**
 * @swagger
 * /api/majors/{name}:
 *   put:
 *     summary: Update a major
 *     tags: [Majors]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Major'
 *     responses:
 *       200:
 *         description: Major updated successfully
 *       404:
 *         description: Major not found
 */
router.put('/:name', majors.update);

/**
 * @swagger
 * /api/majors/{name}:
 *   delete:
 *     summary: Delete a major
 *     tags: [Majors]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Major deleted successfully
 *       404:
 *         description: Major not found
 */
router.delete('/:name', majors.deleteMajor);

/**
 * @swagger
 * /api/majors/department/{department}:
 *   get:
 *     summary: Find majors by department
 *     tags: [Majors]
 *     parameters:
 *       - in: path
 *         name: department
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of majors in the department
 *       404:
 *         description: No majors found in this department
 */
router.get('/department/:department', majors.findByDepartment);

export default router;
