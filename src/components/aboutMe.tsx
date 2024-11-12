import React from "react";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Link,
  Tab,
  Tabs,
} from "@mui/material";
import "./aboutMe.css";
import { AboutText } from "./aboutText";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const AboutMe = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <Container
      maxWidth={false}
      sx={{
        marginTop: 0,
        marginBottom: 0,
        backgroundColor: "#fceee1",
        padding: 2,
        borderRadius: 4,
        height: "100%",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 1,
          justifyContent: "center",
          paddingLeft: "50%",
        }}
      >
        <Avatar
          sx={{ width: 150, height: 150 }}
          alt="William Sjöström"
          src="https://avatars.githubusercontent.com/u/45261611?s=400&u=91e265ebcf391bc000d97c84e2e934564a5d5e18&v=4"
        />
        <Link
          sx={{ alignSelf: "flex-end" }}
          href="https://www.linkedin.com/in/william-sj%C3%B6str%C3%B6m-41b469195/"
        >
          <Avatar
            variant="square"
            alt="Linked In"
            src="https://cdn-icons-png.freepik.com/256/3991/3991775.png?semt=ais_hybrid"
          />
        </Link>
      </Container>
      <Divider />
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="About Me" {...a11yProps(0)} />
        <Tab label="Skills" {...a11yProps(1)} />
        <Tab label="Certificate" {...a11yProps(2)} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <AboutText />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Container>
  );
};

export default AboutMe;
