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