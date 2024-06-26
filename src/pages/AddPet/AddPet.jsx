import styled from 'styled-components';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Label from '../../components/Label/Label';
import { useState } from 'react';
import { ROUTES } from '../../routes';
import { useNavigate } from 'react-router-dom';
import { addPet } from '../../api/pets';

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

const AddPet = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        name: name,
        dob: date,
        client_email: email,
      };

      await addPet(data);
      alert('Pet was successfully added.');
      navigate(ROUTES.PETS);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header>
        <Heading>Add Pet</Heading>
      </Header>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name">Name:</Label>
            <Input
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              placeholder="Pet name"
              value={name}
              required
            />
          </div>
          <div>
            <Label htmlFor="date">Date of birth:</Label>
            <Input
              onChange={(e) => setDate(e.target.value)}
              type="date"
              id="date"
              placeholder="Pet date of birth"
              value={date}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email:</Label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Client email"
              value={email}
              required
            />
          </div>
          <Button $primary type="submit">
            ADD
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default AddPet;
