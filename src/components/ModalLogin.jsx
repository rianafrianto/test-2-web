import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useForm } from 'react-hook-form'; // Optional for form handling

const ModalLogin = ({ isOpen, onClose }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle login logic here
        onClose(); // Close modal after submission
    };

    return (
        <div
            className={`fixed inset-0 bg-primary bg-opacity-50 z-50 ${isOpen ? 'flex' : 'hidden'} items-center justify-center`}
            onClick={onClose}
        >
            <div
                className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative'
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className='absolute top-4 right-4 text-gray-600 hover:text-gray-900'
                    onClick={onClose}
                >
                    <FaTimes className='w-6 h-6' />
                </button>
                <h2 className='text-3xl font-bold text-gray-900 mb-6'>Login to Your Account</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                    <div>
                        <label htmlFor='email' className='block text-gray-700 text-sm font-medium'>Email</label>
                        <input
                            type='email'
                            id='email'
                            {...register('email', { required: 'Email is required' })}
                            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out'
                        />
                        {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor='password' className='block text-gray-700 text-sm font-medium'>Password</label>
                        <input
                            type='password'
                            id='password'
                            {...register('password', { required: 'Password is required' })}
                            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out'
                        />
                        {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>}
                    </div>
                    <button
                        type='submit'
                        className='w-full btnPrimary'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ModalLogin;
