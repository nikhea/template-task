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
      </button>
    </div>
  );
};

export default pagination;
