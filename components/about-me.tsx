"use client";
import { Phone } from "lucide-react";

import { dataAboutMe, dataSlider } from "@/data";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Title from "./shared/title";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";
import Image from "next/image";

const AboutMe = () => {

    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false }) // cambia delay a tu gusto (ms)
    );
    return (
        <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
            <Title title="Sobre mi" subtitle="Conóceme" />

            <div className="grid md:grid-cols-2">
                <div className="py-12 md:py-0 flex items-center justify-center">
                    {/* CAROUSEL */}
                    <Carousel
                        plugins={[plugin.current]}
                        opts={{
                            align: "start"
                        }}
                        orientation="vertical"
                        className="w-full max-w-xs h-fit"
                    >
                        <CarouselContent className="-mt-1 h-[200px] md:h-[200px] lg:h-[400px]">
                            {dataSlider.map((data) => (
                                <CarouselItem key={data.id}>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={data.url}
                                            alt="Image"
                                            width={250} height={400}
                                            className="w-full h-auto rounded-lg" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div>
                    <div className="grid md:grid-cols-3 mt-7 gap-4"
                    >
                        {dataAboutMe.map((data) => (
                            <div key={data.id} className="border border-white-10 
                        rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800">
                                {data.icon}
                                <p className="my-2">{data.name}</p>
                                <p className="text-gray-400">{data.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="my-8"> Soy un desarrollador full stack activo y creativo, 
                        con un elevado sentido de responsabilidad y un fuerte compromiso hacia el trabajo en equipo. 
                        Poseo una buena actitud y habilidades excepcionales en relaciones interpersonales, 
                        lo que me permite adaptarme a diferentes esquemas laborales de manera eficiente. 
                        Tengo una gran facilidad para aprender y destrezas sociales que facilitan la colaboración. 
                        Mis principios se basan en el respeto, la honestidad y el cumplimiento, lo que respalda mis deseos de superación. 
                    </p>

                    <Button>
                        <Phone size={20} className="mr-2" />Hablamos
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;