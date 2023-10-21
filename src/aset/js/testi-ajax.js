const testimonial = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest() 
  
    xhr.open("GET", "https://api.npoint.io/e48f4f560ceaf01f7137", true) // http method, url addres, status async.
  
    xhr.onload = function () {
      if(xhr.status == 200) {
        resolve(JSON.parse(xhr.response))
      } else {
        reject("Error Loading Data")
      }
    }
  
    xhr.onerror = function () {
      reject("Network error")
    }
  
    xhr.send()
  })
  
async function showTestimonial() {
    try {
      const response = await testimonial
      let testimonialForHtml = ""
  
      response.forEach(item => {
        testimonialForHtml += `
          <div class="testimonial">
            <img src=${item.image} class="profile-testimonial" />
            <p class="quote">${item.quote}</p>
            <p class="author">- ${item.author}</p>
          </div>
        `
      })
  
      document.getElementById("testimonials").innerHTML = testimonialForHtml
    } catch (err) {
      console.log(err)
    }
  }
  showTestimonial()
  
  // filtered testimonial
  async function filterTestimonials(rating) {
    try {
      const response = await testimonial
      let testimonialForHtml = ""
  
      const dataFiltered = response.filter(data => data.rating === rating)
      if(dataFiltered.length === 0) {
        testimonialForHtml = `<h3>Data not found !</h3>`
      } else {
        dataFiltered.forEach(item => {
          testimonialForHtml += `
            <div class="testimonial">
              <img src=${item.image} class="profile-testimonial" />
              <p class="quote">${item.quote}</p>
              <p class="author">- ${item.author}</p>
              <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
            </div>
          `
        })
      }
  
      document.getElementById("testimonials").innerHTML = testimonialForHtml
    } catch (err) {
      console.log(err);
    }
  }

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