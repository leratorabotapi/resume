import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '50px 0 50px 0'
  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Table>
        <TableBody>
            <TableRow>
              <TableCell align="right"><Typography variant="body1" gutterBottom>2019 - 2017</Typography></TableCell>
              <TableCell align="left"><Typography variant="body1" gutterBottom>Product and user-experience designer</Typography></TableCell>
              <TableCell align="right"><Typography variant="body1" gutterBottom>• Designed a streamlined user-interface and assisted in conceptualising a variant of the product that increased its efficiency in delivering
the most-relevant information to the user.</Typography></TableCell>
            </TableRow>
        </TableBody>
        <TableBody>
            <TableRow>
              <TableCell align="right"><Typography variant="body1" gutterBottom>2018 - 2017</Typography></TableCell>
              <TableCell align="left"><Typography variant="body1" gutterBottom>Inspector Assistant</Typography></TableCell>
<TableCell align="right"><Typography variant="body1" gutterBottom>• Utilised my multi-lingual skills to conduct interviews with farm-workers in their own language, increased engagement and participation of the interviews which increased context to the data.
• Concisely structured the language of the interview questions to make them friendlier and engaging.</Typography></TableCell>
            </TableRow>
        </TableBody>
        <TableBody>
            <TableRow>
              <TableCell align="right"><Typography variant="body1" gutterBottom>Present - 2015</Typography></TableCell>
              <TableCell align="left"><Typography variant="body1" gutterBottom>Board Member.</Typography></TableCell>
              <TableCell align="right"><Typography variant="body1" gutterBottom>• As the youngest board member of a youth-centered NGO, I assisted in structuring and modify programmes aspects that made the content relatable and engaging</Typography></TableCell>
            </TableRow>
        </TableBody>
        <TableBody>
            <TableRow>
              <TableCell align="right"><Typography variant="body1" gutterBottom>2016 - 014</Typography></TableCell>
              <TableCell align="left"><Typography variant="body1" gutterBottom>Junior Production assistant</Typography></TableCell>
              <TableCell align="right"><Typography variant="body1" gutterBottom> In charge of camera and video production group - streamlined and organised graphics, as well as coordination of the live camera footage
used in services.</Typography></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}