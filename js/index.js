"use strict";

/* ===========================
   GLOBAL CONSTANTS
=========================== */

const STATIC_REPOS = [
  {
    title: "RetrieveApp (Full-Stack & Design)",
    url: "https://retrieveapp-frontend.onrender.com",
    meta: "React, Node.js/Express, Prisma, PostgreSQL, Cloudinary",
  },
  {
    title: "KindNet (Frontend & Design)",
    url: "https://kindnet.onrender.com",
    meta: "React, React Router, Context API, Tailwind",
  },
  {
    title: "MLB Data Dashboard — Interactive Viz",
    url: "https://capstone-baseball-aidaburlutckaia.streamlit.app",
    meta: "Python, Pandas, SQLite, Streamlit, Plotly",
  },
  {
    title: "React To-Do (Frontend • Airtable)",
    url: "https://aida-burlutckaia.onrender.com",
    meta: "React, Vite, Airtable",
  },
  
];

const DESIGN_TOOLS = [
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe After Effects",
  "Pen & Paper",
];

const CODING_TOOLS = ["VSCode", "Replit", "GitHub"];

/* ===========================
   DOM READY
=========================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ===== Footer ===== */
  (function renderFooter() {
    const today = new Date(); // variable named today
    const thisYear = today.getFullYear(); // variable named thisYear

    const footer = document.createElement("footer"); // variable named footer
    footer.id = "footer"; // Assign an ID to the footer element for CSS
    const copyright = document.createElement("p"); // variable named copyright
    copyright.innerHTML = `© Aida Burlutckaia ${thisYear}`; // copyright element
    footer.appendChild(copyright);
    document.body.appendChild(footer);
  })();

  /* ===== Design Tools ===== */
  (function renderDesignTools() {
    const designToolsList = document.getElementById("designToolsList");
    if (!designToolsList) return;

    designToolsList.innerHTML = "";
    DESIGN_TOOLS.forEach((tool) => {
      const li = document.createElement("li");
      li.textContent = tool;
      designToolsList.appendChild(li);
    });
  })();

  /* ===== Coding Tools ===== */
  (function renderCodingTools() {
    const toolsList = document.getElementById("codingToolsList");
    if (!toolsList) return;

    toolsList.innerHTML = "";
    CODING_TOOLS.forEach((tool) => {
      const li = document.createElement("li");
      li.textContent = tool;
      toolsList.appendChild(li);
    });
  })();

  /* ===== Burger Menu ===== */
  (function setupBurger() {
    const burgerIcon = document.getElementById("burger-icon");
    if (!burgerIcon) return;

    burgerIcon.addEventListener("click", () => {
      document.body.classList.toggle("menu-open");
    });
  })();

  /* ===== Profile Photo Hover ===== */
  (function setupProfilePhotoHover() {
    const profilePhoto = document.querySelector(".profile-photo");
    if (!profilePhoto) return;

    const DEFAULT_SRC = "img/my-photo.png";
    const HOVER_SRC = "img/my-photo-hover.png";

    profilePhoto.addEventListener("mouseover", () => {
      profilePhoto.src = HOVER_SRC;
    });
    profilePhoto.addEventListener("mouseout", () => {
      profilePhoto.src = DEFAULT_SRC;
    });
  })();

  /* ===== Contact Form: add / edit / remove ===== */
  (function setupMessageForm() {
    const messageForm = document.querySelector(".contact-form");
    const messageSection = document.getElementById("messages");
    const messageList = messageSection ? messageSection.querySelector("ul") : null;

    if (!messageForm || !messageSection || !messageList) return;

    if (messageList.children.length === 0) {
      messageSection.style.display = "none";
    }

    messageForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const userName = event.target.name.value.trim();
      const userEmail = event.target.email.value.trim();
      const userMessage = event.target.message.value.trim();

      if (!userName || !userEmail || !userMessage) return;

      const li = document.createElement("li");
      li.innerHTML = `
        <a href="mailto:${userEmail}">${userName}</a>
        <span>${userMessage}</span>
        <button type="button" class="edit-button">edit</button>
        <button type="button" class="remove-button">remove</button>
      `;

      messageList.appendChild(li);
      messageSection.style.display = "block";
      messageForm.reset();
    });

    document.addEventListener("click", (event) => {
      const target = event.target;

      // remove
      if (target.classList.contains("remove-button")) {
        const entry = target.closest("li");
        if (entry) entry.remove();

        if (messageList.children.length === 0) {
          messageSection.style.display = "none";
        }
      }

      // edit
      if (target.classList.contains("edit-button")) {
        const entry = target.closest("li");
        const span = entry ? entry.querySelector("span") : null;
        if (!span) return;

        const newMessage = prompt("Edit your message:", span.textContent);
        if (newMessage !== null) {
          span.textContent = newMessage;
        }
      }
    });
  })();

 
  (function renderStaticRepos() {

    const repoList =
      document.getElementById("repoList") ||
      document.querySelector("#projects .githublinks ul");

    if (!repoList) return;

    repoList.innerHTML = "";

    STATIC_REPOS.forEach((repo) => {
      const li = document.createElement("li");
    
      const hasRole = repo.title.includes("(");
      const [mainTitle, rolePart] = hasRole
        ? repo.title.split(" (")
        : [repo.title, ""];
    
      li.innerHTML = `
        <h3>
          <a href="${repo.url}" target="_blank" rel="noopener">
            ${mainTitle}
            ${hasRole ? `<br><span class="repo-role">(${rolePart}</span>` : ""}
          </a>
        </h3>
        <span class="repo-meta">${repo.meta}</span>
      `;
      repoList.appendChild(li);
    });
    
    

  
  })();
});
