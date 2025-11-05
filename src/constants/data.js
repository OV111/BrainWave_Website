const companys = [
  {
    id: 1,
    name: "Steven Universe",
    img: "../src/assets/companys/icons8-steven-universe-logo-96.png",
  },
  {
    id: 2,
    name: "Spotify",
    img: "../src/assets/companys/icons8-spotify-96.png",
  },
  {
    id: 3,
    name: "Firebase",
    img: "../src/assets/companys/icons8-firebase-96.png",
  },
  { id: 4, name: "Notion", img: "../src/assets/companys/Notion_Symbol_1.png" },
  {
    id: 5,
    name: "Caesium",
    img: "../src/assets/companys/icons8-caesium-96.png",
  },
  {
    id: 6,
    name: "RoseLand",
    img: "../src/assets/companys/icons8-roseland-96.png",
  },
];

const features = [
  {
    id: 1,
    topic: "Ask Anything",
    text: "Lets user quickly find answers to their questions without having to search through multiple sources.",
    buttonImg: "../src/assets/benefits/icon-1.svg",
    borderImg: "../src/assets/benefits/card-1.svg",
  },
  {
    id: 2,
    topic: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    buttonImg: "../src/assets/benefits/icon-2.svg",
    borderImg: "src/assets/benefits/card-2.svg",
  },
  {
    id: 3,
    topic: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessable and convinient.",
    buttonImg: "../src/assets/benefits/icon-3.svg",
    borderImg: "../src/assets/benefits/card-3.svg",
  },
  {
    id: 4,
    topic: "Smart Suggestions",
    text: "Get personalized recommendations based on your habits, preferences, and previous interactions with the AI.",
    buttonImg: "../src/assets/benefits/icon-3.svg",
    borderImg: "../src/assets/benefits/card-3.svg",
  },
  {
    id: 5,
    topic: "Seamless Integration",
    text: "Easily integrate the chatbot with your favorite tools and platforms for a smoother workflow experience.",
    buttonImg: "../src/assets/benefits/icon-4.svg",
    borderImg: "../src/assets/benefits/card-4.svg",
  },
  {
    id: 6,
    topic: "Instant Insights",
    text: "Receive real-time insights and analytics that help you make better decisions faster and more efficiently.",
    buttonImg: "../src/assets/benefits/icon-1.svg",
    borderImg: "../src/assets/benefits/card-5.svg",
  },
];

const collabsApps = [
  {
    id: 0,
    name: "Slack",
    icon: "src/assets/collaboration/slack.png",
    rotation: 0,
  },
  {
    id: 1,
    name: "Figma",
    icon: "src/assets/collaboration/figma.png",
    rotation: 45,
  },
  {
    id: 2,
    name: "Notion",
    icon: "src/assets/collaboration/notion.png",
    rotation: 90,
  },
  {
    id: 3,
    name: "Discord",
    icon: "src/assets/collaboration/discord.png",
    rotation: 135,
  },
  {
    id: 4,
    name: "Photoshop",
    icon: "src/assets/collaboration/photoshop.png",
    rotation: 180,
  },
  {
    id: 5,
    name: "Protopie",
    icon: "src/assets/collaboration/protopie.png",
    rotation: 225,
  },
  {
    id: 6,
    name: "Framer",
    icon: "src/assets/collaboration/framer.png",
    rotation: 270,
  },
  {
    id: 7,
    name: "Raindrop",
    icon: "src/assets/collaboration/raindrop.png",
    rotation: 315,
  },
];

const pricing = [
  {
    id: 0,
    title: "Basic",
    titleCol: "",
    price: "$0",
    text: "AI chatbot, personalized recommendations",
    buttonText: "Get Started",
    description: [
      { id: 0, text: "An AI chatbot that can understand your queries" },
      { id: 1, text: "Personalized recommendations based on your preferences" },
      {
        id: 2,
        text: "Ability to explore the app and its features without any cost",
      },
    ],
  },
  {
    id: 1,
    title: "Premium",
    price: "$9.99",
    text: "Advanced AI chatbot, priority support, analytics dashboard",
    buttonText: "Get Started",
    description: [
      {
        id: 0,
        text: "An advanced AI chatbot that can understand complex queries",
      },
      { id: 1, text: "An analytics dashboard to track your conversations" },
      { id: 2, text: "Priority support to solve issues quickly" },
    ],
  },
  {
    id: 2,
    title: "Enterprise",
    price: "\u00A0",
    text: "Custom AI chatbot, advanced analytics, dedicated account",
    buttonText: "Contact Us",
    description: [
      {
        id: 0,
        text: "Custom AI solutions tailored to your business needs",
      },
      { id: 1, text: "Comprehensive analytics and usage insights for admins" },
      {
        id: 2,
        text: "Seamless integration with your internal systems and tools",
      },
    ],
  },
];

const icons = [
  { id: 0, icon: "src/assets/hero/home-smile.svg" },
  { id: 1, icon: "src/assets/hero/file-02.svg" },
  { id: 2, icon: "src/assets/hero/plus-square.svg" },
  { id: 3, icon: "src/assets/hero/search-md.svg" },
];
export { companys, features, collabsApps, pricing, icons };
