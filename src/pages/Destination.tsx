import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface DestinationsType {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

const destinationsData: DestinationsType[] = [
  {
    name: "Moon",
    images: {
      png: "../assets/destination/image-moon.png",
      webp: "../assets/destination/image-moon.webp",
    },
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: "../src/assets/destination/image-mars.png",
      webp: "../src/assets/destination/image-mars.webp",
    },
    description:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. Hike to the summit, but be careful not to slip on the steep slopes.",
    distance: "225 mil. km",
    travel: "6 months",
  },
  {
    name: "Europa",
    images: {
      png: "../src/assets/destination/image-europa.png",
      webp: "../src/assets/destination/image-europa.webp",
    },
    description:
      "The smallest of the gas giants, but certainly not the least, Europa offers a surface of ice and rock. It's no easy trip with temperatures ranging from -160 to -110 degrees celsius. But it's definitly worth it.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: "../src/assets/destination/image-titan.png",
      webp: "../src/assets/destination/image-titan.webp",
    },
    description:
      "The only moon with an atmosphere in our solar system. Take your deep breaths, because the air is thick with nitrogen and methane. Put on your thermal underwear, too - it gets to -179 degrees celsius here.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

const fetchData = async (): Promise<DestinationsType[]> => {
  return Promise.resolve(destinationsData);
};

const Destination = () => {
  const { data, isLoading, error } = useQuery<DestinationsType[], Error>({
    queryKey: ["destination"],
    queryFn: fetchData,
  });

  const [tab, setTab] = useState(0);

  const switchTabs = (name: string) => {
    if (name === "Moon") {
      setTab(0);
    } else if (name === "Mars") {
      setTab(1);
    } else if (name === "Europa") {
      setTab(2);
    } else if (name === "Titan") {
      setTab(3);
    }
  };

  const activeTab = () => {
    if (tab === 0)
      return "first:text-white first:after:bg-white hover:first:after:bg-white";
    if (tab === 1)
      return "[&:nth-child(2)]:text-white [&:nth-child(2)]:after:bg-white";
    if (tab === 2)
      return "[&:nth-child(3)]:text-white [&:nth-child(3)]:after:bg-white";
    if (tab === 3) return "last:text-white last:after:bg-white";
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-3xl mx-auto">Error: {error.message}</p>;

  return (
    <section className="space-y-6">
      <h2 className="font-barlow text-2xl uppercase font-light space-x-2">
        <span className="opacity-25 font-bold">01</span>
        <span className="tracking-[4px]">Pick your destination</span>
      </h2>

      {data && (
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-x-12 gap-y-8 justify-between">
          <div className="lg:h-[45.90rem] sm:h-[23.875rem] h-[12.75rem] flex justify-center items-center">
            <img
              src={data[tab].images.webp}
              alt=""
              className="size-[9.4rem] sm:size-[18.8rem] lg:size-[29.875rem]"
            />
          </div>

          <section className="lg:h-[45.90rem] flex flex-col items-center justify-center text-center gap-6 lg:items-start lg:text-left">
            <div className="text-font-blue flex gap-8">
              {data.map((singleTab) => {
                const { name } = singleTab;
                return (
                  <button
                    key={name}
                    onClick={() => switchTabs(name)}
                    className={`text-lg font-barlow uppercase tracking-[2px] cursor-pointer relative after:absolute after:content-[''] after:left-0 after:right-0 after:bottom-0 after:h-0.5 hover:after:bg-white/20 after:transition-colors after:duration-200 ${activeTab()}`}
                  >
                    {name}
                  </button>
                );
              })}
            </div>

            <article>
              <div className="border-b border-white/20 pb-8">
                <h3 className="sm:text-8xl text-7xl font-bellefair uppercase">
                  {data[tab].name}
                </h3>
                <p className="text-lg font-light text-font-blue hover:text-white transition-colors duration-200 leading-[180%] lg:max-w-[44ch]">
                  {data[tab].description}
                </p>
              </div>

              <div className="grid grid-cols-2 max-[30rem]:grid-cols-1 max-[40rem]:justify-items-center gap-2 uppercase pt-8">
                <div>
                  <h4 className="uppercase text-font-blue">Avg. distance</h4>
                  <p className="font-bellefair text-2xl">
                    {data[tab].distance}
                  </p>
                </div>
                <div>
                  <h4 className=" text-font-blue">Est. travel time</h4>
                  <p className="font-bellefair text-2xl">{data[tab].travel}</p>
                </div>
              </div>
            </article>
          </section>
        </div>
      )}
    </section>
  );
};

export default Destination;
