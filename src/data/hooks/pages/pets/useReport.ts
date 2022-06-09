import React from 'react';
import { Report } from '../../../@types/Report';
import { ApiService } from '../../../services/ApiService';

export function useReport()
{
  const [reportList, setReportList] = React.useState<Report[]>([]);

  React.useEffect(() => {
    ApiService.get('/adoption')
    .then((response) => {
      setReportList(response.data);
    })
  }, []);

  return {
    reportList
  }
}