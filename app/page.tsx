import Link from "next/link";

const content = [
  {
    link: "/tabs",
    display: "Animated Tabs",
  },
  {
    link: "/reordering",
    display: "Reordering Layout Animation",
  },
  {
    link: "/animate-presence",
    display: "Enter and Exit Animation",
  },
  {
    link: "/trello-checklist",
    display: "Event Based Animation",
  },
  {
    link: "/dock",
    display: "MacOS dock Animation",
  },
];

export default function Home() {
  return (
    <div className="flex w-[100vw] py-20 px-10 justify-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-xl font-semibold">Framer Insipirations</h1>
        <div className="flex flex-col gap-5 text-lg  pt-5">
          {content.map((item, index) => {
            return (
              <div key={index} className="hover:italic hover:text-white/50">
                <span>{index + 1}. </span>
                <Link href={item.link}>
                  <span>{item.display}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
