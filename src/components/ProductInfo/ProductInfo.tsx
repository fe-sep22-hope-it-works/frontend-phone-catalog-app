import React, { useState, useCallback, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Loader } from '../Loader';
import { ProductLayout } from './ProductLayout';
import {
  getPhoneById,
  getPhoneFull,
  getSimilarPhones,
} from '../api/phones';
import { PhoneFullInfo } from '../../types/PhoneFullInfo';
import { ProductsSlider } from '../ProductsSlider';
import { Phone } from '../../types/Phone';

export const ProductInfo = () => {
  const phoneID = useParams();

  const location = useLocation();
  const similarId = +location.pathname
    .slice(location.pathname.lastIndexOf('/') + 1);

  const [phone, setPhone] = useState<Phone | null>(null);
  const [currentPhoneFull, setCurrentPhoneFull] = useState<PhoneFullInfo>();
  const [similarPhones, setSimilarPhones] = useState<Phone[]>();
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(location.pathname);

  const getPhoneFromServer = useCallback(async (id: number) => {
    try {
      setLoading(true);
      const phoneFromServer = await getPhoneById(id);

      setPhone(phoneFromServer);
      // eslint-disable-next-line
    } catch (error: any) {
      window.console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, [phone]);

  const getSimilarPhonesFromServer = useCallback(async (id: number) => {
    try {
      setLoading(true);
      const phonesFromServer = await getSimilarPhones(id);

      setSimilarPhones(phonesFromServer);
      // eslint-disable-next-line
    } catch (error: any) {
      window.console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, [phone]);

  const getPhoneFullFromServer = useCallback(async (id: number) => {
    try {
      setLoading(true);
      const phoneFromServer = await getPhoneFull(id);

      setCurrentPhoneFull(phoneFromServer);
      // eslint-disable-next-line
    } catch (error: any) {
      window.console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, [phone]);

  useEffect(() => {
    if (phoneID.phoneId) {
      getPhoneFromServer(+phoneID.phoneId);
      getPhoneFullFromServer(+phoneID.phoneId);
      getSimilarPhonesFromServer(+phoneID.phoneId);
    }
  }, []);

  useEffect(() => {
    if (phone) {
      setCurrentPhoneFull(currentPhoneFull);
      setSimilarPhones(similarPhones);
    }
  }, [phone]);

  if (url !== location.pathname) {
    setUrl(location.pathname);
  }

  useEffect(() => {
    getPhoneFromServer(similarId);
  }, [url]);

  if (loading) {
    return <Loader />;
  }

  return (
    currentPhoneFull && similarPhones && phone
      ? (
        <>
          <ProductLayout
            phoneFullInfo={currentPhoneFull}
            currentPhone={phone}
          />
          <ProductsSlider
            products={similarPhones}
            title="You may also like"
          />
        </>
      )
      : <h1>Some error</h1>
  );
};
