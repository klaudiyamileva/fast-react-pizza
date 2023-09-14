import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="duration:300 w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm text-stone-500 transition-all placeholder:text-stone-400 focus:w-72 focus:bg-yellow-400 focus:text-white focus:placeholder-white focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-50 focus:ring-offset-2 sm:w-64"
      />
    </form>
  );
}

export default SearchOrder;
