import { useRef, useEffect, forwardRef } from 'react';
import { useField } from 'unform';

import { Container } from './styles';

function Input({ name, icon: Icon, ...rest }) {
  const inputRef = useRef(null);
  const {
    defaultValue,
    fieldName,
    registerField,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {
        Icon && <Icon size={22} color='#25cbd3' />
      }
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
}

export { Input };
