import TestComponent from '@msp/components/TestComponent';
import RoutingTestComponent from '@msp/components/RoutingTestComponent';

interface RouteProps {
  path: string;
  element: React.FC;
}

const routes: RouteProps[] = [
  { path: '/', element: TestComponent },
  { path: '/test', element: RoutingTestComponent },
];

export default routes;
