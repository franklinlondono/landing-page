import { dataPortfolio } from "@/data";
import Title from "./shared/title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Portfolio = () => {
  return (
    <div className="p-4 max-w-5xl md:py-24 mx-auto" id="portfolio">
      <Title title="Portfolio" subtitle="Proyectos profesionales 💼" />

      <div className="grid md:grid-cols-2 gap-10 mt-8">
        {dataPortfolio.map((data) => (
          <div
            key={data.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden"
          >
            <Image
              src={data.image}
              alt={data.title}
              width={600}
              height={400}
              className="w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2">{data.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{data.role}</p>

              {/* Tecnologías */}
              <div className="flex flex-wrap gap-2 mb-4">
                {data.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* <div className="flex gap-4">
                {data.urlGithub && (
                  <Link
                    className={buttonVariants({ variant: "outline" })}
                    href={data.urlGithub}
                    target="_blank"
                  >
                    Github
                  </Link>
                )}
                {data.urlDemo && (
                  <Link
                    className={buttonVariants()}
                    href={data.urlDemo}
                    target="_blank"
                  >
                    Live demo
                  </Link>
                )}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
