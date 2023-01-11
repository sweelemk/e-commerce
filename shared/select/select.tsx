import React from 'react';
import ReactSelect, {
  SingleValue,
  components,
  ControlProps,
  DropdownIndicatorProps,
  ClearIndicatorProps,
  OptionProps as OptionSelectProps,
} from 'react-select';
import classNames from "classnames";
import { SelectStyled } from './select.styled';
import Icon from '../icons';


export type OptionProps = {
  value: string;
  label: string;
}

export type onChangePropsValue = SingleValue<OptionProps>;

type SelectProps = {
  options: OptionProps[];
  onChange: (option: onChangePropsValue) => void;
  defaultValue?: OptionProps;
  isClearable?: boolean;
  icon?: React.ReactElement;
  placeholder?: string;
  size?: "large" | "medium" | "small";
};

const Control = ({ children, ...props }: ControlProps<OptionProps, false>) => {
  // @ts-ignore
  const {icon} = props.selectProps;
  return (
    <components.Control {...props}>
      <div className='select-icon'>{icon}</div>
      {children}
    </components.Control>
  )
};

const DropdownIndicator = (
  props: DropdownIndicatorProps<OptionProps, false>
) => {
  return (
    <components.DropdownIndicator {...props}>
      <div className='dropdown-indicator'>
        <Icon name="arrow-keyboard-up" />
        <Icon name="arrow-keyboard-down" />
      </div>
    </components.DropdownIndicator>
  );
};

const ClearIndicator = (
  props: ClearIndicatorProps<OptionProps, false>
) => {
  return (
    <components.ClearIndicator {...props}>
      <div className='clear-indicator'>
        <Icon name="close" />
      </div>
    </components.ClearIndicator>
  );
};

const Option = (props: OptionSelectProps<OptionProps>) => (
  <components.Option {...props} className={classNames({
    ['focused']: props.isFocused,
    ['selected']: props.isSelected,
  })}>
    <label>{props.label}</label>
  </components.Option>
);


const Select: React.FC<SelectProps> = ({options, onChange, defaultValue, isClearable, icon, placeholder, size = 'default'}) => {
  return (
    <SelectStyled className={classNames({
      [`select-${size}`]: size
    })}>
      <ReactSelect
        options={options}
        onChange={onChange}
        defaultValue={defaultValue}
        isClearable={isClearable}
        components={{Control, DropdownIndicator, ClearIndicator, Option}}
        // @ts-ignore
        icon={icon}
        placeholder={placeholder}
      />
    </SelectStyled>
  )
}

export default Select;
