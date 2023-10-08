let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let startDate =new Date(document.getElementById("input-start-date").value);
  let endDate = new Date (document.getElementById("input-end-date").value);
  let nodeJs = document.getElementById("nodejs");
  let reactJs = document.getElementById("reactjs");
  let nextJs = document.getElementById("nextjs");
  let typeScript = document.getElementById("typescript");
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
  let icnodejs= '<img src="aset/node.png" alt="" />';
  let icreactjs= '<img src="aset/react.png" alt="" />';
  let icnextjs= '<img src="aset/next.png" alt="" />';
  let ictypescript= '<img src="aset/type.png" alt="" />';
  
  if (nodeJs.checked) icnodejs;
  else icnodejs = "";

  if (reactJs.checked) icreactjs;
  else icreactjs = "";

  if (nextJs.checked) icnextjs;
  else icnextjs = "";

  if (typeScript.checked) ictypescript;
  else ictypescript = "";

  // menampilkan durasi
let duration= endDate - startDate;
let days = Math.floor(duration / (1000 * 60 * 60 * 24));
let weeks = Math.floor(days / 7);
let months = Math.floor(days/30);
let adddays = days % 7;

  if (days > 0 ) {
    duration = days + " " + "Hari";}
  if (days < 7 ) {
    duration = days + " " + "Hari";}
  if (days > 7) {
    duration = weeks + " " + "Minggu" + 
    " " + adddays + " " + "Hari";}
  if (days >= 30) {
    duration = months + " " + "Bulan" + " " + 
    adddays + " " + "Hari";
  }
  

  let blog = {
    title,
    startDate,
    endDate,
    postAt: new Date(),
    content,
    nodeJs,
    reactJs,
    nextJs,
    typeScript,
    image,
    icnodejs,
    icreactjs,
    icnextjs,
    ictypescript,
    duration,
    adddays,
  
  }

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
            <div style="margin-right: 5px;">
            <p>Durasi ${dataBlog[index].duration}</p><br/>
            </div>
            <div class="detail-blog-content">
            <p>${dataBlog[index].content}</p><br/>
            <div class="icon-check">
            ${dataBlog[index].icnodejs}
            ${dataBlog[index].icreactjs}
            ${dataBlog[index].icnextjs}
            ${dataBlog[index].ictypescript} 
            </div>
            
            <div class="btn-group"><br/>
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Delete Post</button>
            </div>
            <div style="float:right; margin:10px;">
            <p style="font-size:15px; color:grey;">${getDistanceTime(
              dataBlog[index].postAt
            )}</p>
          </div>
            </div>
        </div>
    `;
  }
}

function getFullTime(time) {
  // let time = new Date();
  // console.log(time);

  let monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // console.log(monthName[4]);

  let date = time.getDate();
  // console.log(date);

  let monthIndex = time.getMonth();
  // console.log(monthName[monthIndex]);

  let year = time.getFullYear();
  // console.log(year);

  let hours = time.getHours();
  let minutes = time.getMinutes();

  if (hours <= 9) {
    hours = "0" + hours;
  } else if (minutes <= 9) {
    minutes = "0" + minutes;
  }

  // 4 Oct 2023 09:30 WIB
  return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
}

function getDistanceTime(time) {
  let timeNow = new Date();
  let timePost = time;

  let distance = timeNow - timePost;
  console.log(distance);

  let milisecond = 1000; // 1000 milisecond = 1 detik
  let secondInHours = 3600; // 3600 detik = 1 jam
  let hoursInDays = 24; // 24 jam = 1 hari

  let distanceDay = Math.floor(
    distance / (milisecond * secondInHours * hoursInDays)
  );
  let distanceHours = Math.floor(distance / (milisecond * 60 * 60));
  let distanceMinutes = Math.floor(distance / (milisecond * 60));
  let distanceSeconds = Math.floor(distance / milisecond);

  if (distanceDay > 0) {
    return `${distanceDay} day ago`;
  } else if (distanceHours > 0) {
    return `${distanceHours} hour ago`;
  } else if (distanceMinutes > 0) {
    return `${distanceMinutes} minute ago`;
  } else {
    return `${distanceSeconds} second ago`;
  }
}

setInterval(function () {
  renderBlog();
}, 3000);




