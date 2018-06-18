import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
// import CustomInput from 'components/CustomInput/CustomInput.jsx';
import Button from 'components/CustomButtons/Button.jsx';

import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';

import teamStyle from 'assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx';

import node from 'assets/img/logos/node.svg';
import postgres from 'assets/img/logos/postgres.png';
import react from 'assets/img/logos/react.svg';

// import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <div className={classes.section}>
          <h2 className={classes.title}>The usual backbones:</h2>
          <div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={node} alt="..." className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    Node.js
                    <br />
                    <small className={classes.smallTitle}>
                      Runtime Environment
                    </small>
                  </h4>
                  <CardBody>
                    <p className={classes.description}>
                      Node.js® is a JavaScript runtime built on Chrome's V8
                      JavaScript engine.
                    </p>
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>
                    <Button
                      href="https://github.com/nodejs"
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + ' fab fa-github'} />
                    </Button>
                    <Button
                      href="https://nodejs.org"
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + ' fab fa-chrome'} />
                    </Button>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={postgres} alt="..." className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    PostgreSQL
                    <br />
                    <small className={classes.smallTitle}>
                      Object-Relational Database Management
                    </small>
                  </h4>
                  <CardBody>
                    <p className={classes.description}>
                      PostgreSQL is a powerful, open source object-relational
                      database system with over 30 years of active development
                      that has earned it a strong reputation for reliability,
                      feature robustness, and performance.
                    </p>
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>
                    <Button
                      href="https://git.postgresql.org/gitweb/"
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + ' fab fa-git'} />
                    </Button>
                    <Button
                      href="https://www.postgresql.org/"
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + ' fab fa-chrome'} />
                    </Button>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={react} alt="..." className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    React
                    <br />
                    <small className={classes.smallTitle}>
                      JavaScript Library
                    </small>
                  </h4>
                  <CardBody>
                    <p className={classes.description}>
                      React makes it painless to create interactive UIs. Design
                      simple views for each state in your application, and React
                      will efficiently update and render just the right
                      components when your data changes.
                    </p>
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>
                    <Button
                      href="https://github.com/facebook/react/"
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + ' fab fa-github'} />
                    </Button>
                    <Button
                      href="https://reactjs.org/"
                      justIcon
                      color="transparent"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + ' fab fa-chrome'} />
                    </Button>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(WorkSection);

/* <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Work with us</h2>
            <h4 className={classes.description}>
              Divide details about your product or agency work into parts. Write
              a few lines about each one and contact us about any further
              collaboration. We will responde get back to you in a couple of
              hours.
            </h4>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                />
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button color="primary">Send Message</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>  */
