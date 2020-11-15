import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import Homepage from './pages/Homepage/Homepage';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SigninSignout from './pages/SigninSignout/SigninSignout';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

import {GlobalStyle} from './Global.styles';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser} from './redux/user/user.selectors';


 
class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
  const {setCurrentUser} = this.props;


  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
      });
    }
    setCurrentUser(userAuth);
  });
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SigninSignout />)} />
        </Switch>
      </div>
    );
  }
  }

  const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });
 
  const mapDispatchToProps = dispatch => ({
setCurrentUser: user => dispatch(setCurrentUser(user))
  });

export default connect(mapStateToProps, mapDispatchToProps)(App);
