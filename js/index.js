const today = new Date(); // variable named today
const thisYear = today.getFullYear(); // variable named thisYear
const footer = document.createElement('footer'); // variable named footer 
footer.id = 'footer'; // Assign an ID to the footer element for CSS
const copyright = document.createElement('p'); // variable named copyright
copyright.innerHTML = `© Aida Burlutckaia ${thisYear}`; // copyright element
footer.appendChild(copyright);
document.body.appendChild(footer);


// Array of design tools
const designTools = [
    "Figma",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe After Effects",
    "Pen & Paper"
  ];
  
  // Get the design skills section by ID
  const designSkillsSection = document.getElementById('designSkills');
  
  // Get the empty <ul> element within the design skills section
  const designToolsList = document.getElementById('designToolsList');
  
  // Populate the design tools list
  designTools.forEach(tool => {
    // Create a new <li> element
    const toolItem = document.createElement('li');
    
    // Set the text content of the <li> element
    toolItem.textContent = tool;
    
    // Append the <li> element to the <ul>
    designToolsList.appendChild(toolItem);
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    const codingTools = ["VSCode", "Replit", "GitHub"];
    const toolsList = document.getElementById("codingToolsList");
    codingTools.forEach(tool => {
      const li = document.createElement("li");
      li.textContent = tool;
      toolsList.appendChild(li);
    });
  });



  


const messageForm = document.querySelector('.contact-form');
if (messageForm) {
    messageForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        const userName = event.target.name.value;
        const userEmail = event.target.email.value;
        const userMessage = event.target.message.value;

        const messageSection = document.getElementById('messages');
        const messageList = messageSection.querySelector('ul');
        const newMessage = document.createElement('li');

        newMessage.innerHTML = `
            <a href="mailto:${userEmail}">${userName}</a> 
            <span>${userMessage}</span>
            <button type="button" class="edit-button">edit</button>
            <button type="button" class="remove-button">remove</button>
        `;

        messageList.appendChild(newMessage);

        if (messageList.children.length > 0) {
            messageSection.style.display = 'block'; 
        }

        messageForm.reset();
    });

    
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-button')) {
            const entry = event.target.parentNode;
            entry.remove();

            const messageSection = document.getElementById('messages');
            if (messageSection.querySelector('ul').children.length === 0) {
                messageSection.style.display = 'none'; // Hide the section
            }
        }
    });

    // edit button 
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('edit-button')) {
            const entry = event.target.parentNode;
            const span = entry.querySelector('span');
            const newMessage = prompt('Edit your message:', span.textContent);
            if (newMessage !== null) {
                span.textContent = newMessage;
            }
        }
    });
}

