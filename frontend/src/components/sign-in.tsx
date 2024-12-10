'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {Button} from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {signinSchema, singinType} from '@appollohera/furnero';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {BACKEND_URL} from '@/config';

export function Signin() {
  const form = useForm<singinType>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const navigate = useNavigate();

  // submit handler.
  async function onSubmit(values: singinType) {
    try {
      const response = await axios.post(`${BACKEND_URL}user/signin`, values);
      console.log(response);
      const jwt = `Bearer ${response.data.token}`;
      localStorage.setItem('token', jwt);
      console.log('signin succesfull');

      navigate('/shop');
    } catch (e) {
      console.log('can not signin', e);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='email'
            render={({field}) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    className='bg-white'
                    placeholder='Enter your email'
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({field}) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    className='bg-white'
                    placeholder='Enter your Password'
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button className='hover:bg-slate-600' type='submit'>
            Submit
          </Button>
        </form>
      </Form>
      <p className='py-5'>
        Don't have an Account?{' '}
        <span className='text-blue-400 px-2 '>
          <a href='#signup'> Signup</a>
        </span>
      </p>
    </div>
  );
}
