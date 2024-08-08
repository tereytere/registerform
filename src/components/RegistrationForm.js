import React, { useState, useRef } from 'react';

export default function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [useremail, setUseremail] = useState('');

    const formRef = useRef(null);

    function handleChange(setter) {
        return (event) => {
            setter(event.target.value);
        };
    }

    function handleSubmit(event) {
        event.preventDefault();

        // Clear state variables
        setUsername('');
        setUseremail('');

        // Reset the form
        if (formRef.current) {
            formRef.current.reset();
        }
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Nombre de usuario</label>
                <input type="text" name="username" value={username} onChange={handleChange(setUsername)} />
                <p>You typed: {username}</p>
            </div>

            <div>
                <label htmlFor="useremail">Correo electrónico</label>
                <input type="text" name="useremail" value={useremail} onChange={handleChange(setUseremail)} />
                <p>You typed: {useremail}</p>
            </div>

            <div>
                <input type="submit" value="Enviar" />
            </div>
        </form>
    )
}
