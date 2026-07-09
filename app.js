         function toogle() {
      id1.style.height = "720px"
      id2.style.display = "none"
      id4.style.display = "block"
    }
    function fewer() {
      id4.style.display = "none"
      id1.style.height = "315px"
      id2.style.display = "block"
    }
    function toggleSidebar() {

    if(window.innerWidth <= 1300){

        document.getElementById("sidebar").classList.toggle("active");
        document.getElementById("overlay").classList.toggle("active");

    }
}
 function rightSidebar(){
      document.getElementById("right-sidebar").classList.toggle("active")
    }

     function Subscribe(){
      subscribed.style.display="block"
      subscribe.style.display="none"
    }

    function Subscribed(){
      subscribe.style.display="block"
      subscribed.style.display="none"
    }

  const video = document.getElementById("shorts-video");
  const playpause = document.getElementById("playPauseBtn")
const speakerBtn = document.getElementById("speakerBtn");
const slider = document.getElementById("volumeSlider")


document.addEventListener("keydown", (e) => {

    switch (e.key.toLowerCase()) {

        // Space = Play/Pause
        case " ":
            e.preventDefault(); // Page scroll hone se rokta hai
            togglePlayPause();
            break;

        // M = Mute/Unmute
        case "m":
            toggleMute();
            break;

        // F = Fullscreen
        case "f":
            toggleFullscreen();
            break;
    }

});

function togglePlayPause() {
   if (video.paused) {
        video.play();
            playpause.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" fill="white" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z"/></svg>`
    
    } else {
        video.pause();
                playpause.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" fill=white viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M176 96C149.5 96 128 117.5 128 144L128 496C128 522.5 149.5 544 176 544L240 544C266.5 544 288 522.5 288 496L288 144C288 117.5 266.5 96 240 96L176 96zM400 96C373.5 96 352 117.5 352 144L352 496C352 522.5 373.5 544 400 544L464 544C490.5 544 512 522.5 512 496L512 144C512 117.5 490.5 96 464 96L400 96z"/></svg>`
    }
}

// Click on video
video.addEventListener("click", togglePlayPause);

// Click on button
playpause.addEventListener("click", function(e) {
    e.stopPropagation(); // Prevents the click from reaching the video
    togglePlayPause();
});

function toggleMute(){
 video.muted = !video.muted;

    if (video.muted) {
        speakerBtn.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" fill="white" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M80 416L128 416L262.1 535.2C268.5 540.9 276.7 544 285.2 544C304.4 544 320 528.4 320 509.2L320 130.8C320 111.6 304.4 96 285.2 96C276.7 96 268.5 99.1 262.1 104.8L128 224L80 224C53.5 224 32 245.5 32 272L32 368C32 394.5 53.5 416 80 416zM399 239C389.6 248.4 389.6 263.6 399 272.9L446 319.9L399 366.9C389.6 376.3 389.6 391.5 399 400.8C408.4 410.1 423.6 410.2 432.9 400.8L479.9 353.8L526.9 400.8C536.3 410.2 551.5 410.2 560.8 400.8C570.1 391.4 570.2 376.2 560.8 366.9L513.8 319.9L560.8 272.9C570.2 263.5 570.2 248.3 560.8 239C551.4 229.7 536.2 229.6 526.9 239L479.9 286L432.9 239C423.5 229.6 408.3 229.6 399 239z"/></svg>`;
    } else {
        speakerBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" fill="white" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M112 416L160 416L294.1 535.2C300.5 540.9 308.7 544 317.2 544C336.4 544 352 528.4 352 509.2L352 130.8C352 111.6 336.4 96 317.2 96C308.7 96 300.5 99.1 294.1 104.8L160 224L112 224C85.5 224 64 245.5 64 272L64 368C64 394.5 85.5 416 112 416zM505.1 171C494.8 162.6 479.7 164.2 471.3 174.5C462.9 184.8 464.5 199.9 474.8 208.3C507.3 234.7 528 274.9 528 320C528 365.1 507.3 405.3 474.8 431.8C464.5 440.2 463 455.3 471.3 465.6C479.6 475.9 494.8 477.4 505.1 469.1C548.3 433.9 576 380.2 576 320.1C576 260 548.3 206.3 505.1 171.1zM444.6 245.5C434.3 237.1 419.2 238.7 410.8 249C402.4 259.3 404 274.4 414.3 282.8C425.1 291.6 432 305 432 320C432 335 425.1 348.4 414.3 357.3C404 365.7 402.5 380.8 410.8 391.1C419.1 401.4 434.3 402.9 444.6 394.6C466.1 376.9 480 350.1 480 320C480 289.9 466.1 263.1 444.5 245.5z"/></svg>`;
    }
}
// Mute/Unmute when speaker button is clicked
speakerBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevents click from affecting the video
    toggleMute();

});

