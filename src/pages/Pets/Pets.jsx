import styled from 'styled-components';
import Button from '../../components/Button/Button';
import { fetchPets } from '../../api/pets';
import { useEffect, useState } from 'react';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const Heading = styled.h2`
  font-weight: normal;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const PetsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const PetBox = styled.div`
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

const PetHeading = styled.h3`
  font-weight: normal;
`;

const PetDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-size: 14px;
`;

const Pets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchPets().then((response) => setPets(response));
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <Header>
        <Heading>Pet List</Heading>
        <ButtonsWrapper>
          <Button $primary>ADD PET</Button>
        </ButtonsWrapper>
      </Header>
      <PetsContainer>
        {pets.map((pet) => {
          return (
            <PetBox key={pet.id}>
              <PetHeading>{pet.name}</PetHeading>
              <PetDetails>
                <span>{formatDate(pet.dob)}</span>
                <span>{pet.client_email}</span>
              </PetDetails>
              <ButtonsWrapper>
                <Button $primary>VIEW LOG</Button>
                <Button>DELETE</Button>
              </ButtonsWrapper>
            </PetBox>
          );
        })}
      </PetsContainer>
    </>
  );
};

export default Pets;
