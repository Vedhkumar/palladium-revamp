import blog1 from "../assets/blog-1.png";
import blog2 from "../assets/blog-2.png";
import blog3 from "../assets/blog-3.png";
import blog4 from "../assets/blog-4.webp";
import blog5 from "../assets/blog-5.webp";
import blog6 from "../assets/blog-6.webp";
import blog7 from "../assets/blog-7.jpeg";
import blog8 from "../assets/blog-8.png";
import blog9 from "../assets/blog-9.png";
type blogsType = {
  img: string;
  link: string;
};
const blogs: blogsType[] = [
  {
    img: blog1,
    link: "https://medium.com/palladium-labs/circuit-breaker-private-testnet-is-live-on-botanix-65780d6cc88d",
  },
  {
    img: blog2,
    link: "https://medium.com/palladium-labs/launching-circuit-breaker-genesis-nft-c5377d027194",
  },
  { img: blog3, link: "https://www.youtube.com/watch?v=9A0EMDkvLWQ" },
  { img: blog4, link: "https://www.youtube.com/watch?v=wCYUPY9iESM" },
  {
    img: blog5,
    link: "https://medium.com/palladium-labs/introducing-palladium-3596eb5c4778",
  },
  {
    img: blog6,
    link: "https://medium.com/palladium-labs/palladium-x-botanix-7d77ca1c0b5c",
  },
  { img: blog7, link: "https://www.youtube.com/watch?v=hlR42r_b6VI" },
  {
    img: blog8,
    link: "https://www.nasdaq.com/articles/palladium-and-botanix-labs-launches-bitcoin-native-stablecoin-on-bitcoins-first-evm-layer",
  },
  {
    img: blog9,
    link: "https://bitcoinmagazine.com/business/palladium-and-botanix-labs-launches-bitcoin-native-stablecoin-on-bitcoins-first-evm-layer-2",
  },
];
function Blogs() {
  return (
    <section className="border-b-[1px] border-light-grey pb-10">
      <div className="mx-5 my-10 sm:mx-10">
        <h4 className="font-bold text-2xl text-center uppercase my-10 sm:my-20">
          Blogs and media
        </h4>
        <div className="flex flex-col items-center">
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-7 sm:gap-10 ">
            {blogs.map((each, i) => (
              <BlogCard key={i} img={each.img} link={each.link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogCard({ img, link }: blogsType) {
  return (
    <div className="w-96    cursor-pointer  ">
      <a href={link} target="_blank">
        <img src={img} className="w-full "></img>
      </a>
    </div>
  );
}

export default Blogs;
