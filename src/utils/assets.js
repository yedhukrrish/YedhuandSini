export const ASSETS = {
  audio: [
    "/music/obunplugged.mp3",
    "/music/perfect.mp3",
    "/music/theycallthislove.mp3",
    "/music/yay.mp3"
  ],
  images: [
    // Hero Images
    "/images/sini/sini1.png",
    "/images/myedhu.png",

    // Soulful Slideshow Images
    "/images/sini/sini2.png",
    "/images/sini/sini3.png",
    "/images/sini/sini4.png",
    "/images/sini/sini5.png",
    "/images/sini/sini6.png",
    "/images/sini/sini9.png",
    "/images/sini/sini11.png",
    "/images/sini/sini15.jpg",
    "/images/sini/20231031_153610.jpg",
    "/images/sini/20231031_153614.jpg",
    "/images/sini/20231031_153618.jpg",
    "/images/group/sini16.jpg",
    "/images/group/sini17.jpg",
    "/images/group/sini18.jpg",
    "/images/group/sini19.jpg",
    "/images/group/sini20.jpg",
    "/images/group/sini21.jpg",
    "/images/group/sini22.jpg",
    "/images/group/sini23.jpg",
    "/images/dates/Our First ComicCon.jpg",
    "/images/dates/our first temple visit.jpg",
    "/images/dates/Favourite Photo of us from the temple.jpg",
    "/images/dates/she wearing saree.jpg",
    "/images/dates/Moon Restaurant with her photo.jpg",
    "/images/dates/Sowcarpet date.jpg",

    // Milestone Images
    "/images/dates/our first meet.jpeg",
    "/images/dates/our First Beach Photo.jpg",
    "/images/dates/Beach scam.jpg",
    "/images/dates/Daskhinchitra Date.jpg",
    "/images/dates/First Bar.jpg",
    "/images/dates/Her First birthday celebration.jpg",
    "/images/dates/Kerala trip photo.jpg",
    "/images/dates/Planatarium date.jpg",
    "/images/dates/well you know what happened.jpg"
  ]
};

// Start from 1-13 for solo PNGs (FloatingGallery)
for (let i = 1; i <= 13; i++) {
    ASSETS.images.push(`/images/sini/sini${i}.png`);
}

// Start from 16-23 for group JPGs (FloatingGallery)
for (let i = 16; i <= 23; i++) {
    ASSETS.images.push(`/images/group/sini${i}.jpg`);
}

// Remove duplicates
ASSETS.images = [...new Set(ASSETS.images)];
