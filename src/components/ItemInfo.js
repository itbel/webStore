import React from "react";
import { Grid, Typography } from "@material-ui/core";
import FireCube from "../media/items/firecube.jpg";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const ItemInfo = (props) => {
  const item = { name: "Fire TV Cube", price: 139.99, image: FireCube };
  const [value, setValue] = React.useState("one");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid
        xs={12}
        sm={9}
        md={5}
        lg={4}
        xl={3}
        item
        style={{ border: "solid 1px black", minHeight: "50vh", margin: "auto" }}
      >
        <Grid container direction="row">
          <Grid item xs={12} style={{ paddingRight: "16px" }}>
            <Typography align="right" variant="h5">
              {item.name}
            </Typography>
            <Typography align="right" variant="subtitle2">
              ${item.price}
            </Typography>
          </Grid>
          <Grid item md={6}>
            <img width={250} alt="" src={item.image}></img>
          </Grid>
          <Grid item xs={6}>
            <Typography align="right" variant="p">
              {item.description !== undefined
                ? item.description
                : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              lectus nibh, tristique non lectus eget, congue efficitur ligula.
              In aliquet metus ultricies nisl euismod, ac porta quam vulputate.
              Donec elementum mauris eu nisi venenatis, eget feugiat libero
              consectetur. Proin feugiat metus in neque volutpat vulputate.
              Integer sed dapibus ex. Sed sit amet velit eu urna hendrerit
              volutpat. Mauris rutrum mattis imperdiet. Integer scelerisque,
              lectus vitae ultrices dictum, felis magna suscipit nisl, quis
              ultricies felis augue et purus.`}
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ paddingTop: "32px" }}>
            <AppBar color="default" position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
              >
                <Tab
                  value="one"
                  label="Product Description"
                  wrapped
                  id={`wrapped-tab-one`}
                  aria-controls={`wrapped-tabpanel-one`}
                />
                <Tab
                  value="two"
                  label="Product Details"
                  id={`wrapped-tab-two`}
                  aria-controls={`wrapped-tabpanel-two`}
                />
                <Tab
                  value="three"
                  label="Reviews"
                  id={`wrapped-tab-three`}
                  aria-controls={`wrapped-tabpanel-three`}
                />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index="one">
              Product Description
            </TabPanel>
            <TabPanel value={value} index="two">
              Product Details
            </TabPanel>
            <TabPanel value={value} index="three">
              Reviews
            </TabPanel>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ItemInfo;
