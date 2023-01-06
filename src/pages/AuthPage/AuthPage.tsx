import React, { useState } from 'react';
import { SingUp } from './components/SingUp/SingUp';
import { SingIn } from './components/SignIn/SingIn';

export const AuthPage: React.FC = () => {
  const [isSingIn, setIsSignIN] = useState<boolean>(true);

  return (
    <div>
      {!isSingIn && <SingUp isSingIn={isSingIn} setIsSignIN={setIsSignIN} />}
      {isSingIn && <SingIn isSingIn={isSingIn} setIsSignIN={setIsSignIN} />}
    </div>
  );
};
