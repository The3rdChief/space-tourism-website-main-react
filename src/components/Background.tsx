import { useLocation } from "react-router";

const Background = () => {
  const page = useLocation();

  const bg = () => {
    if (page.pathname === "/") {
      return "lg:bg-[url('../src/assets/home/background-home-desktop.jpg')] sm:bg-[url('../src/assets/home/background-home-tablet.jpg')] bg-[url('../src/assets/home/background-home-mobile.jpg')]";
    } else if (page.pathname === "/destination") {
      return "lg:bg-[url('../src/assets/destination/background-destination-desktop.jpg')] sm:bg-[url('../src/assets/destination/background-destination-tablet.jpg')] bg-[url('../src/assets/destination/background-destination-mobile.jpg')]";
    } else if (page.pathname === "/crew") {
      return "lg:bg-[url('../src/assets/crew/background-crew-desktop.jpg')] sm:bg-[url('../src/assets/crew/background-crew-tablet.jpg')] bg-[url('../src/assets/crew/background-crew-mobile.jpg')]";
    } else if (page.pathname === "/technology") {
      return "lg:bg-[url('../src/assets/technology/background-technology-desktop.jpg')] sm:bg-[url('../src/assets/technology/background-technology-tablet.jpg')] bg-[url('../src/assets/technology/background-technology-mobile.jpg')]";
    }
  };

  return (
    <div
      className={`fixed inset-0 bottom-0 -z-1 min-h-full bg-cover bg-no-repeat ${bg()}`}
    />
  );
};

export default Background;
