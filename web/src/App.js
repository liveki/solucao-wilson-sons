import React, { useEffect, useState } from 'react';
import { firestore } from './services/api';

const App = () => {
  const [tugBoats, setTugBoats] = useState({});

  useEffect(() => {
    function loadTugboat() {
      firestore
        .collection('rebocadores')
        .doc('QbsnExtMeLt2kWYdFO9e')
        .get()
        .then(response => {
          setTugBoats(response.data());
        });
    }

    loadTugboat();
  }, []);

  return (
    <>
      <h1>Trazendo dados do banco</h1>

      <p>Rebocador 1</p>
      <p>Capacidade total:{tugBoats.capacidadeTotal}</p>
      <p>Comprimento:{tugBoats.comprimento}</p>
      <p>Potência:{tugBoats.potencia}</p>
    </>
  );
};

export default App;
