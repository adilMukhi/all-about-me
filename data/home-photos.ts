// Photos of Adil used across the home page (hero slideshow, quick links, photo reel)
// and listed in the image sitemap so search engines can index them
export type HomePhoto = {
  src: string
  alt: string
  caption: string
  // CSS object-position so the face stays in frame when the photo is cropped
  focus?: string
}

const eventPhotos: HomePhoto[] = [
  {
    src: "/ontario-medal-young-volunteers-2026.jpg",
    alt: "Adil Mukhi receiving the Ontario Medal for Young Volunteers at Queen's Park",
    caption: "Receiving the Ontario Medal for Young Volunteers at Queen's Park",
    focus: "58% 60%",
  },
  {
    src: "/pictures/adil-mukhi-queens-park-podium.jpg",
    alt: "Adil Mukhi speaking at the podium at Queen's Park, wearing the Ontario Medal for Young Volunteers",
    caption: "Speaking at Queen's Park",
    focus: "30% 40%",
  },
  {
    src: "/pictures/adil-mukhi-queens-park-tv-interview.jpg",
    alt: "Adil Mukhi giving a television interview at Queen's Park",
    caption: "TV interview at Queen's Park",
    focus: "25% 40%",
  },
  {
    src: "/pictures/Adil Mukhi - Tedx 1 withbackground.png",
    alt: "Adil Mukhi speaking on stage at TEDxMcFarren Boulevard Youth",
    caption: "On stage at TEDxMcFarren Boulevard Youth",
    focus: "50% 30%",
  },
  {
    src: "/top-20-under-18-2026.jpg",
    alt: "Adil Mukhi at the podium of The Future Is Now Awards",
    caption: "Named one of Canada's Top 20 Under 18, 2026",
    focus: "50% 35%",
  },
  {
    src: "/pictures/MedExplore (1).png",
    alt: "Adil Mukhi presenting at the Dr. Interested MedExplore 2026 conference",
    caption: "Hosting MedExplore 2026 with Dr. Interested",
    focus: "45% 40%",
  },
  {
    src: "/mississauga-civic-award-2026.jpg",
    alt: "Adil Mukhi receiving a certificate of recognition from Mississauga Mayor Carolyn Parrish",
    caption: "Recognized by the City of Mississauga, 2026",
    focus: "35% 30%",
  },
  {
    src: "/pictures/adil-mukhi-dr-interested-studio-light.jpg",
    alt: "Adil Mukhi in a Dr. Interested hoodie, lit by a studio light",
    caption: "Founder of Dr. Interested",
    focus: "20% 40%",
  },
  {
    src: "/pictures/AIforGoodSummit2.png",
    alt: "Adil Mukhi appearing on screen at the AI for Good Global Summit",
    caption: "Speaking to the AI for Good Global Summit",
    focus: "50% 35%",
  },
]

// Stills pulled from Adil's 4K video shoot
const shootStills: HomePhoto[] = [
  {
    src: "/pictures/adil-mukhi-cafe-laptop.jpg",
    alt: "Adil Mukhi thinking at a laptop in a cafe",
    caption: "Planning the next project",
    focus: "65% 35%",
  },
  {
    src: "/pictures/adil-mukhi-outdoor-phone-call.jpg",
    alt: "Adil Mukhi on a phone call outdoors in downtown Mississauga",
    caption: "Always on a call",
    focus: "55% 35%",
  },
  {
    src: "/pictures/adil-mukhi-atrium.jpg",
    alt: "Adil Mukhi looking up in a bright atrium",
    caption: "Curiosity as my guide",
    focus: "75% 40%",
  },
]

