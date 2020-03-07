import styled from 'styled-components';

const SelectField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

const Label = styled.label`
  margin-bottom: .5em;
`;

const Select = styled.select`
  height: 2em;
  border: 1px solid #ced4da;
  border-radius: .25rem;
`;

export {
  SelectField,
  Label,
  Select,
};
