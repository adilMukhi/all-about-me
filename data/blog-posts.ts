// Example data structure for blog posts
export type BlogPost = {
  title: string
  subtitle: string
  date: string
  image: string
  slug: string
  excerpt: string
  content: string
  images?: string[]
  learnMoreUrl?: string // New field for external "Learn More" links
}

export const blogPosts: BlogPost[] = [
  {
    "title": "PharmPath Program: An In-Depth Experience at the Leslie Dan Faculty of Pharmacy",
    "subtitle": "A comprehensive look at the hands-on pharmacy experience and tour of the University of Toronto's pharmacy labs.",
    "date": "March 15, 2025",
    "image": "/blog/pharm (10).jpg",
    "slug": "pharmacy",
    "excerpt": "Had the chance to participate in the PharmPath program at the University of Toronto’s Leslie Dan Faculty of Pharmacy, diving into the pharmaceutical process and lab techniques while learning from top professionals in the field.",
    "content": 
      "<p>Yesterday, I had the incredible opportunity to participate in the PharmPath program at the <strong>Leslie Dan Faculty of Pharmacy</strong> at the <strong>University of Toronto</strong>, one of Canada's leading centers for pharmacy education and research. The program provided a unique, hands-on experience that spanned everything from patient interactions and pharmaceutical dispensing to lab-based drug production.</p>" +
      
      "<p>The day began with an inspiring keynote speech by the <strong>founder of Black Pharmacy Professionals of Canada</strong> and a multi-pharmacy owner. The speaker emphasized the importance of diversity in healthcare, as well as the evolving role of pharmacists in improving patient outcomes, particularly in underserved communities. The insights shared were motivating and aligned perfectly with the innovative work being done at the Faculty of Pharmacy.</p>" +
      
      "<p>We then dove into a case study led by faculty members, where we were walked through the entire process of dispensing pharmaceuticals. Using the faculty's specialized database, we checked and verified dosages, including pediatric doses, ensuring accuracy and patient safety. The hands-on exercise was focused on <strong>dispensing amoxicillin</strong> to a child with an ear infection, a common scenario that required attention to detail in both medication dosage and patient communication.</p>" +
      
      "<p>What made the experience even more enriching was our subsequent work in the <strong>pharmacy lab</strong>, which is regularly used by pharmacy students. Under the guidance of expert faculty members, we learned the intricacies of pharmaceutical production—from the creation of tablets to mixing drugs with water to form a prescribed solution. In one particularly interesting exercise, we produced a substance that closely resembled <strong>mango jelly</strong>—yet it was actually a medicinal product! The process involved understanding the delicate balance of ingredients required for consistency, taste, and therapeutic effectiveness.</p>" +
      
      "<p>Throughout the day, it became clear just how critical the work being done in pharmacy is, from ensuring proper drug administration to innovating new methods of drug production. It was eye-opening to see how pharmacists don’t just dispense medication but play a central role in the entire healthcare process, from diagnosis to recovery.</p>" +
      
      "<p>Finally, we capped off the day with a comprehensive <strong>tour of the University of Toronto campus</strong>, exploring its libraries, classrooms, and the stunning architecture that makes U of T such a prestigious institution. The campus was bustling with students and faculty, adding an extra layer of energy to an already exciting day.</p>" +
      
      "<p>The PharmPath program not only deepened my understanding of the pharmacy profession but also gave me invaluable exposure to the practical skills that will shape the future of healthcare. I’m grateful to have had the chance to participate and learn from some of the brightest minds in the field. Looking forward to applying this experience to my future aspirations in the healthcare industry!</p>",
    
    "images": [
      "/blog/pharm (4).jpg",
      "/blog/pharm (3).jpg",
      "/blog/pharm (8).jpg",
      "/blog/tour (1).jpg",
      "/blog/tour (2).jpg",
      "/blog/tour (3).jpg",
      "/blog/pharm (7).jpg",
      "/blog/pharm (6).jpg",
      "/blog/pharm (5).jpg",
      "/blog/pharm (10).jpg",
      "/blog/pharm (9).jpg",
      "/blog/pharm (2).jpg",
      "/blog/pharm (1).jpg",
      "/blog/tour (4).jpg",
      "/blog/tour (5).jpg",
      "/blog/tour (6).jpg",
    ],
    
    "learnMoreUrl": "https://www.pharmacy.utoronto.ca/pharmpath"
  },  
  {
    title: "Exploring Innovation at KITE: The World’s #1 Rehab Research Facility",
    subtitle: "A behind-the-scenes look at groundbreaking rehab research at UHN’s KITE labs.",
    date: "March 12, 2025",
    image: "/blog/kite (4).JPG",
    slug: "kite-tour",
    excerpt:
      "Had the chance to tour KITE, the world's top rehab research facility, and see how cutting-edge innovations are transforming lives...",
    content: `
      <p>Stepping into KITE, part of the University Health Network, felt like entering the future of rehabilitation science. Ranked the <strong>#1 rehab research facility in the world</strong>, KITE is where engineers, scientists, and healthcare professionals come together to push the boundaries of what’s possible in mobility, accessibility, and independent living.</p>

      <p>The tour was nothing short of fascinating. Every lab had a unique focus, showing how real-world challenges are tackled through cutting-edge research. Here are some of the highlights:</p>

      <ul>
        <li><strong>Winter Lab:</strong> Ever wondered which winter boots actually prevent slips and falls? KITE’s Winter Lab puts footwear to the test on icy surfaces under controlled conditions. Seeing this in action made me appreciate how crucial seemingly simple innovations are in preventing injuries—especially in Canada’s harsh winters.</li>
        
        <li><strong>Home Lab:</strong> This lab is all about improving living conditions for individuals with mobility impairments, aging adults, and those recovering from injuries. Researchers analyze how different home setups can enhance safety and independence, from smart-home technology to adaptive furniture.</li>
        
        <li><strong>Street Lab:</strong> Urban environments can be challenging for individuals with mobility issues. The Street Lab simulates real-world street conditions—think uneven sidewalks, ramps, and public transit obstacles—to test and develop solutions that make cities more accessible for everyone.</li>
        
        <li><strong>Falls Lab:</strong> Falls are a leading cause of injury among older adults. This lab uses motion-tracking technology and AI analysis to study how falls happen and how they can be prevented through better footwear, flooring, and assistive devices.</li>

        <li><strong>Driving Simulation Lab:</strong> Getting behind the wheel after an injury or neurological condition can be daunting. This lab uses advanced driving simulators to assess and retrain individuals, ensuring they can drive safely before returning to the road.</li>
      </ul>

      <p>Walking through these labs, I was struck by how research at KITE is directly shaping the future of rehabilitation. Every experiment, every test, and every prototype is aimed at solving real-world problems, making daily life safer and more accessible for millions of people.</p>

      <p>A huge thank you to the KITE team for this insightful experience! It’s inspiring to see the blend of engineering, medicine, and technology coming together to improve lives. Looking forward to following their groundbreaking work in the years to come.</p>
    `,
    images: [
      "/blog/kite (5).JPG",
      "/blog/kite (4).JPG",
      "/blog/kite (3).JPG",
      "/blog/kite (1).JPG",
      "/blog/kite (2).JPG",
      "/blog/kite (6).JPG",
      "/blog/kite (7).JPG",
      "/blog/kite (8).JPG",
      "/blog/kite (9).JPG",
    ],
    learnMoreUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7305615801456234499/",
  },
  {
    title: "Inside the ER: A Day of Hands-On Training at Sunnybrook Health Sciences Centre",
    subtitle: "What does it take to save a life in the ER? I found out firsthand!",
    date: "February 14, 2025",
    image: "/blog/er-training (1).JPG",
    slug: "er-training",
    excerpt:
      "A firsthand look at ER training at Sunnybrook, practicing life-saving skills in a high-stakes environment...",
    content: `
      <p>This week, I had the incredible opportunity to attend the inaugural ER training day at Sunnybrook Health Sciences Centre, the world’s first-ever Level 1 trauma center outside the U.S., hosted by the Temerty Faculty of Medicine, University of Toronto.</p>
      
      <p>From touring the trauma bay to hearing from a panel of ER professionals, every moment was eye-opening. But the real highlight? Stepping into their shoes and practicing the very skills that save lives every day:</p>
      
      <ul>
        <li><strong>Suturing wounds:</strong> Learning the delicate art of suturing required precision and patience. It was fascinating to see how different stitching techniques are used based on the severity and location of the wound.</li>
        <li><strong>Intubation:</strong> Securing airways is one of the most crucial skills in emergency medicine. I practiced using an endotracheal tube and realized just how critical proper technique is when seconds determine survival.</li>
        <li><strong>Ultrasound diagnostics:</strong> I was amazed at how quickly trained hands can locate internal injuries or guide medical procedures with real-time imaging.</li>
        <li><strong>CPR & Stop the Bleed:</strong> Timing and technique are everything when responding to a cardiac arrest or massive hemorrhage. Practicing chest compressions and tourniquet applications emphasized just how intense real-life emergencies can be.</li>
      </ul>
      
      <p>This hands-on training solidified my passion for medicine, reinforcing the importance of rapid decision-making and teamwork in life-or-death situations. Emergency medicine is both science and art, and I left the experience more motivated than ever to pursue a career in healthcare.</p>
    `,
    images: [
      "/blog/er-training (1).JPG",
      "/blog/er-training (2).JPG",
      "/blog/er-training (3).JPG",
      "/blog/er-training (4).JPG",
      "/blog/er-training (5).JPG",
      "/blog/er-training (6).JPG",
      "/blog/er-training (7).JPG",
      "/blog/er-training (8).JPG",
      "/blog/er-training (9).JPG",
      "/blog/er-training (10).JPG",
      "/blog/er-training (11).JPG",
    ],
    learnMoreUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7296572961094844416/",
  },
  {
    title: "Capturing STEM Excellence: Photography at the Glenforest STEM Symposium",
    subtitle: "Through my lens: The future of innovation in action!",
    date: "March 2, 2025",
    image: "/blog/stem-symposiumOne.jpg",
    slug: "stem-symposium",
    excerpt:
      "A visual journey through the Glenforest STEM Symposium, capturing the excitement of science and innovation...",
    content: `
      <p>At the Glenforest STEM Symposium, I had the chance to witness firsthand the creativity and ingenuity of students and professionals pushing the boundaries of science and technology. My role? Capturing their passion through photography.</p>
      
      <p>Walking through the symposium, I saw projects ranging from ranging from enginering to chemical experiments. The energy in the room was palpable, and I knew that each snapshot I took would help tell the stories of future innovators.</p>
      
      <p>One of the most exciting aspects was engaging with presenters, learning the inspiration behind their work, and seeing their excitement as they explained complex ideas. Through photography, I was able to freeze those moments of discovery and passion, sharing them with a wider audience.</p>
      
      <p>This experience reaffirmed my belief in the power of STEM education and how essential it is to nurture young minds interested in science and technology.</p>
    `,
    images: [
      "/blog/stem-symposiumOne.jpg",
      "/blog/stem-symposiumTwo.jpg",
      "/blog/stem-symposiumThree.jpg",
      "/blog/stem-symposiumFour.jpg",
      "/blog/stem-symposiumFive.jpg",
    ],
  },
  {
    title: "Astrocytoma: From Diagnosis to Management – A Comprehensive Overview",
    subtitle: "Unraveling the mysteries of brain tumors—what we know and where we're headed",
    date: "October 4, 2024",
    image: "/blog/research (1).jpg",
    slug: "astrocytoma-research",
    excerpt: "Co-authoring a published paper on astrocytomas and receiving recognition for research excellence...",
    content: `
      <p>Brain tumors are one of the most complex and challenging areas of medical research, and my team and I had the privilege of co-authoring a paper on astrocytomas, a type of brain tumor that affects thousands of patients worldwide.</p>
      
      <p>We explored how advancements in imaging technology and molecular research are improving early diagnosis and treatment strategies. By analyzing case studies and consulting with data, we gained a deep understanding of how personalized medicine is changing the way astrocytomas are managed.</p>
      
      <p>Our research won a Certificate of Achievement in the Gen Writers & Sunshine 4 Cancer Kids competition, an acknowledgment that strengthened my resolve to contribute to medical research in the future.</p>
    `,
    images: ["/blog/research (1).jpg", "/blog/research (2).jpg", "/blog/research (3).jpg"],
    learnMoreUrl: "https://sunshine4cancerkid.wixsite.com/sunshine-4-cancer-ki/post/astrocytoma-from-diagnosis-to-management-a-comprehensive-overview",
  },
  {
    title: "Featured as a Rising Phenom in Rising Phenom Magazine!",
    subtitle: "From volunteering to research—my journey to making an impact in healthcare",
    date: "November 9, 2024",
    image: "/blog/feature (1).jpg",
    slug: "rising-phenom-feature",
    excerpt:
      "Honored to be featured in Rising Phenom Magazine, recognizing my contributions to healthcare and community service...",
    content: `
      <p>Exciting news! I’ve been featured as a Rising Phenom in <strong>Rising Phenom Magazine</strong>, a recognition that highlights my contributions to medicine, healthcare, and activism.</p>
      
      <p>This journey has been anything but linear. From volunteering at my school to conducting research reveiws and advocating for healthcare accessibility, every step has reinforced my belief in the power of medicine to change lives.</p>
      
      <p>I owe this achievement to the mentors, peers, and communities that have supported me along the way. The feature in Rising Phenom Magazine is not just a milestone but a reminder of the responsibility I hold to continue pushing for positive change in the healthcare industry.</p>
      
      <p>If you're interested in making an impact in healthcare, I’d love to connect and exchange ideas on how we can collectively drive change.</p>
    `,
    images: ["/blog/feature (1).jpg", "/blog/feature (2).jpg", "/blog/feature (3).jpg", "/blog/feature (4).jpg"],
    learnMoreUrl: "https://www.instagram.com/p/DB0a2wmo49U/?img_index=1",
  },
]

