import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Check email configuration
console.log('Email Configuration:');
console.log('EMAIL_USER exists:', !!process.env.EMAIL_USER);
console.log('EMAIL_APP_PASSWORD exists:', !!process.env.EMAIL_APP_PASSWORD);
console.log('EMAIL_RECIPIENT exists:', !!process.env.EMAIL_RECIPIENT);

// Check server configuration
console.log('\nServer Configuration:');
console.log('PORT:', process.env.PORT || '3001 (default)');

// Don't log actual values for security reasons
