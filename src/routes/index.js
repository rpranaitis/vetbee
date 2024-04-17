import Pets from '../pages/Pets/Pets';
import Medications from '../pages/Medications/Medications';
import AddMedication from '../pages/AddMedication/AddMedication';
import Log from '../pages/Log/Log';
import AddPet from '../pages/AddPet/AddPet';
import AddLog from '../pages/AddLog/AddLog';

export const ROUTES = {
  HOME: '/',
  PETS: '/pets',
  ADD_PET: '/pets/add',
  MEDICATIONS: '/medications',
  ADD_MEDICATION: '/medications/add',
  LOG: '/log/:id',
  ADD_LOG: '/logs/add',
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
    path: ROUTES.ADD_PET,
    Component: AddPet,
  },
  {
    path: ROUTES.MEDICATIONS,
    Component: Medications,
  },
  {
    path: ROUTES.ADD_MEDICATION,
    Component: AddMedication,
  },
  {
    path: ROUTES.LOG,
    Component: Log,
  },
  {
    path: ROUTES.ADD_LOG,
    Component: AddLog,
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
