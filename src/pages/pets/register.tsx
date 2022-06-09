import { Button, Grid, Paper, Snackbar, TextField } from "@mui/material";
import { NextPage } from "next";
import { useRegister } from "../../data/hooks/pages/pets/useRegister";
import TitleContainer from "../../ui/components/Title/Title.component";


const Register: NextPage = () => {

  const {
    name, description, photo, 
    setName, setDescription, setPhoto, 
    register, message, setMessage
  } = useRegister();

  return (
    <>
      <TitleContainer 
        title={'Cadastro de Pets para Adoção'}
        subtitle={'Preencha os dados do novo Pet'}
      />
      <Paper sx={ { maxWidth: 970, mx: 'auto', p: 5} } >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField 
              label={'Nome'} 
              placeholder={'Digite o nome do pet'} 
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label={'Descrição'} 
              multiline 
              fullWidth 
              rows={4} 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label={'Foto'} 
              placeholder={'Digite a url da imagem'} 
              fullWidth 
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
            
            <Button 
              variant={'contained'} 
              color={'secondary'} 
              sx={{mt: 2}} 
              component={'a'}
              href={'https://imgur.com/upload'}
              target={'_blank'}
            >
              Adicionar imagem
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center'}}>
            <Button 
              variant={'contained'} 
              fullWidth
              sx={{maxWidth: { md: 200 }, mt: 4}}
              onClick={() => register()}
            >
              Cadastrar pet
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Snackbar 
        open={ message.length > 0 } 
        autoHideDuration={2500}
        message={message}
        onClose={() => setMessage('')}
      />
    </>
  )
}

export default Register