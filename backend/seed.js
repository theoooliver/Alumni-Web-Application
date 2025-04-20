import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './users/user.model.js';
import Opportunity from './opportunities/opportunity.model.js';
import Major from './majors/major.model.js';

dotenv.config();

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/project2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected for seeding'))
  .catch(err => console.error('MongoDB connection error:', err));

// Sample Users data - at least 16 users for pagination
const users = [
  {
    user_name: 'jdoe',
    first_name: 'John',
    last_name: 'Doe',
    year_graduated: 2020,
    major: 'Computer Science',
    company: 'Google',
    title: 'Software Engineer',
    email: 'john.doe@example.com',
    linkedin_link: 'linkedin.com/in/johndoe'
  },
  {
    user_name: 'jsmith',
    first_name: 'Jane',
    last_name: 'Smith',
    year_graduated: 2019,
    major: 'Business Administration',
    company: 'Amazon',
    title: 'Product Manager',
    email: 'jane.smith@example.com',
    linkedin_link: 'linkedin.com/in/janesmith'
  },
  {
    user_name: 'mwilson',
    first_name: 'Mike',
    last_name: 'Wilson',
    year_graduated: 2018,
    major: 'Data Science',
    company: 'Microsoft',
    title: 'Data Analyst',
    email: 'mike.wilson@example.com',
    linkedin_link: 'linkedin.com/in/mikewilson'
  },
  {
    user_name: 'sjohnson',
    first_name: 'Sarah',
    last_name: 'Johnson',
    year_graduated: 2021,
    major: 'Marketing',
    company: 'Facebook',
    title: 'Marketing Specialist',
    email: 'sarah.johnson@example.com',
    linkedin_link: 'linkedin.com/in/sarahjohnson'
  },
  {
    user_name: 'rlee',
    first_name: 'Robert',
    last_name: 'Lee',
    year_graduated: 2017,
    major: 'Finance',
    company: 'JP Morgan',
    title: 'Financial Analyst',
    email: 'robert.lee@example.com',
    linkedin_link: 'linkedin.com/in/robertlee'
  },
  {
    user_name: 'awilliams',
    first_name: 'Amy',
    last_name: 'Williams',
    year_graduated: 2022,
    major: 'Psychology',
    company: 'Healthcare Inc.',
    title: 'HR Manager',
    email: 'amy.williams@example.com',
    linkedin_link: 'linkedin.com/in/amywilliams'
  },
  {
    user_name: 'dbrown',
    first_name: 'David',
    last_name: 'Brown',
    year_graduated: 2016,
    major: 'Computer Engineering',
    company: 'Apple',
    title: 'Software Developer',
    email: 'david.brown@example.com',
    linkedin_link: 'linkedin.com/in/davidbrown'
  },
  {
    user_name: 'emiller',
    first_name: 'Emma',
    last_name: 'Miller',
    year_graduated: 2019,
    major: 'Biology',
    company: 'Pfizer',
    title: 'Research Scientist',
    email: 'emma.miller@example.com',
    linkedin_link: 'linkedin.com/in/emmamiller'
  },
  {
    user_name: 'jdavis',
    first_name: 'James',
    last_name: 'Davis',
    year_graduated: 2020,
    major: 'English',
    company: 'Publishing House',
    title: 'Editor',
    email: 'james.davis@example.com',
    linkedin_link: 'linkedin.com/in/jamesdavis'
  },
  {
    user_name: 'olivia',
    first_name: 'Olivia',
    last_name: 'Garcia',
    year_graduated: 2021,
    major: 'Nursing',
    company: 'Memorial Hospital',
    title: 'Registered Nurse',
    email: 'olivia.garcia@example.com',
    linkedin_link: 'linkedin.com/in/oliviagarcia'
  },
  {
    user_name: 'wthomas',
    first_name: 'William',
    last_name: 'Thomas',
    year_graduated: 2018,
    major: 'Mechanical Engineering',
    company: 'Tesla',
    title: 'Mechanical Engineer',
    email: 'william.thomas@example.com',
    linkedin_link: 'linkedin.com/in/williamthomas'
  },
  {
    user_name: 'smartinez',
    first_name: 'Sophia',
    last_name: 'Martinez',
    year_graduated: 2022,
    major: 'International Business',
    company: 'Global Trade Inc.',
    title: 'Business Analyst',
    email: 'sophia.martinez@example.com',
    linkedin_link: 'linkedin.com/in/sophiamartinez'
  },
  {
    user_name: 'dwhite',
    first_name: 'Daniel',
    last_name: 'White',
    year_graduated: 2017,
    major: 'Physics',
    company: 'NASA',
    title: 'Research Scientist',
    email: 'daniel.white@example.com',
    linkedin_link: 'linkedin.com/in/danielwhite'
  },
  {
    user_name: 'theoooliver',
    first_name: 'Theo',
    last_name: 'Oliver',
    year_graduated: 2023,
    major: 'Computer Science',
    company: 'Stetson University',
    title: 'Research Assistant',
    email: 'theo.oliver@example.com',
    linkedin_link: 'linkedin.com/in/theooliver'
  },
  {
    user_name: 'mclark',
    first_name: 'Mia',
    last_name: 'Clark',
    year_graduated: 2020,
    major: 'Education',
    company: 'Public Schools District',
    title: 'Teacher',
    email: 'mia.clark@example.com',
    linkedin_link: 'linkedin.com/in/miaclark'
  },
  {
    user_name: 'ahall',
    first_name: 'Alexander',
    last_name: 'Hall',
    year_graduated: 2019,
    major: 'Economics',
    company: 'Economic Research Firm',
    title: 'Economist',
    email: 'alexander.hall@example.com',
    linkedin_link: 'linkedin.com/in/alexanderhall'
  },
];

