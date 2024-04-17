import styled from 'styled-components';
import Button from '../Button/Button';
import { fetchLogs } from '../../api/logs';
import { useEffect, useState } from 'react';
import { formatDate } from '../../utils/functions';
import { useParams } from 'react-router-dom';

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

const LogsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const LogBox = styled.div`
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

const LogHeading = styled.h3`
  font-weight: normal;
`;

const LogDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-size: 14px;
`;

const Log = () => {
  const { id } = useParams();

  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchLogs(id).then((response) => setLogs(response));
  }, []);

  return (
    <>
      <Header>
        <Heading>{logs && logs.length ? logs[0]['name'] + ': ' : ''} Health Records</Heading>
        <ButtonsWrapper>
          <Button $primary>ADD PRESCRIPTION</Button>
          <Button>ADD LOG</Button>
        </ButtonsWrapper>
      </Header>
      <LogsContainer>
        {logs.map((log, index) => {
          return (
            <LogBox key={index}>
              <LogHeading>{log.status}</LogHeading>
              <LogDetails>
                <span>{log.description}</span>
                <span>{formatDate(log.dob)}</span>
              </LogDetails>
            </LogBox>
          );
        })}
      </LogsContainer>
    </>
  );
};

export default Log;
