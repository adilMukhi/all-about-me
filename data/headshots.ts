// Press photos shown on /media-inquiries/headshots and listed in the image sitemap
export type Shot = {
  src: string
  alt: string
  caption: string
  orientation: "portrait" | "landscape"
}

export const headshots: Shot[] = [
  {
    src: "/pictures/adil-mukhi-formal-headshot.jpg",
    alt: "Formal headshot of Adil Mukhi",
    caption: "Formal headshot — preferred for bylines and author photos",
    orientation: "portrait",
  },
  {
    src: "/pictures/adil-mukhi-tedx-speaking-1.png",
    alt: "Adil Mukhi speaking at TEDx",
    caption: "TEDx talk",
    orientation: "portrait",
  },
  {
    src: "/pictures/Adil Mukhi - Tedx 1 withbackground.png",
    alt: "Adil Mukhi at TEDx with event backdrop",
    caption: "TEDx — with event backdrop",
    orientation: "portrait",
  },
  {
    src: "/blog/cfcfutureisnow (1).png",
    alt: "Adil Mukhi at the Children First Canada event",
    caption: "Adil Mukhi at a Children First Canada event",
    orientation: "landscape",
  },
]

export const inAction: Shot[] = [
  {
    src: "/pictures/adil-mukhi-portrait-closeup.jpg",
    alt: "Close up portrait of Adil Mukhi",
    caption: "Close up portrait",
    orientation: "portrait",
  },
  {
    src: "/pictures/adil-mukhi-canadian-flag-suit.jpg",
    alt: "Adil Mukhi in a suit beside the Canadian flag",
    caption: "Formal, beside the Canadian flag",
    orientation: "portrait",
  },
  {
    src: "/pictures/adil-mukhi-dr-interested-studio-light.jpg",
    alt: "Adil Mukhi in a Dr. Interested hoodie lit by a studio light",
    caption: "Dr. Interested studio portrait",
    orientation: "landscape",
  },
  {
    src: "/top-20-under-18-2026.jpg",
    alt: "Adil Mukhi at the podium of The Future Is Now Awards",
    caption: "The Future Is Now Awards, Top 20 Under 18 (2026)",
    orientation: "portrait",
  },
  {
    src: "/mississauga-civic-award-2026.jpg",
    alt: "Adil Mukhi with Mississauga Mayor Carolyn Parrish",
    caption: "City of Mississauga recognition (2026)",
    orientation: "landscape",
  },
  {
    src: "/pictures/AdilMukhiDrInterested (1).jpg",
    alt: "Adil Mukhi representing Dr. Interested",
    caption: "Dr. Interested",
    orientation: "landscape",
  },
  {
    src: "/pictures/MedExplore (1).png",
    alt: "Adil Mukhi at the MedExplore Conference",
    caption: "MedExplore Conference",
    orientation: "landscape",
  },
  {
    src: "/pictures/MedExplore (2).JPG",
    alt: "Adil Mukhi at the MedExplore Conference",
    caption: "MedExplore Conference",
    orientation: "landscape",
  },
  {
    src: "/pictures/AIforGoodSummit2.png",
    alt: "Adil Mukhi at the AI for Good Summit",
    caption: "AI for Good Summit",
    orientation: "landscape",
  },
  {
    src: "/pictures/AiWorkshop.png",
    alt: "Adil Mukhi leading an AI workshop",
    caption: "Leading a workshop",
    orientation: "landscape",
  },
  {
    src: "/pictures/adil-mukhi-lab-coat-medical-research.JPG",
    alt: "Adil Mukhi in a lab coat doing medical research",
    caption: "Research / lab",
    orientation: "portrait",
  },
  {
    src: "/pictures/AdilMukhiKHP_WSKCT.JPG",
    alt: "Adil Mukhi at the Walk So Kids Can Talk",
    caption: "Walk So Kids Can Talk",
    orientation: "landscape",
  },
  {
    src: "/pictures/adil-mukhi-camera-photographer.JPG",
    alt: "Adil Mukhi holding a camera",
    caption: "Photography",
    orientation: "portrait",
  },
  {
    src: "/pictures/adil-mukhi-tennis-sports.jpg",
    alt: "Adil Mukhi playing tennis",
    caption: "Tennis — Play-to-Heal",
    orientation: "portrait",
  },
]
