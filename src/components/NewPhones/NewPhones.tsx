import React, { useContext, useEffect } from 'react';
import { getNewPhones } from '../api/phones';
import { Card } from '../Card';
import { PhoneContext } from '../PhoneContext/PhoneContext';

export const NewPhones: React.FC = () => {
  const { phones, setPhones } = useContext(PhoneContext);

  const getNewPhonesFromServer = async () => {
    const newPhonesFromServer = await getNewPhones();

    setPhones(newPhonesFromServer);
  };

  useEffect(() => {
    getNewPhonesFromServer();
  }, []);

  const visiblePhones = phones.slice(0, 4);

  return (
    <div className="new-phones">
      <div className="new-phones__container">
        <h3>Brand new models</h3>

        {visiblePhones.map((phone) => (
          <Card key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
};
