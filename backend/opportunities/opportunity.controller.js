import Opportunity from './opportunity.model.js';

export const create = (req, res) => {
    console.log("Request body:", req.body);
    console.log("Required fields:", {
        title: !!req.body.title, 
        description: !!req.body.description, 
        posted_by: !!req.body.posted_by, 
        type: !!req.body.type
    });
    if (!req.body.title || !req.body.description || !req.body.posted_by || !req.body.type) {
        return res.status(400).send({
            message: "Required fields cannot be empty"
        });
    }

    // Create an Opportunity
    const opportunity = new Opportunity({
        title: req.body.title,
        description: req.body.description,
        posted_by: req.body.posted_by,
        company: req.body.company,
        location: req.body.location,
        requirements: req.body.requirements,
        deadline: req.body.deadline,
        type: req.body.type,
        needs_approval: req.body.needs_approval !== undefined ? req.body.needs_approval : true,
        approved: req.body.approved !== undefined ? req.body.approved : false,
        approved_by: req.body.approved_by,
        is_paid: req.body.is_paid !== undefined ? req.body.is_paid : false,
        amount: req.body.amount,
        contactEmail: req.body.contactEmail,
        link: req.body.link
    });

    // Save Opportunity in the database
    opportunity.save()
        .then(data => {
            res.status(201).send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Opportunity."
            });
        });
};

export const findAll = (req, res) => {
    Opportunity.find()
        .then(opportunities => {
            res.send(opportunities);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving opportunities."
            });
        });
};

export const findOne = (req, res) => {
    Opportunity.findById(req.params.id)
        .then(opportunity => {
            if (!opportunity) {
                return res.status(404).send({
                    message: "Opportunity not found with id " + req.params.id
                });
            }
            res.send(opportunity);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Opportunity not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving opportunity with id " + req.params.id
            });
        });
};

export const update = (req, res) => {
    if (!req.body.title || !req.body.description || !req.body.posted_by || !req.body.type) {
        return res.status(400).send({
            message: "Required fields cannot be empty"
        });
    }

    // Find opportunity and update it with the request body
    Opportunity.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        posted_by: req.body.posted_by,
        company: req.body.company,
        location: req.body.location,
        requirements: req.body.requirements,
        deadline: req.body.deadline,
        type: req.body.type,
        needs_approval: req.body.needs_approval,
        approved: req.body.approved,
        approved_by: req.body.approved_by,
        is_paid: req.body.is_paid,
        amount: req.body.amount,
        contactEmail: req.body.contactEmail,
        link: req.body.link
    }, { new: true })
        .then(opportunity => {
            if (!opportunity) {
                return res.status(404).send({
                    message: "Opportunity not found with id " + req.params.id
                });
            }
            res.send(opportunity);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Opportunity not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error updating opportunity with id " + req.params.id
            });
        });
};

export const deleteOpportunity = (req, res) => {
    Opportunity.findByIdAndRemove(req.params.id)
        .then(opportunity => {
            if (!opportunity) {
                return res.status(404).send({
                    message: "Opportunity not found with id " + req.params.id
                });
            }
            res.send({ message: "Opportunity deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Opportunity not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Could not delete opportunity with id " + req.params.id
            });
        });
};

export const findByCompany = (req, res) => {
    Opportunity.find({ company: req.params.company })
        .then(opportunities => {
            res.send(opportunities);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving opportunities."
            });
        });
};

export default {
    create,
    findAll,
    findOne,
    update,
    deleteOpportunity,
    findByCompany
};
