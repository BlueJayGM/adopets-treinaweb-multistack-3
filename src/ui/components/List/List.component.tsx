import { Button } from "@mui/material";
import { Pet } from "../../../data/@types/Pet";
import { TextService } from "../../../data/services/TextService";
import { Description, Informations, List, ListItem, Name, Photo } from "./List.style";

interface ListContainerProps {
  pets: Pet[];
}

export default function ListContainer({ pets }: ListContainerProps) {

  const maxLengthText = 200;

  return (
    <>
      <List>
        {
          pets.map( (pet) => (
            <ListItem key={pet.id}>
              <Photo src={pet.image_url}/>
              <Informations>
                <Name>{pet.name}</Name>
                <Description>
                  { TextService.limitText(pet.description, maxLengthText) }
                </Description>
                <Button variant={'contained'} fullWidth >Adotar</Button>
              </Informations>
            </ListItem>
          ))
        }
      </List>
    </>
  );
}