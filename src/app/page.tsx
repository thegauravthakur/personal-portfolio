import Image from "next/image";
import profile from "./profile-cropped.jpg";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex justify-center items-center">
      <div className="m-5 flex items-start gap-10 flex-col sm:flex-row">
        <Image
          src={profile}
          alt="Gaurav Thakur"
          width={130}
          height={130}
          className="rounded-full shadow-lg"
        />
        <div>
          <p className="max-w-lg leading-7">
            Hey there, My name is Gaurav Thakur. I&apos;m a software engineer
            with a passion for web applications. I create beautiful, performant,
            and accessible web experiences for all.
          </p>
          <div className="flex space-x-5 mt-6 text-sm underline">
            <a
              href="https://blog.gauravthakur.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Blog
            </a>
            <a
              href="https://x.com/gauravcodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://github.com/thegauravthakur"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gauravcodes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
