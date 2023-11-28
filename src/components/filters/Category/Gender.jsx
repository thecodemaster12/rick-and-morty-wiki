import React from "react";
import FilterBtn from "../FilterBtn";

const Gender = ({setGender, setPageNumber}) => {
    let gender = ["Female", "Male", "Genderless", "Unknown"]
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Gender
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            {gender.map((item, index)=> <FilterBtn task={setGender} setPageNumber={setPageNumber} key={index} name="gender" item={item} index={index} /> )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gender;
