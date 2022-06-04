import type { NextPage } from 'next';
import ListContainer from '../ui/components/List/List.component';
import TitleContainer from '../ui/components/Title/Title.component';

import { Button, Dialog, DialogActions, Grid, Snackbar, TextField } from '@mui/material';
import { useIndex } from '../data/hooks/pages/useIndex';

const Home: NextPage = () => {

  const { 
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
  } = useIndex();

  return (
    <div>
      <TitleContainer title='' 
        subtitle={
          <span>
            Com um pequeno valor mensal, você <br/>
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        } 
      />
      <ListContainer onSelect={(pet) => setPetSelected(pet) } pets={petList}/>

      <Dialog open={petSelected != null} fullWidth PaperProps={{ sx: { p: 5 }}} onClose={() => setPetSelected(null)} >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              type='email' label='Email' 
              placeholder='Seu email' fullWidth 
              value={email}
              onChange={({target}) => setEmail(target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              type='number' label='Quantia por mês' 
              placeholder='Adicione um valor' fullWidth
              value={value}
              onChange={({target}) => setValue(Number(target.value) > 0 && Number(target.value) <= 100 ? target.value : value  )}
            />
          </Grid>
        </Grid>
        <DialogActions sx={ { mt: 5 } }>
          <Button color={'secondary'} onClick={() => setPetSelected(null)} >Cancelar</Button>
          <Button variant={'contained'} onClick={() => adopt()}>Confirmar adoção</Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={message.length > 0} message={message} autoHideDuration={2500} onClose={()=> setMessage('')}/>
    </div>
  )
}

export default Home;
