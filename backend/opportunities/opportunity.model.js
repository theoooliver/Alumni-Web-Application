import mongoose from 'mongoose';

const OpportunitySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    posted_by: {
        type: String,
        required: true
    },
    company: {
        type: String
    },
    location: {
        type: String
    },
    requirements: {
        type: String
    },
    deadline: {
        type: Date
    },
    type: {
        type: String,
        enum: ['internship', 'job', 'part-time', 'contract', 'full-time'],
        required: true
    },
    needs_approval: {
        type: Boolean,
        default: true
    },
    approved: {
        type: Boolean,
        default: false
    },
    approved_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },
    is_paid: {
        type: Boolean,
        default: false
    },
    amount: {
        type: String
    },
    contactEmail: {
        type: String
    },
    link: {
        type: String
    }
}, {
    timestamps: true
});

export default mongoose.model('Opportunity', OpportunitySchema);
