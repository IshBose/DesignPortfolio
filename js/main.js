/* Used for scrolling sidenav on casestudy */

document.addEventListener("DOMContentLoaded", function () {
  const sectionLinks = document.querySelectorAll(".section-nav a");
  const sections = Array.from(sectionLinks).map(link =>
    document.querySelector(link.getAttribute("href"))
  );

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -70% 0px", // Adjust based on when you want to trigger active state
    threshold: 0
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const index = sections.indexOf(entry.target);
      const linkItem = sectionLinks[index].parentElement;

      if (entry.isIntersecting) {
        document.querySelectorAll(".section-nav li").forEach(li => li.classList.remove("active"));
        linkItem.classList.add("active");
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    if (section) observer.observe(section);
  });
});



/* Side Nav Active  */

let section = document.querySelectorAll('section');
        let lists = document.querySelectorAll('.list');
        function activeLink(li) {
            lists.forEach((item) => item.classList.remove('active'));
            li.classList.add('active');
        }
        lists.forEach((item) =>
            item.addEventListener('click', function(){
                activeLink(this);
            }));

        window.onscroll = () => {
            section.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    // Not every <section> has a matching nav anchor (the index's
                    // work and contact sections don't), so bail instead of throwing.
                    if (!id) return;
                    const link = document.querySelector(`[href='#${id}']`);
                    if (!link || !link.parentElement) return;
                    activeLink(link.parentElement);
                }
            })
        };


      

        var coll = document.getElementsByClassName("collapsible");
        var i;

        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
              content.style.display = "none";
            } else {
              content.style.display = "block";
            }
          });
        }



        function updateTimeAndIcon() {
          const now = new Date();
          const hour = now.getHours();
          const minutes = now.getMinutes();
          
          // Format time to HH:MM AM/PM
          const amPm = hour >= 12 ? "PM" : "AM";
          const formattedHour = hour % 12 || 12; // Convert 0 to 12-hour format
          const formattedMinutes = minutes.toString().padStart(2, "0");
          const formattedTime = `${formattedHour}:${formattedMinutes} ${amPm}`;

          let icon = "⏳"; // Default loading icon

          if (hour >= 1 && hour < 12) {
              icon = "🌅"; // Sunrise
          } else if (hour >= 12 && hour < 17) {
              icon = "⛅"; // Sun
          } else if (hour >= 17 || hour === 0) {
              icon = "🌑"; // Moon
          }

          document.getElementById("timeIcon").textContent = icon;
          document.getElementById("currentTime").textContent = formattedTime;
      }

      // Scroll handling
      let lastScrollY = 0;
      const timeContainer = document.querySelector('.time-container');
      
      function handleScroll() {
          const currentScrollY = window.scrollY;
          
          // Show/hide based on scroll direction and position
          if (currentScrollY > lastScrollY && currentScrollY > 50) {
              // Scrolling down & past threshold
              timeContainer.classList.remove('visible');
              timeContainer.classList.add('hidden');
          } else if (currentScrollY < lastScrollY || currentScrollY < 10) {
              // Scrolling up or near top
              timeContainer.classList.remove('hidden');
              timeContainer.classList.add('visible');
          }
          
          lastScrollY = currentScrollY;
      }

      // Initialize
      document.addEventListener('DOMContentLoaded', function() {
          // Initial time update
          updateTimeAndIcon();
          
          // Set up interval for time updates
          setInterval(updateTimeAndIcon, 60000); // Update every minute
          
          // Add scroll event listener
          window.addEventListener('scroll', handleScroll, { passive: true });
      });

        document.addEventListener('DOMContentLoaded', function() {
          const accordionItems = document.querySelectorAll('.accordion-item');

          accordionItems.forEach(item => {
              const header = item.querySelector('.accordion-header');

              function toggle() {
                  const open = item.classList.toggle('active');
                  header.setAttribute('aria-expanded', open ? 'true' : 'false');
              }

              header.addEventListener('click', toggle);

              // The header is a div with role="button", so Enter/Space have to
              // be wired up by hand to match native button behaviour.
              header.addEventListener('keydown', function(e) {
                  if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                      e.preventDefault();
                      toggle();
                  }
              });
          });
      });




      document.addEventListener('DOMContentLoaded', function() {
        // Wait for 1 second (1000ms) before showing the portgrid
        setTimeout(function() {
          const portgrid = document.querySelector('.indexemphasize');
          if (portgrid) {
            portgrid.classList.add('visible');
          }
        }, 250);
      });


      document.addEventListener('DOMContentLoaded', function() {
        // Let the hero settle before the work list fades in
        setTimeout(function() {
          const worklist = document.querySelector('.worklist');
          if (worklist) {
            worklist.classList.add('visible');
          }
        }, 600);
      });

      

       // Pill nav — mark active tab based on current page
       (function () {
         const path = window.location.pathname;
         const page = path.includes('writings') ? 'writings' : path.includes('about') ? 'about' : 'work';
         document.querySelectorAll('.pill-tab').forEach(tab => {
           tab.classList.toggle('active', tab.dataset.page === page);
         });
       })();

       // Added: JavaScript functionality to toggle the menu
        const menu = document.querySelector(".menu");
        const menuItems = document.querySelectorAll(".menuItem");
        const hamburger = document.querySelector(".hamburger");
        const closeIcon = document.querySelector(".closeIcon");
        const menuIcon = document.querySelector(".menuIcon");
        
        console.log("Menu elements found:", { menu, hamburger, closeIcon, menuIcon });

        function toggleMenu() {
            if (menu.classList.contains("showMenu")) {
                menu.classList.remove("showMenu");
                closeIcon.style.display = "none";
                menuIcon.style.display = "block";
            } else {
                menu.classList.add("showMenu");
                closeIcon.style.display = "block";
                menuIcon.style.display = "none";
            }
        }

        hamburger.addEventListener("click", toggleMenu);

        // Optional: Close menu when clicking on menu items
        menuItems.forEach(function(menuItem) {
            menuItem.addEventListener("click", toggleMenu);
        });



        /* Encruption***********************************************************************/
        console.log("Starting password/encryption section");
        
        const CORRECT_PASSWORD_HASH = 'e0d7680971095e5adc1f7617b583df4d5b36e61e6f8f84b478c6966ddf14eb54';
        
        let attempts = 0;
        const MAX_ATTEMPTS = 5;
        let locked = false;

        // Check password when Enter key is pressed
        const passwordInput = document.getElementById('passwordInput');
        if (passwordInput) {
            console.log("Password input found, adding enter key listener");
            passwordInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    checkPassword();
                }
            });
        } else {
            console.log("Password input not found - probably not a password-protected page");
        }

        async function checkPassword() {
            if (locked) {
                showError('Too many attempts. Please refresh the page.');
                return;
            }

            const input = document.getElementById('passwordInput');
            const password = input.value;
            const loginContainer = document.getElementById('loginContainer');
            const errorMsg = document.getElementById('errorMessage');
            const unlockBtn = document.getElementById('unlockBtn');

            // Add loading state
            unlockBtn.classList.add('loading');
            unlockBtn.textContent = 'Checking...';

            // Hash the input with SHA-256 and compare
            const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(password));
            const hashHex = Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
            const isCorrect = hashHex === CORRECT_PASSWORD_HASH;

            setTimeout(() => {
                if (isCorrect) {
                    // Success
                    input.classList.remove('error');
                    input.classList.add('success');
                    errorMsg.classList.remove('show');
                    unlockBtn.textContent = 'Success!';

                    // Show success animation
                    const successAnim = document.getElementById('successAnimation');
                    successAnim.classList.add('show');

                    // Transition to portfolio
                    setTimeout(() => {
                        loginContainer.style.display = 'none';
                        successAnim.classList.remove('show');
                        document.getElementById('portfolioContent').style.display = 'block';
                        document.body.style.background = 'var(--background)';
                        // Attach listeners to newly visible images
                        attachListeners();
                    }, 1500);

                } else {
                    // Error
                    attempts++;
                    input.classList.add('error');
                    input.classList.remove('success');
                    loginContainer.classList.add('shake');

                    if (attempts >= MAX_ATTEMPTS) {
                        locked = true;
                        showError('Too many failed attempts. Please refresh the page.');
                        unlockBtn.style.opacity = '0.5';
                        unlockBtn.style.cursor = 'not-allowed';
                    } else {
                        showError(`Incorrect password. ${MAX_ATTEMPTS - attempts} attempts remaining.`);
                    }

                    setTimeout(() => {
                        loginContainer.classList.remove('shake');
                        input.classList.remove('error');
                    }, 500);

                    unlockBtn.classList.remove('loading');
                    unlockBtn.textContent = 'Unlock Portfolio';

                    // Clear input
                    input.value = '';
                }
            }, 600);
        }

        function showError(message) {
            const errorMsg = document.getElementById('errorMessage');
            if (errorMsg) {
                errorMsg.textContent = message;
                errorMsg.classList.add('show');
            }
        }

        function togglePassword() {
            const input = document.getElementById('passwordInput');
            const toggle = document.querySelector('.toggle-password');
            
            if (input.type === 'password') {
                input.type = 'text';
                toggle.textContent = 'visibility_off';
                toggle.setAttribute('title', 'Hide password');
            } else {
                input.type = 'password';
                toggle.textContent = 'visibility';
                toggle.setAttribute('title', 'Show password');
            }
        }

        function logout() {
            // Reset everything
            const portfolioContent = document.getElementById('portfolioContent');
            const loginContainer = document.getElementById('loginContainer');
            
            if (portfolioContent && loginContainer) {
                portfolioContent.style.display = 'none';
                loginContainer.style.display = 'block';
                document.getElementById('passwordInput').value = '';
                document.getElementById('passwordInput').classList.remove('success', 'error');
                document.getElementById('errorMessage').classList.remove('show');
                document.getElementById('unlockBtn').textContent = 'Unlock Portfolio';
                document.getElementById('unlockBtn').classList.remove('loading');
                document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                attempts = 0;
                locked = false;
            }
        }

        // Prevent right-click context menu (basic protection)
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });

        // Disable text selection on the login screen
        const loginContainer = document.getElementById('loginContainer');
        if (loginContainer) {
            loginContainer.style.userSelect = 'none';
        }




        //THIS IS FOR IMAGE PREVIEW - SIMPLIFIED VERSION
        console.log("Starting image overlay initialization");
        
        // Global variables for the overlay functionality
        let imageOverlay = null;
        let overlayImage = null;
        let isOverlayInitialized = false;

        function initializeImageOverlay() {
            if (isOverlayInitialized) return;
            
            console.log("Initializing image overlay");
            
            // Create overlay
            imageOverlay = document.createElement("div");
            imageOverlay.className = "image-overlay";
            imageOverlay.innerHTML = `
              <span class="close-button">&times;</span>
              <img class="overlay-image" alt="">
            `;
            document.body.appendChild(imageOverlay);

            overlayImage = imageOverlay.querySelector(".overlay-image");
            const closeButton = imageOverlay.querySelector(".close-button");

            // Close handlers
            closeButton.addEventListener("click", closeFullscreen);
            imageOverlay.addEventListener("click", e => {
                if (e.target === imageOverlay) closeFullscreen();
            });
            document.addEventListener("keydown", e => {
                if (e.key === "Escape" && imageOverlay.classList.contains("active")) {
                    closeFullscreen();
                }
            });

            // Mobile swipe-to-close
            let touchStartY = 0;
            imageOverlay.addEventListener("touchstart", e => {
                if (e.touches.length === 1) {
                    touchStartY = e.touches[0].clientY;
                }
            });

            imageOverlay.addEventListener("touchend", e => {
                if (e.changedTouches.length === 1) {
                    const touchEndY = e.changedTouches[0].clientY;
                    if (touchEndY - touchStartY > 80) {
                        closeFullscreen();
                    }
                }
            });

            isOverlayInitialized = true;
        }

        function openFullscreen(src, alt) {
            if (!isOverlayInitialized) initializeImageOverlay();
            
            console.log("Opening fullscreen for:", src);
            overlayImage.src = src;
            overlayImage.alt = alt || "";
            imageOverlay.classList.add("active");
            document.body.style.overflow = "hidden";
        }

        function closeFullscreen() {
            if (imageOverlay) {
                imageOverlay.classList.remove("active");
                document.body.style.overflow = "";
            }
        }

        function setupImageClickHandlers() {
            console.log("Setting up image click handlers");
            
            // Remove any existing listeners first
            document.removeEventListener("click", handleImageClick);
            
            // Add the click handler
            document.addEventListener("click", handleImageClick);
            
            // Add visual feedback to images
            document.querySelectorAll("img.fullwidth").forEach(img => {
                if (!img.dataset.clickable) {
                    img.style.cursor = "pointer";
                    img.dataset.clickable = "true";
                    console.log("Made image clickable:", img.src);
                }
            });
        }

        function handleImageClick(e) {
            if (e.target.tagName === "IMG" && e.target.classList.contains("fullwidth")) {
                e.preventDefault();
                e.stopPropagation();
                console.log("Image clicked:", e.target.src);
                openFullscreen(e.target.src, e.target.alt);
            }
        }

        // Initialize on multiple events to ensure it works
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', setupImageClickHandlers);
        } else {
            setupImageClickHandlers();
        }

        window.addEventListener('load', setupImageClickHandlers);

        // For the password-protected page
        setTimeout(() => {
            setupImageClickHandlers();
        }, 2000);

        // Legacy function for backwards compatibility
        function attachListeners() {
            setupImageClickHandlers();
        }


