const axios = require("axios");

async function sendNotification() {
  try {
    const response = await axios.post('http://localhost:3000/notify', {
        to: 'nooriameer12@gmail.com',
        subject: 'Hello World',
        text: 'This is a test email from the Hello World app.',
        urgency: 'high', 
        activity: 'active' 
      });
  
      console.log('Response:', response.data);
  } catch (error) {
    console.error("Error sending notification:", error.message);
  }
}
sendNotification();
