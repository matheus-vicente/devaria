import {  } from 'react-icons';

import { Container } from './styles';

function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      <Icon size={22} color='#25cbd3' />
      <input {...rest} />
    </Container>
  );
}

export { Input };
