import Link from "next/link";
import { Metadata } from "next";
import { Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.myread.me"),
  title: "About | Minimalist Markdown Editor",
  description: "myreadme is a code editor for Web and Docker, since 2022.",
  keywords:
    "myreadme, code editor, Web Editor, Markdown editor with React by NelsonCode",
  openGraph: {
    type: "website",
    url: "https://www.myread.me/",
    title: "About | Minimalist Markdown Editor",
    description: "myreadme is a code editor for Web and Docker, since 2022.",
    siteName: "myreadme",
    images: [
      {
        url: "https://www.myread.me/preview.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Minimalist Markdown Editor",
    description: "myreadme is a code editor for Web and Docker, since 2022.",
    creator: "@nelsoncode_dev",
    images: [
      {
        url: "https://www.myread.me/preview.png",
      },
    ],
  },
  category: "website",
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
};

function About() {
  return (
    <div className="m-3 text-center">
      <div className="grid place-content-center h-[80vh] text-base md:text-xl">
        <p>
          <Link className="text-indigo-700" href="https://editor.myread.me">
            myreadme
          </Link>{" "}
          is a code editor for Web and Docker, since 2022.
        </p>
        <br />
        <p>
          Creator and maintainer:{" "}
          <Link
            className="text-indigo-700"
            href="https://github.com/nelsondev19"
          >
            Nelson Hernández
          </Link>
        </p>
        <br />
        <p>
          Source Code:{" "}
          <Link
            className="text-indigo-700"
            href="https://github.com/nelsondev19/myreadme"
          >
            GitHub
          </Link>
        </p>
      </div>
    </div>
  );
}

export default About;
