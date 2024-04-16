import Pets from '../pages/Pets/Pets';
import Medications from '../pages/Medications/Medications';

export const ROUTES = {
  HOME: '/',
  PETS: '/pets',
  MEDICATIONS: '/medications',
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
