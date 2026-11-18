const certificates = [
  {
    name: "Responsive Web Design Developer Certification",
    organization: "freeCodeCamp",
    date: "Nov 17, 2026",
    file: "assets/certificates/freecodecamp-responsive-web-design.pdf",
  },
  {
    name: "Programming in C",
    organization: "Infosys Springboard",
    date: "May 18, 2026",
    file: "assets/certificates/infosys-programming-in-c.pdf",
  },
  {
    name: "Basics of Python",
    organization: "Infosys Springboard",
    date: "Oct 11, 2026",
    file: "assets/certificates/infosys-basics-of-python.pdf",
  },
  {
    name: "Excel",
    organization: "Infosys Springboard",
    date: "Dec 26, 2025",
    file: "assets/certificates/infosys-excel.pdf",
  },
  {
    name: "Generative - AI for All",
    organization: "Infosys Springboard",
    date: "May 16, 2026",
    file: "assets/certificates/infosys-generative-ai-for-all.pdf",
  },
  {
    name: "Generative models for developers",
    organization: "Infosys Springboard",
    date: "Oct 14, 2026",
    file: "assets/certificates/infosys-generative-models-for-developers.pdf",
  },
  {
    name: "Introduction to OpenAI GPT Models",
    organization: "Infosys Springboard",
    date: "Oct 14, 2026",
    file: "assets/certificates/infosys-introduction-to-openai-gpt-models.pdf",
  },
  {
    name: "OpenAI GPT-3 for developers",
    organization: "Infosys Springboard",
    date: "Oct 14, 2026",
    file: "assets/certificates/infosys-gpt-3-for-developers.pdf",
  },
  {
    name: "Introduction to GitHub Copilot",
    organization: "Microsoft Learn",
    date: "Nov 17, 2026",
    file: "assets/certificates/microsoft-introduction-to-github-copilot.pdf",
  },
];

const certificateGrid = document.getElementById("certgrid");

certificates.forEach(({ name, organization, date, file }) => {
  const certificate = document.createElement("article");
  certificate.className = "cert";
  certificate.innerHTML = `
    <div>
      <small>${organization}</small>
      <h3>${name}</h3>
      <time>${date}</time>
    </div>
    <a href="${file}" target="_blank" rel="noopener noreferrer">
      View certificate &#8599;
    </a>
  `;
  certificateGrid.appendChild(certificate);
});

const menuButton = document.getElementById("menu");
const navigation = document.getElementById("nav");

function closeMobileMenu() {
  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});
