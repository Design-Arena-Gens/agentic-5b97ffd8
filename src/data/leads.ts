export type Industry =
  | "Fashion"
  | "Tech"
  | "F&B"
  | "Lifestyle"
  | "Beauty"
  | "Entertainment";

export type Region = "India" | "UAE" | "UK" | "USA";

export type PlatformSummary = {
  platform: "Instagram" | "YouTube" | "TikTok" | "LinkedIn" | "Website";
  handle: string;
  url: string;
  cadence: string;
  followers: string;
};

export type DecisionMaker = {
  name: string;
  role: string;
  linkedin?: string;
  notes?: string;
};

export type Lead = {
  id: string;
  name: string;
  industry: Industry;
  location: Region;
  headline: string;
  brandKeywords: string[];
  overview: string;
  visualHooks: string[];
  contentOpportunities: string[];
  instagram: PlatformSummary;
  supportingPlatforms: PlatformSummary[];
  website: string;
  brandVoice: string;
  fitReasons: string[];
  recommendedDeliverables: string[];
  outreachAngle: string;
  decisionMakers: DecisionMaker[];
};

export const leads: Lead[] = [
  {
    id: "perona",
    name: "Perona",
    industry: "Fashion",
    location: "India",
    headline: "Minimalist leatherwear with a cinematic design language.",
    brandKeywords: ["luxury basics", "minimal", "leather", "monochrome"],
    overview:
      "Perona crafts refined leather essentials for the modern wardrobe. Their visuals already lean into clean geometry and premium material focus but lack motion-first storytelling.",
    visualHooks: [
      "Textures and macro material shots",
      "Structured silhouettes against negative space",
      "Neutral, futuristic color blocking",
    ],
    contentOpportunities: [
      "Launch a motion-driven lookbook that fuses AI-rendered architectural spaces with live product shots.",
      "Create 12-second kinetic edits for Instagram Reels spotlighting hero products with animated typography.",
      "Develop a looping hero video for their website landing page that dramatizes craftsmanship steps.",
    ],
    instagram: {
      platform: "Instagram",
      handle: "@peronaindia",
      url: "https://www.instagram.com/peronaindia",
      cadence: "4-5 posts/week; limited motion content",
      followers: "72K",
    },
    supportingPlatforms: [
      {
        platform: "Website",
        handle: "perona.com",
        url: "https://perona.com",
        cadence: "Seasonal campaign refreshes",
        followers: "—",
      },
    ],
    website: "https://perona.com",
    brandVoice: "Poised, architectural, premium craftsmanship-first storytelling.",
    fitReasons: [
      "Needs motion-first storytelling to match product sophistication.",
      "Minimal aesthetic aligns directly with Nodi Verse signature look.",
      "Active on Instagram with consistent engagement but static-first output.",
    ],
    recommendedDeliverables: [
      "AI-assisted capsule lookbook video series",
      "Material-led motion idents for Instagram grid",
      "Launch campaign hero film blending live action and CG transitions",
    ],
    outreachAngle:
      "Pitch a 'Sculpted in Motion' series that reveals tactile leather details through cinematic macro animations.",
    decisionMakers: [
      {
        name: "Shivam Khanna",
        role: "Co-founder & Creative Director",
        linkedin: "https://www.linkedin.com/in/shivamkhanna",
      },
      {
        name: "Saahil Kashyap",
        role: "Marketing Lead",
        notes: "Oversees digital campaigns; strong believer in design storytelling.",
      },
    ],
  },
  {
    id: "the-pot-plant",
    name: "The Pot Plant",
    industry: "Fashion",
    location: "India",
    headline: "Sustainable Indian label blending comfort silhouettes with bold color.",
    brandKeywords: ["handcrafted", "sustainable", "color blocking", "inclusive"],
    overview:
      "The Pot Plant uses vibrant color blocking and fluid silhouettes. Their content relies heavily on editorial photography—there is untapped space for cinematic world-building.",
    visualHooks: [
      "Vibrant jewel-tone palette",
      "Gender-fluid draping and movement",
      "Handcrafted textile close-ups",
    ],
    contentOpportunities: [
      "Story-driven shorts spotlighting the artisanship journey behind each dye lot.",
      "AR-inspired fashion film translating their bold palette into animated environments.",
      "Interactive Instagram Reels series that morphs outfits through AI-assisted transitions.",
    ],
    instagram: {
      platform: "Instagram",
      handle: "@thepotplantclothing",
      url: "https://www.instagram.com/thepotplantclothing",
      cadence: "3 posts/week; mix of reels & carousels",
      followers: "64K",
    },
    supportingPlatforms: [
      {
        platform: "Website",
        handle: "shopthepotplant.com",
        url: "https://shopthepotplant.com",
        cadence: "Quarterly collection drops",
        followers: "—",
      },
    ],
    website: "https://shopthepotplant.com",
    brandVoice: "Celebratory, progressive, art-led storytelling.",
    fitReasons: [
      "Highly visual garments benefit from kinetic storytelling.",
      "Emerging brand with appetite for experimentation.",
      "Color-rich palette plays nicely with AI-led world building.",
    ],
    recommendedDeliverables: [
      "Collection launch hero film mixing live editorial footage with AI-rendered dreamscapes",
      "Vertical story snippets designed for Instagram Reels",
      "Looping motion covers for upcoming drop landing pages",
    ],
    outreachAngle:
      "Position Nodi Verse as the partner to build an immersive launch film celebrating their artisans with futuristic palettes.",
    decisionMakers: [
      {
        name: "Resham Karmchandani",
        role: "Co-founder",
        linkedin: "https://www.linkedin.com/in/resham-karmchandani",
      },
      {
        name: "Sukhmani Kaur",
        role: "Co-founder",
        linkedin: "https://www.linkedin.com/in/sukhmanik",
      },
    ],
  },
  {
    id: "nappa-dori",
    name: "Nappa Dori",
    industry: "Lifestyle",
    location: "India",
    headline: "Design-forward travel and lifestyle accessories rooted in Indian craft.",
    brandKeywords: ["travel", "handcrafted", "premium accessories", "experiential"],
    overview:
      "Nappa Dori combines Indian craftsmanship with Scandinavian minimalism. Their visual identity is polished but lacks short-format films to promote retail experiences.",
    visualHooks: [
      "Leather craftsmanship process",
      "Interior design of their experiential stores",
      "Travel storytelling motifs",
    ],
    contentOpportunities: [
      "Cinematic store walkthroughs combining drone footage with AI matte paintings.",
      "Product hero animations for new luggage lines.",
      "Narrative-led social ads highlighting travel archetypes.",
    ],
    instagram: {
      platform: "Instagram",
      handle: "@nappadori",
      url: "https://www.instagram.com/nappadori",
      cadence: "5 posts/week; heavy carousel usage",
      followers: "127K",
    },
    supportingPlatforms: [
      {
        platform: "YouTube",
        handle: "Nappa Dori",
        url: "https://www.youtube.com/@NappaDori",
        cadence: "Infrequent; primarily brand films",
        followers: "2.6K",
      },
      {
        platform: "Website",
        handle: "nappadori.com",
        url: "https://nappadori.com",
        cadence: "Seasonal refresh",
        followers: "—",
      },
    ],
    website: "https://nappadori.com",
    brandVoice: "Sophisticated, travel-inspired, quietly luxurious.",
    fitReasons: [
      "Multiple physical touchpoints that benefit from motion identity.",
      "Premium price points justify cinematic storytelling.",
      "Gaps in consistent video output on Instagram & YouTube.",
    ],
    recommendedDeliverables: [
      "60-second brand anthem for flagship store experiences",
      "Modular ad toolkit for luggage/new collection drops",
      "AI-assisted travel narratives for campaign teasers",
    ],
    outreachAngle:
      "Pitch a cinematic journey film that spotlights their experiential stores and artisans, optimized for paid social and in-store screens.",
    decisionMakers: [
      {
        name: "Gautam Sinha",
        role: "Founder & Creative Director",
        linkedin: "https://www.linkedin.com/in/gautam-sinha-02826932",
      },
      {
        name: "Tanisha Sharma",
        role: "Head of Marketing",
        notes: "Champion for storytelling-driven campaigns.",
      },
    ],
  },
  {
    id: "sleepy-owl",
    name: "Sleepy Owl Coffee",
    industry: "F&B",
    location: "India",
    headline: "Cold brew-first coffee brand with a playful yet design-led identity.",
    brandKeywords: ["cold brew", "D2C", "urban millennials", "bright colors"],
    overview:
      "Sleepy Owl drives D2C sales through relatable content. Motion design could elevate product storytelling, spotlighting new flavors and brewing formats.",
    visualHooks: [
      "Bold packaging with geometric patterns",
      "Coffee brewing rituals",
      "Seasonal flavor drops",
    ],
    contentOpportunities: [
      "Animated explainer series simplifying brew methods for reels.",
      "AI-generated cityscapes that mirror caffeine energy for ad campaigns.",
      "Product loop animations for website hero sections.",
    ],
    instagram: {
      platform: "Instagram",
      handle: "@sleepyowlcoffee",
      url: "https://www.instagram.com/sleepyowlcoffee",
      cadence: "Daily stories; 4 reels/week",
      followers: "115K",
    },
    supportingPlatforms: [
      {
        platform: "YouTube",
        handle: "Sleepy Owl Coffee",
        url: "https://www.youtube.com/@SleepyOwlCoffee",
        cadence: "Inconsistent",
        followers: "7.8K",
      },
    ],
    website: "https://sleepyowl.co",
    brandVoice: "Cheerful, conversational, urban lifestyle.",
    fitReasons: [
      "High product velocity requires repeatable motion templates.",
      "Existing animated work is basic; opportunities for futuristic elevation.",
      "Active Instagram audience primed for snackable video storytelling.",
    ],
    recommendedDeliverables: [
      "Modular 10-second product bumpers for each flavor",
      "Animated brew method tutorials using AI-assisted transitions",
      "Paid social ad suite optimized for vertical video",
    ],
    outreachAngle:
      "Offer a motion-first product storytelling kit that scales across every seasonal flavor drop.",
    decisionMakers: [
      {
        name: "Arman Sood",
        role: "Co-founder",
        linkedin: "https://www.linkedin.com/in/arman-sood",
      },
      {
        name: "Supriya Sharma",
        role: "AVP Marketing",
        notes: "Oversees campaign creatives and influencer partnerships.",
      },
    ],
  },
  {
    id: "the-giving-movement",
    name: "The Giving Movement",
    industry: "Fashion",
    location: "UAE",
    headline: "Sustainable athleisure brand balancing streetwear energy with minimal luxury.",
    brandKeywords: ["athleisure", "ethical", "street luxe", "UAE"],
    overview:
      "The Giving Movement built traction through energetic campaigns but leans on lifestyle photography. Cinematic motion can reinforce their premium positioning and purpose-led messaging.",
    visualHooks: [
      "Dubai skyline and desert backdrops",
      "Technical fabric macro shots",
      "Streetwear choreography",
    ],
    contentOpportunities: [
      "AI-assisted films juxtaposing urban futurism with desert landscapes.",
      "Motion idents for limited drops with kinetic typography.",
      "Short-form impact stories highlighting donation milestones.",
    ],
    instagram: {
      platform: "Instagram",
      handle: "@thegivingmovement",
      url: "https://www.instagram.com/thegivingmovement",
      cadence: "Daily; high frequency reels & stories",
      followers: "344K",
    },
    supportingPlatforms: [
      {
        platform: "TikTok",
        handle: "@thegivingmovement",
        url: "https://www.tiktok.com/@thegivingmovement",
        cadence: "3-4 videos/week",
        followers: "53K",
      },
    ],
    website: "https://thegivingmovement.com",
    brandVoice: "Energetic, impact-driven, premium streetwear.",
    fitReasons: [
      "Global expansion requires consistent cinematic identity.",
      "High drop cadence benefits from a repeatable motion system.",
      "Purpose-led storytelling aligns with Nodi Verse narrative strengths.",
    ],
    recommendedDeliverables: [
      "Drop launch hero films mixing AI-generated Dubai futurism with talent footage",
      "Animated donation impact reports for social",
      "Kinetic typography toolkit for performance ads",
    ],
    outreachAngle:
      "Pitch a 'Future of Movement' campaign bridging sustainability impact with sci-fi inspired visuals.",
    decisionMakers: [
      {
        name: "Dominic Nowell-Barnes",
        role: "Founder",
        linkedin: "https://www.linkedin.com/in/dominic-nowell-barnes-49058720",
      },
      {
        name: "Aya Bassam",
        role: "Creative Strategy Lead",
        notes: "Drives campaign ideation and external partnerships.",
      },
    ],
  },
  {
    id: "emirati-coffee",
    name: "Emirati Coffee Co.",
    industry: "F&B",
    location: "UAE",
    headline: "Specialty coffee roastery spotlighting Emirati heritage with modern design.",
    brandKeywords: ["specialty coffee", "heritage", "craft roasting", "Dubai"],
    overview:
      "Emirati Coffee Co. positions itself as a premium roastery with a growing café footprint. Visual storytelling is static-heavy—there is room for sensory-rich motion.",
    visualHooks: [
      "Roastery machinery and beans in motion",
      "Desert-inspired color palette",
      "Community-driven tasting sessions",
    ],
    contentOpportunities: [
      "Macro cinematic sequences of roasting with AI-enhanced particle effects.",
      "Animated tasting notes for each roast profile.",
      "Short-form vignettes featuring local collaborations.",
    ],
    instagram: {
      platform: "Instagram",
      handle: "@emiraticof",
      url: "https://www.instagram.com/emiraticof",
      cadence: "3 posts/week; reels sporadic",
      followers: "34K",
    },
    supportingPlatforms: [
      {
        platform: "Website",
        handle: "emiraticoffee.com",
        url: "https://emiraticoffee.com",
        cadence: "Product-led updates",
        followers: "—",
      },
    ],
    website: "https://emiraticoffee.com",
    brandVoice: "Warm, community-focused, premium craft.",
    fitReasons: [
      "Needs sensory storytelling to differentiate in crowded specialty market.",
      "Opportunity to develop signature motion ID showcasing roasting craft.",
      "Regional collaborations need cinematic highlight reels.",
    ],
    recommendedDeliverables: [
      "Roastery hero film for paid social and website",
      "Animated tasting note loops for Instagram grid",
      "Partner featurettes blending AI desert vistas with café footage",
    ],
    outreachAngle:
      "Introduce a 'Brewed in the Dunes' motion series capturing the sensory roasting process with cinematic flair.",
    decisionMakers: [
      {
        name: "Mohammed Al Madfai",
        role: "Founder",
      },
      {
        name: "Sara Al Ali",
        role: "Marketing & Partnerships Manager",
        linkedin: "https://www.linkedin.com/in/sara-al-ali",
      },
    ],
  },
  {
    id: "native-union",
    name: "Native Union",
    industry: "Tech",
    location: "UK",
    headline: "Design-led tech accessories with a tactile, minimalist brand world.",
    brandKeywords: ["tech accessories", "minimal", "materiality", "premium"],
    overview:
      "Native Union focuses on calm, design-first tech essentials. Their campaign visuals are polished but could benefit from futuristic motion that dramatizes form & utility.",
    visualHooks: [
      "Textured charging cables and stands",
      "Workspace lifestyle setups",
      "Monochrome palette with warm accents",
    ],
    contentOpportunities: [
      "AI-augmented product films showcasing modular workflow setups.",
      "Looping material explorations for new product finishes.",
      "Motion brand story around sustainability and longevity.",
    ],
    instagram: {
      platform: "Instagram",
      handle: "@nativeunion",
      url: "https://www.instagram.com/nativeunion",
      cadence: "4 posts/week; reels limited",
      followers: "247K",
    },
    supportingPlatforms: [
      {
        platform: "YouTube",
        handle: "Native Union",
        url: "https://www.youtube.com/@NativeUnion",
        cadence: "Quarterly launches",
        followers: "5.2K",
      },
      {
        platform: "Website",
        handle: "nativeunion.com",
        url: "https://nativeunion.com",
        cadence: "Frequent feature refresh",
        followers: "—",
      },
    ],
    website: "https://nativeunion.com",
    brandVoice: "Warm minimalism with a focus on intentional living.",
    fitReasons: [
      "Premium design aesthetic aligns closely with Nodi Verse visual sensibilities.",
      "Strong need for showing product utility through motion.",
      "Global audience that values cinematic storytelling.",
    ],
    recommendedDeliverables: [
      "Modular product films custom-fit for each accessory line",
      "AI-generated worktable environments for lifestyle positioning",
      "Motion guidelines package for global retail partners",
    ],
    outreachAngle:
      "Frame Nodi Verse as the partner to build a modular motion system that heroizes materials and functionality.",
    decisionMakers: [
      {
        name: "Igor Duc",
        role: "Co-founder & CEO",
        linkedin: "https://www.linkedin.com/in/igorduc",
      },
      {
        name: "Laurent Stanyon",
        role: "Global Brand Director",
        linkedin: "https://www.linkedin.com/in/laurent-stanyon",
      },
    ],
  },
  {
    id: "lyma",
    name: "LYMA",
    industry: "Beauty",
    location: "UK",
    headline: "Science-backed beauty tech with a luxury editorial aesthetic.",
    brandKeywords: ["beauty tech", "science", "luxury", "wellness"],
    overview:
      "LYMA markets high-end laser devices and supplements. Their communications are editorial but can evolve into more immersive, cinematic explainers.",
    visualHooks: [
      "Chromed devices with reflective surfaces",
      "Clinical-meets-luxury set design",
      "Purple and copper accent palette",
    ],
    contentOpportunities: [
      "CG motion explainers demystifying laser technology benefits.",
      "Premium testimonial films mixing AI-set extensions with live interviews.",
      "Vertical ad units focusing on before/after transformations with kinetic data overlays.",
    ],
    instagram: {
      platform: "Instagram",
      handle: "@lyma.life",
      url: "https://www.instagram.com/lyma.life",
      cadence: "5-6 posts/week; strong stories cadence",
      followers: "111K",
    },
    supportingPlatforms: [
      {
        platform: "LinkedIn",
        handle: "LYMA",
        url: "https://www.linkedin.com/company/lyma-life",
        cadence: "Weekly thought leadership",
        followers: "10K",
      },
    ],
    website: "https://lyma.life",
    brandVoice: "Clinical authority blended with luxurious sensory cues.",
    fitReasons: [
      "High-ticket product needs elevated, science-backed storytelling.",
      "Opportunity for visually striking CG to explain device technology.",
      "Global UHNW clientele resonates with premium cinematic content.",
    ],
    recommendedDeliverables: [
      "Flagship CG explainer film for LYMA Laser",
      "Vertical 15s ad suite with dynamic data overlays",
      "AI-augmented testimonial series for paid social",
    ],
    outreachAngle:
      "Lead with a 'Future of Skin Science' motion narrative that demystifies laser innovation in an aspirational tone.",
    decisionMakers: [
      {
        name: "Lucy Goff",
        role: "Founder",
        linkedin: "https://www.linkedin.com/in/lucygoff",
      },
      {
        name: "Roisin Benson",
        role: "Global Marketing Director",
      },
    ],
  },
  {
    id: "behno",
    name: "behno",
    industry: "Fashion",
    location: "USA",
    headline: "Ethically crafted handbags marrying New York minimalism with Indian craft.",
    brandKeywords: ["ethical", "handbags", "slow fashion", "New York"],
    overview:
      "behno sells premium handbags crafted in India with a slow fashion ethos. Their content is editorial yet sparse—there's room for motion-led capsule storytelling.",
    visualHooks: [
      "Architectural New York backdrops",
      "Detailed craftsmanship close-ups",
      "Monotone styling with bold accent colors",
    ],
    contentOpportunities: [
      "Animated capsule collection teasers with AI architectural environments.",
      "Short-form founder narrative pieces for web & socials.",
      "Looping product detail shots for PDP hero assets.",
    ],
    instagram: {
      platform: "Instagram",
      handle: "@behno_official",
      url: "https://www.instagram.com/behno_official",
      cadence: "2-3 posts/week; minimal reels",
      followers: "29K",
    },
    supportingPlatforms: [
      {
        platform: "Website",
        handle: "behno.com",
        url: "https://behno.com",
        cadence: "Collection-driven updates",
        followers: "—",
      },
    ],
    website: "https://behno.com",
    brandVoice: "Quiet luxury with ethical depth.",
    fitReasons: [
      "Small team likely to outsource premium motion execution.",
      "Ethical manufacturing story perfect for AI-enhanced documentaries.",
      "Needs standout visuals to compete with bigger luxury houses.",
    ],
    recommendedDeliverables: [
      "Cinematic origin story film connecting NY design with Indian craft",
      "Vertical motion lookbook featuring key handbag silhouettes",
      "AI-powered texture explorations for social snippets",
    ],
    outreachAngle:
      "Pitch a 'Handcrafted Futures' narrative that places behno as the modern ethical luxury icon.",
    decisionMakers: [
      {
        name: "Shilpa Shah",
        role: "Co-founder",
      },
      {
        name: "Sarika Rastogi",
        role: "Brand & Community Lead",
        linkedin: "https://www.linkedin.com/in/sarika-rastogi",
      },
    ],
  },
  {
    id: "ritual",
    name: "Ritual",
    industry: "Lifestyle",
    location: "USA",
    headline: "Modern supplement brand blending transparency with elevated design.",
    brandKeywords: ["wellness", "transparency", "clean design", "subscription"],
    overview:
      "Ritual is design-forward but needs new ways to dramatize scientific credibility. Their visuals are clean yet static-heavy—motion could bring capsules & ingredients to life.",
    visualHooks: [
      "Suspended capsules and beadlets",
      "Translucent materials and gradients",
      "Scientific iconography",
    ],
    contentOpportunities: [
      "CG ingredient breakdowns for Reels and paid media.",
      "Animated lifecycle stories showing habit formation.",
      "Website hero loops pairing product with AI-generated ingredient environments.",
    ],
    instagram: {
      platform: "Instagram",
      handle: "@ritual",
      url: "https://www.instagram.com/ritual",
      cadence: "Daily stories; 3-4 reels/week",
      followers: "384K",
    },
    supportingPlatforms: [
      {
        platform: "YouTube",
        handle: "Ritual",
        url: "https://www.youtube.com/@ritual",
        cadence: "Educational series; monthly",
        followers: "6.3K",
      },
    ],
    website: "https://ritual.com",
    brandVoice: "Approachable science with a premium, minimalist aesthetic.",
    fitReasons: [
      "High production standards align with Nodi Verse craft.",
      "Need for science storytelling suits AI + motion blend.",
      "Regular new product/ingredient drops demand modular content systems.",
    ],
    recommendedDeliverables: [
      "Ingredient deep-dive CG films optimized for performance marketing",
      "Onboarding motion toolkit for subscription lifecycle emails",
      "AI-generated mood films for seasonality campaigns",
    ],
    outreachAngle:
      "Suggest a 'Science in Motion' content series that visualizes transparency in a cinematic way.",
    decisionMakers: [
      {
        name: "Katerina Schneider",
        role: "Founder & CEO",
        linkedin: "https://www.linkedin.com/in/katerinaschneider",
      },
      {
        name: "Angela Smith",
        role: "VP Content & Community",
      },
    ],
  },
  {
    id: "kinship",
    name: "Kinship",
    industry: "Beauty",
    location: "USA",
    headline: "Gen-Z skincare brand fusing playful design with clean formulations.",
    brandKeywords: ["skincare", "inclusive", "playful", "clean beauty"],
    overview:
      "Kinship keeps a colorful, upbeat identity but relies on influencer-generated content. There is room for futuristic, owned visuals to differentiate.",
    visualHooks: [
      "Smiley brandmarks and soft neon gradients",
      "Gel textures and ingredient macro shots",
      "Youthful set design",
    ],
    contentOpportunities: [
      "Animated texture explorations for new product drops.",
      "Micro-story ads featuring skincare rituals with AI-enhanced environments.",
      "Dynamic educational explainers on microbiome science.",
    ],
    instagram: {
      platform: "Instagram",
      handle: "@lovekinship",
      url: "https://www.instagram.com/lovekinship",
      cadence: "4 posts/week; heavy influencer reliance",
      followers: "73K",
    },
    supportingPlatforms: [
      {
        platform: "TikTok",
        handle: "@lovekinship",
        url: "https://www.tiktok.com/@lovekinship",
        cadence: "Daily UGC reposts",
        followers: "28K",
      },
    ],
    website: "https://lovekinship.com",
    brandVoice: "Cheerful, science-smart, supportive.",
    fitReasons: [
      "Needs ownable premium visuals beyond influencer footage.",
      "Playful brand world can be elevated with futuristic twists.",
      "Product textures are perfect for CG-enhanced storytelling.",
    ],
    recommendedDeliverables: [
      "Product texture motion loops for TikTok & Instagram",
      "15-second ritual stories featuring AI-extended sets",
      "Launch splash videos for website headers",
    ],
    outreachAngle:
      "Introduce a 'Kinship Future Rituals' motion playbook that makes their skincare science feel magical.",
    decisionMakers: [
      {
        name: "Alison Haljun",
        role: "CEO",
        linkedin: "https://www.linkedin.com/in/alison-haljun-9035109",
      },
      {
        name: "Christina Ross",
        role: "Creative Director",
      },
    ],
  },
  {
    id: "museminded",
    name: "MuseMinded",
    industry: "Entertainment",
    location: "USA",
    headline: "Boutique creative studio producing immersive art-led events.",
    brandKeywords: [
      "immersive experiences",
      "projection mapping",
      "art direction",
      "boutique studio",
    ],
    overview:
      "MuseMinded crafts experiential activations for select brands. They need high-impact case study films and pitch-ready motion to win global clients.",
    visualHooks: [
      "Projection mapping moments",
      "Immersive lighting and installations",
      "Behind-the-scenes craft shots",
    ],
    contentOpportunities: [
      "Cinematic recap films combining event footage with AI-extended environments.",
      "Animated pitch decks and motion graphics to package their services.",
      "Social-first teasers that dramatize upcoming immersive experiences.",
    ],
    instagram: {
      platform: "Instagram",
      handle: "@museminded",
      url: "https://www.instagram.com/museminded",
      cadence: "Weekly highlights; reels occasional",
      followers: "18K",
    },
    supportingPlatforms: [
      {
        platform: "LinkedIn",
        handle: "MuseMinded",
        url: "https://www.linkedin.com/company/museminded",
        cadence: "Project announcements monthly",
        followers: "3.2K",
      },
    ],
    website: "https://museminded.com",
    brandVoice: "Artful, immersive, innovation-focused.",
    fitReasons: [
      "Needs cinematic documentation to pitch bigger clients.",
      "Appetite for blending real-world events with futuristic visuals.",
      "Boutique team likely to collaborate closely with creative partners.",
    ],
    recommendedDeliverables: [
      "AI-enhanced case study films for flagship activations",
      "Pitch deck motion graphics package",
      "Mini teaser loops for Instagram and email marketing",
    ],
    outreachAngle:
      "Propose a partnership to turn every installation into a cinematic universe that lives long after the event.",
    decisionMakers: [
      {
        name: "Jordan Kim",
        role: "Founder & Creative Lead",
      },
      {
        name: "Ariel Park",
        role: "Business Development Director",
      },
    ],
  },
  {
    id: "sakara",
    name: "Sakara",
    industry: "F&B",
    location: "USA",
    headline: "Plant-based meal program blending wellness and high fashion aesthetics.",
    brandKeywords: ["wellness", "plant-based", "luxury meal delivery", "NYC"],
    overview:
      "Sakara merges nutrition with fashion-forward visuals. Their content is aspirational but could adopt AI-driven world-building to keep launches fresh.",
    visualHooks: [
      "Vivid produce and plated meals",
      "Celestial wellness motifs",
      "High-fashion photography styling",
    ],
    contentOpportunities: [
      "AI-crafted wellness dreamscapes for seasonal programs.",
      "Motion-led ingredient stories for Instagram reels.",
      "Cinematic testimonials featuring founders in surreal environments.",
    ],
    instagram: {
      platform: "Instagram",
      handle: "@sakaralife",
      url: "https://www.instagram.com/sakaralife",
      cadence: "Daily posts; strong reels cadence",
      followers: "446K",
    },
    supportingPlatforms: [
      {
        platform: "YouTube",
        handle: "Sakara Life",
        url: "https://www.youtube.com/@SakaraLife",
        cadence: "Intermittent campaigns",
        followers: "4.1K",
      },
    ],
    website: "https://www.sakara.com",
    brandVoice: "Dreamy, transformational, high-fashion wellness.",
    fitReasons: [
      "Highly visual product perfectly suited for cinematic storytelling.",
      "Needs new content formats to differentiate in crowded wellness space.",
      "Premium clientele aligns with Nodi Verse's elevated aesthetic.",
    ],
    recommendedDeliverables: [
      "Seasonal program hero films mixing live action with AI environments",
      "Short-form ingredient spotlights for paid media",
      "Animated founder-led storytelling for campaigns",
    ],
    outreachAngle:
      "Pitch a 'Wellness Reinvented' cinematic universe to keep Sakara launches visually ahead of competitors.",
    decisionMakers: [
      {
        name: "Whitney Tingle",
        role: "Co-founder & Co-CEO",
        linkedin: "https://www.linkedin.com/in/whitneytingle",
      },
      {
        name: "Danielle Duboise",
        role: "Co-founder & Co-CEO",
        linkedin: "https://www.linkedin.com/in/danielleduboise",
      },
    ],
  },
  {
    id: "the-loupe",
    name: "The Loupe",
    industry: "Tech",
    location: "UK",
    headline: "Immersive art streaming platform delivering digital galleries on demand.",
    brandKeywords: ["immersive tech", "streaming", "digital art", "curation"],
    overview:
      "The Loupe streams ambient art for luxury spaces. Their product is inherently motion-driven but marketing assets remain static-heavy.",
    visualHooks: [
      "Ambient art loops displayed in luxury interiors",
      "Digital canvases & projection shots",
      "Futuristic UI elements",
    ],
    contentOpportunities: [
      "Cinematic product demos integrating motion UI with spatial storytelling.",
      "Artist collaboration teasers combining AI generative visuals with platform footage.",
      "Interactive microsite showcasing curated playlists with animated transitions.",
    ],
    instagram: {
      platform: "Instagram",
      handle: "@theloupeart",
      url: "https://www.instagram.com/theloupeart",
      cadence: "3 posts/week; limited reels",
      followers: "22K",
    },
    supportingPlatforms: [
      {
        platform: "LinkedIn",
        handle: "The Loupe",
        url: "https://www.linkedin.com/company/theloupeart",
        cadence: "Weekly product updates",
        followers: "6.5K",
      },
    ],
    website: "https://theloupeart.com",
    brandVoice: "Curatorial, futuristic, serene.",
    fitReasons: [
      "Product is motion-native yet marketing lacks cinematic depth.",
      "Premium hospitality clientele aligns with Nodi Verse craft.",
      "Strong need for explainer content to drive subscriptions.",
    ],
    recommendedDeliverables: [
      "Flagship platform film showcasing art-in-motion across environments",
      "Artist spotlight micro-documentaries with AI-extended visuals",
      "Sales enablement motion toolkit for hospitality pitches",
    ],
    outreachAngle:
      "Offer a motion-driven content suite that packages The Loupe as the definitive ambient art platform for future-forward spaces.",
    decisionMakers: [
      {
        name: "Marc Crothall",
        role: "Co-founder & CEO",
      },
      {
        name: "Holly Fraser",
        role: "Head of Curation",
        linkedin: "https://www.linkedin.com/in/holly-fraser",
      },
    ],
  },
];

