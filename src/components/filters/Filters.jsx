import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filters = ({setStatus, setGender, setSpecies, setPageNumber}) => {
  return (
    <>
      <div className="col-lg-3 col-12 mb-5">
        <div className="text-center fw-bold fs-4 mb-2">Filter</div>
        <div className="text-center text-primary c text-decoration-underline mb-4">
          Clear All
        </div>
        <div className="accordion" id="accordionExample">
          <Gender setPageNumber={setPageNumber} setGender={setGender} />
          <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
          <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        </div>
      </div>

    </>
  );
};

export default Filters;
