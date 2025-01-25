import React from 'react';
import './form.css';
import Button from './FormComponents/Button/Button';
import Input from './FormComponents/Input/Input';
import Title from './FormComponents/Title/Title';

function Form() {
  return (
    <div className="form">
      <Title />
      <Input type={'text'} />
      <Input type={'text'} />
      <Input type={'email'} />
      <Input type={'password'} />
      <Input type={'text'} />
      <Button />
    </div>
  );
}

export default Form;
