import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

interface CrewType {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

const fetchData = async (): Promise<CrewType[]> => {
  const { data } = await axios.get("http://localhost:3000/crew");
  return data;
};

const Crew = () => {
  const { data, isLoading, error } = useQuery<CrewType[], Error>({
    queryKey: ["crew"],
    queryFn: fetchData,
  });

  const [currentMember, setCurrentMember] = useState(0);

  const handlePagination = (member: string) => {
    if (member === "one") {
      setCurrentMember(0);
    } else if (member === "two") {
      setCurrentMember(1);
    } else if (member === "three") {
      setCurrentMember(2);
    } else if (member === "four") {
      setCurrentMember(3);
    }
  };

  const visibleMember = () => {
    if (currentMember === 0) return "first:[&>svg>circle]:opacity-100";
    if (currentMember === 1)
      return "[&:nth-child(2)]:[&>svg>circle]:opacity-100";
    if (currentMember === 2)
      return "[&:nth-child(3)]:[&>svg>circle]:opacity-100";
    if (currentMember === 3) return "last:[&>svg>circle]:opacity-100";
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-3xl mx-auto">Error: {error.message}</p>;

  return (
    <section>
      <h2 className="font-barlow text-2xl uppercase font-light space-x-2">
        <span className="opacity-25 font-bold">02</span>
        <span className="tracking-[4px]">Meet your crew</span>
      </h2>

      {data && (
        <section className="flex flex-col items-center justify-between lg:flex-row gap-x-8 gap-y-16">
          <div className="flex items-center justify-center py-9 relative lg:h-[45.90rem]">
            <article className="space-y-5 text-center sm:max-w-[32rem] lg:text-left">
              <p className="uppercase text-white/50 font-light text-xl sm:text-2xl lg:text-3xl font-bellefair ">
                {data[currentMember].role}
              </p>
              <h3 className="sm:text-5xl lg:text-[3.25rem] text-4xl font-bellefair uppercase">
                {data[currentMember].name}
              </h3>
              <p className="text-lg font-light text-font-blue hover:text-white transition-colors duration-200 leading-[180%] lg:max-w-[64ch] pb-4">
                {data[currentMember].bio}
              </p>
            </article>

            <nav className="absolute lg:left-0 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:bottom-15 bottom-2 flex gap-4">
              {["one", "two", "three", "four"].map((i) => {
                return (
                  <button
                    key={i}
                    onClick={() => handlePagination(i)}
                    className={`cursor-pointer ${visibleMember()}`}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.174363"
                        cx="7.5"
                        cy="7.5"
                        r="7.5"
                        fill="white"
                      />
                    </svg>
                  </button>
                );
              })}
            </nav>
          </div>
          <div className="lg:h-[45.90rem] sm:h-[28.95rem] max-[40rem]:h-[21.25rem] flex flex-col items-center justify-center">
            <img
              src={data[currentMember].images.webp}
              alt="crew member"
              className="max-h-[110%]"
            />
          </div>
        </section>
      )}
    </section>
  );
};

export default Crew;
