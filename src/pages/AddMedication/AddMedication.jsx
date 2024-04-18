import styled from 'styled-components';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Label from '../../components/Label/Label';
import Textarea from '../../components/Textarea/Textarea';
import { addMed } from '../../api/meds';
import { useState } from 'react';
import { ROUTES } from '../../routes';
import { useNavigate } from 'react-router-dom';

const Heading = styled.h2`
  font-weight: normal;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 75%;
  }

  @media only screen and (min-width: 992px) {
    width: 50%;
  }
`;

const AddMedication = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = { name, description };
      await addMed(data);
      alert('Medication was successfully added.');
      navigate(ROUTES.MEDICATIONS);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header>
        <Heading>Add Medication</Heading>
      </Header>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Name:</Label>
            <Input
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              placeholder="Medication name"
              value={name}
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Description:</Label>
            <Textarea
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              placeholder="Medication description"
              value={description}
              required
            ></Textarea>
          </div>
          <Button $primary type="submit">
            ADD
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default AddMedication;
