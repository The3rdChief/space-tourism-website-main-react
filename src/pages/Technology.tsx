import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

interface TechnologiesType {
  name: string;
  images: {
    potrait: string;
    landscape: string;
  };
  description: string;
}

const fetchData = async (): Promise<TechnologiesType[]> => {
  const { data } = await axios.get("http://localhost:3000/technology");
  return data;
};

const Technology = () => {
  const { data, isLoading, error } = useQuery<TechnologiesType[], Error>({
    queryKey: ["technologies"],
    queryFn: fetchData,
  });

  const [currentTech, setCurrentTech] = useState(0);

  const handleSwitch = (tech: number) => {
    if (tech === 1) {
      setCurrentTech(0);
    } else if (tech === 2) {
      setCurrentTech(1);
    } else if (tech === 3) {
      setCurrentTech(2);
    }
  };

  const activeTech = () => {
    if (currentTech === 0) return "first:bg-white first:text-space-blue";
    if (currentTech === 1)
      return "[&:nth-child(2)]:bg-white [&:nth-child(2)]:text-space-blue";
    if (currentTech === 2) return "last:bg-white last:text-space-blue";
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <h2 className="font-barlow text-2xl uppercase font-light space-x-2">
        <span className="opacity-25 font-bold">03</span>
        <span className="tracking-[4px]">Space launch 101</span>
      </h2>
      {data && (
        <section className="flex flex-col gap-12 lg:grid lg:grid-cols-2">
          <div className="lg:order-1 lg:h-[45.90rem] sm:h-[28.95rem] py-7">
            <picture>
              <source
                media="(min-width: 64rem)"
                srcSet={data[currentTech].images.potrait}
              />
              <img
                src={data[currentTech].images.landscape}
                alt="tech display"
                className="min-h-full object-cover"
              />
            </picture>
          </div>

          <article className="flex flex-col justify-center items-center text-center lg:text-left lg:flex-row gap-8">
            <nav className="flex lg:flex-col gap-y-3 gap-x-8">
              {[1, 2, 3].map((t) => {
                return (
                  <button
                    key={t}
                    onClick={() => handleSwitch(t)}
                    className={`lg:size-20 size-16 rounded-full text-3xl border border-white/15 grid place-items-center cursor-pointer ${activeTech()}`}
                  >
                    {t}
                  </button>
                );
              })}
            </nav>

            <div className="space-y-4">
              <p className="uppercase text-white/50 font-light text-xl lg:text-2xl font-bellefair ">
                The terminology...
              </p>
              <h3 className="sm:text-5xl text-4xl font-bellefair uppercase">
                {data[currentTech].name}
              </h3>
              <p className="text-lg font-light text-font-blue hover:text-white transition-colors duration-200 leading-[180%] lg:max-w-[64ch] pb-4">
                {data[currentTech].description}
              </p>
            </div>
          </article>
        </section>
      )}
    </>
  );
};

export default Technology;
