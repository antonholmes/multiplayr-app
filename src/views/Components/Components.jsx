import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
// core components
import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
// import Button from 'components/CustomButtons/Button.jsx';
import Parallax from 'components/Parallax/Parallax.jsx';
// sections for this page
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import SectionPlayer from './Sections/SectionPlayer.jsx';
import SectionShare from './Sections/SectionShare.jsx';
// import SectionViewer from './Sections/SectionViewer.jsx';
// import CustomInput from 'components/CustomInput/CustomInput.jsx';
// import SectionBasics from './Sections/SectionBasics.jsx';
// import SectionNavbars from './Sections/SectionNavbars.jsx';
// import SectionTabs from './Sections/SectionTabs.jsx';
// import SectionPills from './Sections/SectionPills.jsx';
// import SectionNotifications from './Sections/SectionNotifications.jsx';
// import SectionTypography from './Sections/SectionTypography.jsx';
// import SectionJavascript from './Sections/SectionJavascript.jsx';
// import SectionCarousel from './Sections/SectionCarousel.jsx';
// import SectionCompletedExamples from './Sections/SectionCompletedExamples.jsx';
// import SectionLogin from './Sections/SectionLogin.jsx';
// import SectionExamples from './Sections/SectionExamples.jsx';
// import SectionDownload from './Sections/SectionDownload.jsx';

import componentsStyle from 'assets/jss/material-kit-react/views/components.jsx';

class Multiplayr extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand={
            <Link to="/">
              <img src="favicon.ico" alt="home" height="25px" width="25px" />
            </Link>
          }
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: 'white',
          }}
          {...rest}
        />
        <Parallax image={require('assets/img/bg4.jpg')}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Multiplayr</h1>
                  <h3 className={classes.subtitle}>
                    The new way to watch. Grab a seat!
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <GridItem md={12}>
            <SectionPlayer />
            <SectionShare />
          </GridItem>

          {/* <SectionViewer /> */}
          {/* <SectionBasics />
          <SectionNavbars />
          <SectionTabs />
          <SectionPills />
          <SectionNotifications />
          <SectionTypography />
          <SectionJavascript />
          <SectionCarousel />
          <SectionCompletedExamples />
          <SectionLogin />
          <GridItem md={12} className={classes.textCenter}>
            <Link to={'/login-page'} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem>
          <SectionExamples />
          <SectionDownload /> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Multiplayr);
