'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import GithubSignInButton from './github-auth-button';
import GoogleSignInButton from './google-auth-button';

const formSchema = z.object({
  email: z
    .string()
    .email({ message: 'Enter a valid email address' })
    .refine((val) => val.endsWith('@fpt.edu.vn'), {
      message: 'Vui lòng sử dụng mail sinh viên'
    }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' }) // Adjust minimum length as needed
  // .regex(/[A-Z]/, {
  //   message: 'Password must contain at least one uppercase letter'
  // }) // Example requirement
  // .regex(/[a-z]/, {
  //   message: 'Password must contain at least one lowercase letter'
  // }) // Example requirement
  // .regex(/[0-9]/, { message: 'Password must contain at least one number' }) // Example requirement
});

type UserFormValue = z.infer<typeof formSchema>;

export default function UserAuthForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');
  const [loading, startTransition] = useTransition();
  const defaultValues = {
    email: 'vuthase172485@fpt.edu.vn',
    password: '123456'
  };
  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues
  });

  const onSubmit = async (data: UserFormValue) => {
    startTransition(() => {
      signIn('credentials', {
        email: data.email,
        callbackUrl: callbackUrl ?? '/dashboard'
      });
    });
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="h-[100px]">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Nhập email"
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="absolute text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="h-[100px]">
                <FormLabel>Mật khẩu</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    disabled={loading}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="absolute text-xs" />
              </FormItem>
            )}
          />
          <Button disabled={loading} className="ml-auto w-full" type="submit">
            Đăng nhập
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Hoặc</span>
        </div>
      </div>
      <GithubSignInButton />
      <GoogleSignInButton />
    </>
  );
}
