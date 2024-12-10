import {BACKEND_URL} from '@/config';
import {productLoading, productsAtom} from '@/lib/atoms/cartatoms';
import axios from 'axios';
import {useEffect} from 'react';
import {useRecoilState, useSetRecoilState} from 'recoil';

export const useProduct = () => {
  const setProducts = useSetRecoilState(productsAtom);
  const [loading, setLoading] = useRecoilState(productLoading);
  useEffect(() => {
    async function fetchdata() {
      setLoading(true);
      const jwt = localStorage.getItem('token');
      try {
        const response = await axios.get(`${BACKEND_URL}product/allItems`, {
          headers: {Authorization: jwt},
        });
        setProducts(response.data);
        setLoading(false);
      } catch (e) {
        console.log('can not fetch', e);
      }
    }
    fetchdata();
  }, []);
  return loading;
};
