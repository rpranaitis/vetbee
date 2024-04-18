import styled from 'styled-components';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Label from '../../components/Label/Label';
import Textarea from '../../components/Textarea/Textarea';
import { useState } from 'react';
import { ROUTES } from '../../routes';
import { useLocation, useNavigate, generatePath } from 'react-router-dom';
import { addLog } from '../../api/logs';

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

const AddLog = () => {
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');

  const location = useLocation();
  const { id } = location.state;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        pet_id: id,
        status: status,
        description: description,
      };

      await addLog(data);
      alert('Log was successfully added.');
      navigate(generatePath(ROUTES.LOG, { id: id }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header>
        <Heading>Add Log</Heading>
      </Header>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="status">Status:</Label>
            <Input
              onChange={(e) => setStatus(e.target.value)}
              type="text"
              id="status"
              placeholder="Pet status"
              value={status}
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Description:</Label>
            <Textarea
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              placeholder="Status description"
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

export default AddLog;
