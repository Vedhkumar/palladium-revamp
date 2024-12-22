import Media from "./Media";

function Footer() {
  return (
    <footer className="bg-black px-5 py-10 text-text-white flex flex-col justify-around items-start gap-10  md:flex-row-reverse md:text-sm">
      <Media />
      <div className="flex gap-5 opacity-80 font-light ">
        <a href="https://docs.palladiumlabs.org/">Litepaper</a>
        <span>|</span>
        <a href="https://docs.palladiumlabs.org/information/brand-kit">
          Brand Kit
        </a>
        <span>|</span>
        <a href="https://palladiumlabs.org/privacy-policy.pdf">
          Privacy Policy
        </a>
      </div>{" "}
      <p className="opacity-80 font-light">
        &copy; Palladium Protocol Copyright 2024
      </p>
    </footer>
  );
}

export default Footer;
