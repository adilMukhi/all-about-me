export type VideoPlatform = "youtube" | "spotify" | "external"

export interface VideoItem {
  /** URL slug: /watch/<slug> */
  slug: string
  title: string
  /** Short summary shown on the page and used for meta description */
  description: string
  /** The channel, show, or outlet that produced it */
  publisher: string
  /** Publish/air date, ISO 8601 (YYYY-MM-DD). Used for VideoObject.uploadDate. */
  date: string
  /** Best-guess flag — set true when `date` is an estimate that should be verified */
  dateApproximate?: boolean
  platform: VideoPlatform
  /** YouTube video id, Spotify episode id, or "" for external */
  videoId: string
  /** Canonical URL to watch/listen on the original platform */
  watchUrl: string
  category: "TEDx Talk" | "Interview" | "Podcast" | "Panel" | "Webinar"
  /** ISO 8601 duration, e.g. "PT12M30S" — optional */
  duration?: string
  /** Optional longer transcript or talking points */
  notes?: string
}

export const videos: VideoItem[] = [
  {
    slug: "tedx-stress-memory-and-why-you-cant-find-your-keys",
    title: "Stress, Memory, and Why You Can't Find Your Keys",
    description:
      "Adil Mukhi's TEDx talk at TEDxMcfarren Boulevard Youth on the connection between stress hormones and memory — why everyday stress makes us forget simple things, and what his research on neuroplasticity and cortisol reveals about how chronic stress reshapes the brain.",
    publisher: "TEDxMcfarren Boulevard Youth",
    date: "2025-06-01",
    dateApproximate: true,
    platform: "youtube",
    videoId: "T95mH5SwkfM",
    watchUrl: "https://youtu.be/T95mH5SwkfM",
    category: "TEDx Talk",
  },
  {
    slug: "why-adil-mukhi-is-canadas-rising-youth-advocate-tedx-youth-leader",
    title: "Why Adil Mukhi Is Canada's Rising Youth Advocate — The TEDx Youth Leader Inspiring Change",
    description:
      "A conversation with Adil Mukhi — youth advocate, public speaker, TEDx speaker, and Founder & Executive Director of Dr. Interested — about his journey, his vision for youth empowerment, and why he believes young people don't have to wait to create meaningful change.",
    publisher: "The World Is Your Bowl Of Noodles",
    date: "2025-11-23",
    platform: "youtube",
    videoId: "J0WMiFPdAX8",
    watchUrl: "https://www.youtube.com/watch?v=J0WMiFPdAX8",
    category: "Interview",
  },
  {
    slug: "elevate-e48-how-curiosity-is-shaping-canadas-next-generation-of-changemakers",
    title: "Elevate E48: How Curiosity Is Shaping Canada's Next Generation of Changemakers",
    description:
      "On the Elevate: DBNC Leadership Podcast, Adil Mukhi explores how curiosity, resilience, and purpose turn ideas into action — covering youth mentorship, national policy, sport and community, and the link between mental health and advocacy.",
    publisher: "Dixie Bloor Neighbourhood Centre",
    date: "2026-06-30",
    platform: "youtube",
    videoId: "5la_lzi05nQ",
    watchUrl: "https://www.youtube.com/watch?v=5la_lzi05nQ",
    category: "Podcast",
  },
  {
    slug: "lians-corner-follow-your-youth-passion-ft-adil-mukhi",
    title: "Follow Your Youth Passion ft. Adil Mukhi (Lian's Corner Podcast, S4 E4)",
    description:
      "Adil Mukhi joins Lian's Corner Podcast to talk about the academic journey — not rushing, not comparing, and moving forward steadily with purpose — and how consistency compounds into growth.",
    publisher: "Lian's Corner Podcast",
    date: "2025-12-19",
    platform: "youtube",
    videoId: "QS6bjSg9AuM",
    watchUrl: "https://www.youtube.com/watch?v=QS6bjSg9AuM",
    category: "Podcast",
  },
  {
    slug: "professor-kev-show-adil-mukhi-from-dr-interested",
    title: "Professor Kev Is Joined by Adil Mukhi from Dr. Interested",
    description:
      "The Professor Kev Show features student entrepreneurs, youth leaders, and changemakers transforming their communities. In this episode, Adil Mukhi discusses building Dr. Interested and empowering youth worldwide.",
    publisher: "The Professor Kev Show",
    date: "2025-01-01",
    dateApproximate: true,
    platform: "youtube",
    videoId: "oOdXM5fxsR4",
    watchUrl: "https://youtu.be/oOdXM5fxsR4",
    category: "Interview",
  },
  {
    slug: "beyond-the-helix-recombinant-therapies-for-athletes",
    title: "Recombinant Therapies for Athletes — with Adil Mukhi, Founder of Dr. Interested",
    description:
      "On Beyond the Helix, Adil Mukhi unpacks the potential of recombinant therapies to reshape sports medicine, injury repair, and human endurance — from protein engineering to real-world recovery strategies.",
    publisher: "Beyond the Helix Podcast",
    date: "2025-08-04",
    platform: "spotify",
    videoId: "20ESwxF3bDElb7I7r6Y93s",
    watchUrl: "https://open.spotify.com/episode/20ESwxF3bDElb7I7r6Y93s",
    category: "Podcast",
  },
  {
    slug: "spotlights-for-health-youth-leadership-in-action",
    title: "Youth Leadership in Action: Adil Mukhi on Health Advocacy & Impact",
    description:
      "Interviewed by Dr. Pietro Aparicio, MD, MPH, for 72 Dragons Health's Spotlights for Health series, Adil Mukhi shares his journey in youth-led health advocacy and the impact of empowering young people to lead change in their communities.",
    publisher: "72 Dragons Health",
    date: "2026-01-01",
    dateApproximate: true,
    platform: "external",
    videoId: "",
    watchUrl:
      "https://health72.com/Individual_Video/youth-leadership-in-action-adil-mukhi-on-health-advocacy--impact-6a2bbbfa385f2",
    category: "Interview",
  },
]

export function getVideoPath(video: Pick<VideoItem, "slug">) {
  return `/watch/${video.slug}`
}

export function getVideoBySlug(slug: string) {
  return videos.find((video) => video.slug === slug)
}

export function getVideoThumbnail(video: VideoItem, siteUrl: string) {
  if (video.platform === "youtube") {
    return `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`
  }
  return `${siteUrl}/og-image.png`
}

export function getVideoEmbedUrl(video: VideoItem) {
  if (video.platform === "youtube") {
    return `https://www.youtube-nocookie.com/embed/${video.videoId}`
  }
  if (video.platform === "spotify") {
    return `https://open.spotify.com/embed/episode/${video.videoId}`
  }
  return video.watchUrl
}
