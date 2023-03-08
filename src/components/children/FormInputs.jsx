const FormInputs = ({ register, errors }) => {

    return (
        <div className="flex flex-col gap-7">

            <div className="relative">
                <input
                    type='text'
                    placeholder='Name'
                    className='inputStyle'
                    {...register('sender_name', {
                        required: 'Empty field not allowed',
                    })}
                />
                {errors['sender_name'] && (
                    <span className="absolute -top-6 right-0 text-red-400">
                        {errors['sender_name']?.message}
                    </span>
                )}
            </div>

            <div className="relative">
                <input
                    type='text'
                    placeholder='Email'
                    className='inputStyle'
                    {...register('sender_email', {
                        required: 'Empty field not allowed',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address...'
                        }
                    })}
                />
                {errors['sender_email'] && (
                    <span className="absolute -top-6 right-0 text-red-400">
                        {errors['sender_email']?.message}
                    </span>
                )}
            </div>

            <div className="relative">
                <textarea
                    rows='6'
                    name='sender_message'
                    placeholder='Message'
                    className='inputStyle resize-none'
                    {...register('sender_message', {
                        required: 'Empty field not allowed',
                    })}
                />
                {errors['sender_message'] && (
                    <span className="absolute -top-6 right-0 text-red-400">
                        {errors['sender_message']?.message}
                    </span>
                )}
            </div>

        </div>
    )
}

export default FormInputs