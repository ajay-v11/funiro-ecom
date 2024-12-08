import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';

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

const formSchema = z
  .object({
    firstName: z.string().min(2, {message: 'enter a valid name'}),
    email: z.string().email(),
    password: z
      .string()
      .min(8, {message: 'password should be atleast 8 characters'}),
    repassword: z
      .string()
      .min(8, {message: 'password should be atleast 8 characters'}),
  })
  .refine((data) => data.password === data.repassword, {
    message: "Passwords don't match.",
    path: ['repassword'],
  });

export function SignupForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      email: '',
      password: '',
      repassword: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  // ...

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='firstName'
            render={({field}) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='Enter your Name' {...field} />
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
                  <Input placeholder='Enter your email' {...field} />
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
                  <Input placeholder='Create a new password' {...field} />
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
                  <Input placeholder='Repeat your Password' {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Submit</Button>
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
