import { dataCourses } from "@/data";
import Title from "./shared/title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Courses = () => {
  return (
    <div className="p-4 md:px-12 md:py-44 max-w-5xl mx-auto">
      <Title
        title="Cursos y Diplomados"
        subtitle="Formación académica y profesional en desarrollo"
      />

      <Carousel className="mx-10 mt-6">
        <CarouselContent className="gap-8">
          {dataCourses.map((course) => (
            <CarouselItem
              key={course.id}
              className="md:basis-1/3 p-4 text-center flex flex-col items-center border-slate-400 border-2 rounded-lg"
            >
              <Avatar>
                <AvatarImage src={course.imageUrl} alt={course.name} />
                <AvatarFallback>FD</AvatarFallback>
              </Avatar>
              <div className="mt-4">
                <p className="text-2xl font-semibold">{course.name}</p>
                <p className="text-sm text-gray-500">{course.institution}</p>
                <p className="mt-2 text-base">{course.description}</p>
                <p
                  className={`mt-3 font-medium ${
                    course.status === "En curso"
                      ? "text-blue-500"
                      : "text-green-500"
                  }`}
                >
                  {course.status}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Courses;
