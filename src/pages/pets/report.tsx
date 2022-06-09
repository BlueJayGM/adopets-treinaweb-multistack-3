import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { NextPage } from "next";
import { useReport } from "../../data/hooks/pages/pets/useReport";
import TitleContainer from "../../ui/components/Title/Title.component";

const Report:NextPage = () => {

  const { reportList } = useReport();

  return (
    <>
      <TitleContainer
        title={'Relatório de Adoção'}
        subtitle={'Veja a lista de pets adotados'}
      />
      <TableContainer 
        component={Paper}
        sx={{maxWidth: 830, mx: 'auto', p: { xs: 3, md: 5 }}}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pet</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align={'right'}>Valor Mensal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              reportList.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>{report.pet.name}</TableCell>
                  <TableCell>{report.email}</TableCell>
                  <TableCell align={'right'}>{report.value}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Report;