interface IProps {
  filter: any;
  setFilter: (filterValue: string) => void;
}

/**
 * Displays form for globally filtering the table data
 */
function GlobalFilter({ filter, setFilter }: IProps) {
  return (
    <div>
      <span style={{ fontWeight: "bold" }}>Search: </span>
      <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
    </div>
  );
}

export default GlobalFilter;
