const express = require('express');
const { sendEmail } = require('./email-utils');  

const app = express();

app.use(express.json());

app.post('/notify', async (req, res) => {
    const { to, subject, text, urgency, activity } = req.body;  
    try{
        let delay = 0;
        if (urgency === 'high' && activity === 'inactive') {
          delay = 30 * 60 * 1000; // 30 minutes
        } else if (urgency === 'medium') {
          delay = 60 * 60 * 1000; // 1 hour
        } else if (urgency === 'low') {
          delay = 2 * 60 * 60 * 1000; // 2 hours
        }
    }catch(error){
        res.status(500).send({ message: 'Failed to send email' });
    }
})
  
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Email service running on port ${port}`);
});