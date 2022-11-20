import "./Table.css"

const Table = ({ headers, rows }) => <table className="table">
  <tbody>
  <tr className="heading">
    {headers.length ?
      headers.map(header =>
        <th key={header}>{header}</th>
      ) : null}
  </tr>

  {rows.length ?
    rows.map((row, index) =>
      <tr key={index} data-testid="table-row">
        {row.map((cell, index) => <td key={index}>{cell}</td>)}
      </tr>
    ) : null}
  </tbody>
</table>


export default Table;