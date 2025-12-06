import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Magnetic from "../componet/gsap/Magnetic";

function Socials() {
  return (
    <div className="flex item z-50 w-full flex-col gap-6 lg:gap-8">
      <Magnetic>
        <a
          href="https://www.linkedin.com/in/emmanuel-oppong-acheampong/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
          height={26}
          width={26}
            icon={faLinkedin}
            className="duration-100 hover:text-sec/70 text-sec lg:text-2xl text-xl transition-colors"
          />
        </a>
      </Magnetic>
      <Magnetic>
        <a
          href="https://wa.me/13182454129"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
          height={26}
          width={26}
            icon={faWhatsapp}
            className="duration-100 hover:text-sec/70 text-sec lg:text-2xl text-xl transition-colors"
          />
        </a>
      </Magnetic>
      {/* <Magnetic>
        <a href="mailto:aziz.khaldi100@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="duration-100 hover:text-thr text-sec lg:text-2xl text-xl transition-colors"
          />
        </a>
      </Magnetic> */}
      <Magnetic>
        <a
          href="https://github.com/oppong07" // Replace with your actual GitHub URL
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            height={26}
          width={26}
            className="duration-100 hover:text-sec/70 text-sec lg:text-2xl text-xl transition-colors"
          />
        </a>
      </Magnetic>
    </div>
  );
}

export default Socials;
