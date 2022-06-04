import { Button } from "@mui/material";
import { Pet } from "../../../data/@types/Pet";
import { TextService } from "../../../data/services/TextService";
import { Description, Informations, List, ListItem, Name, Photo } from "./List.style";

interface ListContainerProps {
  pets: Pet[];
  onSelect: (pet: Pet) => void;
}

export default function ListContainer({ pets, onSelect }: ListContainerProps) {

  const maxLengthText = 200;

  return (
    <>
      <List>
        {
          pets.map( (pet) => (
            <ListItem key={pet.id}>
              <Photo src={pet.photo}/>
              <Informations>
                <Name>{pet.name}</Name>
                <Description>
                  { TextService.limitText(pet.description, maxLengthText) }
                </Description>
                <Button variant={'contained'} fullWidth onClick={() => onSelect(pet)} >Adotar</Button>
              </Informations>
            </ListItem>
          ))
        }
      </List>
    </>
  );
}