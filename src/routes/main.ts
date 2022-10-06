import Overview from '@msp/components/Overview'

interface RouteProps {
  path: string
  element: React.FC
}

const routes: RouteProps[] = [{ path: '/', element: Overview }]

export default routes
