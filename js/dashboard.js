const now = new Date()
const hour = now.getHours()
const slides = document.getElementById('slides')
const totalSlides = document.querySelectorAll('.slide').length

let index = 0
let waktuSapaan 

if(hour >= 5 && hour < 12) {
  waktuSapaan = "Selamat Pagi "
} else if(hour >= 12 && hour < 15){
  waktuSapaan = "Selamat Siang "
} else if(hour >= 15 && hour < 18) {
  waktuSapaan = "Selamat Sore "
} else {
  waktuSapaan = "Selamat Malam "
}

document.querySelector(".waktu").innerHTML = waktuSapaan;

function showNextSlide(){
  index++
  if(index >= totalSlides) index = 0
  slides.style.transform = `translateX(-${index * 100}%)`
}

setInterval(showNextSlide, 4000)