// Sample Majors data
const majors = [
  {
    name: 'Computer Science',
    department: 'Mathematics and Computer Science',
    description: 'Study of computers and computational systems',
    degree_types: ['BS', 'MS', 'PhD'],
    requirements: 'Mathematics and programming skills',
    website: 'https://example.com/cs',
    contact_email: 'cs@example.edu'
  },
  {
    name: 'Business Administration',
    department: 'Business',
    description: 'Study of business management',
    degree_types: ['BA', 'MBA'],
    requirements: 'Basic accounting and economics knowledge',
    website: 'https://example.com/business',
    contact_email: 'business@example.edu'
  },
  {
    name: 'Data Science',
    department: 'Mathematics and Computer Science',
    description: 'Study of data analysis and interpretation',
    degree_types: ['BS', 'MS'],
    requirements: 'Statistics and programming skills',
    website: 'https://example.com/datascience',
    contact_email: 'datascience@example.edu'
  },
  {
    name: 'Marketing',
    department: 'Business',
    description: 'Study of market analysis and advertising',
    degree_types: ['BA', 'MA'],
    requirements: 'Communication and creative skills',
    website: 'https://example.com/marketing',
    contact_email: 'marketing@example.edu'
  },
  {
    name: 'Finance',
    department: 'Business',
    description: 'Study of financial management and investment',
    degree_types: ['BS', 'MS'],
    requirements: 'Strong mathematics background',
    website: 'https://example.com/finance',
    contact_email: 'finance@example.edu'
  },
  {
    name: 'Psychology',
    department: 'Social Sciences',
    description: 'Study of human behavior and mental processes',
    degree_types: ['BA', 'MA', 'PhD'],
    requirements: 'Interest in human behavior',
    website: 'https://example.com/psychology',
    contact_email: 'psychology@example.edu'
  },
  {
    name: 'Computer Engineering',
    department: 'Engineering',
    description: 'Study of computer hardware and software design',
    degree_types: ['BS', 'MS', 'PhD'],
    requirements: 'Strong mathematics and physics background',
    website: 'https://example.com/compeng',
    contact_email: 'compeng@example.edu'
  },
  {
    name: 'Biology',
    department: 'Natural Sciences',
    description: 'Study of living organisms',
    degree_types: ['BS', 'MS', 'PhD'],
    requirements: 'Interest in life sciences',
    website: 'https://example.com/biology',
    contact_email: 'biology@example.edu'
  }
];

