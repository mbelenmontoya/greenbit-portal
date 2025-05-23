// scripts/seedTools.js
const { initializeApp } = require("firebase/app");
const { getFirestore, doc, setDoc } = require("firebase/firestore");

const app = initializeApp({
    apiKey:     process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId:  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId:      process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
});
const db = getFirestore(app);

const tools = [
  {
    slug: "smart-trading-journal",
    data: {
      name: "Smart Trading Journal",
      description: "Log trades, visualize performance, spot patterns.",
      iconURL: "https://yourcdn.com/icons/journal.png",
      launchURL: "https://journal.greenbit.com",
    },
  },
  {
    slug: "portfolio-rebalancer",
    data: {
      name: "Portfolio Rebalancer",
      description: "Automatically rebalance to your targets.",
      iconURL: "https://yourcdn.com/icons/rebalancer.png",
      launchURL: "https://rebalancer.greenbit.com",
    },
  },
  // …more tools
];

async function seed() {
  for (const { slug, data } of tools) {
    await setDoc(doc(db, "tools", slug), data);
    console.log("Seeded:", slug);
  }
}

seed().catch(console.error);
