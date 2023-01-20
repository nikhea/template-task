import React, { useState } from "react";
const categoryList = ["Health", "E-commerce", "Education"];
const date = ["New", "Old"];
const header = ({ onFilterChange }: any) => {
  const [name, setName] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  const handleNameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(event.target.value);
    onFilterChange({ name, sort, category });
  };
  const handleNameClick = () => {
    onFilterChange({ name, sort, category });
  };
  const handleSortChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSort(event.target.value);
    onFilterChange({ name, sort, category });
  };

  const handleCategoryChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCategory(event.target.value);
    onFilterChange({ name, sort, category });
  };
  const handleFilterChange = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onFilterChange({ name, sort, category });
  };
  return (
    <div className="header-container">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          value={name}
          onChange={handleNameChange}
        />
        <div
          onClick={handleNameClick}
          className="input-group-append cursor-pointer"
        >
          <span className="input-group-text" id="basic-addon2">
            <i className="fa fa-search"></i>
          </span>
        </div>
      </div>
      <div className="select-container">
        <div className="select-group">
          <fieldset className="fieldset-item">
            <legend className="mx-5">category</legend>
            <select value={category} onChange={handleCategoryChange}>
              <option value="" disabled hidden>
                All
              </option>
              {categoryList.map((c, i) => (
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
            <select value={sort} onChange={handleSortChange}>
              <option value="" disabled hidden>
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

export default header;