const everydayPhotos: HomePhoto[] = [
  {
    src: "/pictures/adil-mukhi-queens-park-flags-portrait.jpg",
    alt: "Adil Mukhi in a suit with arms crossed in front of the Canadian and Ontario flags",
    caption: "Queen's Park, 2026",
    focus: "50% 25%",
  },
  {
    src: "/pictures/adil-mukhi-queens-park-piano.jpg",
    alt: "Adil Mukhi playing a grand piano at Queen's Park",
    caption: "At the piano",
    focus: "30% 40%",
  },
  {
    src: "/pictures/adil-mukhi-queens-park-reception.jpg",
    alt: "Adil Mukhi talking with guests at the Ontario Medal reception at Queen's Park",
    caption: "Ontario Medal reception",
    focus: "75% 35%",
  },
  {
    src: "/pictures/adil-mukhi-portrait-closeup.jpg",
    alt: "Close up portrait of Adil Mukhi",
    caption: "Hi, I'm Adil",
    focus: "50% 35%",
  },
  {
    src: "/pictures/adil-mukhi-tedx-speaking-2.jpeg",
    alt: "Adil Mukhi on the red circle at TEDx",
    caption: "TEDx stage",
    focus: "50% 40%",
  },
  {
    src: "/pictures/adil-mukhi-canadian-flag-suit.jpg",
    alt: "Adil Mukhi in a suit beside the Canadian flag",
    caption: "Before a keynote",
    focus: "50% 25%",
  },
  {
    src: "/pictures/AdilMukhiDrInterested (1).jpg",
    alt: "Adil Mukhi holding a camera in a Dr. Interested hoodie",
    caption: "Behind the camera",
    focus: "50% 45%",
  },
  {
    src: "/adilmukhitop50u18.jpg",
    alt: "Adil Mukhi on the red carpet at The Future Is Now Awards",
    caption: "Top 50 Under 18, 2025",
    focus: "50% 30%",
  },
  {
    src: "/pictures/adil-mukhi-lab-coat-medical-research.JPG",
    alt: "Adil Mukhi in a lab coat and safety glasses",
    caption: "In the lab",
    focus: "50% 40%",
  },
  {
    src: "/pictures/MedExplore (2).JPG",
    alt: "Adil Mukhi speaking to an audience at MedExplore",
    caption: "MedExplore",
    focus: "60% 40%",
  },
  {
    src: "/pictures/adil-mukhi-tennis-sports.jpg",
    alt: "Adil Mukhi playing tennis",
    caption: "On the tennis court",
    focus: "50% 40%",
  },
  {
    src: "/blog/cfcfutureisnow (2).png",
    alt: "Adil Mukhi at the Children First Canada Future Is Now gala",
    caption: "Children First Canada gala",
    focus: "30% 70%",
  },
  {
    src: "/pictures/adil-mukhi-camera-photographer.JPG",
    alt: "Adil Mukhi taking a photo with a camera",
    caption: "Photography",
    focus: "50% 40%",
  },
  {
    src: "/pictures/AiWorkshop.png",
    alt: "Adil Mukhi leading an AI workshop",
    caption: "Leading a workshop",
    focus: "50% 50%",
  },
  {
    src: "/pictures/adil-mukhi-graduation.jpg",
    alt: "Adil Mukhi smiling outdoors",
    caption: "Everyday me",
    focus: "50% 30%",
  },
  {
    src: "/pictures/adil-mukhi-dr-interested-founder.JPG",
    alt: "Adil Mukhi at a Dr. Interested booth",
    caption: "Dr. Interested booth",
    focus: "50% 40%",
  },
  {
    src: "/pictures/AdilMukhiKHP_WSKCT.JPG",
    alt: "Adil Mukhi at the Walk So Kids Can Talk",
    caption: "Walk So Kids Can Talk",
    focus: "50% 50%",
  },
]

// Interleave the three groups so each reel row mixes stages, awards, and everyday moments
const groups = [eventPhotos, shootStills, everydayPhotos]
export const reelPhotos: HomePhoto[] = Array.from({ length: Math.max(...groups.map((g) => g.length)) }).flatMap((_, i) =>
  groups.map((g) => g[i]).filter((photo): photo is HomePhoto => Boolean(photo)),
)

export const homePhotos: HomePhoto[] = reelPhotos

// Short silent clips that loop in the hero; each is cut to loop cleanly
export const heroVideos = {
  // Landscape b-roll from the video shoot, the background on larger screens
  background: {
    src: "/videos/adil-mukhi-broll-loop.mp4",
    poster: "/videos/adil-mukhi-broll-poster.jpg",
    label: "Adil Mukhi working at a cafe, taking a call outdoors, and looking up in an atrium",
  },
  // Vertical studio clip, framed beside the intro on larger screens and full screen on phones
  portrait: {
    src: "/videos/adil-mukhi-studio-loop.mp4",
    poster: "/videos/adil-mukhi-studio-poster.jpg",
    label: "Adil Mukhi in a Dr. Interested hoodie, turning to look at the camera",
  },
}
