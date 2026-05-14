import { CategoryData } from "../../../api/categorydata";
import Container from "../../ui/Container";
import Card from "./Card";

const Category = () => {
  return (
    <section className="mt-3.75 md:mt-25.25">
      <Container>
        <div className="grid gap-5 md:grid-cols-4 md:grid-rows-2 md:gap-7.5">
          {CategoryData?.map((item) => (
            <Card item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Category;
