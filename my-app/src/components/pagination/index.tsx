import { useContext, useState } from "react";
import { Api } from "../../services/api";
import { AdversimentContext } from "../../contexts/adversimentContext";

const Pagination = ({ data, setFilterAdversiments, adversimentData }: any) => {
  const { current, setCurrent } = useContext(AdversimentContext);

  const pages = data.totalPages;
  const nextPage = async () => {
    if (current < pages) {
      setCurrent(current + 1);
    }
  };

  const previousPage = async () => {
    if (current > 1) {
      setCurrent(current - 1);
    } else {
      setFilterAdversiments(adversimentData);
    }
  };

  return (
    <div className="pagination">
      <button onClick={previousPage} className={current === 1 ? "ocultTag" : ""}>
        {"< Anterior"}
      </button>
      <h4>
        <strong>{current}</strong> de {pages}
      </h4>
      <button onClick={nextPage}>{"Seguinte >"}</button>
    </div>
  );
};

export default Pagination;
