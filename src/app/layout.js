import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "DashDine – Fresh Vegetarian Food Delivery",
    template: "%s | DashDine"
  },
  description:
    "DashDine is a fast and reliable vegetarian food delivery app offering fresh meals, snacks, desserts, and beverages with quick home delivery.",

  keywords: [
    "food delivery app",
    "vegetarian food delivery",
    "veg food online",
    "DashDine",
    "order food online",
    "quick delivery",
    "Next.js food app",
    "healthy food delivery",
    "snacks delivery",
    "Indian veg dishes"
  ],

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png"
  },

  authors: [
    { name: "DashDine Team" },
    { name: "Jagannath Pradhan", url: "https://pradhan-portfolio-rust.vercel.app/" }
  ],

  metadataBase: new URL("https://your-domain.com"),

  openGraph: {
    title: "DashDine – Fresh Vegetarian Food Delivered Fast",
    description:
      "Order fresh vegetarian meals, snacks, desserts, and beverages from DashDine with fast delivery and smooth user experience.",
    url: "https://your-domain.com",
    siteName: "DashDine",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DashDine – Food Delivery App"
      }
    ],
    locale: "en_IN",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "DashDine – Fresh Veg Food Delivered Fast",
    description:
      "Order vegetarian food with fast delivery and zero hassle on DashDine.",
    images: ["/og-image.png"],
    creator: "@your_twitter_handle"
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },

  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
