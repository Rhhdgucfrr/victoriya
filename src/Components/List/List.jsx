import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import ListItems from './listItem';
import { UsersContext } from '../../context/UsersContext';
import MyCell from './Cell';
import State from './State';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import LongMenu from '../Menu/Menu';
import Plug from '../../UI/Plug';

function CollapsibleTable({ keys, object, objects }) {

  const users = React.useContext(UsersContext);

  const options = [{ id: 1, value: 'edit', path: '/users/edit' }, { id: 2, value: 'delete', path: '' }]

  return (

    (objects.length)
      ?
      <>
        <TableContainer component={Paper}>

          <Table aria-label="collapsible table">
            <TableBody>
              {objects.map((user) => (
                <ListItems key={user.id} user={user}>
                  <MyCell>
                    <PersonOutlineSharpIcon style={{ color: '#707070' }} />
                  </MyCell>
                  <MyCell value={user.value}>
                    <State stateText={user.state} />
                  </MyCell>

                  <MyCell>
                    <EmailSharpIcon style={{ color: '#707070' }} />
                  </MyCell>
                  <MyCell value={user.mail}>
                  </MyCell>
                  <MyCell value={user.location} />
                  <MyCell value={user.role} />
                  <MyCell value={user.telephone} />
                  <MyCell />
                  <MyCell >
                    <LongMenu options={options} transitionValue={user.id} />
                  </MyCell>
                </ListItems>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
      :
      <Plug title={'users not found'} message={'try changing your search filter'} />

  );
}
export default CollapsibleTable