/// ****** WORK LIST HOVER PREVIEW
(function () {
  const rows = document.querySelectorAll(".worklist-row[data-preview-poster]");
  if (!rows.length) return;

  // Pointer-driven preview is a desktop affordance only; touch never hovers.
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  const preview = document.createElement("div");
  preview.className = "work-preview";
  preview.setAttribute("aria-hidden", "true");
  const media = document.createElement("div");
  media.className = "work-preview-media";
  const img = document.createElement("img");
  img.alt = "";
  const video = document.createElement("video");
  video.loop = true;
  video.muted = true;
  video.playsInline = true;
  video.preload = "none";
  media.appendChild(img);
  media.appendChild(video);
  preview.appendChild(media);
  document.body.appendChild(preview);

  const GAP = 18;
  let visible = false;
  let anchored = false; // opened by keyboard focus rather than the pointer

  function place(x, y) {
    const w = preview.offsetWidth;
    const h = preview.offsetHeight;
    // Flip to the other side of the anchor rather than spilling off-screen.
    let left = x + GAP;
    if (left + w > window.innerWidth - 8) left = x - GAP - w;
    left = Math.max(8, left);
    let top = y + GAP;
    if (top + h > window.innerHeight - 8) top = y - GAP - h;
    top = Math.max(8, top);
    preview.style.transform = "translate(" + Math.round(left) + "px, " + Math.round(top) + "px)";
  }

  function show(row, x, y) {
    img.src = row.dataset.previewPoster;
    const src = row.dataset.previewVideo;
    media.classList.remove("playing");
    if (src && !reduced.matches) {
      // Only crossfade to the video once it actually has frames, otherwise a
      // cold hover fades an empty element in over the poster.
      if (video.getAttribute("src") !== src) video.src = src;
      const started = video.play();
      if (started && typeof started.catch === "function") started.catch(function () {});
    } else {
      video.removeAttribute("src");
      video.load();
    }
    visible = true;
    place(x, y);
    preview.classList.add("visible");
    return true;
  }

  function hide() {
    if (!visible) return;
    visible = false;
    preview.classList.remove("visible");
    media.classList.remove("playing");
    video.pause();
    video.currentTime = 0;
  }

  rows.forEach(function (row) {
    row.addEventListener("mouseenter", function (e) {
      if (!fine.matches) return;
      anchored = false;
      show(row, e.clientX, e.clientY);
    });
    row.addEventListener("mousemove", function (e) {
      if (visible) place(e.clientX, e.clientY);
    });
    row.addEventListener("mouseleave", hide);

    // Keyboard parity: anchor the preview to the row itself. The row is a
    // container now, so this listens for the title link's focus bubbling up —
    // focusing the secondary press link shouldn't preview the case study.
    row.addEventListener("focusin", function (e) {
      if (!fine.matches) return;
      const link = e.target;
      if (!link.classList.contains("worklist-title")) return;
      anchored = true;
      // Wait a frame: focusing a row below the fold scrolls it into view first,
      // so the rect we anchor to has to be the post-scroll one.
      requestAnimationFrame(function () {
        if (document.activeElement !== link) return;
        const r = row.getBoundingClientRect();
        show(row, r.right, r.bottom);
      });
    });
    row.addEventListener("focusout", hide);
  });

  video.addEventListener("playing", function () {
    if (visible) media.classList.add("playing");
  });

  window.addEventListener("scroll", function () {
    // A keyboard-anchored preview rides along with its row; only the
    // cursor-tracking one goes stale on scroll.
    if (anchored) {
      const active = document.activeElement;
      const row = active && active.closest ? active.closest(".worklist-row") : null;
      if (visible && row) {
        const r = row.getBoundingClientRect();
        place(r.right, r.bottom);
        return;
      }
    }
    hide();
  }, { passive: true });
})();

