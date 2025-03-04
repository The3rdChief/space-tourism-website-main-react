import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-between gap-12 text-font-blue text-center lg:text-left lg:pt-30 lg:pb-15 sm:pt-15">
        <div className="space-y-3">
          <header className="space-y-2">
            <p className="text-2xl uppercase tracking-[4px] font-extralight max-[30rem]:text-xl max-[23rem]:text-lg">
              So you want to travel to
            </p>
            <h1 className="text-white uppercase font-bellefair text-9xl max-[30rem]:text-8xl max-[23rem]:text-7xl">
              Space
            </h1>
          </header>
          <p className="max-w-[53ch] text-lg font-light">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>

        <Link
          to="/destination"
          className="grid place-items-center bg-white size-56 rounded-full text-3xl font-bellefair uppercase text-gray-800 cursor-pointer relative after:absolute after:content-[''] after:inset-0 after:bg-white/20 after:rounded-full after:-z-[1] after:transition-all hover:after:scale-125 hover:after:animate-pulse"
        >
          Explore
        </Link>
      </section>
    </>
  );
};

export default Home;
