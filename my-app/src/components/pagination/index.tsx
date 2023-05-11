import { useState } from "react";
import { Api } from "../../services/api";

const Pagination = ({ data, setFilterAdversiments, adversimentData }: any) => {
  const [current, setCurrent] = useState(1);
  const pages = data.totalPages;
  const nextPage = async () => {
    setCurrent(current + 1);
    const { data } = await Api.get(`/adversiments?page=${current}`);
    setFilterAdversiments(data.advertisements);
  };

  const previousPage = async () => {
    if (current > 1) {
      setCurrent(current - 1);
      const { data } = await Api.get(`/adversiments?page=${current}`);
      setFilterAdversiments(data.advertisements);
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
