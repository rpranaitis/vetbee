import styled from 'styled-components';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import { fetchMeds } from '../../api/meds';
import { useEffect, useState } from 'react';
import { ROUTES } from '../../routes';
import { Link } from 'react-router-dom';

const Heading = styled.h2`
  font-weight: normal;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const MedicationsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const MedicationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: 1px solid silver;
  flex-basis: 100%;
  padding: 20px;
  text-align: center;

  @media only screen and (min-width: 576px) {
    flex-basis: calc(50% - 10px);
  }

  @media only screen and (min-width: 992px) {
    flex-basis: calc(33.33% - 13.5px);
  }
`;

const MedicationHeading = styled.h3`
  font-weight: normal;
`;

const MedicationDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-size: 14px;
`;

const Medications = () => {
  const [meds, setMeds] = useState([]);

  useEffect(() => {
    fetchMeds().then((response) => setMeds(response));
  }, []);

  return (
    <>
      <Header>
        <Heading>Medications List</Heading>
        <ButtonsWrapper>
          <Link to={ROUTES.ADD_MEDICATION}>
            <Button $primary>ADD MEDICATION</Button>
          </Link>
        </ButtonsWrapper>
      </Header>
      <MedicationsContainer>
        {meds
          .filter((med) => med.name)
          .map((med) => {
            return (
              <MedicationBox key={med.id}>
                <MedicationHeading>{med.name}</MedicationHeading>
                <MedicationDetails>
                  <span>{med.description}</span>
                </MedicationDetails>
              </MedicationBox>
            );
          })}
      </MedicationsContainer>
    </>
  );
};

export default Medications;
