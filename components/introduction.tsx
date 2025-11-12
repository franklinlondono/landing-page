"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Paperclip } from "lucide-react";

import { TypeAnimation } from "react-type-animation";

import { buttonVariants } from "./ui/button";

import Container from "./shared/container";

const Introduction = () => {
    return (
        <Container>
            <div className="text-center" id="home">
                <h3 className="text-xl mb-3 text-gray-300">Hola soy</h3>

                <h1 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white">
                    <TypeAnimation
                        sequence={[
                            "Franklin Londoño ", // texto que se escribe
                            2000, // pausa 2s
                            "", // borra
                            500, // pausa medio segundo
                            "Desarrollador Web Full Stack", // escribe otro
                            2000, // pausa
                            "", // borra
                        ]}
                        wrapper="span"
                        speed={60}
                        repeat={Infinity}
                    />
                </h1>

                {/* <h2 className="text-2xl text-gray-400">
                    Desarrollador Web Full Stack
                </h2> */}

                <div className="flex items-center">
                    <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
                        <Link className={buttonVariants()} href="#contact">
                            <Mail className="mr-2" /> Contacta conmigo
                        </Link>

                        <Link
                            className={buttonVariants({ variant: "secondary" })}
                            href="/cv-tarre.pdf"
                            target="_blank"
                        >
                            <Paperclip className="mr-2" /> Descargar CV
                        </Link>
                    </div>
                </div>

                <div className="mt-10 flex justify-center">
                    <Image
                        src="/profile-01.png"
                        alt="Profile pic"
                        width={500}
                        height={500}
                        className="rounded-full"
                    />
                </div>
            </div>
        </Container>
    );
};

export default Introduction;
