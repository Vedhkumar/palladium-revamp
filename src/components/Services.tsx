import ServiceCard from "./ServiceCard";

type ServicesType = {
  title: string;
  para: string;
};

const services: ServicesType[] = [
  {
    title: "Currency for Network States",
    para: "As digital communities expand into physical spaces, they require RWAs and pay vendors. PUSD, minted with BTC, guarantees uncensored funds, making it an optimal stablecoin choice.",
  },
  {
    title: "Preserving Wealth",
    para: "In the midst of BTC and BRC-20 asset volatility, PUSD emerges as a sanctuary. It empowers investors to secure profits in stablecoin, safeguarding their wealth amidst market turbulence.",
  },
  {
    title: "Margin Trading",
    para: "Maximize your wealth through margin trading while maintaining your Bitcoin portfolio. Access liquidity against your BTC and utilize PUSD across wide range of perps on the BitcoinFi ecosystem.",
  },
  {
    title: "Yield Farming",
    para: "BitcoinFi introduces a groundbreaking opportunity for BTC holders to farm diverse projects within the ecosystem. With PUSD, you can participate in yield farming without risking your BTC holdings.",
  },
  {
    title: "Crowd Funding",
    para: "Organize unstoppable crowdfunding campaigns with PUSD. Provide transparency through a self-audit trail of funds while allowing investors to participate in the campaign anonymously.",
  },
];

function Services() {
  return (
    <section className="border-b-[1px] border-light-grey pb-10">
      <div className="px-5 py-5 my-10 sm:mx-10">
        <h3 className="text-white font-bold text-3xl text-center mb-10 sm:mb-20">
          Unrestricted <span className="text-primary">Financial Services</span>,
          available to everyone.
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              para={service.para}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
