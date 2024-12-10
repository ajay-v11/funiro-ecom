import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import axios, {AxiosError} from 'axios';
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
import {signupSchema, signupType} from '@appollohera/furnero';
import {BACKEND_URL} from '@/config';

export function SignupForm() {
  const form = useForm<signupType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      repassword: '',
    },
    mode: 'onSubmit',
  });

  const navigate = useNavigate();

  // 2. Define a submit handler.
  async function onSubmit(values: signupType) {
    console.log('buttonclid');
    try {
      const response = await axios.post(`${BACKEND_URL}user/signup`, values);
      console.log(response.data);
      //const jwt = `Bearer ${response.data}`;
      //localStorage.setItem('token', jwt);

      navigate('/shop');
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          console.error('Server Error:', error.response.data);
        } else {
          console.error('Network or Client Error:', error.message);
        }
      } else {
        console.error('Unexpected Error:', (error as Error).message);
      }
    }
    console.log(values);
  }
  // ...

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(
            (values) => {
              console.log('Validated Values:', values);
              onSubmit(values);
            },
            (errors) => {
              console.error('Validation Errors:', errors);
            }
          )}
          className='space-y-8'>
          <FormField
            control={form.control}
            name='name'
            render={({field}) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter your Name'
                    className='bg-white'
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({field}) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter your email'
                    className='bg-white'
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
                    placeholder='Create a new password'
                    className='bg-white'
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='repassword'
            render={({field}) => (
              <FormItem>
                <FormLabel>Verify Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Repeat your Password'
                    className='bg-white'
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type='submit'
            onClick={() => {
              console.log('Button clicked');
            }}>
            Submit
          </Button>
        </form>
      </Form>
      <p className='py-5'>
        Already have an account?{' '}
        <span className='text-blue-400 px-2 '>
          <a href='#signup'> Login</a>
        </span>
      </p>
    </div>
  );
}
