import { FC } from "react";

interface paginationProps {
  currentpage: number;
  totalpages: number;
  handleNext: () => void;
  handlePrevious: () => void;
}

const pagination: FC<paginationProps> = ({
  currentpage,
  totalpages,
  handleNext,
  handlePrevious,
}) => {
  return (
    <div className="pagination">
      <button
        onClick={handlePrevious}
        disabled={currentpage === 1}
        style={{ cursor: currentpage === 1 ? "not-allowed" : "pointer" }}
      >
        <i className="mx-5 text-2xl fa fa-angle-left" aria-hidden="true"></i>{" "}
        previous
      </button>
      <h2>
        <span>{currentpage}</span>
        of {totalpages}
      </h2>
      <button
        onClick={handleNext}
        disabled={currentpage === totalpages || currentpage >= totalpages}
        style={{
          cursor: currentpage === totalpages ? "not-allowed" : "pointer",
        }}
      >
        next
        <i className="mx-5 text-2xl fa fa-angle-right" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default pagination;
