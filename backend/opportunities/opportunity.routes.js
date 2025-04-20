import express from 'express';
import opportunities from './opportunity.controller.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Opportunity:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - posted_by
 *         - type
 *       properties:
 *         title:
 *           type: string
 *           description: Job title
 *         description:
 *           type: string
 *           description: Detailed description of the opportunity
 *         posted_by:
 *           type: string
 *           description: Username of the person posting
 *         company:
 *           type: string
 *           description: Company offering the opportunity
 *         location:
 *           type: string
 *           description: Job location
 *         requirements:
 *           type: string
 *           description: Job requirements
 *         deadline:
 *           type: string
 *           format: date-time
 *           description: Application deadline
 *         type:
 *           type: string
 *           enum: [internship, job, part-time, contract, full-time]
 *           description: Type of opportunity
 *         needs_approval:
 *           type: boolean
 *           default: true
 *           description: Whether opportunity needs approval
 *         approved:
 *           type: boolean
 *           default: false
 *           description: Whether opportunity is approved
 *         is_paid:
 *           type: boolean
 *           default: false
 *           description: Whether opportunity is paid
 *         amount:
 *           type: string
 *           description: Compensation amount
 */

/**
 * @swagger
 * /api/opportunities:
 *   post:
 *     summary: Create a new opportunity
 *     tags: [Opportunities]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Opportunity'
 *     responses:
 *       200:
 *         description: Opportunity created successfully
 *       400:
 *         description: Required fields cannot be empty
 *       500:
 *         description: Server error
 */
router.post('/', opportunities.create);

/**
 * @swagger
 * /api/opportunities:
 *   get:
 *     summary: Get all opportunities
 *     tags: [Opportunities]
 *     responses:
 *       200:
 *         description: List of opportunities
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Opportunity'
 */
router.get('/', opportunities.findAll);

/**
 * @swagger
 * /api/opportunities/{id}:
 *   get:
 *     summary: Get an opportunity by ID
 *     tags: [Opportunities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Opportunity data
 *       404:
 *         description: Opportunity not found
 */
router.get('/:id', opportunities.findOne);

/**
 * @swagger
 * /api/opportunities/{id}:
 *   put:
 *     summary: Update an opportunity
 *     tags: [Opportunities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Opportunity'
 *     responses:
 *       200:
 *         description: Opportunity updated successfully
 *       404:
 *         description: Opportunity not found
 */
router.put('/:id', opportunities.update);

/**
 * @swagger
 * /api/opportunities/{id}:
 *   delete:
 *     summary: Delete an opportunity
 *     tags: [Opportunities]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Opportunity deleted successfully
 *       404:
 *         description: Opportunity not found
 */
router.delete('/:id', opportunities.deleteOpportunity);

/**
 * @swagger
 * /api/opportunities/company/{company}:
 *   get:
 *     summary: Find opportunities by company
 *     tags: [Opportunities]
 *     parameters:
 *       - in: path
 *         name: company
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of opportunities at the company
 *       404:
 *         description: No opportunities found
 */
router.get('/company/:company', opportunities.findByCompany);

export default router;