/// ****** GLOBE
(function () {
  const canvas = document.getElementById("halftone-globe");
  if (!canvas || typeof window.LAND_DOTS === "undefined") return;

  const ctx = canvas.getContext("2d");
  const DPR = window.devicePixelRatio || 1;
  const CSS = 240;
  const S = CSS * DPR;
  canvas.width = S;
  canvas.height = S;
  canvas.style.width  = CSS + "px";
  canvas.style.height = CSS + "px";

  const cx = S / 2, cy = S / 2;
  const R  = S / 2 - 3 * DPR;
  const TILT = 22 * Math.PI / 180;
  const cosTilt = Math.cos(TILT), sinTilt = Math.sin(TILT);

  let rot = 90;
  let planeAngle = 0;
  const TORAD = Math.PI / 180;

  // Spherical linear interpolation between two lon/lat points along a great circle
  function slerp3(lon1, lat1, lon2, lat2, t) {
    const φ1 = lat1 * TORAD, λ1 = lon1 * TORAD;
    const φ2 = lat2 * TORAD, λ2 = lon2 * TORAD;
    const x1 = Math.cos(φ1)*Math.cos(λ1), y1 = Math.sin(φ1), z1 = Math.cos(φ1)*Math.sin(λ1);
    const x2 = Math.cos(φ2)*Math.cos(λ2), y2 = Math.sin(φ2), z2 = Math.cos(φ2)*Math.sin(λ2);
    const dot = Math.max(-1, Math.min(1, x1*x2 + y1*y2 + z1*z2));
    const omega = Math.acos(dot);
    if (omega < 1e-10) return [lon1, lat1];
    const so = Math.sin(omega);
    const a = Math.sin((1 - t) * omega) / so;
    const b = Math.sin(t * omega) / so;
    const x = a*x1 + b*x2, y = a*y1 + b*y2, z = a*z1 + b*z2;
    return [Math.atan2(z, x) / TORAD, Math.asin(Math.max(-1, Math.min(1, y))) / TORAD];
  }

  // Dashed great-circle arcs connecting each city in sequence
  function drawFlightPaths() {
    const N = CITIES.length;
    ctx.save();
    ctx.lineWidth = 0.8 * DPR;
    ctx.strokeStyle = "rgba(52,120,255,0.20)";
    ctx.setLineDash([3 * DPR, 5 * DPR]);
    for (let ci = 0; ci < N; ci++) {
      const from = CITIES[ci], to = CITIES[(ci + 1) % N];
      ctx.beginPath();
      let penDown = false;
      for (let i = 0; i <= 80; i++) {
        const [lon, lat] = slerp3(from.lon, from.lat, to.lon, to.lat, i / 80);
        const p = project(lon, lat);
        if (p) {
          if (!penDown) { ctx.moveTo(p[0], p[1]); penDown = true; }
          else            ctx.lineTo(p[0], p[1]);
        } else {
          penDown = false;
        }
      }
      ctx.stroke();
    }
    ctx.setLineDash([]);
    ctx.restore();
  }

  function drawAirplane() {
    const N = CITIES.length;
    const t_total = planeAngle % N;
    const seg = Math.floor(t_total) % N;
    const t   = t_total - Math.floor(t_total);
    const from = CITIES[seg], to = CITIES[(seg + 1) % N];

    const [lon, lat] = slerp3(from.lon, from.lat, to.lon, to.lat, t);
    const p = project(lon, lat);
    if (!p) return;

    // Heading from tangent — step slightly forward along the great circle
    const t2 = Math.min(t + 0.005, 0.999);
    const [lon2, lat2] = slerp3(from.lon, from.lat, to.lon, to.lat, t2);
    const p2 = project(lon2, lat2);
    if (!p2) return;

    const heading = Math.atan2(p2[1] - p[1], p2[0] - p[0]);
    const s = 3.2 * DPR;
    ctx.save();
    ctx.translate(p[0], p[1]);
    ctx.rotate(heading);
    ctx.lineJoin    = "round";
    ctx.lineCap     = "round";
    ctx.fillStyle   = "#e4e4e4";
    ctx.strokeStyle = "rgba(0,0,0,0.16)";
    ctx.lineWidth   = 0.6 * DPR;
    // Fuselage
    ctx.beginPath();
    ctx.moveTo( s * 3.0, 0);
    ctx.bezierCurveTo( s * 2.3, -s * 0.18,  s * 1.0, -s * 0.30,  s * 0.8, -s * 0.30);
    ctx.lineTo(-s * 2.1, -s * 0.22);
    ctx.bezierCurveTo(-s * 2.5, -s * 0.15, -s * 2.9, -s * 0.07, -s * 3.0,  0);
    ctx.bezierCurveTo(-s * 2.9,  s * 0.07, -s * 2.5,  s * 0.15, -s * 2.1,  s * 0.22);
    ctx.lineTo( s * 0.8,  s * 0.30);
    ctx.bezierCurveTo( s * 1.0,  s * 0.30,  s * 2.3,  s * 0.18,  s * 3.0,  0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // Left main wing
    ctx.beginPath();
    ctx.moveTo( s * 0.80, -s * 0.30);
    ctx.lineTo(-s * 0.15, -s * 2.22);
    ctx.bezierCurveTo(-s * 0.30, -s * 2.30, -s * 0.62, -s * 2.27, -s * 0.80, -s * 2.12);
    ctx.lineTo(-s * 0.90, -s * 0.30);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // Right main wing
    ctx.beginPath();
    ctx.moveTo( s * 0.80,  s * 0.30);
    ctx.lineTo(-s * 0.15,  s * 2.22);
    ctx.bezierCurveTo(-s * 0.30,  s * 2.30, -s * 0.62,  s * 2.27, -s * 0.80,  s * 2.12);
    ctx.lineTo(-s * 0.90,  s * 0.30);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // Left horizontal stabilizer
    ctx.beginPath();
    ctx.moveTo(-s * 2.10, -s * 0.22);
    ctx.lineTo(-s * 2.50, -s * 0.90);
    ctx.bezierCurveTo(-s * 2.60, -s * 0.96, -s * 2.76, -s * 0.90, -s * 2.82, -s * 0.78);
    ctx.lineTo(-s * 2.92, -s * 0.22);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // Right horizontal stabilizer
    ctx.beginPath();
    ctx.moveTo(-s * 2.10,  s * 0.22);
    ctx.lineTo(-s * 2.50,  s * 0.90);
    ctx.bezierCurveTo(-s * 2.60,  s * 0.96, -s * 2.76,  s * 0.90, -s * 2.82,  s * 0.78);
    ctx.lineTo(-s * 2.92,  s * 0.22);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }

  const CITIES = [
    { lon: -117.2, lat: 32.7,  label: "San Diego, CA",    caption: "Where I currently live",    img: "images/sdhero.jpeg" },
    { lon: -121.9, lat: 37.3,  label: "San Jose, CA",     caption: "Where I feel 'home' is",    img: "images/sjhero.jpeg" },
    { lon:  -98.5, lat: 29.4,  label: "San Antonio, TX",  caption: "Where it all begin... still love the spurs to this date!",   img: "images/santhero.jpeg" },
    { lon:    5.5, lat: 51.4,  label: "Eindhoven, NL",    caption: "A transformational era of my life, I graduated high school here",   img: "images/eindhovenhero.jpeg" },
    { lon:  121.5, lat: 31.2,  label: "Shanghai, China",  caption: "Fun fact: I lived here for 3 years",   img: "" },
  ];

  // CSS-pixel positions of visible cities, updated each frame for hit-testing
  let cityPositions = [];

  function project(lon, lat) {
    const λ = (lon + rot) * Math.PI / 180;
    const φ = lat * Math.PI / 180;
    const cosφ = Math.cos(φ), sinφ = Math.sin(φ);
    const cosλ = Math.cos(λ), sinλ = Math.sin(λ);
    const c = sinTilt * sinφ + cosTilt * cosφ * cosλ;
    if (c < 0) return null;
    return [
      cx + R * cosφ * sinλ,
      cy - R * (cosTilt * sinφ - sinTilt * cosφ * cosλ),
      c
    ];
  }

  function draw() {
    ctx.clearRect(0, 0, S, S);

    // Globe outline
    ctx.strokeStyle = "rgba(0,0,0,0.13)";
    ctx.lineWidth = DPR;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.stroke();

    // Land dots
    ctx.fillStyle = "#000000";
    const maxR = 1.3 * DPR;
    const minR = 0.25 * DPR;
    for (const pt of window.LAND_DOTS) {
      const p = project(pt[0], pt[1]);
      if (!p) continue;
      const r = minR + (maxR - minR) * p[2];
      ctx.beginPath();
      ctx.arc(p[0], p[1], r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Flight paths — great circle arcs between cities, on top of land dots
    drawFlightPaths();

    // City markers — drawn on top of flight paths
    cityPositions = [];
    for (const city of CITIES) {
      const p = project(city.lon, city.lat);
      if (!p) continue;

      cityPositions.push({ city, x: p[0] / DPR, y: p[1] / DPR });

      // Halo
      ctx.beginPath();
      ctx.arc(p[0], p[1], 5 * DPR, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(52, 120, 255, 0.18)";
      ctx.fill();

      // Filled dot
      ctx.beginPath();
      ctx.arc(p[0], p[1], 3 * DPR, 0, Math.PI * 2);
      ctx.fillStyle = "#3478FF";
      ctx.fill();

      // White ring
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1.2 * DPR;
      ctx.stroke();
    }

    // Airplane — on top of everything
    drawAirplane();

    rot += 0.06;
    planeAngle += 0.004;
    requestAnimationFrame(draw);
  }

  // ---- Tooltip ----
  const tooltip = document.createElement("div");
  tooltip.className = "globe-tooltip";
  document.body.appendChild(tooltip);

  function showTooltip(entry, clientX, clientY) {
    const { city } = entry;
    tooltip.innerHTML =
      (city.img ? `<img class="globe-tooltip-img" src="${city.img}" alt="${city.label}">` : "") +
      `<div class="globe-tooltip-label">${city.label}</div>` +
      `<div class="globe-tooltip-caption">${city.caption}</div>`;
    tooltip.classList.add("visible");
    placeTooltip(clientX, clientY);
  }

  function placeTooltip(clientX, clientY) {
    tooltip.style.left = "0px";
    tooltip.style.top  = "0px";
    const tw = tooltip.offsetWidth, th = tooltip.offsetHeight;
    const vw = window.innerWidth,   vh = window.innerHeight;
    let x = clientX + 18;
    let y = clientY - th / 2;
    if (x + tw > vw - 8) x = clientX - tw - 18;
    if (y < 8) y = 8;
    if (y + th > vh - 8) y = vh - th - 8;
    tooltip.style.left = x + "px";
    tooltip.style.top  = y + "px";
  }

  function hideTooltip() {
    tooltip.classList.remove("visible");
  }

  canvas.addEventListener("mousemove", e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    let hit = null;
    for (const entry of cityPositions) {
      const dx = mx - entry.x, dy = my - entry.y;
      if (dx * dx + dy * dy < 144) { hit = entry; break; }
    }
    if (hit) {
      canvas.style.cursor = "pointer";
      showTooltip(hit, e.clientX, e.clientY);
    } else {
      canvas.style.cursor = "";
      hideTooltip();
    }
  });

  canvas.addEventListener("mouseleave", hideTooltip);

  draw();
})();

/// ****** HALFTONE DITHER
/* An ordered-Bayer halftone renderer. One surface uses it today -- the field
   inside the footer card -- but it stays parameterised by `field` and `palette`
   so a second is a config object rather than a rewrite. Same trick a newspaper
   press uses: a fixed threshold grid turns a smooth ramp into hard-edged dots,
   the same dot language as halftoneface.png and the hero globe.

   A palette entry of `null` is not painted at all, which lets a surface dissolve
   into the page instead of ending on a rectangle.

   Drawn rather than shipped as an image so the dots stay square at any size
   instead of stretching to fit one baked aspect ratio.  */
(function () {
  const REVEAL_MS = 1100;

  const BAYER = [
     0, 32,  8, 40,  2, 34, 10, 42,
    48, 16, 56, 24, 50, 18, 58, 26,
    12, 44,  4, 36, 14, 46,  6, 38,
    60, 28, 52, 20, 62, 30, 54, 22,
     3, 35, 11, 43,  1, 33,  9, 41,
    51, 19, 59, 27, 49, 17, 57, 25,
    15, 47,  7, 39, 13, 45,  5, 37,
    63, 31, 55, 23, 61, 29, 53, 21
  ];

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function smoothstep(a, b, x) {
    const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
    return t * t * (3 - 2 * t);
  }

  // Deterministic per-cell noise. Math.random() here would make the speckle crawl
  // between frames and jump on every resize.
  function hash(i, j) {
    let h = (i * 374761393 + j * 668265263) | 0;
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
  }

  // ── The renderer ──────────────────────────────────────────────────────────

  function makeSurface(canvas, cfg) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    const levels = cfg.levels;
    const state = { w: 0, h: 0, cols: 0, rows: 0 };

    // The field only depends on size, so it is sampled once per resize and only
    // re-quantized per frame while the reveal is running.
    state.measure = function () {
      const W = Math.max(1, Math.round(canvas.clientWidth));
      const H = Math.max(1, Math.round(canvas.clientHeight));
      if (W === state.w && H === state.h) return false;

      state.w = W;
      state.h = H;
      state.cols = Math.ceil(W / cfg.cell);
      state.rows = Math.ceil(H / cfg.cell);

      const total = state.cols * state.rows;
      state.vals = new Float32Array(total);
      state.thr  = new Float32Array(total);
      state.spk  = new Float32Array(total);
      state.idx  = new Int8Array(total);

      for (let r = 0; r < state.rows; r++) {
        const y = r * cfg.cell + cfg.cell / 2;
        for (let c = 0; c < state.cols; c++) {
          const n = r * state.cols + c;
          state.vals[n] = cfg.field(c * cfg.cell + cfg.cell / 2, y, W, H);
          state.thr[n]  = BAYER[(r & 7) * 8 + (c & 7)] / 64;
          state.spk[n]  = hash(c, r);
        }
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width  = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return true;
    };

    state.draw = function (gain) {
      const { cols, rows, vals, thr, spk, idx } = state;
      const total = cols * rows;

      for (let n = 0; n < total; n++) {
        const s = vals[n] * gain * levels;
        let i = Math.floor(s);
        if (s - i > thr[n]) i += 1;
        if (i < 0) i = 0; else if (i > levels) i = levels;
        idx[n] = cfg.speckle ? cfg.speckle(i, spk[n]) : i;
      }

      ctx.clearRect(0, 0, state.w, state.h);

      // Run-length the fills: whole rows of a flat region collapse into a single
      // fillRect, which is what keeps the reveal at 60fps on a wide screen.
      for (let c = 0; c < cfg.palette.length; c++) {
        const colour = cfg.palette[c];
        if (colour === null) continue;      // transparent step -- paint nothing
        ctx.fillStyle = colour;
        for (let r = 0; r < rows; r++) {
          const base = r * cols;
          let run = 0;
          for (let q = 0; q <= cols; q++) {
            if (q < cols && idx[base + q] === c) { run++; continue; }
            if (run) {
              ctx.fillRect((q - run) * cfg.cell, r * cfg.cell, run * cfg.cell, cfg.cell);
              run = 0;
            }
          }
        }
      }
    };

    return state;
  }

  function mount(canvas, cfg) {
    const state = makeSurface(canvas, cfg);
    if (!state) return;

    let developed = false;
    let pending   = false;   // blanked and waiting to develop

    function render(gain) { state.measure(); state.draw(gain); }

    // The settled field, unconditionally and before anything else. Everything
    // below only ever replaces it with an animated route to the same place, so
    // if any of that machinery turns out to be unavailable the card is already
    // correct rather than blank.
    render(1);

    // The surface develops rather than fades in: the ramp resolves out of the
    // page the way a print comes up in a tray. It fits the material, it runs
    // once, and it costs nothing after the last frame.
    function develop() {
      if (developed) return;
      developed = true;
      pending = false;

      const start = performance.now();
      state.measure();
      (function step(now) {
        const t = Math.min(1, (now - start) / REVEAL_MS);
        const eased = 1 - Math.pow(2, -10 * t);       // ease-out-expo
        state.draw(t === 1 ? 1 : eased);
        if (t < 1) requestAnimationFrame(step);
      })(start);
    }

    if (!reduceMotion.matches && "IntersectionObserver" in window) {
      // Arming inside a frame is the point, not a detail. requestAnimationFrame
      // and IntersectionObserver are both delivered by the rendering loop, so
      // wherever one is throttled to a halt -- a background tab at load, a
      // headless renderer -- so is the other. Gating on an actual frame means a
      // dead loop can never blank a field it would then be unable to bring back.
      // Because this ramp's lightest step paints nothing, that failure is a
      // completely empty card, not merely an un-animated one.
      requestAnimationFrame(function () {
        const box = canvas.getBoundingClientRect();
        // Already on screen: leave it settled rather than animating something the
        // reader is looking at mid-load.
        if (box.top < window.innerHeight && box.bottom > 0) return;
        pending = true;
        state.draw(0);

        // IntersectionObserver is frame-driven too, but it does not always keep
        // step with requestAnimationFrame -- there are contexts where rAF ticks
        // and the observer stays silent, which would leave this blanked field
        // with nothing to bring it back. Settle it after a spell regardless.
        // Losing a 1.1s flourish is a far cheaper failure than a card that never
        // draws at all.
        window.setTimeout(function () {
          if (!pending) return;
          pending = false;
          state.draw(1);
        }, 5000);

        const io = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            io.disconnect();
            develop();
          });
        }, { threshold: 0.15 });
        io.observe(canvas);
      });
    }

    let resizeTimer = null;
    const ro = new ResizeObserver(function () {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(function () { render(pending ? 0 : 1); }, 150);
    });
    ro.observe(canvas);
  }

  // ── The footer card's field ───────────────────────────────────────────────

  const ARC_R    = 2.2;   // sphere radius, in card heights
  const ARC_X    = 0.95;  // sphere centre x, as a fraction of card width
  const ARC_APEX = 0.50;  // where the limb tops out, as a fraction of card height
  const RIM_FALL = 0.23;  // terminator glow falloff, in card heights
  const GUARD_B  = 50;    // px of baseline strip held pale for the colophon

  // Light to dark, on an off-white card: index 0 is null, so the ramp's lightest
  // step is simply not painted and the card's own background is what shows. That
  // is why there is no CSS gradient fallback to keep in sync with this array, and
  // why the field's edges dissolve instead of ending on a rectangle.
  //
  // --accent (#3478ff) sits at index 5 so the card reads as the site's own blue
  // pushed to saturation rather than as a new colour. Indices 7 and 8 are the
  // stray hues: a real quantized gradient throws odd pixels where levels break,
  // and that artifact is the difference between "dither" and "banded gradient".
  // Purple is the terraform accent, on purpose.
  const FOOTER_PALETTE = [
    null, "#e4edfb", "#c8dcff", "#9cbeff", "#5b93ff", "#2f6cff", "#0a1d9e",
    "#7b42bc", "#e8e2f4"
  ];

  function footerField(x, y, W, H) {
    // The limb of a very large sphere entering from the lower right. The globe in
    // the hero is a whole small world; this is the edge of a much bigger one.
    //
    // Radius is capped against width as well as height. On a phone the card is
    // near-square, and a radius set purely off height puts the sphere's centre so
    // far off-canvas that the limb enters as a straight vertical edge.
    const R  = Math.min(H * ARC_R, W * 0.95);
    const cx = W * ARC_X;
    // Where the limb tops out has to track the card's aspect from both ends.
    // Squarer (a phone) and the bloom slides toward the bottom-right corner, out
    // from under the copy. Wider and shorter, and it has to climb instead: the
    // baseline guard owns the lower third of a short card, so an arc topping out
    // mid-height gets held back into a faint horizontal streak. Push it too far
    // the other way, though, and the apex leaves the card entirely: everything
    // visible then sits inside the sphere, where `occ` crushes it to nothing.
    const squareness = Math.min(1, Math.max(0, (2.6 - W / H) / 1.4));
    const wideness   = Math.min(1, Math.max(0, (W / H - 2.4) / 2.2));
    const cy = H * (ARC_APEX + 0.30 * squareness - 0.20 * wideness) + R;
    const d  = Math.hypot(x - cx, y - cy);

    const rim = Math.exp(-Math.abs(d - R) / (H * RIM_FALL)); // glowing terminator
    const amb = Math.max(0, 1 - d / (R * 1.5)) * 0.30;       // wash falling off it
    // The sphere occludes. A hard step here quantizes into flat slabs along the
    // limb, so the shoulder is short but not instant.
    const occ = 0.26 + 0.74 * smoothstep(R - H * 0.05, R + H * 0.09, d);

    let v = (0.035 + rim * 0.92 + amb) * occ;

    // Copy sits in the left column and along the baseline. Rather than laying a
    // scrim over the dither -- which flattens the dots into a smooth wash -- the
    // hold-back is baked in BEFORE quantization, so what sits behind the text is
    // still true dither, just dither that never reaches the saturated end of the
    // ramp where ink copy would start to lose contrast.
    //
    // Guard geometry is width-relative so it scales with the card. A
    // height-relative fade was fine on a full-bleed band but left the copy
    // sitting in the glow once the card narrowed to 700px.
    // 0.44 rather than the half-width this started at: the ask now caps at 40%
    // of the row, so holding back a full half wastes canvas the copy never
    // reaches. Anything that widens .site-footer-sub has to move this with it.
    const guardX    = W * 0.44;
    const guardLeft = 1 - smoothstep(guardX, guardX + W * 0.22, x);
    // The fade is capped in px as well as scaled by height: on a 144px card a
    // pure H * 0.34 fade starts above the arc's apex and flattens the bloom.
    const guardBase = smoothstep(H - GUARD_B - Math.min(H * 0.34, 30), H - GUARD_B, y);

    // The two guards hold back by different amounts because they protect
    // different text. The left column carries --primarytext, which still clears
    // 11:1 on the ramp's index 3, so it only needs holding to ~0.38. The baseline
    // carries --secondarytext at 13px, which is spent by index 2, so it is held
    // much harder. One shared strength would have to satisfy the stricter of the
    // two and would drain the colour out of the whole card.
    v *= (1 - 0.62 * guardLeft) * (1 - 0.86 * guardBase);

    // A floor applied after the guard. Without it the guarded regions quantize to
    // solid index 0 -- nothing painted -- and the card goes dead flat over half
    // its width; at 0.05 the ramp's second step fires on roughly a third of
    // cells, which is the sparse dot texture the pale regions are supposed to
    // have. Index 1 is #e4edfb, ~15:1 against --primarytext, so this cannot cost
    // the copy any contrast.
    v = Math.max(v, 0.05 + 0.022 * (1 - y / H));

    return Math.min(1, Math.max(0, v));
  }

  function footerSpeckle(i, noise) {
    // Purple rides the saturated end of the ramp, where the levels actually break.
    if ((i === 4 && noise > 0.955) || (i === 5 && noise > 0.972)) return 7;
    if (i === 1 && noise > 0.9962) return 8;   // index 0 paints nothing -- leave it alone
    return i;
  }

  const FOOTER_CFG = {
    cell: 4, levels: 6, palette: FOOTER_PALETTE,
    field: footerField, speckle: footerSpeckle
  };

  // ── The pill nav's field ──────────────────────────────────────────────────

  /* The same surface as the footer, read as a slit. The pill is ~44px tall and
     at most ~760 wide, so an arc's curvature is all but invisible across it --
     what survives at this scale is the light falling off the sphere, which is
     enough to read as the same material.

     The contrast guarantee here is structural rather than masked, and that is
     the whole difference from the footer. The footer can afford saturated steps
     because its guard masks hold back the two regions that carry copy; the pill
     carries copy across its entire width with nowhere to guard, so instead the
     ramp simply stops at the footer's index 2. #c8dcff is 4.97:1 against
     --secondarytext (the 14px tabs, links and clock) and 13.4:1 against
     --primarytext, so no part of this field can cost the nav its AA no matter
     where the bloom lands. Do not extend NAV_PALETTE without redoing that sum:
     the footer's next step down, #9cbeff, is 3.69:1 and fails.

     Index 3 is the stray hue, same trick as the footer's speckle -- the
     terraform purple drained to a tint that still clears 4.95:1. */
  const NAV_PALETTE = [null, "#e4edfb", "#c8dcff", "#ded7ef"];

  function navField(x, y, W, H) {
    // Anchored just past the lower-right corner: the same light the footer's
    // sphere throws, caught on a strip too short to show the body it comes from.
    const cx = W * 1.06;
    const cy = H * 1.9;
    const R  = Math.hypot(W, cy);
    const d  = Math.hypot(x - cx, y - cy) / R;

    // The gain is not decoration. The bloom's own centre sits off-canvas, so the
    // strip only ever samples the tail of the falloff -- ungained, the ramp never
    // reaches its second step and the whole pill flattens into one wash of index
    // 1, which is a tint, not a halftone. At 1.3 the deeper step carries the
    // right third and the dots stay legible as dots.
    let v = Math.pow(1 - Math.min(1, d), 1.2) * 1.3;
    // Light from above. Without it a 44px band is a purely horizontal ramp, and
    // the dots read as a gradient swatch rather than as a lit surface.
    v *= 1 - 0.28 * (1 - y / H);
    // A floor, for the same reason the footer has one: below it the left half
    // quantizes to index 0 -- nothing painted -- and the pill goes dead white
    // under the logo instead of carrying the sparse texture it should.
    return Math.min(1, Math.max(v, 0.055));
  }

  function navSpeckle(i, noise) {
    return i === 2 && noise > 0.94 ? 3 : i;
  }

  /* A finer cell than the footer's 4px: the pill is a fraction of the card's
     height and sits directly behind 14px type, where 4px dots start to compete
     with the letterforms instead of sitting under them. */
  const NAV_CFG = {
    cell: 3, levels: 2, palette: NAV_PALETTE,
    field: navField, speckle: navSpeckle
  };

  // ── Wiring ────────────────────────────────────────────────────────────────

  /* index.html loads main.js with `defer`, but every case study and about.html
     load it partway down the document -- ahead of the footer markup -- so at this
     point the element may not exist yet. Wait for the parse rather than depend on
     where a given page happens to put its script tag. */
  function init() {
    document.querySelectorAll(".site-footer-dither").forEach(function (canvas) {
      mount(canvas, FOOTER_CFG);
    });
    document.querySelectorAll(".pill-nav-dither").forEach(function (canvas) {
      mount(canvas, NAV_CFG);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
