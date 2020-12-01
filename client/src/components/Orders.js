import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Title from './Title';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import orderData from '../Order_Data.json';
import data from '../Order_Data.json'
import { mainListItems } from '../listItems';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { CSVLink } from "react-csv";

function preventDefault(event) {
  event.preventDefault();
}

const theme = createMuiTheme({
  overrides: {
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: "#FF5A39",
          "&:hover": {
            backgroundColor: "#ff6f53",
          },
        },
      },
    },
  },
  palette: {
     primary: {
        main: "#01C9E1" // This is an orange looking color
               },
     secondary: {
        main: "##676767" //Another orange-ish color
                },
     background: {
          default: '#f9f9f9',
     }
           },
fontFamily: 'Calmer' // as an aside, highly recommend importing roboto font for Material UI projects! Looks really nice
});

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'right',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  graphHeight: {
    height: 500,
  },
}));

export default function Orders() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [search, setSearch] = React.useState(data);
  const setSearchValue = (value) => {
    if (value.length == 0)
      setSearch(orderData);
    else
      setSearch(getFilteredData(value, data));
  }
  const getFilteredData = (value, data) => {
    let results = [];
    results = data.filter((data) => {
      return (
        value.length > 0 &&
        data.name
          .toLowerCase()
          .indexOf(value.toLowerCase().trim()) !== -1
      );
    });
    //if search by username returns nothing, search by email instead
    if (results.length === 0) {
      data.filter((data) => {
        if (data.customerAddress.indexOf(value) !== -1) {
          results.push(data);
        }
      });
      //remove duplicates
      const unique = new Set(results);
      //change it back to an array and return it
      results = [...unique];
      return results;
    }
    return results;
  }

  return (
    <React.Fragment>
      <ThemeProvider theme = {theme}>
        <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Orders
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        </Drawer>
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            
        <Paper elevation={3}>
      <Title>Current Orders</Title>
      <form className={classes.root}>
      <TextField id="outlined-basic" label="Search..." variant="outlined" onChange={(e) => setSearchValue(e.target.value)}/>
            </form>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Order Number</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Pickup Time</TableCell>
            <TableCell>Delivery Time</TableCell>
            <TableCell>Driver Name</TableCell>
            <TableCell>Customer Address</TableCell>
            <TableCell>Order Status</TableCell>
            <TableCell>Order Weight</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {search.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row.orderNumber}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.pickupTime}</TableCell>
              <TableCell>{row.deliveryTime}</TableCell>
              <TableCell>{row.driverName}</TableCell>
              <TableCell>{row.customerAddress}</TableCell>
              <TableCell>{row.orderStatus}</TableCell>
              <TableCell>{row.orderWeight}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <CSVLink data={orderData} filename={"Order_Data.csv"} className="btn btn-secondary">
            Download Data
          </CSVLink>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 50, 100, 250, 500]}
        component="div"
        count={search.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage} >
      </TablePagination>
      </Paper>
      </Grid>
      </Container>
      </main>
      </ThemeProvider>
    </React.Fragment>
  );
}