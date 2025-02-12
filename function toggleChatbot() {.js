

function toggleChatbot() {
  const chatbot = document.getElementById('chatbot');
  chatbot.style.display = chatbot.style.display === 'flex' ? 'none' : 'flex';
}

function closechat() {
  const closec = document.getElementById('chatbot');
  closec.style.display = closec.style.display === 'flex' ? 'none' : 'flex';
}

// Function to send message to chatbot
function sendMessage() {
  const userInput = document.getElementById('user-input').value.trim().toLowerCase(); // Normalize input to lowercase

  // Check if the user input is not empty
  if (userInput) {
    // Display user message
    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('message', 'user-message');
    userMessageDiv.textContent = userInput;
    document.getElementById('chatbot-body').appendChild(userMessageDiv);
   
    // Determine the bot's response based on user input
    setTimeout(() => {
      const botMessageDiv = document.createElement('div');
      botMessageDiv.classList.add('message', 'bot-message');
     
      let botResponse = "I'm not sure how to respond to that."; // Default response

      // Define keyword-response pairs (case-insensitive)
      const responses = {
        "hello": "Hi there! How can I assist you today?",
        "how are you": "im great thanks and you?",
        "hey": "Hi there! How can I assist you today?",
        "hi": "Hi there! How can I assist you today?",
        "help": "I'm here to help! What do you need assistance with?",
        "CV" : "You can download the CV under the Resume",
        "bye": "Goodbye! Have a great day!",
        "thank you": "You're welcome! Let me know if you need anything else.",
        "skills": "Some of the the soft skills that Cavin  poses are good communication and technical skills:CSS navigate to the skills page for more information.",
        "thanks": "You're welcome! Let me know if you need anything else.",
        "name": "My name is CK, Cavin's assistant. I'm here to help!",
        "tell me more about the profile": "Motivated IT professional with a Diploma in Information Technology, specialising in Software Development. Skilled in designing, coding, and testing software applications, with proficiency in languages such as C++, Java and Python.",
        "links": "Click any icon below my profile picture and it will redirect you.",
        "contact": "To get a hold of Cavin email him at calvinkhoza1998@gmail.com or navigate to the About/Contact page for further information",
        "joke": "What do rich people say when they tickle babies? Gucci, Gucci, goo.",
        "motivation": "Nurture Your Mind With Great Thoughts, For You Will Never Go Any Higher Than You Think.",
        "education": "Cavin studied at the Tshwane  University of Technology,Pretoria , South Africa.",
        "experience": "Cavin worked in a few companies and she did a learnership at Gijima technologies . For more information click on resume.",
        "profile" : "The portfolio page is designed to showcase Cavin Khoza’s professional profile, skills, education, and work experience, while also offering potential collaborators or employers a means to contact him directly through the form or chatbot. It's built with modern web technologies (HTML, CSS, JavaScript) and is structured to highlight both technical and soft skills, providing an overview of his career and achievements in a clean, user-friendly layout."
      };

      // Loop through the responses object to match user input with keywords
      for (let keyword in responses) {
        if (userInput.includes(keyword)) {
          botResponse = responses[keyword];
          break;
        }
      }

      // Display the bot response
      botMessageDiv.textContent = botResponse;
      document.getElementById('chatbot-body').appendChild(botMessageDiv);

      // Scroll to the bottom of the chat
      document.getElementById('chatbot-body').scrollTop = document.getElementById('chatbot-body').scrollHeight;

    }, 500); // Delay before bot response

   

    // Clear the input field after sending the message
    document.getElementById('user-input').value = '';
  }
}

// Event listener to allow "Enter" key to send the message
document.getElementById('user-input').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    sendMessage(); // Trigger the sendMessage function when Enter is pressed
  }
});
// Automatically send a message when the chatbot is opened
window.onload = function() {
  const botMessageDiv = document.createElement('div');
  botMessageDiv.classList.add('message', 'bot-message');
  botMessageDiv.textContent = "Hi! How can I help you today?";
  document.getElementById('chatbot-body').appendChild(botMessageDiv);

  // Scroll to the bottom of the chat
  document.getElementById('chatbot-body').scrollTop = document.getElementById('chatbot-body').scrollHeight;
};

