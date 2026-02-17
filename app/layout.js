import "./globals.css";
import { ThemeProvider } from "@/components/modules/ThemeProvider/themeProvider";
import localFont from "next/font/local";

const thinText = localFont({
  src: "./fonts/thinText.ttf",
  display: "swap",
  variable: "--font-thin",
});
const fontTitle = localFont({
  src: "./fonts/boldTitle.TTF",
  display: "swap",
  variable: "--font-title",
});
const sectionHeading = localFont({
  src: "./fonts/sectionHeading.ttf",
  display: "swap",
  variable: "--font-heading",
});
const fontDescription = localFont({
  src: "./fonts/lightText.ttf",
  display: "swap",
  variable: "--font-description",
});
const fontRegular = localFont({
  src: "./fonts/regular.ttf",
  display: "swap",
  variable: "--font-regular",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${thinText.variable} ${fontRegular.variable} ${fontTitle.variable} ${sectionHeading.variable} ${fontDescription.variable}`}
        cz-shortcut-listen="true"
      >
        <ThemeProvider>
          <div className="flex flex-col items-center">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
