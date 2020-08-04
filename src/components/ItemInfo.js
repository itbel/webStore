import React from "react";
import { Grid, Typography } from "@material-ui/core";
import FireCube from "../media/items/firecube.jpg";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

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
const useStyles = makeStyles((theme) => ({}));

const ItemInfo = (props) => {
  const theme = useTheme();
  const item = { name: "Fire TV Cube", price: 139.99, image: FireCube };
  const [value, setValue] = React.useState("one");
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid xs={12} sm={9} md={6} lg={6} xl={6} item style={{ margin: "auto" }}>
        <Box boxShadow={3} m={3} p={0}>
          <Grid style={{ minHeight: "50vh" }} container direction="row">
            <Grid
              item
              xs={12}
              style={{
                paddingRight: "16px",
              }}
            >
              <Typography align={isMobile ? "center" : "right"} variant="h5">
                {item.name}
              </Typography>
              <Typography
                align={isMobile ? "center" : "right"}
                variant="subtitle2"
              >
                ${item.price}
              </Typography>
            </Grid>

            <Grid container xs={12} md={12} xl={6} lg={6} alignItems="center">
              <img width={300} alt="" src={item.image}></img>
            </Grid>
            <Grid item xl={6} lg={6} md={10} xs={12}>
              <Typography align="right" variant="p">
                {item.description !== undefined ? (
                  item.description
                ) : (
                  <>
                    <ul style={{ textAlign: "left" }}>
                      <li>The fastest, most powerful Fire TV.</li>
                      <li>
                        Control compatible soundbar and A/V receiver. Over the
                        air antenna, live cable and satellite support are coming
                        soon.
                      </li>
                      <li>
                        With the built-in speaker, ask Alexa to check the
                        weather, turn off the lights, and more – even when the
                        TV is off.
                      </li>
                      <li>
                        Instant access to 4K ultra HD content, plus support for
                        Dolby Vision, HDR, HDR10+, and Dolby Atmos.
                      </li>
                      <li>
                        Watch favorites from Netflix, Disney+, Prime Video,
                        YouTube, Apple TV, Crave, CTV, NHL, Citytv Video, FXNOW
                        Canada, and others. Subscription fees may apply.
                      </li>
                      <li>
                        Designed to protect your privacy - Built with privacy
                        protections and controls, including a microphone off
                        button that electronically disconnects the microphones.
                      </li>
                      <li>
                        With Prime, watch TV episodes and movies such as
                        "Hanna".
                      </li>
                      <li>
                        Use the power and volume buttons on your Alexa Voice
                        Remote to control your TV without making a sound.
                      </li>
                    </ul>
                  </>
                )}
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ paddingTop: "32px" }}>
              <AppBar color="transparent" position="static">
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
        </Box>
      </Grid>
    </>
  );
};

export default ItemInfo;