// Sample Opportunities data - at least 16 opportunities for pagination
const opportunities = [
  {
    title: 'Software Engineer Intern',
    description: 'Internship opportunity for computer science students',
    posted_by: 'Google',
    company: 'Google',
    location: 'Mountain View, CA',
    requirements: 'Knowledge of JavaScript, Python',
    deadline: new Date('2023-06-30'),
    type: 'internship',
    needs_approval: true,
    approved: false,
    approved_by: null,
    is_paid: true,
    amount: '25/hr',
    contactEmail: 'careers@google.com',
    link: 'https://careers.google.com'
  },
  {
    title: 'Data Analyst',
    description: 'Full-time position analyzing business data',
    posted_by: 'Amazon',
    company: 'Amazon',
    location: 'Seattle, WA',
    requirements: 'SQL, Excel, Data Visualization',
    deadline: new Date('2023-07-15'),
    type: 'full-time',
    needs_approval: true,
    approved: false,
    approved_by: null,
    is_paid: true,
    amount: '85000',
    contactEmail: 'jobs@amazon.com',
    link: 'https://amazon.jobs'
  },
  {
    title: 'Marketing Assistant',
    description: 'Part-time role supporting marketing team',
    posted_by: 'Facebook',
    company: 'Facebook',
    location: 'Menlo Park, CA',
    requirements: 'Communication skills, Social Media knowledge',
    deadline: new Date('2023-06-20'),
    type: 'part-time',
    needs_approval: true,
    approved: false,
    approved_by: null,
    is_paid: false,
    amount: null,
    contactEmail: 'careers@facebook.com',
    link: 'https://facebook.careers'
  },
  {
    title: 'Frontend Developer',
    description: 'Building user interfaces for web applications',
    posted_by: 'Microsoft',
    company: 'Microsoft',
    location: 'Redmond, WA',
    requirements: 'React, HTML/CSS, JavaScript',
    deadline: new Date('2023-07-30'),
    type: 'full-time',
    needs_approval: true,
    approved: false,
    approved_by: null,
    is_paid: true,
    amount: '95000',
    contactEmail: 'talent@microsoft.com',
    link: 'https://careers.microsoft.com'
  },
  {
    title: 'Research Assistant',
    description: 'Support ongoing research projects',
    posted_by: 'University Research Lab',
    company: 'University Research Lab',
    location: 'Boston, MA',
    requirements: 'Research methods, Data analysis',
    deadline: new Date('2023-08-15'),
    type: 'part-time',
    needs_approval: true,
    approved: false,
    approved_by: null,
    is_paid: false,
    amount: null,
    contactEmail: 'research@university.edu',
    link: 'https://university.edu/jobs'
  },
  {
    title: 'Financial Analyst Intern',
    description: 'Learn financial modeling and analysis',
    posted_by: 'JP Morgan',
    company: 'JP Morgan',
    location: 'New York, NY',
    requirements: 'Finance or Accounting major, Excel skills',
    deadline: new Date('2023-09-01'),
    type: 'internship',
    needs_approval: true,
    approved: false,
    approved_by: null,
    is_paid: true,
    amount: '30/hr',
    contactEmail: 'internships@jpmorgan.com',
    link: 'https://careers.jpmorgan.com'
  },
  {
    title: 'Backend Developer',
    description: 'Building server-side applications',
    posted_by: 'Netflix',
    company: 'Netflix',
    location: 'Los Gatos, CA',
    requirements: 'Node.js, Java, Database experience',
    deadline: new Date('2023-07-20'),
    type: 'full-time',
    needs_approval: true,
    approved: false,
    approved_by: null,
    is_paid: true,
    amount: '120000',
    contactEmail: 'jobs@netflix.com',
    link: 'https://jobs.netflix.com'
  },
  {
    title: 'UX/UI Designer',
    description: 'Creating user interfaces and experiences',
    posted_by: 'Apple',
    company: 'Apple',
    location: 'Cupertino, CA',
    requirements: 'Design portfolio, Figma, Adobe Creative Suite',
    deadline: new Date('2023-08-30'),
    type: 'full-time',
    needs_approval: true,
    approved: false,
    approved_by: null,
    is_paid: true,
    amount: '110000',
    contactEmail: 'design@apple.com',
    link: 'https://apple.com/jobs'
  },
  {
    title: 'Product Manager',
    description: 'Lead product development and strategy',
    posted_by: 'Uber',
    company: 'Uber',
    location: 'San Francisco, CA',
    requirements: '3+ years experience, MBA preferred',
    deadline: new Date('2023-07-10'),
    type: 'full-time',
    needs_approval: true,
    approved: false,
    approved_by: null,
    is_paid: true,
    amount: '130000',
    contactEmail: 'careers@uber.com',
    link: 'https://uber.com/careers'
  },
  {
    title: 'Data Science Intern',
    description: 'Apply machine learning to real-world problems',
    posted_by: 'IBM',
    company: 'IBM',
    location: 'Austin, TX',
    requirements: 'Python, Statistics, Machine Learning',
    deadline: new Date('2023-09-15'),
    type: 'internship',
    needs_approval: true,
    approved: false,
    approved_by: null,
    is_paid: true,
    amount: '35/hr',
    contactEmail: 'internships@ibm.com',
    link: 'https://ibm.com/careers'
  },
  {
    title: 'Content Writer',
    description: 'Create engaging content for digital platforms',
    posted_by: 'Twitter',
    company: 'Twitter',
    location: 'Remote',
    requirements: 'Strong writing skills, Social media knowledge',
    deadline: new Date('2023-08-01'),
    type: 'contract',
    needs_approval: true,
    approved: false,
    approved_by: null,
    is_paid: true,
    amount: '5000',
    contactEmail: 'writers@twitter.com',
    link: 'https://careers.twitter.com'
  },
  {
    title: 'HR Coordinator',
    description: 'Support human resources department',
    posted_by: 'LinkedIn',
    company: 'LinkedIn',
    location: 'Sunnyvale, CA',
    requirements: 'HR background, Communication skills',
    deadline: new Date('2023-07-25'),
    type: 'full-time',
    needs_approval: true,
    approved: false,
    approved_by: null,
    is_paid: true,
    amount: '75000',
    contactEmail: 'talent@linkedin.com',
    link: 'https://linkedin.com/jobs'
  },
  {
    title: 'Mobile App Developer',
    description: 'Build iOS and Android applications',
    posted_by: 'Airbnb',
    company: 'Airbnb',
    location: 'San Francisco, CA',
    requirements: 'Swift, Kotlin, React Native',
    deadline: new Date('2023-08-20'),
    type: 'full-time',
    needs_approval: true,
    approved: false,
    approved_by: null,
    is_paid: true,
    amount: '115000',
    contactEmail: 'developer@airbnb.com',
    link: 'https://airbnb.com/careers'
  },
  {
    title: 'Business Analyst Intern',
    description: 'Support business operations analysis',
    posted_by: 'Oracle',
    company: 'Oracle',
    location: 'Redwood City, CA',
    requirements: 'Business or Analytics major, Excel proficiency',
    deadline: new Date('2023-09-30'),
    type: 'internship',
    needs_approval: true,
    approved: false,
    approved_by: null,
    is_paid: true,
    amount: '28/hr',
    contactEmail: 'interns@oracle.com',
    link: 'https://oracle.com/careers'
  },
  {
    title: 'Network Engineer',
    description: 'Maintain and optimize network infrastructure',
    posted_by: 'Cisco',
    company: 'Cisco',
    location: 'San Jose, CA',
    requirements: 'CCNA, Network troubleshooting experience',
    deadline: new Date('2023-07-15'),
    type: 'full-time',
    needs_approval: true,
    approved: false,
    approved_by: null,
    is_paid: true,
    amount: '95000',
    contactEmail: 'jobs@cisco.com',
    link: 'https://cisco.com/careers'
  },
  {
    title: 'Graphic Designer',
    description: 'Create visual content for marketing campaigns',
    posted_by: 'Adobe',
    company: 'Adobe',
    location: 'San Francisco, CA',
    requirements: 'Design portfolio, Adobe Creative Suite',
    deadline: new Date('2023-08-10'),
    type: 'full-time',
    needs_approval: true,
    approved: false,
    approved_by: null,
    is_paid: true,
    amount: '85000',
    contactEmail: 'design.jobs@adobe.com',
    link: 'https://adobe.com/careers'
  }
];

// Seed function
const seedDB = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Major.deleteMany({});
    await Opportunity.deleteMany({});
    
    console.log('Previous data cleared');
    
    // Add majors
    const createdMajors = await Major.insertMany(majors);
    console.log(`${createdMajors.length} majors added`);
    
    // Add users
    const createdUsers = await User.insertMany(users);
    console.log(`${createdUsers.length} users added`);
    
    // Update opportunities with valid user IDs
    const updatedOpportunities = opportunities.map((opportunity, index) => {
      // Distribute opportunities among users (round-robin)
      opportunity.approved_by = createdUsers[index % createdUsers.length]._id;
      return opportunity;
    });
    
    // Add opportunities
    const createdOpportunities = await Opportunity.insertMany(updatedOpportunities);
    console.log(`${createdOpportunities.length} opportunities added`);
    
    console.log('Database seeding completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect();
    console.log('MongoDB disconnected');
  }
};

// Run the seed function
seedDB();
