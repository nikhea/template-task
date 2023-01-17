import React from "react";

const header = () => {
  const category = ["Health", "E-commerce", "Education"];
  const date = ["New", "Old"];
  return (
    <div className="header-container">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search" />
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">
            <i className="fa fa-search"></i>
          </span>
        </div>
      </div>
      <div className="select-container">
        <div className="select-group">
          <fieldset className="fieldset-item">
            <legend className="mx-5">category</legend>
            <select>
              <option value="" selected disabled hidden>
                All
              </option>
              {category.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </fieldset>
        </div>
        <div className="select-group">
          <fieldset className="fieldset-item">
            <legend className="mx-5">date</legend>
            <select>
              <option value="" selected disabled hidden>
                Default
              </option>
              {date.map((c, i) => (
                <option key={i} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

{
  /* <fieldset className="border border">
        <input id="category" type="text" placeholder="fjjj" />
        <legend>
          <label htmlFor="category" className="">
            Category
          </label>
        </legend>
      </fieldset> */
}
export default header;
