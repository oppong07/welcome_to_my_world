import React from "react";
import FlipLink from "./FlipLink";

function SocialsLine() {
  // Array of social links
  const socials = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/emmanuel-oppong-acheampong/",
    },
    { name: "WhatsApp", href: "https://wa.me/13182454129" },
    { name: "Email", href: "mailto:emmanuelopponga07@gmail.com" },
    { name: "Github", href: "https://github.com/oppong07" },
  ];

  return (
    <div className=" item flex flex-col text-white gap-3">
      <h1 className="opacity-50 text-xs">SOCIALS</h1>
      <div className="flex gap-3">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FlipLink>{social.name}</FlipLink>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialsLine;
