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
    maxWidth: '950px',
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
              <TableCell align="right"><Typography variant="h6" gutterBottom>Communication</Typography></TableCell>
              <TableCell align="left"><Typography variant="body1" gutterBottom>• Proficient in English and Sesotho, fluent in isiZulu, isiXhosa, sePedi, Tswana and intermediate in Afrikaans.</Typography></TableCell>
            </TableRow>
        </TableBody>
        <TableBody>
            <TableRow>
              <TableCell align="right"><Typography variant="h6" gutterBottom>Entrepreneurial</Typography></TableCell>
              <TableCell align="left"><Typography variant="body1" gutterBottom>• Sole founder of a company, main objective being development of software and digital content
              <br />
• Second place in School Entrepreneurship Trust (SET) Entrepreneurship Olympiad 
<br />
• Co-founder of Fingertips (Fin-tech Startup)</Typography></TableCell>
            </TableRow>
        </TableBody>
        <TableBody>
            <TableRow>
              <TableCell align="right"><Typography variant="h6" gutterBottom>Program management</Typography></TableCell>
              <TableCell align="left"><Typography variant="body1" gutterBottom>• Worked within group that created and maintains the coding academy at Salesian Life Choices, providing youth with full-stack development skills.</Typography></TableCell>
            </TableRow>
        </TableBody>
        <TableBody>
            <TableRow>
              <TableCell align="right"><Typography variant="h6" gutterBottom>IT/Computer Literacy</Typography></TableCell>
              <TableCell align="left"><Typography variant="body1" gutterBottom>• Proficient in Adobe Photoshop, Sketch and MS Word. Intermediate in Adobe Lightroom</Typography></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}