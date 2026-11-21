"use strict";

const MOBILE_NAV_BREAKPOINT = 620;
const SCROLL_END_TOLERANCE = 4;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function createElement(tag, className = "", text = "") {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== "") element.textContent = text;
  return element;
}

function initScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  const show = (item) => item.classList.add("is-visible");

  if (!("IntersectionObserver" in window)) {
    items.forEach(show);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        show(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
  );

  items.forEach((item) => observer.observe(item));
}

function initScrollProgress() {
  const bar = document.querySelector(".scroll-progress");
  if (!bar) return;

  const update = () => {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    bar.style.width = `${progress}%`;
  };

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

function initMobileNav() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (!toggle || !nav) return;

  const setOpen = (isOpen) => {
    nav.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation",
    );
  };

  toggle.addEventListener("click", () => {
    setOpen(!nav.classList.contains("open"));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > MOBILE_NAV_BREAKPOINT) setOpen(false);
  });
}

function initProjectCarousel() {
  const track = document.getElementById("projectGrid");
  const pagination = document.getElementById("carouselNav");
  if (!track || !pagination) return;

  const cardCount = track.querySelectorAll(".project-card").length;
  let pageCount = 1;
  let currentPage = 0;
  let prevButton;
  let nextButton;
  let pageButtons = [];
  let isScrollQueued = false;

  const getCardsPerView = () =>
    parseInt(getComputedStyle(track).getPropertyValue("--per-view"), 10) || 1;
  const getGap = () => parseFloat(getComputedStyle(track).columnGap) || 0;
  const getPageWidth = () => track.clientWidth + getGap();
  const getMaxScroll = () => track.scrollWidth - track.clientWidth;

  function readCurrentPage() {
    if (track.scrollLeft >= getMaxScroll() - SCROLL_END_TOLERANCE) {
      return pageCount - 1;
    }

    return clamp(
      Math.round(track.scrollLeft / getPageWidth()),
      0,
      pageCount - 1,
    );
  }

  function goToPage(page) {
    const target = clamp(page, 0, pageCount - 1);

    track.scrollTo({
      left: Math.min(target * getPageWidth(), getMaxScroll()),
      behavior: "smooth",
    });
  }

  function createPaginationButton(label, text, onClick) {
    const button = createElement("button", "", text);
    button.type = "button";
    button.setAttribute("aria-label", label);
    button.addEventListener("click", onClick);
    return button;
  }

  function updatePagination() {
    currentPage = readCurrentPage();

    pageButtons.forEach((button, index) => {
      const isActive = index === currentPage;
      button.classList.toggle("is-active", isActive);

      if (isActive) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });

    prevButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage === pageCount - 1;
  }

  function buildPagination() {
    pageCount = Math.max(1, Math.ceil(cardCount / getCardsPerView()));
    pagination.hidden = pageCount <= 1;

    prevButton = createPaginationButton("Previous projects", "←", () => {
      goToPage(currentPage - 1);
    });
    nextButton = createPaginationButton("Next projects", "→", () => {
      goToPage(currentPage + 1);
    });
    pageButtons = Array.from({ length: pageCount }, (_, index) =>
      createPaginationButton(`Page ${index + 1}`, String(index + 1), () => {
        goToPage(index);
      }),
    );

    pagination.replaceChildren(prevButton, ...pageButtons, nextButton);
    updatePagination();
  }

  track.addEventListener(
    "scroll",
    () => {
      if (isScrollQueued) return;
      isScrollQueued = true;

      requestAnimationFrame(() => {
        isScrollQueued = false;
        updatePagination();
      });
    },
    { passive: true },
  );

  window.addEventListener("resize", buildPagination);
  buildPagination();
}

