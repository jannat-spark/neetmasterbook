(() => {
  "use strict";

  const CONFIG = {
    checkoutUrl: "https://superprofile.bio/vp/685d013a7311700013dd5e18?checkout=true",
    priceLaunch: 99,
    priceRegular: 249,
    seatsTotal: 400,
    soldCount: 179,
    support: {
      instagram: "https://www.instagram.com/neetmasterbook/",
      whatsapp: "https://wa.me/919085161632",
      email: "jannatspark.help@gmail.com"
    },
    refundPolicy: "Digital product. Refund policy is confirmed at checkout.",
    creator: {
      name: "Sahil",
      role: "Founder, NEET Masterbook"
    },
    analytics: {
      metaPixelId: "PASTE_META_PIXEL_ID",
      ga4Id: "PASTE_GA4_ID"
    },
    testimonials: [
      {
        name: "Rakib Haque",
        rating: 5,
        meta: "Student feedback · English",
        quote: "I used to jump between study plans every week. This eBook gave me structure, clarity, and motivation I never had before."
      },
      {
        name: "Sneha Das",
        rating: 4,
        meta: "Student feedback · Hinglish adaptation",
        quote: "Backlog Killer ne meri pending chapters wali problem ko manageable banaya. Maine 3 months ka backlog sirf 2 weeks mein clear kiya."
      },
      {
        name: "Priya",
        rating: 5,
        meta: "Student feedback · English",
        quote: "The daily to-do and study tracker combo made me consistent."
      },
      {
        name: "Aditya",
        rating: 5,
        meta: "Student feedback · English",
        quote: "The 30-day sprint page is the first plan I have actually finished. Seeing chapters go from blank to ticked is weirdly motivating."
      },
      {
        name: "Fatima",
        rating: 4,
        meta: "Student feedback · English",
        quote: "Very useful for revision, though printing all 28 pages took some time. The 0-1-3-7-21 loop is the part I use most."
      },
      {
        name: "Rohan",
        rating: 5,
        meta: "Student feedback · English",
        quote: "I am a dropper and my biggest problem was backlog. The A/B/C sorting made it feel finite instead of endless."
      },
      {
        name: "Ananya",
        rating: 5,
        meta: "Student feedback · Hinglish",
        quote: "Class 11 mein shuru kiya, so pressure kam hai. Daily tracker itna simple hai ki school ke baad actually fill ho jata hai."
      },
      {
        name: "Arif",
        rating: 4,
        meta: "Student feedback · Hinglish adaptation",
        quote: "Mock ke baad sirf score dekhna band kar diya. Error log fill karna thoda time leta hai, but next test mein same galtiyan kam hui."
      },
      {
        name: "Shreya",
        rating: 5,
        meta: "Student feedback · English",
        quote: "The weekly command centre keeps boards and NEET in one view. I do not wake up wondering what to study."
      },
      {
        name: "Vishal",
        rating: 5,
        meta: "Student feedback · English",
        quote: "Clean, print-friendly and no wasted pages. I use the syllabus map on my wall and the daily page in a folder."
      },
      {
        name: "Nandini",
        rating: 5,
        meta: "Student feedback · English",
        quote: "The final 30-day plan stopped me from panicking in the last month. Every day had one clear target."
      },
      {
        name: "Kabir",
        rating: 4,
        meta: "Student feedback · English",
        quote: "Good structure, not magic. You still have to do the work. The revision loop is what made it worth it for me."
      },
      {
        name: "Ishita",
        rating: 5,
        meta: "Student feedback · English",
        quote: "I used to make a new timetable every two weeks. This is the first system I have kept for three months."
      },
      {
        name: "Arjun",
        rating: 5,
        meta: "Student feedback · English",
        quote: "The chapter completion gate is strict in a good way. I stopped marking chapters done after one reading."
      },
      {
        name: "Simran",
        rating: 4,
        meta: "Student feedback · Hinglish",
        quote: "PDF phone pe fill karna easy hai. Bas print karke likhna zyada suit karta hai mujhe. Planner ka structure bahut clear hai."
      },
      {
        name: "Devansh",
        rating: 5,
        meta: "Student feedback · English",
        quote: "PYQ analysis plus the error log showed me that most of my lost marks came from two chapters. I fixed those first."
      },
      {
        name: "Tanvi",
        rating: 5,
        meta: "Student feedback · English",
        quote: "It does not add more work. It organises the work I was already doing. That is why it stuck."
      }
    ]
  };

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const isPlaceholder = (value) => !value || /PASTE_/i.test(value);
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const numberFormat = new Intl.NumberFormat("en-IN");
  let toastTimer;

  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 3600);
  }

  function track(event, payload = {}) {
    if (typeof window.fbq === "function") {
      window.fbq("track", event, payload);
    }
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event, ...payload });
    }
  }

  function setText(selector, value) {
    $$(selector).forEach((element) => {
      element.textContent = value;
    });
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.addEventListener("load", resolve, { once: true });
      script.addEventListener("error", reject, { once: true });
      document.head.appendChild(script);
    });
  }

  function setupAnalytics() {
    const { metaPixelId, ga4Id } = CONFIG.analytics;

    if (!isPlaceholder(metaPixelId)) {
      window.fbq = window.fbq || function () {
        window.fbq.queue = window.fbq.queue || [];
        window.fbq.queue.push(arguments);
      };
      window._fbq = window.fbq;
      window.fbq("init", metaPixelId);
      window.fbq("track", "PageView");
      loadScript("https://connect.facebook.net/en_US/fbevents.js").catch(() => {});
    }

    if (!isPlaceholder(ga4Id)) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function () {
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", ga4Id);
      loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4Id)}`).catch(() => {});
    }
  }

  function applyCreator() {
    setText("[data-creator-name]", CONFIG.creator.name);
    setText("[data-creator-role]", CONFIG.creator.role);
  }

  function renderPriceAndSeats() {
    const total = Math.max(1, CONFIG.seatsTotal);
    const sold = Math.min(Math.max(0, CONFIG.soldCount), total);
    const left = total - sold;
    const percent = (sold / total) * 100;

    setText("[data-price-launch]", `₹${CONFIG.priceLaunch}`);
    setText("[data-price-regular]", `₹${CONFIG.priceRegular}`);
    setText("[data-seats-left]", numberFormat.format(left));
    setText("[data-sold]", numberFormat.format(sold));
    setText("[data-total]", numberFormat.format(total));
    setText("[data-refund]", CONFIG.refundPolicy);
    setText("[data-year]", String(new Date().getFullYear()));

    $$(".seat__track").forEach((trackElement) => {
      trackElement.setAttribute("aria-valuenow", String(sold));
      trackElement.setAttribute("aria-valuetext", `${sold} of ${total} seats claimed`);
    });

    window.requestAnimationFrame(() => {
      $$(".seat__fill").forEach((fill) => {
        fill.style.width = `${percent}%`;
      });
    });
  }

  function starMarkup(rating) {
    return Array.from({ length: rating }, () => (
      '<svg class="icon icon--fill" aria-hidden="true"><use href="#i-star"></use></svg>'
    )).join("");
  }

  function createReviewCard(review) {
    const card = document.createElement("article");
    card.className = "review-card";
    card.innerHTML = [
      '<svg class="icon review-card__quote-icon" aria-hidden="true"><use href="#i-quote"></use></svg>',
      `<div class="stars" role="img" aria-label="${review.rating} out of 5 stars">${starMarkup(review.rating)}</div>`,
      "<blockquote></blockquote>",
      '<footer><span class="review-card__name"></span><span class="review-card__meta"></span></footer>'
    ].join("");
    card.querySelector("blockquote").textContent = `“${review.quote}”`;
    card.querySelector(".review-card__name").textContent = review.name;
    card.querySelector(".review-card__meta").textContent = review.meta;
    return card;
  }

  function renderReviews() {
    const grid = $("#review-grid");
    if (!grid || CONFIG.testimonials.length === 0) return;

    const initialVisible = 6;
    const reviews = CONFIG.testimonials;
    const cards = reviews.map(createReviewCard);

    cards.forEach((card, index) => {
      card.hidden = index >= initialVisible;
      card.style.transitionDelay = `${Math.min(index, 5) * 55}ms`;
      grid.appendChild(card);
      window.requestAnimationFrame(() => card.classList.add("is-in"));
    });

    const count = $("#review-count");
    const moreButton = $("#review-more");
    const average = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
    const roundedAverage = Math.min(5, Math.max(0, average));
    const gaugeOffset = (100 - (roundedAverage / 5) * 100).toFixed(1);

    $$(".rating-badge__center strong").forEach((element) => {
      element.textContent = roundedAverage.toFixed(1);
    });
    $$(".rating-badge__value").forEach((element) => {
      element.setAttribute("stroke-dashoffset", gaugeOffset);
    });
    $$(".rating-badge").forEach((element) => {
      element.setAttribute("aria-label", `Rated ${roundedAverage.toFixed(1)} out of 5 from ${reviews.length} reviews`);
    });

    if (!moreButton) return;

    let expanded = false;

    function updateReviewState() {
      if (count) {
        count.textContent = expanded
          ? `Showing all ${reviews.length} reviews`
          : `Showing ${Math.min(initialVisible, reviews.length)} of ${reviews.length} reviews`;
      }
      moreButton.setAttribute("aria-expanded", String(expanded));
      moreButton.textContent = expanded
        ? "Show fewer reviews"
        : `Read the other ${Math.max(0, reviews.length - initialVisible)} reviews`;
    }

    moreButton.addEventListener("click", () => {
      expanded = !expanded;

      cards.forEach((card, index) => {
        if (index < initialVisible) return;
        card.hidden = !expanded;
        if (expanded) {
          card.classList.remove("is-in");
          window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => card.classList.add("is-in"));
          });
        }
      });

      updateReviewState();

      if (expanded) {
        window.setTimeout(() => {
          const firstNewCard = cards[initialVisible];
          if (firstNewCard) {
            firstNewCard.scrollIntoView({
              behavior: prefersReducedMotion ? "auto" : "smooth",
              block: "nearest"
            });
          }
        }, 60);
      }
    });

    updateReviewState();
  }

  function setupFaq() {
    const faq = $("[data-faq]");
    if (!faq) return;

    const items = $$(".faq-item", faq);

    items.forEach((item) => {
      const button = $(".faq-q", item);
      const answer = $(".faq-a", item);
      if (!button || !answer) return;

      answer.inert = !item.classList.contains("is-open");

      button.addEventListener("click", () => {
        const willOpen = !item.classList.contains("is-open");

        items.forEach((otherItem) => {
          const otherButton = $(".faq-q", otherItem);
          const otherAnswer = $(".faq-a", otherItem);
          otherItem.classList.remove("is-open");
          if (otherButton) otherButton.setAttribute("aria-expanded", "false");
          if (otherAnswer) {
            otherAnswer.setAttribute("aria-hidden", "true");
            otherAnswer.inert = true;
          }
        });

        if (willOpen) {
          item.classList.add("is-open");
          button.setAttribute("aria-expanded", "true");
          answer.setAttribute("aria-hidden", "false");
          answer.inert = false;
        }
      });
    });
  }

  function openDialog(dialog) {
    if (!dialog) return;
    if (typeof dialog.showModal === "function") {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
    document.body.classList.add("is-dialog-open");
  }

  function closeDialog(dialog) {
    if (!dialog) return;
    if (typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
    document.body.classList.remove("is-dialog-open");
  }

  function setupLightbox() {
    const dialog = $("#lightbox");
    const image = $("#lightbox-img");
    const title = $("#lightbox-title");
    const description = $("#lightbox-desc");
    if (!dialog || !image || !title || !description) return;

    const closeButton = $(".lightbox__close", dialog);

    document.addEventListener("click", (event) => {
      const trigger = event.target.closest(".zoom-trigger");
      if (!trigger) return;

      const source = trigger.getAttribute("data-full");
      if (!source) return;

      const heading = trigger.getAttribute("data-title") || "Masterbook preview";
      image.src = source;
      image.alt = heading;
      title.textContent = heading;
      description.textContent = trigger.getAttribute("data-desc") || "";
      openDialog(dialog);
    });

    closeButton?.addEventListener("click", () => closeDialog(dialog));

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeDialog(dialog);
    });

    dialog.addEventListener("close", () => {
      document.body.classList.remove("is-dialog-open");
      image.removeAttribute("src");
    });
  }

  const POLICY_CONTENT = {
    privacy: {
      title: "Privacy",
      paragraphs: [
        "This page does not require an account to browse. We only receive information you choose to share when you contact support or complete a purchase.",
        "Payments are handled by a third-party checkout provider. Card and payment details are processed by that provider and are not collected or stored by this site.",
        "Basic analytics may be used to understand page performance and improve the product. You can restrict cookies in your browser settings.",
        "For privacy questions or requests, use the support links on this page."
      ]
    },
    terms: {
      title: "Terms",
      paragraphs: [
        "NEET Masterbook is an independent digital study-planning product. It is not affiliated with, endorsed by or connected to NTA, NMC or any coaching institute.",
        "Access is for personal use only. Redistribution, resale, public sharing or commercial use of the PDF is not permitted.",
        "The product provides planning and tracking templates. No score, rank, seat or result is guaranteed. Outcomes depend on individual effort and preparation.",
        "By purchasing, you agree to use the material lawfully and to the terms confirmed at checkout."
      ]
    },
    refund: {
      title: "Refund policy",
      paragraphs: [
        "This is a digital product that is delivered immediately after payment. Because access cannot be returned, refunds are handled according to the policy shown at checkout.",
        "If your download fails or you cannot access the file, contact support and we will help resolve it.",
        "For questions before buying, message us on Instagram or WhatsApp using the support links on this page."
      ]
    }
  };

  function setupPolicyDialog() {
    const dialog = $("#policy-dialog");
    const title = $("#policy-title");
    const body = $("#policy-body");
    if (!dialog || !title || !body) return;

    const closeButton = $(".policy-dialog__close", dialog);
    const footerCloseButton = $("[data-policy-close]", dialog);

    document.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-policy]");
      if (!trigger) return;
      event.preventDefault();

      const key = trigger.getAttribute("data-policy");
      const content = POLICY_CONTENT[key];
      if (!content) return;

      title.textContent = content.title;
      body.innerHTML = content.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
      openDialog(dialog);
    });

    closeButton?.addEventListener("click", () => closeDialog(dialog));
    footerCloseButton?.addEventListener("click", () => closeDialog(dialog));

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeDialog(dialog);
    });

    dialog.addEventListener("close", () => {
      document.body.classList.remove("is-dialog-open");
    });
  }

  function setupSupportLinks() {
    const labels = {
      instagram: "Instagram",
      whatsapp: "WhatsApp",
      email: "email"
    };

    Object.entries(CONFIG.support).forEach(([type, value]) => {
      $$(`[data-support-link="${type}"]`).forEach((link) => {
        if (!isPlaceholder(value)) {
          link.href = type === "email" && !/^mailto:/i.test(value) ? `mailto:${value}` : value;
          if (type !== "email") {
            link.target = "_blank";
            link.rel = "noopener noreferrer";
          }
          return;
        }

        link.href = "#";
        link.addEventListener("click", (event) => {
          event.preventDefault();
          showToast(`${labels[type] || "Support"} link is not configured yet. Add it in script.js.`);
        });
      });
    });
  }

  function setupCheckout() {
    let reachedHalf = false;
    let reachedNinety = false;

    track("ViewContent", {
      content_name: "NEET 2027 Masterbook — Elite Edition",
      content_type: "product",
      value: CONFIG.priceLaunch,
      currency: "INR"
    });

    window.addEventListener("scroll", () => {
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollable = Math.max(1, documentHeight - viewportHeight);
      const depth = window.scrollY / scrollable;

      if (!reachedHalf && depth >= 0.5) {
        reachedHalf = true;
        track("ScrollDepth", { depth: 50 });
      }
      if (!reachedNinety && depth >= 0.9) {
        reachedNinety = true;
        track("ScrollDepth", { depth: 90 });
      }
    }, { passive: true });

    $$("[data-checkout]").forEach((button) => {
      button.addEventListener("click", () => {
        if (isPlaceholder(CONFIG.checkoutUrl)) {
          const priceSection = $("#price");
          if (priceSection) {
            priceSection.scrollIntoView({
              behavior: prefersReducedMotion ? "auto" : "smooth",
              block: "start"
            });
          }
          showToast("Checkout link is not configured yet. Add your payment link in script.js.");
          return;
        }

        track("InitiateCheckout", {
          content_name: "NEET 2027 Masterbook — Elite Edition",
          content_type: "product",
          value: CONFIG.priceLaunch,
          currency: "INR"
        });

        const opened = window.open(CONFIG.checkoutUrl, "_blank", "noopener,noreferrer");
        if (!opened) window.location.href = CONFIG.checkoutUrl;
      });
    });
  }

  function setupHeader() {
    const header = $("#site-header");
    if (!header) return;

    let ticking = false;

    function updateHeader() {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
      ticking = false;
    }

    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateHeader);
    }, { passive: true });

    updateHeader();
  }

  function setupMobileCta() {
    const cta = $("#mobile-cta");
    if (!cta) return;

    const mobileQuery = window.matchMedia("(max-width: 780px)");
    const hiddenSections = new Set();
    const watchedSections = ["price", "final"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    let ticking = false;

    function updateCta() {
      const pastHero = window.scrollY > Math.min(window.innerHeight * 0.72, 620);
      const visible = mobileQuery.matches && pastHero && hiddenSections.size === 0;
      cta.classList.toggle("is-visible", visible);
      cta.inert = !visible;
      document.body.classList.toggle("has-mobile-cta", visible);
      ticking = false;
    }

    function requestUpdate() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateCta);
    }

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            hiddenSections.add(entry.target.id);
          } else {
            hiddenSections.delete(entry.target.id);
          }
        });
        requestUpdate();
      }, { threshold: 0.12 });

      watchedSections.forEach((section) => observer.observe(section));
    }

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    if (typeof mobileQuery.addEventListener === "function") {
      mobileQuery.addEventListener("change", requestUpdate);
    } else if (typeof mobileQuery.addListener === "function") {
      mobileQuery.addListener(requestUpdate);
    }

    updateCta();
  }

  function setupReveals() {
    const elements = $$([
      ".section-head",
      ".problem__copy .lead",
      ".problem__visual",
      ".identity__quote",
      ".act-figure",
      ".gallery__head > *",
      ".feature",
      ".step",
      ".aud",
      ".notfor",
      ".founder__copy",
      ".founder__media",
      ".reviews__head",
      ".rating-badge",
      ".price-panel",
      ".trust__items",
      ".trust__media",
      ".faq__aside",
      ".faq-item",
      ".final__copy"
    ].join(","));

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    elements.forEach((element, index) => {
      element.classList.add("reveal");
      if (element.matches(".feature, .step, .aud, .faq-item")) {
        element.style.transitionDelay = `${(index % 4) * 65}ms`;
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -6% 0px"
    });

    elements.forEach((element) => observer.observe(element));

    const stateObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        stateObserver.unobserve(entry.target);
      });
    }, {
      threshold: 0.14,
      rootMargin: "0px 0px -4% 0px"
    });

    [".problem", ".problem-list", ".method__steps", ".reviews", ".final"].forEach((selector) => {
      $$(selector).forEach((element) => stateObserver.observe(element));
    });
  }

  function setupActShowcase() {
    const layout = $("[data-acts]");
    const deck = $("[data-acts-deck]");
    const gauge = $(".acts__gauge");
    const fill = $(".acts__gauge-fill");
    const dots = $$(".acts__gauge-dot");
    const panels = $$(".act-panel", layout || document);
    if (!layout || !deck || !gauge || !fill || panels.length === 0) return;

    const desktopQuery = window.matchMedia("(min-width: 960px)");
    let enhanced = false;
    let copies = [];
    let currentIndex = -1;
    let ticking = false;

    function setActive(index) {
      const safeIndex = Math.min(Math.max(0, index), panels.length - 1);
      if (safeIndex === currentIndex) return;
      currentIndex = safeIndex;

      copies.forEach((copy, copyIndex) => {
        copy.classList.toggle("is-active", copyIndex === safeIndex);
      });

      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("is-active", dotIndex === safeIndex);
      });

      const activePanel = panels[safeIndex];
      const color = activePanel.style.getPropertyValue("--act").trim() || "#C9962F";
      deck.style.setProperty("--act", color);
      gauge.style.setProperty("--act", color);
      fill.style.height = `${safeIndex * 22.5}%`;
    }

    function updateActiveAct() {
      const midpoint = window.innerHeight * 0.5;
      let active = 0;

      panels.forEach((panel, index) => {
        const rect = panel.getBoundingClientRect();
        if (rect.top <= midpoint && rect.bottom > midpoint) active = index;
      });

      setActive(active);
      ticking = false;
    }

    function requestActiveUpdate() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateActiveAct);
    }

    function enableShowcase() {
      if (enhanced) return;

      copies = panels.map((panel) => {
        const copy = $(".act-copy", panel);
        const color = panel.style.getPropertyValue("--act").trim() || "#C9962F";
        if (copy) copy.style.setProperty("--act", color);
        if (copy) deck.appendChild(copy);
        return copy;
      }).filter(Boolean);

      layout.classList.add("is-enhanced");
      enhanced = true;
      currentIndex = -1;
      fill.style.height = "0%";
      setActive(0);
      window.addEventListener("scroll", requestActiveUpdate, { passive: true });
      window.addEventListener("resize", requestActiveUpdate);
      requestActiveUpdate();
    }

    function disableShowcase() {
      if (!enhanced) return;

      layout.classList.remove("is-enhanced");
      window.removeEventListener("scroll", requestActiveUpdate);
      window.removeEventListener("resize", requestActiveUpdate);

      copies.forEach((copy, index) => {
        copy.classList.remove("is-active");
        const panel = panels[index];
        if (panel) panel.insertBefore(copy, panel.firstElementChild);
      });

      copies = [];
      currentIndex = -1;
      enhanced = false;
      deck.style.removeProperty("--act");
      gauge.style.removeProperty("--act");
      fill.style.height = "0%";
      dots.forEach((dot) => dot.classList.remove("is-active"));
    }

    function syncShowcase() {
      if (desktopQuery.matches) {
        enableShowcase();
      } else {
        disableShowcase();
      }
    }

    syncShowcase();

    if (typeof desktopQuery.addEventListener === "function") {
      desktopQuery.addEventListener("change", syncShowcase);
    } else if (typeof desktopQuery.addListener === "function") {
      desktopQuery.addListener(syncShowcase);
    }
  }

  function setupHeroTilt() {
    const visual = $("#hero-visual");
    const tilt = $(".book-tilt");
    const glow = $(".book-glow");
    if (!visual || !tilt || !glow || prefersReducedMotion) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    function setTilt(rx, ry, gx, gy) {
      tilt.style.setProperty("--rx", `${rx}deg`);
      tilt.style.setProperty("--ry", `${ry}deg`);
      glow.style.setProperty("--gx", `${gx}px`);
      glow.style.setProperty("--gy", `${gy}px`);
    }

    if (finePointer.matches) {
      let frame;

      function reset() {
        window.cancelAnimationFrame(frame);
        setTilt(0, 0, 0, 0);
      }

      visual.addEventListener("pointermove", (event) => {
        const rect = visual.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        window.cancelAnimationFrame(frame);
        frame = window.requestAnimationFrame(() => {
          setTilt(y * -10, x * 14, x * 22, y * 14);
        });
      }, { passive: true });

      visual.addEventListener("pointerleave", reset);
      visual.addEventListener("blur", reset, true);
      return;
    }

    const mobileQuery = window.matchMedia("(max-width: 860px)");
    let ticking = false;

    function updateScrollTilt() {
      ticking = false;
      if (!mobileQuery.matches) {
        setTilt(0, 0, 0, 0);
        return;
      }

      const rect = visual.getBoundingClientRect();
      if (rect.bottom < -120 || rect.top > window.innerHeight + 120) return;

      const range = Math.max(1, window.innerHeight * 0.9);
      const progress = Math.min(1, Math.max(0, window.scrollY / range));
      setTilt(progress * -2.6, progress * 7.5, progress * 16, progress * 9);
    }

    function requestScrollTilt() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateScrollTilt);
    }

    window.addEventListener("scroll", requestScrollTilt, { passive: true });
    window.addEventListener("resize", requestScrollTilt);

    if (typeof mobileQuery.addEventListener === "function") {
      mobileQuery.addEventListener("change", requestScrollTilt);
    } else if (typeof mobileQuery.addListener === "function") {
      mobileQuery.addListener(requestScrollTilt);
    }

    updateScrollTilt();
  }

  function setupMobileActMotion() {
    const panels = $$(".act-panel");
    const reviewGrid = $("#review-grid");
    const targets = reviewGrid ? [...panels, reviewGrid] : panels;
    if (targets.length === 0 || prefersReducedMotion || !("IntersectionObserver" in window)) return;

    const mobileQuery = window.matchMedia("(max-width: 959px)");
    const revealTarget = (target) => {
      if (mobileQuery.matches) target.classList.add("is-mobile-in");
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        revealTarget(entry.target);
        if (entry.target.classList.contains("is-mobile-in")) observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.02,
      rootMargin: "0px 0px -8% 0px"
    });

    targets.forEach((target) => observer.observe(target));

    function sync() {
      if (!mobileQuery.matches) return;
      targets.forEach((target) => {
        if (target.classList.contains("is-mobile-in")) return;
        const rect = target.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) {
          target.classList.add("is-mobile-in");
          observer.unobserve(target);
        }
      });
    }

    if (typeof mobileQuery.addEventListener === "function") {
      mobileQuery.addEventListener("change", sync);
    } else if (typeof mobileQuery.addListener === "function") {
      mobileQuery.addListener(sync);
    }

    sync();
  }

  function setupCounters() {
    const counters = $$("[data-count]");
    if (counters.length === 0) return;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      counters.forEach((counter) => {
        counter.textContent = numberFormat.format(Number(counter.dataset.count));
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        const target = Number(element.dataset.count);
        const duration = 1250;
        const start = performance.now();

        function tick(now) {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          element.textContent = numberFormat.format(Math.round(target * eased));
          if (progress < 1) {
            window.requestAnimationFrame(tick);
          }
        }

        window.requestAnimationFrame(tick);
        observer.unobserve(element);
      });
    }, { threshold: 0.5 });

    counters.forEach((counter) => observer.observe(counter));
  }

  function setupBookReveal() {
    const stage = $("#book-stage");
    const image = $(".book-img", stage || document);
    if (!stage || !image) return;

    const reveal = () => stage.classList.add("is-loaded");

    if (image.complete) {
      reveal();
    } else {
      image.addEventListener("load", reveal, { once: true });
      image.addEventListener("error", reveal, { once: true });
    }
  }

  function init() {
    setupAnalytics();
    applyCreator();
    renderPriceAndSeats();
    renderReviews();
    setupSupportLinks();
    setupCheckout();
    setupFaq();
    setupLightbox();
    setupPolicyDialog();
    setupHeader();
    setupMobileCta();
    setupReveals();
    setupActShowcase();
    setupMobileActMotion();
    setupHeroTilt();
    setupCounters();
    setupBookReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
