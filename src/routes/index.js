import Pets from '../pages/Pets/Pets';
import Medications from '../pages/Medications/Medications';
import Log from '../components/Log/Log';

export const ROUTES = {
  HOME: '/',
  PETS: '/pets',
  MEDICATIONS: '/medications',
  LOG: '/log/:id',
};

export const routes = [
  {
    path: ROUTES.HOME,
    Component: Pets,
  },
  {
    path: ROUTES.PETS,
    Component: Pets,
  },
  {
    path: ROUTES.MEDICATIONS,
    Component: Medications,
  },
  {
    path: ROUTES.LOG,
    Component: Log,
  }
];

export const navigationBarRoutes = [
  {
    name: 'Pets',
    path: ROUTES.PETS,
  },
  {
    name: 'Medications',
    path: ROUTES.MEDICATIONS,
  },
];
