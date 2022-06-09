import { AxiosError } from 'axios';
import React from 'react';
import { ApiService } from '../../../services/ApiService';

export function useRegister() 
{
  const [name, setName] = React.useState(''),
        [description, setDescription] = React.useState(''),
        [photo, setPhoto] = React.useState(''),
        [message, setMessage] = React.useState('');

  function register()
  {
    if (validate())
    {
      ApiService.post('/pet', {
        name,
        description,
        photo
      }).then(() => {
        clear();
        setMessage('Pet cadastro com sucesso!')
      }).catch((error: AxiosError) => {
        setMessage(error.response?.data.message);
      });
    } else {
      setMessage('Preencha todos os campos.');
    }
  }

  function validate()
  {
    return name.length > 2 && description.length > 20 && photo.length > 5;
  }

  function clear()
  {
    setName('');
    setDescription('');
    setPhoto('');
  }

  return { 
    name, description, photo, 
    setName, setDescription, setPhoto, 
    register, message, setMessage }
}