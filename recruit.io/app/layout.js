import { Mona_Sans } from "next/font/google";
import "./globals.css";

const monaSans =Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Recruit.io",
  description: "Recruit.io - Your Hiring Solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" >
      <body
        className={`${monaSans.className}  antialiased pattern`}
      >
        {children}
      </body>
    </html>
  );
}
