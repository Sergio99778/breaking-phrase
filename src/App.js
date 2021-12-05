import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

//Components
import Phrase from './components/Phrase';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.3s ease;
  &:hover {
    cursor: pointer;
    background-size: 400;
  }
`;

const uri = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';

function App() {
  const [phrase, setPhrase] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const api = await fetch(uri);
    const data = await api.json();
    setPhrase(data[0]);
  };

  return (
    <Container>
      <Phrase phrase={phrase} />
      <Button onClick={getData}>Get Phrase</Button>
    </Container>
  );
}

export default App;
