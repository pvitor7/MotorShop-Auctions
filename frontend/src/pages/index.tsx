import HomePage from "./Homepage/index";
import Product from "./Product/index";
import ModalLogin from '../components/Modals/modalLogin/index';
import ModalRegister from '../components/Modals/modalRegister/index';
import ModalAnnouncement from '../components/Modals/modalAnnouncement/index';

import ModalSucess from '../components/Modals/modalSucess/index';
import ProfilePage from './ProfilePage/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";


const Pages = () => {
  return (
    <AnimatePresence>
    
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/profile" component={ProfilePage}/>
        <Route path="/product/:id" component={Product}/>
      </Switch>

      <ModalLogin/>
      <ModalRegister/>
      <ModalSucess/>
      <ModalAnnouncement/>
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    </AnimatePresence>
  );
};

export default Pages;
