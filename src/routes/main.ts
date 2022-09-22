import RoutingTestComponent from '../components/RoutingTestComponent';
import TestComponent from '../components/TestComponent';

interface RouteProps {
  path: string;
  element: React.FC;
}

const routes: RouteProps[] = [
  { path: '/', element: TestComponent },
  { path: '/test', element: RoutingTestComponent },
];

export default routes;