slider.addEventListener("input", () => {
    video.volume = slider.value / 100;

    if(video.volume == 0){
        video.muted = true;
        speakerBtn.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" fill="white" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M80 416L128 416L262.1 535.2C268.5 540.9 276.7 544 285.2 544C304.4 544 320 528.4 320 509.2L320 130.8C320 111.6 304.4 96 285.2 96C276.7 96 268.5 99.1 262.1 104.8L128 224L80 224C53.5 224 32 245.5 32 272L32 368C32 394.5 53.5 416 80 416zM399 239C389.6 248.4 389.6 263.6 399 272.9L446 319.9L399 366.9C389.6 376.3 389.6 391.5 399 400.8C408.4 410.1 423.6 410.2 432.9 400.8L479.9 353.8L526.9 400.8C536.3 410.2 551.5 410.2 560.8 400.8C570.1 391.4 570.2 376.2 560.8 366.9L513.8 319.9L560.8 272.9C570.2 263.5 570.2 248.3 560.8 239C551.4 229.7 536.2 229.6 526.9 239L479.9 286L432.9 239C423.5 229.6 408.3 229.6 399 239z"/></svg>`;
    }else{
        video.muted = false;
        speakerBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" fill="white" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M112 416L160 416L294.1 535.2C300.5 540.9 308.7 544 317.2 544C336.4 544 352 528.4 352 509.2L352 130.8C352 111.6 336.4 96 317.2 96C308.7 96 300.5 99.1 294.1 104.8L160 224L112 224C85.5 224 64 245.5 64 272L64 368C64 394.5 85.5 416 112 416zM505.1 171C494.8 162.6 479.7 164.2 471.3 174.5C462.9 184.8 464.5 199.9 474.8 208.3C507.3 234.7 528 274.9 528 320C528 365.1 507.3 405.3 474.8 431.8C464.5 440.2 463 455.3 471.3 465.6C479.6 475.9 494.8 477.4 505.1 469.1C548.3 433.9 576 380.2 576 320.1C576 260 548.3 206.3 505.1 171.1zM444.6 245.5C434.3 237.1 419.2 238.7 410.8 249C402.4 259.3 404 274.4 414.3 282.8C425.1 291.6 432 305 432 320C432 335 425.1 348.4 414.3 357.3C404 365.7 402.5 380.8 410.8 391.1C419.1 401.4 434.3 402.9 444.6 394.6C466.1 376.9 480 350.1 480 320C480 289.9 466.1 263.1 444.5 245.5z"/></svg>`;
    }
});

const container = document.getElementById("right-shorts");
const btn = document.getElementById("fullScreenBtn");

function toggleFullscreen(){
    if (!document.fullscreenElement) {
        // Enter Fullscreen
        container.requestFullscreen();
        btn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" fill=white viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M503.5 71C512.9 61.6 528.1 61.6 537.4 71L569.4 103C578.8 112.4 578.8 127.6 569.4 136.9L482.4 223.9L521.4 262.9C528.3 269.8 530.3 280.1 526.6 289.1C522.9 298.1 514.2 304 504.5 304L360.5 304C347.2 304 336.5 293.3 336.5 280L336.5 136C336.5 126.3 342.3 117.5 351.3 113.8C360.3 110.1 370.6 112.1 377.5 119L416.5 158L503.5 71zM136.5 336L280.5 336C293.8 336 304.5 346.7 304.5 360L304.5 504C304.5 513.7 298.7 522.5 289.7 526.2C280.7 529.9 270.4 527.9 263.5 521L224.5 482L137.5 569C128.1 578.4 112.9 578.4 103.6 569L71.6 537C62.2 527.6 62.2 512.4 71.6 503.1L158.6 416.1L119.6 377.1C112.7 370.2 110.7 359.9 114.4 350.9C118.1 341.9 126.8 336 136.5 336z"/></svg>`
    } 
    else {
        // Exit Fullscreen
        document.exitFullscreen();
        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="30px" width="30px" fill=white viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M408 64L552 64C565.3 64 576 74.7 576 88L576 232C576 241.7 570.2 250.5 561.2 254.2C552.2 257.9 541.9 255.9 535 249L496 210L409 297C399.6 306.4 384.4 306.4 375.1 297L343.1 265C333.7 255.6 333.7 240.4 343.1 231.1L430.1 144.1L391.1 105.1C384.2 98.2 382.2 87.9 385.9 78.9C389.6 69.9 398.3 64 408 64zM232 576L88 576C74.7 576 64 565.3 64 552L64 408C64 398.3 69.8 389.5 78.8 385.8C87.8 382.1 98.1 384.2 105 391L144 430L231 343C240.4 333.6 255.6 333.6 264.9 343L296.9 375C306.3 384.4 306.3 399.6 296.9 408.9L209.9 495.9L248.9 534.9C255.8 541.8 257.8 552.1 254.1 561.1C250.4 570.1 241.7 576 232 576z"/></svg>`;   // Exit icon (optional)
    }
}

btn.addEventListener("click", (e) => {
     e.stopPropagation();
     toggleFullscreen();
    

});

function homePage(){
    window.location.href="index.html"
}

function shortsPage(){
    window.location.href="shorts.html"
}

   const modal = document.getElementById("modal");
const openBtn = document.getElementById("subscribed");
const UnsubscribeBtn = document.getElementById("UnsubscribeBtn");
const CancelBtn = document.getElementById("cancelBtn");

openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

UnsubscribeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    subscribe.style.display="block";
    subscribed.style.display="none"
});

CancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close when clicking outside the modal
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

const descbtn = document.getElementById("descBtn");
const videoBox = document.getElementById("videoBox");
const desc = document.getElementById("description");
const hidebox = document.getElementById("hideBox");
const closebtn = document.getElementById("closeBtn")

descbtn.addEventListener("click", () => {
    desc.classList.add("active");
    videoBox.classList.add("slide");
    hidebox.classList.add("hide");
});
 closebtn.addEventListener("click", () => {
    desc.classList.remove("active");
    videoBox.classList.remove("slide");
    hidebox.classList.remove("hide");
 })