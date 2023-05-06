import {InputGroup, Label, Input} from './Filter.styled'


export const Filter = ({value, onChange}) => {
  return (
    <InputGroup>
        <Label>
          Пошук контактів за іменем
         
        </Label>
        <Input type="text" name={value} onChange={onChange} />
    </InputGroup>
  );
};
