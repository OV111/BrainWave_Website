import homesmile from "../assets/hero/home-smile.svg"
import file2 from "../assets/hero/file-02.svg"
import plusSquare from "../assets/hero/plus-square.svg"
import search from "../assets/hero/search-md.svg"


import stevenUni from "../assets/companys/icons8-steven-universe-logo-96.png"
import sitecore from "../assets/companys/icons8-sitecore-96.png"
import firebase from "../assets/companys/icons8-firebase-96.png"
import caesium from "../assets/companys/icons8-caesium-96.png"
import inshot from "../assets/companys/icons8-inshot-96.png"
import roseland from "../assets/companys/icons8-roseland-96.png"

const companys = [
  {
    id: 0,
    name: "Steven Universe",
    img: stevenUni,
  },
  {
    id: 1,
    name: "Sitecore",
    img: sitecore,
  },
  {
    id: 2,
    name: "Firebase",
    img: firebase,
  },
  { id: 3, name: "Inshot", img: inshot },
  {
    id: 4,
    name: "Caesium",
    img: caesium,
  },
  {
    id: 5,
    name: "RoseLand",
    img: roseland,
  },
];

import icon1 from "../assets/benefits/icon-1.svg"
import icon2 from "../assets/benefits/icon-2.svg"
import icon3 from "../assets/benefits/icon-3.svg"
import icon4 from "../assets/benefits/icon-4.svg"

import card1 from "../assets/benefits/card-1.svg"
import card2 from "../assets/benefits/card-2.svg"
import card3 from "../assets/benefits/card-3.svg"
import card4 from "../assets/benefits/card-4.svg"
import card5 from "../assets/benefits/card-5.svg"

const features = [
  {
    id: 1,
    topic: "Ask Anything",
    text: "Lets user quickly find answers to their questions without having to search through multiple sources.",
    buttonImg: icon1,
    borderImg: card1,
  },
  {
    id: 2,
    topic: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    buttonImg: icon2,
    borderImg: card2,
  },
  {
    id: 3,
    topic: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    buttonImg: icon3,
    borderImg: card3,
  },
  {
    id: 4,
    topic: "Smart Suggestions",
    text: "Get personalized recommendations based on your habits, preferences, and previous interactions with the AI.",
    buttonImg: icon4,
    borderImg: card4,
  },
  {
    id: 5,
    topic: "Seamless Integration",
    text: "Easily integrate the chatbot with your favorite tools and platforms for a smoother workflow experience.",
    buttonImg: icon2,
    borderImg: card5,
  },
  {
    id: 6,
    topic: "Instant Insights",
    text: "Receive real-time insights and analytics that help you make better decisions faster and more efficiently.",
    buttonImg: icon1,
    borderImg: card3,
  },
];

import slack from "../assets/collaboration/slack.png"
import figma from "../assets/collaboration/figma.png"
import notion from "../assets/collaboration/notion.png"
import discord from "../assets/collaboration/discord.png"
import photoshop from "../assets/collaboration/photoshop.png"
import protopie from "../assets/collaboration/protopie.png"
import framer from "../assets/collaboration/framer.png"
import raindrop from "../assets/collaboration/raindrop.png"

const collabsApps = [
  {
    id: 0,
    name: "Slack",
    icon: slack,
    rotation: 0,
  },
  {
    id: 1,
    name: "Figma",
    icon: figma,
    rotation: 45,
  },
  {
    id: 2,
    name: "Notion",
    icon: notion,
    rotation: 90,
  },
  {
    id: 3,
    name: "Discord",
    icon: discord,
    rotation: 135,
  },
  {
    id: 4,
    name: "Photoshop",
    icon: photoshop,
    rotation: 180,
  },
  {
    id: 5,
    name: "Protopie",
    icon: protopie,
    rotation: 225,
  },
  {
    id: 6,
    name: "Framer",
    icon: framer,
    rotation: 270,
  },
  {
    id: 7,
    name: "Raindrop",
    icon: raindrop,
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
  { id: 0, icon: homesmile },
  { id: 1, icon: file2 },
  { id: 2, icon: plusSquare },
  { id: 3, icon: search },
];
export { companys, features, collabsApps, pricing, icons };
