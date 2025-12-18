import { connectToDatabase } from './database/mongoose.js';

async function testConnection() {
  try {
    await connectToDatabase();
    console.log('Database connection test successful!');
  } catch (error) {
    console.error('Database connection test failed:', error);
  } finally {
    process.exit(0);
  }
}

testConnection();