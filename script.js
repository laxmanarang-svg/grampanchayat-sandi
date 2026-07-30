import { db } from "./firebase-config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
const slider = document.getElementById("sliderImage");

const images = [
  "banner 1.jpeg",
  "banner 2.jpeg",
  "banner 3.jpeg"
];

let index = 0;

function changeImage() {
  index = (index + 1) % images.length;
  slider.src = images[index];
}

setInterval(changeImage, 2000);


let topButton = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function updateDateTime() {
    const now = new Date();

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const date = now.toLocaleDateString("hi-IN", options);
    const time = now.toLocaleTimeString("hi-IN");

    document.getElementById("datetime").innerHTML =
        "📅 " + date + " | ⏰ " + time;
}

setInterval(updateDateTime, 1000);
updateDateTime();
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkModeBtn.innerHTML = "☀️ Light Mode";
    } else {
        darkModeBtn.innerHTML = "🌙 Dark Mode";
    }
});
function searchSection() {

    let value = document.getElementById("searchInput").value.toLowerCase();

    if (value.includes("परिचय")) {
        document.getElementById("parichay").scrollIntoView({behavior:"smooth"});
    }
    else if (value.includes("योजना")) {
        document.getElementById("yojana").scrollIntoView({behavior:"smooth"});
    }
    else if (value.includes("गैलरी")) {
        document.getElementById("gallery").scrollIntoView({behavior:"smooth"});
    }
    else if (value.includes("डाउनलोड")) {
        document.getElementById("downloads").scrollIntoView({behavior:"smooth"});
    }
    else if (value.includes("संपर्क")) {
        document.getElementById("contact").scrollIntoView({behavior:"smooth"});
    }
    else {
        alert("कोई परिणाम नहीं मिला।");
    }
}
async function loadNotices(){


const noticeBox = document.getElementById("notice-list");

const querySnapshot = await getDocs(collection(db,"notices"));

querySnapshot.forEach((doc)=>{

let data = doc.data();

noticeBox.innerHTML += `
<div class="notice-card">
<h3>${data.title}</h3>
<p>${data.description}</p>
<small>${data.date}</small>
</div>
`;

});

}

loadNotices();
