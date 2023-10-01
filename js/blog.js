let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let nodeJs = document.getElementById("nodejs").checked;
  let reactJs = document.getElementById("reactjs").checked;
  let nextJs = document.getElementById("nextjs").checked;
  let typescript = document.getElementById("typescript").checked;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image").files;

  
  image = URL.createObjectURL(image[0]);

  if (title === "") {
    alert("Harap Isi Nama Blog Anda");
    return;
  } else if (startDate === "" || endDate === "") {
    alert("Harap Isi Tanggal Blog Anda");
    return;
   } else if (content === "") {
    alert("Harap Isi Nama Blog Anda");
    return;
  } else if (image.length === 0) {
    alert("Harap Upload Gambar");
    return;
  }
  // untuk membuat icon  
  let icnodejs= '<i class="fab fa-node fa-xl"></i>';
  let icreactjs= '<i class="fab fa-react fa-xl"></i>';
  let icnextjs= '<i class="fab fa-next-js fa-xl"></i>';
  let ictypescript= '<i class="fab fa-typescript fa-xl"></i>';
  
var iconTech= ""

if(nodeJs.checked == true){
    iconTech += icnodejs
}

if(reactJs.checked == true){
    iconTech += icreactjs
}

if(nextJs.checked == true){
    iconTech += icnextjs
}

if(typescript.checked == true){
    iconTech += ictypescript}
 
  let blog = {
    title,
    startDate,
    endDate,
    content,
    nodeJs,
    reactJs,
    nextJs,
    typescript,
    image,
    icnodejs,
    icreactjs,
    icnextjs,
    ictypescript,
    iconTech,
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    console.log(dataBlog[index]);

    document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
            <div class="blog-image">
                <img src="${dataBlog[index].image}" alt="" />
            </div>
            <div class="blog-content">
            <h1>
            <a target="_blank" href="blog-detail.html">${dataBlog[index].title}</a>
            </h1>
            <div class="detail-blog-content">
            Start ${dataBlog[index].startDate} | End ${dataBlog[index].endDate}
            </div class="icon-check">
            
            <p>${dataBlog[index].content}</p><br/>
            
            ${dataBlog[index].iconTech}
            <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Delete Post</button>
            </div>
            </div>
        </div>
    `;
  }
}x 