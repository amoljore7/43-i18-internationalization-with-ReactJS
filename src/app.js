import React from "react";
import detectBrowserLanguage from "detect-browser-language";
import { translate, Trans } from "react-i18next";
import PropTypes from "prop-types";
import {
  Grid,
  withStyles,
  Typography,
  Radio,
  Button,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import Header from "./Header";
import styles from "./app.style";

class App extends React.Component {
  state = {
    userLanguage: "en",
  };
  componentDidMount() {
    this.setState({ userLanguage: detectBrowserLanguage() });
    this.props.i18n.changeLanguage(detectBrowserLanguage());
  }
  // handleChange = (event) => {
  //   let newUserLanguage = event.target.value;
  //   this.setState((prevState) => ({ userLanguage: newUserLanguage }));
  //   this.props.i18n.changeLanguage(newUserLanguage);
  // };

  render() {
    const { t } = this.props;
    const { classes } = this.props;
    return (
      <div className="App">
        <Header />
        <div className={classes.container}>
          <Grid container spacing={24}>
            {/*             
            <Grid item xs={12} className={classes.topgrid}>
              <Paper className={classes.paper}>
                <div className={classes.root}>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <FormLabel component="legend">Select Language</FormLabel>
                    <RadioGroup
                      aria-label="Gender"
                      name="gender1"
                      className={classes.group}
                      value={this.state.userLanguage}
                      onChange={this.handleChange}
                    >
                      <FormControlLabel
                        value="en"
                        control={<Radio />}
                        label="English"
                      />
                      <FormControlLabel
                        value="ja"
                        control={<Radio />}
                        label="Japanese"
                      />

                      <FormControlLabel
                        value="hi"
                        control={<Radio />}
                        label="Hindi"
                      />
                      <FormControlLabel
                        value="fr"
                        control={<Radio />}
                        label="French"
                      />
                      <FormControlLabel
                        value="de"
                        control={<Radio />}
                        label="German"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </Paper>
            </Grid>
             */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h3" gutterBottom>
                  <Trans> {t("INTRODUCTION")} </Trans>

                  <Typography variant="subtitle2" gutterBottom>
                    i18next {t("TITLE")}
                  </Typography>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Typography variant="h6" gutterBottom>
                  {t("ADVANTAGES")}
                </Typography>

                <List dense={false}>
                  <ListItem>
                    <ListItemText className={classes.ListItemText}>
                      {t("SUMMARY")}
                    </ListItemText>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Button variant="contained" color="primary">
                  {t("OK")}
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button variant="contained" color="secondary">
                  {t("CANCEL")}
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

// extended main view with translate hoc

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(translate("translations")(App));