function initProjectModal() {
  const track = document.getElementById("projectGrid");
  const modal = document.getElementById("projectModal");
  if (!track || !modal || typeof PROJECTS === "undefined") return;

  const ui = {
    type: document.getElementById("modalType"),
    image: document.getElementById("modalImage"),
    title: document.getElementById("modalTitle"),
    overview: document.getElementById("modalOverview"),
    role: document.getElementById("modalRole"),
    outcome: document.getElementById("modalOutcome"),
    workflowSection: document.getElementById("workflowSection"),
    workflow: document.getElementById("modalWorkflow"),
    tags: document.getElementById("modalTags"),
    links: document.getElementById("modalLinks"),
    closeButton: document.getElementById("modalClose"),
  };

  function renderItems(container, items = [], tag = "li") {
    if (!container) return;
    container.replaceChildren(
      ...items.map((item) => createElement(tag, "", item)),
    );
  }

  function renderWorkflow(steps = []) {
    if (!ui.workflow) return;
    if (ui.workflowSection) ui.workflowSection.hidden = steps.length === 0;

    ui.workflow.replaceChildren(
      ...steps.map((step, index) => {
        const item = createElement("div", "workflow-step");
        const number = String(index + 1).padStart(2, "0");

        if (typeof step === "string") {
          item.append(
            createElement("span", "workflow-num", number),
            createElement("p", "workflow-desc", step),
          );
          return item;
        }

        const content = createElement("div", "workflow-content");
        content.append(
          createElement("strong", "workflow-title", step.title ?? ""),
        );

        if (step.description) {
          content.append(createElement("p", "workflow-desc", step.description));
        }

        item.append(
          createElement("span", "workflow-num", step.step ?? number),
          content,
        );
        return item;
      }),
    );
  }

  function createProjectLink({ label, href }) {
    const link = createElement("a", "", label);
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return link;
  }

  function renderProject(project) {
    if (ui.image) {
      const imageContainer = ui.image.parentElement;

      if (project.image) {
        ui.image.src = project.image;
        ui.image.alt = `${project.title ?? "Project"} Preview`;
        if (imageContainer) imageContainer.hidden = false;
      } else {
        ui.image.removeAttribute("src");
        ui.image.alt = "";
        if (imageContainer) imageContainer.hidden = true;
      }
    }

    if (ui.type) ui.type.textContent = project.type ?? "";
    if (ui.title) ui.title.textContent = project.title ?? "";
    if (ui.overview) ui.overview.textContent = project.overview ?? "";

    renderItems(ui.role, project.role);
    renderItems(ui.outcome, project.outcome);
    renderWorkflow(project.workflow ?? []);
    renderItems(ui.tags, project.tags, "span");

    if (ui.links) {
      ui.links.replaceChildren(...(project.links ?? []).map(createProjectLink));
    }
  }

  function closeModal() {
    if (!modal.open) return;
    modal.close();
    document.body.classList.remove("modal-open");
  }

  track.addEventListener("click", (event) => {
    const projectCard = event.target.closest("[data-project]");
    if (!projectCard) return;

    const project = PROJECTS[projectCard.dataset.project];
    if (!project || typeof modal.showModal !== "function") return;

    renderProject(project);
    modal.showModal();
    document.body.classList.add("modal-open");
  });

  if (ui.closeButton) ui.closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  modal.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
  });
}

function initCertificateModal() {
  const modal = document.getElementById("certificateModal");
  const image = document.getElementById("certificateImage");
  const title = document.getElementById("certificateTitle");
  const closeButton = document.getElementById("certificateClose");
  const triggers = document.querySelectorAll(".credential-trigger");

  if (!modal || !image || !title) return;

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      if (typeof modal.showModal !== "function") return;

      image.src = trigger.dataset.certificate ?? "";
      image.alt = trigger.dataset.title ?? "Certificate preview";
      title.textContent = trigger.dataset.title ?? "Certificate";
      modal.showModal();
    });
  });

  if (closeButton) {
    closeButton.addEventListener("click", () => modal.close());
  }

  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });

  modal.addEventListener("close", () => {
    image.removeAttribute("src");
  });
}

const credentialList = document.getElementById("credentialList");
const credentialMore = document.getElementById("credentialMore");
const credentialMoreBtn = document.getElementById("credentialMoreBtn");
const credentialMoreText = document.getElementById("credentialMoreText");

if (credentialList && credentialMore && credentialMoreBtn) {
  const credentialItems = credentialList.querySelectorAll(":scope > li");

  if (credentialItems.length <= 5) {
    credentialMore.hidden = true;
  } else {
    credentialMoreBtn.addEventListener("click", () => {
      const expanded = credentialList.classList.toggle("is-expanded");

      credentialMoreBtn.classList.toggle("is-active", expanded);

      credentialMoreText.textContent = expanded
        ? "Show Less"
        : "Show More";
    });
  }
}
initScrollReveal();
initScrollProgress();
initMobileNav();
initProjectCarousel();
initProjectModal();
initCertificateModal();
