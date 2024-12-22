import { FaDiscord, FaMedium, FaXTwitter } from "react-icons/fa6";
import { SiGoogledocs } from "react-icons/si";

function Media() {
  return (
    <nav className="flex gap-3 text-2xl">
      <a href="https://x.com/PalladiumLabs" target="_blank">
        <FaXTwitter />
      </a>
      <a href="https://discord.com/invite/9MMEyJ4JDz" target="_blank">
        <FaDiscord />
      </a>
      <a href="https://medium.com/palladium-labs" target="_blank">
        <FaMedium />
      </a>
      <a href="https://docs.palladiumlabs.org/" target="_blank">
        <SiGoogledocs />
      </a>
    </nav>
  );
}

export default Media;
