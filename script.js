const content = document.getElementById("content");

// nav
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    loadPage(link.dataset.page);
  });
});

loadPage("home"); // default page

// home page data
const homeData = {
  name: "Elijah Pohlman",
  about: "Hi Im Eli, I mainly like playing games, going exploring, and listening to music! Im currently a freshman and I hope we can be great friends!",
  hobbies: ["Cars", "Computers", "Music"],
  blogs: ["Blog Post One", "Blog Post Two"],
  images: [
    "images/DSC_0689.JPG",
    "images/DSC_0700.JPG",
    "images/DSC_0712.JPG"
  ]
};

// courses
const courses = [
  { name: "Microsoft Excell", learned: ["How to properlly use excell ", "How to properlly use the rest of the microsoft office suite"] },
  { name: "Is 245", learned: ["Java coding and management", "CSS and HTML coding"] },
  { name: "CS 245", learned: ["Algorithms", "Math and probability"] },
  { name: "CS 155", learned: ["More basic java coding", "How to start java files"] },
  { name: "EN 140", learned: ["Grammar structure", "deeper understandings and context of historical documents"] },
  { name: "CS 101", learned: ["Basics of coding", "Creating and managing projects"] },
  { name: "TN 275", learned: ["Setup of Networks", "How to run a network and its topology"] },
  { name: "IM 301", learned: ["Industrial safety requirements", "OSHA standards"] },
  { name: "MA 137", learned: ["Pre Calculus", "Plane Trigonometry"] },
  { name: "UI 101", learned: ["How to use SEMO resources", "How to use the SEMO portal"] }
];

// projects
const projects = [
  {
    title: "Max calculator",
    logo: "images/logo.png",
    description: "Gives the maximum within a set of numbers",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/users/pohlmanelijahs-cmd/projects/3"
  }
];

// page laoder
function loadHome() {
  content.innerHTML = `
    <h1>${homeData.name}</h1>
    <p>${homeData.about}</p>

    <h3>Gallery</h3>
    <div>
      ${homeData.images.map(img => `<img src="${img}">`).join("")}
    </div>

    <h3>Blogs</h3>
    <ul>
      ${homeData.blogs.map(blog => `<li>${blog}</li>`).join("")}
    </ul>

    <h3>Hobbies</h3>
    <ul>
      ${homeData.hobbies.map(hobby => `<li>${hobby}</li>`).join("")}
    </ul>
  `;
}

function loadCourses() {
  content.innerHTML = "<h1>Courses</h1>";

  courses.forEach(course => {
    content.innerHTML += `
      <div class="card">
        <h3>${course.name}</h3>
        <ul>
          ${course.learned.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `;
  });
}

function loadProjects() {
  content.innerHTML = "<h1>Projects</h1>";

  projects.forEach(project => {
    content.innerHTML += `
      <div class="card">
        <h3>${project.title}</h3>
        <img src="${project.logo}">
        <p>${project.description}</p>
        <p><strong>Technologies:</strong> ${project.tech}</p>
        <a href="${project.github}" target="_blank">GitHub Repository</a>
      </div>
    `;
  });
}

function loadContact() {
  content.innerHTML = `
    <h1>Contact</h1>

    <p>Email: pohlmanelijahs@gmail.com</p>
    <p>GitHub: https://github.com/pohlmanelijahs-cmd</p>
    <p>LinkedIn: https://www.linkedin.com/in/elijah-pohlman-2084b423b/</p>

    <h3>Contact Form</h3>
    <form id="contactForm">
      <input type="text" id="name" placeholder="Name"><br><br>
      <input type="number" id="age" placeholder="Age"><br><br>
      <button type="submit">Submit</button>
      <p id="errorMsg" class="error"></p>
    </form>
  `;

  document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const error = document.getElementById("errorMsg");

    if (name === "" || age === "") {
      error.textContent = "All fields are required.";
    } else if (age < 18) {
      error.textContent = "You must be at least 18 years old.";
    } else {
      error.textContent = "";
      alert("Form submitted successfully!");
    }
  });
}

// router
function loadPage(page) {
  if (page === "home") loadHome();
  else if (page === "courses") loadCourses();
  else if (page === "projects") loadProjects();
  else if (page === "contact") loadContact();
}