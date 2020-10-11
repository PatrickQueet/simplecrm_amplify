import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(customerId, name, rmId , address, email, phone, dateCreated) {
  return {
    customerId,
    name,
    rmId,
    address,
    email,
    phone,
    dateCreated,
    history: [
      { date: '2020-01-05', IVR: '11091700', amount: 3 },
      { date: '2020-01-02', ShortCode: 'Anonymous', amount: 1 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow  className={classes.root} >
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.customerId}</TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">{row.rmId}</TableCell>
        <TableCell align="right">{row.address}</TableCell>
        <TableCell align="right">{row.email}</TableCell>
        <TableCell align="right">{row.phone}</TableCell>
        <TableCell align="right">{row.dateCreated}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  
  row: PropTypes.shape({
    customerId: PropTypes.number.isRequired,
    name: PropTypes.number.isRequired,
    rmId: PropTypes.number.isRequired,
    address: PropTypes.number.isRequired,
    email: PropTypes.number.isRequired,
    phone: PropTypes.number.isRequired,
    dateCreated: PropTypes.number.isRequired,

    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(123, 'Value City', 'NN01', 'Regal Theatre, Suva', 'value@value.com.fj', 9441646, '2010-10-04' ),
  createData(321, 'Gonelevu Taxi', 'NN01', 'Regal Theatre, Suva', 'value@value.com.fj', 9441646, '2010-10-04' ),
  createData(233, 'MHCC', 'NN01', 'Regal Theatre, Suva', 'value@value.com.fj', 9441646, '2010-10-04' ),
  createData(132, 'Shop N Save', 'NN01', 'Regal Theatre, Suva', 'value@value.com.fj', 9441646, '2010-10-04' ),
  createData(567, 'FNPF', 'NN01', 'Regal Theatre, Suva', 'value@value.com.fj', 9441646, '2010-10-04' ),
  createData(675, 'FHEC', 'NN01', 'Regal Theatre, Suva', 'value@value.com.fj', 9441646, '2010-10-04' ),
  createData(311, 'ANZ Banking Group', 'NN01', 'Regal Theatre, Suva', 'value@value.com.fj', 9441646, '2010-10-04' ),
  createData(222, 'Roboto Industries', 'NN01', 'Regal Theatre, Suva', 'value@value.com.fj', 9441646, '2010-10-04' ),  
];


export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Customers</TableCell>
            <TableCell align="right">CustomerID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">RM ID</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Date Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
