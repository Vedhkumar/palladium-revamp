import Button from "./Button";
import bitcoinImage from "../assets/bitcoin.png";

function Main() {
  return (
    <main className="p-5 mt-20 mb-10 w-full">
      <div className="bg-green-theme rounded-3xl  p-10 sm:flex sm:flex-row-reverse sm:items-center sm:justify-between flex flex-col items-center sm:mx-10">
        <section className="flex items-center h-52 w-52 ">
          <img
            src={bitcoinImage}
            className="h-full w-full object-contain animate-oscillate"
          ></img>
        </section>

        <section className="flex-col sm:w-2/3">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 my-5 text-balance">
            A REALIABLE STABLECOIN BUILT ON BITCOIN
          </h1>
          <h2 className="my-6 text-text-white uppercase">
            $PUSD A censorship-resistant USD-pegged cryptocurrency that is
            backed by security & robustness of Bitcoin.
          </h2>
          <Button link="https://circuit.palladiumlabs.org/" fill={true}>
            ENTER APP
          </Button>
          <Button fill={false} link="https://docs.palladiumlabs.org/">
            READ THE DOCS
          </Button>
        </section>
      </div>
    </main>
  );
}

export default Main;
