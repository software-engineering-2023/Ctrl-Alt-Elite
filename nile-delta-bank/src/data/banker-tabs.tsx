import ViewAllClients from '../Screens/Banker Page/ViewAllClients'
import ViewAllReports from '../Screens/Banker Page/ViewAllReports'
import ViewAllRequests from '../Screens/Banker Page/ViewAllRequests'

export const view_clients_tabs = [
  {
    id: 1,
    title: 'All Clients',
    page: <ViewAllClients />,
  }
]
export const view_reports_tabs = [
  {
    id: 1,
    title: 'All Reports',
    page: <ViewAllReports />,
  }
]
export const view_requests_tabs = [
  {
    id: 1,
    title: 'Loan Requests',
    page: <ViewAllRequests />,
  },
  {
    id: 2,
    title: 'Credit Requests',
    page: <ViewAllRequests />,
  }
]