import React from 'react';

import './CustomButton.styles.scss';

const customButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
<button className=
{`${inverted ? 'inverted' : ''}
${isGoogleSignIn ? 'googleSignIn' : '' }
customButton`} 
{...otherProps}>{children}</button>
);

export default customButton;