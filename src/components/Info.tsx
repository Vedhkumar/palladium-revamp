import InvisibleCard from "./InvisibleCard";

function Info() {
  return (
    <section className="border-b-[1px] border-light-grey pb-10">
      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 mx-5 mb-10 sm:mx-10 ">
        <InvisibleCard
          heading="SECURED BY BITCOIN"
          para="Palladium is operated upon Botanix - a truly decentralized smart contract platform implementing Spiderchain - a Bitcoin Layer-2 with trust-less bridging."
        />
        <InvisibleCard
          heading="GOVERNANCE-FREE LIKE BITCOIN"
          para="An algorithmic monetary policy that makes Palladium fully autonomous. No governance, DAO, or admin keys that can censor or manipulate the protocol."
        />
        <InvisibleCard
          heading="Over Collateralized With BITCOIN"
          para="$PUSD can only be minted using the most robust cryptocurrency - the $BTC - and it always remains over-collateralized to guarantee hard price floor of $1."
        />
      </div>
    </section>
  );
}

export default Info;
