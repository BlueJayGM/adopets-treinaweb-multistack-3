import { AxiosError } from 'axios';
import React from 'react';
import { Pet } from '../../@types/Pet';
import { ApiService } from '../../services/ApiService';


export function useIndex() 
{
  const [petList, setPetList] = React.useState<Pet[]>([]), 
  [petSelected, setPetSelected] = React.useState<Pet | null>(null),
  [email, setEmail] = React.useState(''),
  [value, setValue] = React.useState(''),
  [message, setMessage] = React.useState('');

  React.useEffect(() => {
    ApiService.get('/pet')
    .then((response) => 
      {
        setPetList(response.data);
      }
    );
  }, []);

  React.useEffect(() => {
    if (petSelected === null) {
      cleanForm();
    }
  }, [petSelected]);

  const adopt = () => {
    if (petSelected && validate() )
    {
      ApiService.post('/adoption', {
        pet_id: petSelected.id,
        email,
        value,
      }).then(() => {
        setPetSelected(null);
        setMessage('Pet adotado com sucesso!');
      }).catch((err: AxiosError) => {
        setMessage('Error: ' + err.response?.data.message);
      });
    } else {
      setMessage('Preencha os campos corretamente!');
    }
  }

  function validate()
  {
    return email.length > 0 && value.length > 0;
  }

  function cleanForm() 
  {
    setEmail('');
    setValue('');
  }

  return {
    petList,
    petSelected,
    setPetSelected,
    email,
    setEmail,
    value,
    setValue,
    message,
    setMessage,
    adopt
  };
}