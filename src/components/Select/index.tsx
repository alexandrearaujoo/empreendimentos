import { SelectHTMLAttributes, forwardRef } from 'react';

import { Container, SelectStyled } from './styles';

import { ChevronDown } from 'lucide-react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, ...rest }, ref) => {
    return (
      <Container>
        <SelectStyled {...rest} ref={ref}>
          {options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </SelectStyled>
        <ChevronDown />
      </Container>
    );
  }
);

Select.displayName = 'Select';

export default Select;
