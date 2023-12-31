const testimonialData = [
    {
      author: "Nadine",
      quote: "5/5 stars - Outstanding service, impeccable quality, exceptional value. A truly remarkable experience that exceeded all expectations.",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      rating: 5,
    },
    {
      author: "Mahmoud",
      quote: "Create a user-friendly rating website with customizable categories, user profiles, and a simple rating system to empower users to share their opinions and experiences.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      rating: 4,
    },
    {
      author: "John Doe",
      quote: "Create a user-friendly website for ratings and reviews with responsive design, intuitive navigation, and robust data security features.!",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 4,
    },
    {
      author: "Mat Damon",
      quote: "Where trolls thrive! Unmoderated, biased, and hateful reviews. A cesspool of negativity. Stay away for your sanity!",
      image:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      rating: 1,
    },
  ];
  
  function allTestimonial() {
    let testimonialHTML = "";
  
    testimonialData.forEach(function (item) {
      testimonialHTML += `
              <div class="testimonial">
                  <img
                      class="profile-testimonial"
                      src="${item.image}"
                      alt="profile"
                  />
                  <p class="quote">${item.quote}</p>
                  <p class="author">- ${item.author}</p>
                  <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
              </div>
          `;
    });
  
    document.getElementById("testimonials").innerHTML = testimonialHTML;
  }
  
  allTestimonial();
  
  // filtered testimonial
  function filterTestimonial(rating) {
    let testimonialHTML = "";
  
    const testimonialFiltered = testimonialData.filter(function (item) {
      return item.rating === rating;
    });
  
    //   console.log(testimonialFiltered);
  
    if (testimonialFiltered.length === 0) {
      testimonialHTML += `<h1> Data not found! </h1>`;
    } else {
      testimonialFiltered.forEach(function (item) {
        testimonialHTML += `
              <div class="testimonial">
                  <img
                      class="profile-testimonial"
                      src="${item.image}"
                      alt="profile"
                  />
                  <p class="quote">${item.quote}</p>
                  <p class="author">- ${item.author}</p>
                  <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
              </div>
          `;
      });
    }
  
    document.getElementById("testimonials").innerHTML = testimonialHTML;
  }
  