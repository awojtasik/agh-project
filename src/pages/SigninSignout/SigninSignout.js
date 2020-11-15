import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './SigninSignout.styles.scss';

const signinSignout = () => (
<div className="signinSignout">
<SignIn />
<SignUp />
</div>
);
export default signinSignout;