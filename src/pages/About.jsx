import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Container from "../components/ui/Container";
import { Range } from "react-range";
const About = () => {
  const [values, setValues] = React.useState([50,100]);
  return (
    <main>
      <Container>
      <Breadcrumb />


<div className=" w-[300px] ">
<Range
      label="Select your value"
      step={0.1}
      min={0}
      max={100}
      values={values}
      onChange={(values) => setValues(values)}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          style={{
            ...props.style,
            height: "6px",
            width: "100%",
            backgroundColor: "black",
            borderRadius:"20px"
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          {...props}
          key={props.key}
          style={{
            ...props.style,
            height: "20px",
            width: "20px",
            borderRadius:"50%",
            border:"1px solid black",
            backgroundColor: "white",
          }}
        />
      )}
    />

</div>

      </Container>
    </main>
  );
};

export default About;
