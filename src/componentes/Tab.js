import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Cards from "./Cards";
import CardUnico from "./CardUnico";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Orbitron',
      'cursive',
    ].join(','),
  }
});


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
      <ThemeProvider theme={theme}>
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
          {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
          )}
        </div>

      </ThemeProvider>
);
}


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <ThemeProvider theme={theme}>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="escolhas" variant="fullWidth" TabIndicatorProps = {{style: {background:"#db3725",fontFamily:'Press Start 2P'}}}
                  textColor="inherit">
              <Tab label="Todos os Personagens" {...a11yProps(0)}/>
              <Tab label="Descubra Qual Persoganem você é" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Cards/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <CardUnico/>
          </TabPanel>
        </Box>
      </ThemeProvider>
);
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };

}
