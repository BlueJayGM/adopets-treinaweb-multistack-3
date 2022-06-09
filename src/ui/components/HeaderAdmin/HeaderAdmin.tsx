import { Box, Link } from "@mui/material";
import NextLink from 'next/link';
import { HeaderAdminContainer, LinksContainer, Logo } from "./HeaderAdmin.style";

function HeaderAdmin() 
{
  return (
    <HeaderAdminContainer>
      <div>
        <Logo src={'/img/logo.svg'} />
        <LinksContainer>
          <Link component={NextLink} href={'/pets/register'}>
            <a>Cadastrar Pet</a>
          </Link>
          <Link component={NextLink} href={'/pets/report'}>
            <a>
              Relatório{' '}
              <Box component={'span'} sx={{display: {sm: 'initial', xs: 'none'}}}>
                de Adoção
              </Box>
            </a>
          </Link>
        </LinksContainer>
      </div>
    </HeaderAdminContainer>
  );
}

export default HeaderAdmin;