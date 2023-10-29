import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.myread.me"),
  title: "myreadme | Minimalist Markdown Editor",
  description:
    "Customize your README.md file with ready-to-use sections in a simple way with the web editor",
  keywords:
    "myreadme, code editor, Web Editor, Markdown editor with React by NelsonCode",
  openGraph: {
    type: "website",
    url: "https://www.myread.me/",
    title: "myreadme | Minimalist Markdown Editor",
    description:
      "Customize your README.md file with ready-to-use sections in a simple way with the web editor",
    siteName: "myreadme",
    images: [
      {
        url: "https://www.myread.me/preview.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "myreadme | Minimalist Markdown Editor",
    description:
      "Customize your README.md file with ready-to-use sections in a simple way with the web editor",
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

export default function Home() {
  return (
    <main className="m-3">
      <div className="text-center mt-28">
        <h1
          id="title"
          className="text-2xl md:text-5xl font-extrabold text-black"
        >
          Minimalist Markdown Editor
        </h1>
        <br />
        <div className="max-w-screen-xl m-auto">
          <p id="description" className="text-base md:text-xl">
            Customize your <strong>README.md</strong> file with ready-to-use
            sections in a simple way with the web editor
          </p>
        </div>
      </div>
      <div className="flex justify-center self-center gap-3 mt-10">
        <div>
          <Link
            target="_blank"
            href="https://editor.myread.me"
            className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg inline-flex items-center ease-in-out gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            <span className="ml-1">Editor</span>
          </Link>
        </div>
        <div>
          <a
            target={"_blank"}
            href="https://github.com/nelsondev19/myreadme"
            className="bg-black text-white font-semibold px-4 py-2 rounded-lg inline-flex items-center ease-in-out gap-1"
            rel="noreferrer"
          >
            <svg
              className="h-6 w-6 fill-white"
              viewBox="0 0 256 250"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <title>GitHub</title>
              <g>
                <path d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z"></path>
              </g>
            </svg>
            <span className="ml-1">GitHub</span>
          </a>
        </div>
      </div>
      <div className="mt-20 m-3">
        <div className="drop-shadow-2xl flex justify-center items-center">
          <Image
            unoptimized={true}
            src="/screenshot.png"
            width={1000}
            alt="Screenshot with example of how to use the web editor called myreadme"
            height={550}
          />
        </div>
      </div>

      <div className="max-w-screen-xl m-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 h-[40vh]">
          <div className="logo-float grid place-content-center items-center">
            <svg
              viewBox="0 0 256 185"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              className="h-48 md:h-72"
            >
              <g>
                <path
                  d="M250.715745,70.4971666 C244.951102,66.4973277 231.740464,64.997388 221.412146,66.9973071 C220.211179,56.9977092 214.68673,48.2480609 205.078993,40.4983724 L199.554544,36.4985331 L195.711449,42.248302 C190.90758,49.7480006 188.505646,60.2475786 189.226226,70.2471769 C189.46642,73.7470364 190.667387,79.9967847 194.270289,85.496564 C190.90758,87.4964838 183.941971,89.996383 174.814621,89.996383 L1.15476998,89.996383 L0.674383104,91.9963028 C-1.00697093,101.9959 -1.00697093,133.244645 18.6888904,157.243681 C33.5808831,175.492947 55.6786788,184.742575 84.7420842,184.742575 C147.672763,184.742575 194.270289,154.493791 216.127891,99.7459909 C224.774854,99.9959813 243.269748,99.7459909 252.637292,80.996745 C252.877486,80.4967649 253.357872,79.4968046 255.039227,75.7469554 L256,73.7470364 L250.715745,70.4971666 L250.715745,70.4971666 Z M139.986573,0 L113.565295,0 L113.565295,24.9989952 L139.986573,24.9989952 L139.986573,0 L139.986573,0 Z M139.986573,29.9987943 L113.565295,29.9987943 L113.565295,54.9977896 L139.986573,54.9977896 L139.986573,29.9987943 L139.986573,29.9987943 Z M108.761427,29.9987943 L82.3401495,29.9987943 L82.3401495,54.9977896 L108.761427,54.9977896 L108.761427,29.9987943 L108.761427,29.9987943 Z M77.5362814,29.9987943 L51.1150037,29.9987943 L51.1150037,54.9977896 L77.5362814,54.9977896 L77.5362814,29.9987943 L77.5362814,29.9987943 Z M46.311135,59.9975886 L19.8898576,59.9975886 L19.8898576,84.9965839 L46.311135,84.9965839 L46.311135,59.9975886 L46.311135,59.9975886 Z M77.5362814,59.9975886 L51.1150037,59.9975886 L51.1150037,84.9965839 L77.5362814,84.9965839 L77.5362814,59.9975886 L77.5362814,59.9975886 Z M108.761427,59.9975886 L82.3401495,59.9975886 L82.3401495,84.9965839 L108.761427,84.9965839 L108.761427,59.9975886 L108.761427,59.9975886 Z M139.986573,59.9975886 L113.565295,59.9975886 L113.565295,84.9965839 L139.986573,84.9965839 L139.986573,59.9975886 L139.986573,59.9975886 Z M171.211719,59.9975886 L144.790441,59.9975886 L144.790441,84.9965839 L171.211719,84.9965839 L171.211719,59.9975886 L171.211719,59.9975886 Z"
                  fill="#2391E6"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
          </div>
          <div className="grid place-content-center items-center">
            <h2 className="text-2xl md:text-4xl font-extrabold text-center text-black">
              Docker Image
            </h2>
            <p className="text-base md:text-xl mt-10">
              Official docker image already available with the following
              command:
            </p>
            <pre className="bg-[#0a121b] text-white p-6 text-lg rounded-lg mt-10">
              $ docker run -p 7000:3000 nelsoncode/myreadme:latest
            </pre>
          </div>
        </div>
      </div>
      <p className="text-center mt-52 pb-5">
        MIT License |{" "}
        <Link className="text-indigo-700" href="https://github.com/nelsondev19">
          Nelson Hernández
        </Link>
      </p>
    </main>
  );
}
