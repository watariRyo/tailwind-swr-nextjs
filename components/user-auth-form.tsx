'use client';

import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { Icon } from './icon';

export default function UserAuthForm() {
    const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);

    return (
    <div className='grid gap-6'>
        <form>
        <div className='grid gap-2'>
            <div className='grid gap-1'>
                <Label htmlFor='email'>メールアドレス</Label>
                <Input id='email' placeholder='name@example.com' type='email' />
            </div>
            <div className='grid gap-1'>
                <Label htmlFor='password'>パスワード</Label>
                <Input id='password' type='password' />
            </div>
            <button className={cn(buttonVariants())}>
                メールアドレスでログイン
            </button>
        </div>
        </form>

        <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs'>
            <span className='text-muted-foreground px-2 bg-background'>
            または
            </span>
        </div>
        </div>
        <div className='flex flex-col gap-2'>
        <button
            className={cn(buttonVariants({ variant: 'outline' }))}
            onClick={() => {
            setIsGoogleLoading(true);
            signIn('google');
            }}
        >
            {isGoogleLoading ? (
            <Icon.spinner className='mr- animate-spin' />
            ) : (
            <span className='mr-2'>
                <Icon.google />
            </span>
            )}
            Google
        </button>
        </div>
    </div>
    );
}