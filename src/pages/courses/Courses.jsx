import { Container } from "@/components/common/Container";
import CourseCard from "@/components/courses/CourseCard";
import { milestone } from "@/constant/milestone";
import tree from "@/assets/images/trees.svg";
const Courses = () => {
  return (
    <Container className="relative h-full">
      <img src={tree} alt="tree" className="fixed bottom-[-30px] left-0" />
      <div className="mb-10">
        <h4 className="h-full my-2 mb-5 text-3xl text-center text-white font-primary mt-7">
          My Courses
        </h4>
        <div className="grid grid-cols-2 gap-10 ">
          {milestone.map((item, index) => {
            return <CourseCard key={index} item={item} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default Courses;
