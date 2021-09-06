import React, { useState } from 'react'

type EditTextProps = {
  title: string;
  name: string;
  type: string;
  defaultValue?: string;
  onChangeValue: (value: string) => void,
};

export const EditText = (props: EditTextProps) => {
  const [value, setValue] = useState(props.defaultValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    props.onChangeValue(e.target.value);
  }

  return (
    <div className="form-floating mb-3">
      <input className="form-control" id={`floatingInput_${props.title}`}
             type={props.type} name={props.name} value={value} onChange={onChange} />
      <label htmlFor={'floatingInput'}>{props.title}</label>
    </div>
  );
};
