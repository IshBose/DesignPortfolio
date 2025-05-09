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

      

