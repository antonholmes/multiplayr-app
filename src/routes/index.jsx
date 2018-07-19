import Multiplayr from 'views/Components/Components.jsx';
import LandingPage from 'views/LandingPage/LandingPage.jsx';
import ProfilePage from 'views/ProfilePage/ProfilePage.jsx';
import LoginPage from 'views/LoginPage/LoginPage.jsx';

let indexRoutes = [
  { path: '/landing-page', name: 'LandingPage', component: LandingPage },
  { path: '/', name: 'ProfilePage', component: ProfilePage },
  { path: '/login-page', name: 'LoginPage', component: LoginPage },
  { path: '/multiplayr', name: 'Multiplayr', component: Multiplayr },
];

export default indexRoutes;
