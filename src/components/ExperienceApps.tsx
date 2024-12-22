import metamask from "../assets/metamask.svg";
import rover from "../assets/rover.svg";
import bitzy from "../assets/bitzy.svg";
import bitperp from "../assets/bitperp.svg";
import tizz from "../assets/tizz.svg";
import spindle from "../assets/spindle.svg";
import masterProtocol from "../assets/master protocol.svg";
import rivera from "../assets/rivera.svg";
import robinos from "../assets/robinos.svg";
import fractit from "../assets/fractit.svg";
import dualmint from "../assets/dualmint.svg";
import swing from "../assets/swing.svg";
type ExperienceAppsType = {
  icon: string;
  type: string;
  name: string;
  description: string;
};

const experienceApp: ExperienceAppsType[] = [
  {
    icon: metamask,
    name: "metamask",
    type: "WALLET",
    description:
      "Send, receive, or use PUSD with the most popular Web3 wallet.",
  },
  {
    icon: rover,
    name: "rover",
    type: "LST",
    description: "Mint PUSD with liquid staking token RovBTC",
  },
  {
    icon: bitzy,
    type: "DEX",
    name: "bitzy",
    description: "Buy or sell PUSD with your choice of crypto assets.",
  },
  {
    icon: bitperp,
    type: "PERP",
    name: "bitperp",
    description:
      "Leverage trading on Runes, Ordinals, and Atomicals using PUSD",
  },
  {
    icon: tizz,
    type: "PERP",
    name: "tizz",
    description: "Leverage trading on a range of crypto assets.",
  },
  {
    icon: spindle,
    type: "Lending",
    name: "spindle",
    description: "Money market to lend and borrow PUSD",
  },
  {
    icon: masterProtocol,
    type: "Yield",
    name: "master protocol",
    description: "One-stop yield platform for PUSD",
  },
  {
    icon: rivera,
    type: "YIELD",
    name: "rivera",
    description: "ALM that converts positions to PUSD yield",
  },
  {
    icon: robinos,
    type: "Speculation",
    name: "robinos",
    description: "Web3 sports prediction platform using PUSD",
  },
  {
    icon: fractit,
    type: "RWA",
    name: "fractit",
    description: "Buy & trade fractional real estate with PUSD.",
  },
  {
    icon: dualmint,
    type: "RWA",
    name: "dualmint",
    description: "Trade high value tokenised assets with PUSD",
  },
  {
    icon: swing,
    type: "Bridge",
    name: "swing",
    description: "Swap, stake, and deposit PUSD across blockchains",
  },
];

function ExperienceApps() {
  return (
    <section className="border-b-[1px] border-light-grey pb-10">
      <div className="px-5 my-10 sm:mx-10">
        <h4 className="font-bold text-2xl  text-center mb-10 sm:my-20">
          A NETWORK OF APPS TO ENHANCE YOUR{" "}
          <span className="text-primary">$PUSD EXPERIENCE</span>
        </h4>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 my-5 md:gap-9 ">
          {experienceApp.map((x, i) => (
            <ExperienceAppCard
              key={i}
              description={x.description}
              icon={x.icon}
              name={x.name}
              type={x.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type ExperienceAppCardProps = {
  icon: string;
  type: string;
  name: string;
  description: string;
};

function ExperienceAppCard({
  description,
  icon,
  name,
  type,
}: ExperienceAppCardProps) {
  return (
    <div className="bg-[#0F0F0F] rounded-xl p-5 relative">
      <div className="px-3 rounded-sm bg-primary text-text-white py-1  absolute -top-3 -right-3 text-xs uppercase">
        {type}
      </div>
      <img src={icon} alt={name} className="mb-3"></img>
      <p className="text-text-white font-light">{description}</p>
    </div>
  );
}

export default ExperienceApps;
