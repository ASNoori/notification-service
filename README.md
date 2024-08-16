**API Documentation****

Running the API

1.Clone the Repository:
git clone <repository-url>
cd <repository-folder>

2.Install Dependencies:
Make sure you have Node.js installed. Then run:
npm install

3.Set Up Environment Variables:
Create a .env file in the root directory and add your email credentials:
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password

4.Start the Server:
Run the server with:
npm start
Making Requests
Endpoint: POST /notify

Request Body:

You need to send a JSON object in the request body with the following fields:

to: The recipient's email address (e.g., "example@example.com").
subject: The subject of the email (e.g., "Test Email").
text: The content of the email (e.g., "This is a test email.").
urgency: The urgency level of the email. Possible values are "high", "medium", and "low".
activity: The activity status of the user. Possible values are "active" and "inactive". This field is used to determine the delay for high urgency emails.
Example Request:

{
  "to": "nooriameer12@gmail.com",
  "subject": "Test Email",
  "text": "This is a medium active test email.",
  "urgency": "medium",
  "activity": "active"
}
Response:

Success (200 OK): When the email is successfully sent, you'll receive:
{
  "message": "Email sent successfully"
}
Error (500 Internal Server Error): If there was a problem sending the email, you'll receive:
{
  "message": "Failed to send email"
}




