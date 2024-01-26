import type { Metadata } from "next";
import "./globals.css";
import Drawer from "@/components/Drawer";
import Navigation from "@/components/Navigation";
import twmesh from "@/utils/twmesh";

export const metadata: Metadata = {
  title: "Dev-Josh | Jr. Front-End Developer",
  description:
    "A Front-End Web Developer building the Frontend and Backend of Websites and Web Applications that leads to the success of the overall products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Dev-Josh | Jr. Front-End Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/logo.png" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="A Front-End Web Developer building the Frontend and Backend of Websites and Web Applications that leads to the success of the overall products."
        />
        <meta name="author" content="Eyasu Chaka" />
        {/* <meta
          name="google-site-verification"
          content="wX2xdkxqjrC4rA2EM-9bbaVpiEEFG8ae5azgeZDd-oo"
        /> */}

        <meta property="og:title" content="Eyasu | Front-End Web Developer" />
        <meta property="og:site_name" content="Eyasu Chaka Portfolio Website" />
        {/* must be edited */}
        <meta property="og:url" content="https://eyasuc.vercel.app/" />
        <meta
          property="og:description"
          content="A Front-End Web Developer building the Frontend and Backend of Websites and Web Applications that leads to the success of the overall products."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://eyasuc.vercel.app/showcase.png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"anonymous"}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-brand text-brand">
        <Navigation />
        <Drawer />
        <div className="px-12 pt-28 md:ml-52 md:pt-8 xl:ml-[19rem]">
          {children}
        </div>
      </body>
    </html>
  );
}
