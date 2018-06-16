import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import Explore from '@material-ui/icons/Explore';
import Pets from '@material-ui/icons/Pets';
import Mood from '@material-ui/icons/Mood';
// core components
import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import NavPills from 'components/NavPills/NavPills.jsx';
import Parallax from 'components/Parallax/Parallax.jsx';

import profile from 'assets/img/faces/anton.png';

import noah from 'assets/img/examples/noah.jpg';
import pepper from 'assets/img/examples/pepper.jpg';
import rachel from 'assets/img/examples/rachel.jpg';
import ruffles from 'assets/img/examples/ruffles.jpg';
import corondive from 'assets/img/examples/corondive.jpg';
import coron from 'assets/img/examples/coron.jpg';
import hawley from 'assets/img/examples/hawley.jpg';
import longbeach from 'assets/img/examples/longbeach.jpg';
import sombrero from 'assets/img/examples/sombrero.jpg';

import anvaya from 'assets/img/examples/sunset-anvaya.jpg';
import boracay from 'assets/img/examples/sunset-boracay.jpg';
import newport from 'assets/img/examples/sunset-newport.jpg';
import pinatubo from 'assets/img/examples/sunset-pinatubo.jpg';

import profilePageStyle from 'assets/jss/material-kit-react/views/profilePage.jsx';

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Anton Holmes"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white',
          }}
          {...rest}
        />
        <Parallax small filter image={require('assets/img/bg6.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>Anton Holmes</h3>
                      <h6>
                        Software Engineer | Data Analyst | JavaScript Developer{' '}
                      </h6>
                      <Button
                        href="https://twitter.com/antonholmes"
                        justIcon
                        link
                        className={classes.margin5}
                      >
                        <i className={'fab fa-twitter'} />
                      </Button>
                      <Button
                        href="https://instagram.com/antonholmes"
                        justIcon
                        link
                        className={classes.margin5}
                      >
                        <i className={'fab fa-instagram'} />
                      </Button>
                      <Button
                        href="https://facebook.com/antonholmes"
                        justIcon
                        link
                        className={classes.margin5}
                      >
                        <i className={'fab fa-facebook'} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  A former professor and owner of a startup, Anton Holmes has
                  brought his talents to New York in pursuit of his dream of
                  working in sports and/or tech. An avid Cubs fan, he also loves
                  writing, photography, travel, SCUBA diving, and sports.{' '}
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: 'Pets',
                        tabIcon: Pets,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={ruffles}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={noah}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={pepper}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={rachel}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                      {
                        tabButton: 'Travel',
                        tabIcon: Explore,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={hawley}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={longbeach}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={coron}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={corondive}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={sombrero}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                      {
                        tabButton: 'Sceneries',
                        tabIcon: Mood,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={anvaya}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={boracay}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={newport}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={pinatubo}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
