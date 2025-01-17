import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Snack from './Snack';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

export default function Snacks() {
  const [snacks, setSnacks] = useState([]);
 
  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((res) => {
        setSnacks(res.data.payload);
        console.log('this is', snacks);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [snacks]);

  return (
    <div className='snacks'>
      <h1 className='title-snacks'>Snacks</h1>
      <section className='all-snacks'>
        {snacks?.map((snack) => {
          return <Snack key={snack.id} snack={snack} />;
        })}
      </section>
      <br />
    </div>
  );
}
