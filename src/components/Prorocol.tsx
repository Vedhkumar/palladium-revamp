import bitcoinProtocol from "../assets/bitcoin-protocol.webp";
import groupCoins from "../assets/group-coins-protocol.webp";
import stackCoins from "../assets/stack-of-coins-protocol.webp";
import tools from "../assets/tools-protocol.webp";
type ProtocolType = {
  img: string;
  protocolOn?: string;
  link: string;
  linkText: string;
  text: string;
};

const protocal: ProtocolType[] = [
  {
    img: bitcoinProtocol,
    protocolOn: "live on testnet",
    link: "https://circuit.palladiumlabs.org/",
    linkText: "MINT PUSD",
    text: "Get Interest-Free Liquidity on Bitcoin",
  },
  {
    img: groupCoins,
    protocolOn: "live on testnet",
    link: "https://circuit.palladiumlabs.org/stake/",
    linkText: "STAKE PUSD",
    text: "Earn Rewards with Stability Pool",
  },
  {
    img: tools,
    link: "https://docs.palladiumlabs.org/developers/get-started",
    linkText: "GET STARTED",
    text: "Build Uncensorable Financial Apps",
  },
  {
    img: stackCoins,
    link: "https://docs.palladiumlabs.org/user-guide-and-faqs/palladium-token",
    linkText: "LEARN MORE",
    text: "Palladium Token for Value Accrual",
  },
];

function Prorocol() {
  return (
    <section className="border-b-[1px] border-light-grey pb-10">
      <div className="my-10 sm:mx-10">
        <h4 className=" font-bold text-2xl text-center my-10 sm:my-20">
          GET STARTED WITH{" "}
          <span className="text-primary">PALLADIUM PROTOCOL</span>
        </h4>
        <div className="mx-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {protocal.map((each) => (
              <ProtocolCard
                link={each.link}
                linkText={each.linkText}
                text={each.text}
                protocolOn={each.protocolOn}
                img={each.img}
                key={each.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProtocolCard({ link, linkText, text, protocolOn, img }: ProtocolType) {
  return (
    <div className="px-5 py-7 rounded-xl bg-[#0F0F0F]  flex flex-col items-center gap-3">
      <img src={img} className="h-36 w-36"></img>
      <p className="text-center">{text}</p>
      {protocolOn && (
        <p className="text-sm font-thin uppercase">{protocolOn}</p>
      )}
      <button className="bg-primary rounded-full px-4 py-1">
        <a href={link}>{linkText}</a>
      </button>
    </div>
  );
}

export default Prorocol;
