import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

function PagginationCustom(props) {
 // const [page, setPage] = React.useState(2);
 // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    props.paginate(newPage)
  };

  const handleChangeRowsPerPage = (event) => {
   // setRowsPerPage(parseInt(event.target.value, 10));
    //setPage(0);
  };

  return (
    <TablePagination style={{width:'400px'}}
 
      component="div"
      count={props.count}
      page={props.page}
      onPageChange={handleChangePage}
      rowsPerPage={props.perPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
export default PagginationCustom