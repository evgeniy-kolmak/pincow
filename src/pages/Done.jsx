import { Link, Outlet } from 'react-router-dom';
import { Card, Box, Button, } from '@mui/material';

export default function Result() {

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Card
        sx={{
          maxWidth: "100%",
          padding: "30px",
        }}
      >
        <Outlet />


      </Card>
      <Link to='current'>current</Link>
      <Link to='day'>day</Link>
      <Link to='deployed'>deployed</Link>
      <Button
        variant="contained"
        type='submit'>
        <Link
          style={{
            color: 'inherit',
            textDecoration: 'none'
          }}
          to='/forecast'>Try Again</Link>
      </Button>

    </Box >

  );
}