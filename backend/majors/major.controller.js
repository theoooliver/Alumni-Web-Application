import Major from './major.model.js';

export const create = (req, res) => {
    if (!req.body.name || !req.body.description) {
        return res.status(400).send({
            message: "Major name and description are required"
        });
    }

    // Create a Major
    const major = new Major({
        name: req.body.name,
        description: req.body.description,
        department: req.body.department,
        degree_types: req.body.degree_types,
        requirements: req.body.requirements,
        website: req.body.website,
        contact_email: req.body.contact_email
    });

    // Save Major in the database
    major.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            if (err.code === 11000) {
                return res.status(400).send({
                    message: "Major with this name already exists"
                });
            }
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Major."
            });
        });
};

export const findAll = (req, res) => {
    Major.find()
        .then(majors => {
            res.send(majors);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving majors."
            });
        });
};

export const findOne = (req, res) => {
    Major.findOne({ name: req.params.name })
        .then(major => {
            if (!major) {
                return res.status(404).send({
                    message: "Major not found with name " + req.params.name
                });
            }
            res.send(major);
        }).catch(err => {
            return res.status(500).send({
                message: "Error retrieving major with name " + req.params.name
            });
        });
};

export const update = (req, res) => {
    if (!req.body.name || !req.body.description) {
        return res.status(400).send({
            message: "Major name and description are required"
        });
    }

    // Find major and update it with the request body
    Major.findOneAndUpdate({ name: req.params.name }, {
        name: req.body.name,
        description: req.body.description,
        department: req.body.department,
        degree_types: req.body.degree_types,
        requirements: req.body.requirements,
        website: req.body.website,
        contact_email: req.body.contact_email
    }, { new: true })
        .then(major => {
            if (!major) {
                return res.status(404).send({
                    message: "Major not found with name " + req.params.name
                });
            }
            res.send(major);
        }).catch(err => {
            if (err.code === 11000) {
                return res.status(400).send({
                    message: "Major name already exists"
                });
            }
            return res.status(500).send({
                message: "Error updating major with name " + req.params.name
            });
        });
};

export const deleteMajor = (req, res) => {
    Major.findOneAndDelete({ name: req.params.name })
        .then(major => {
            if (!major) {
                return res.status(404).send({
                    message: "Major not found with name " + req.params.name
                });
            }
            res.send({ message: "Major deleted successfully!" });
        }).catch(err => {
            return res.status(500).send({
                message: "Could not delete major with name " + req.params.name
            });
        });
};

export const findByDepartment = (req, res) => {
    Major.find({ department: req.params.department })
        .then(majors => {
            res.send(majors);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving majors."
            });
        });
};

export default {
    create,
    findAll,
    findOne,
    update,
    deleteMajor,
    findByDepartment
};
