"use client"

import {useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import { z } from 'zod';

const schema = z.object({
    name: z.string().min(3,"minimo 3 caracteres").max(20, 'Must be 20 characters or less'),
    age: z.number().min(10),
});

export default function Page() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    return (
        <form onSubmit={handleSubmit((d) => console.log(d))}>
            <input {...register('name')} />
            {errors.name?.message && <p>{errors.name?.message}</p>}
            <input type="number" {...register('age', { valueAsNumber: true })} />
            {errors.age?.message && <p>{errors.age?.message}</p>}
            <input type="submit" />
        </form>
    );
}
