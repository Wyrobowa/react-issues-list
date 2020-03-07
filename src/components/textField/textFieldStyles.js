import styled from 'styled-components';

const TextField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

const Label = styled.label`
  margin-bottom: .5em;
`;

const Input = styled.input`
  padding: .5em .75em;
  border: 1px solid #ced4da;
  border-radius: .25rem;
`;

const TextArea = styled.textarea`
  padding: .5em .75em;
  height: 5em;
  border: 1px solid #ced4da;
  border-radius: .25rem;
`;

export {
  TextField,
  Label,
  Input,
  TextArea,
};
