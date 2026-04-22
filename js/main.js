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
                    const target = document.querySelector(`[href='#${id}']`).parentElement;
                    activeLink(target);
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
              
              header.addEventListener('click', function() {
                  // Toggle current item
                  item.classList.toggle('active');
                  
                  // Optional: Close other items when one is opened
                  // accordionItems.forEach(otherItem => {
                  //     if (otherItem !== item) {
                  //         otherItem.classList.remove('active');
                  //     }
                  // });
              });
          });
      });



/*
      document.querySelectorAll('.portgridcolcard img').forEach(img => {
        const originalSrc = img.src;
        const gifSrc = originalSrc.replace('.png', '.gif'); // Assuming your GIF has the same name but different extension
        
        img.addEventListener('mouseenter', () => {
          img.src = gifSrc;
        });
        
        img.addEventListener('mouseleave', () => {
          img.src = originalSrc;
        });
      });*/


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
        // Wait for 1 second (1000ms) before showing the portgrid
        setTimeout(function() {
          const portgrid = document.querySelector('.portgrid');
          if (portgrid) {
            portgrid.classList.add('visible');
          }
        }, 600);
      });

      

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
        
        // Simple encryption/decryption using Base64 and XOR
        const CORRECT_PASSWORD_HASH = 'bose'; // Change this to your desired password
        
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

        function checkPassword() {
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
            
            // Simulate processing time
            setTimeout(() => {
                if (password === CORRECT_PASSWORD_HASH) {
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
                toggle.textContent = '🙈';
            } else {
                input.type = 'password';
                toggle.textContent = '👁️';
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

  let rot = 0;

  const CITIES = [
    { lon: -117.2, lat: 32.7,  label: "San Diego, CA",    caption: "Where I currently live",    img: "" },
    { lon: -121.9, lat: 37.3,  label: "San Jose, CA",     caption: "Where I feel 'home' is",    img: "" },
    { lon:  -98.5, lat: 29.4,  label: "San Antonio, TX",  caption: "Where it all begin... still love the spurs to this date!",   img: "" },
    { lon:    5.5, lat: 51.4,  label: "Eindhoven, NL",    caption: "A transformational era of my life, I graduated high school here",   img: "" },
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

    // City markers — drawn on top of land dots
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

    rot += 0.06;
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