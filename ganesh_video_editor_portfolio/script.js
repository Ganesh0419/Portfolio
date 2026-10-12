/* ==========================================================================
   GANESH TAYADE — VIDEO EDITOR & VISUAL STORYTELLER PORTFOLIO
   Configured with real Instagram channels, contact details & resume preview.
   ========================================================================== */

const portfolio = {
  name: "Ganesh Tayade",
  email: "ganeshtayade818@gmail.com",
  phone: "+91 8830085988",
  whatsappNumber: "9145534697",
  whatsapp: "https://wa.me/919145534697?text=Hi%20Ganesh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20video%20project!",
  companyInstagram: "https://www.instagram.com/bkcareeracademy/?utm_source=ig_web_button_share_sheet",
  amvInstagram: "https://www.instagram.com/addictedtomusic86?utm_source=ig_web_button_share_sheet&mdxt=ZDNlZDc0MzIxNw==",
  resume: "assets/Ganesh_Tayade_Resume.jpg"
};

// Connect Contact Elements
const emailLink = document.getElementById("email-link");
if (emailLink) {
  emailLink.href = `mailto:${portfolio.email}`;
  emailLink.textContent = portfolio.email;
}

const companyLink = document.getElementById("company-instagram");
if (companyLink) companyLink.href = portfolio.companyInstagram;

const amvLink = document.getElementById("amv-instagram");
if (amvLink) amvLink.href = portfolio.amvInstagram;

// Resume Modal & Preview Logic
const resumeModal = document.getElementById("resume-modal");
const previewResumeBtn = document.getElementById("preview-resume-btn");
const resumeCardTrigger = document.getElementById("resume-card-trigger");
const closeResumeModalBtn = document.getElementById("close-resume-modal");

function openResumeModal() {
  if (resumeModal) {
    resumeModal.showModal();
  }
}

function closeResumeModal() {
  if (resumeModal && resumeModal.open) {
    resumeModal.close();
  }
}

if (previewResumeBtn) previewResumeBtn.addEventListener("click", openResumeModal);
if (resumeCardTrigger) resumeCardTrigger.addEventListener("click", openResumeModal);
if (closeResumeModalBtn) closeResumeModalBtn.addEventListener("click", closeResumeModal);

// Fallback Light-Dismiss for browsers without native closedby="any"
if (resumeModal) {
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    resumeModal.addEventListener("click", (event) => {
      if (event.target !== resumeModal) return;
      const rect = resumeModal.getBoundingClientRect();
      const isContent = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isContent) {
        closeResumeModal();
      }
    });
  }
}

// Copy Email to Clipboard with visual feedback
const copyEmailBtn = document.getElementById("copy-email-btn");
const copyText = document.getElementById("copy-text");

if (copyEmailBtn) {
  copyEmailBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(portfolio.email).then(() => {
      if (copyText) {
        const originalText = copyText.textContent;
        copyText.textContent = "Copied! ✓";
        copyEmailBtn.classList.add("copied");
        setTimeout(() => {
          copyText.textContent = originalText;
          copyEmailBtn.classList.remove("copied");
        }, 2500);
      }
    }).catch(() => {
      // Fallback
      const input = document.createElement("input");
      input.value = portfolio.email;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      if (copyText) {
        copyText.textContent = "Copied! ✓";
        setTimeout(() => copyText.textContent = "Copy Email", 2500);
      }
    });
  });
}

// Scroll reveal: progressive enhancement, with reduced-motion support.
const revealTargets = document.querySelectorAll(".intro-copy, .insta-channel-card, .project, .webdev-card, .profile-card, .about-layout, .toolkit, .resume-strip, .contact h2");
revealTargets.forEach(el => el.classList.add("reveal"));
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(el => observer.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add("visible"));
}
