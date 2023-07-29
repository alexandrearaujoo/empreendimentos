import { Container, SelectStyled } from './styles';

import { ChevronDown } from 'lucide-react';

const Select = ({ options }: { options: string[] }) => {
  return (
    <Container>
      <SelectStyled>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </SelectStyled>
      <ChevronDown />
    </Container>
  );
};

export default Select;
