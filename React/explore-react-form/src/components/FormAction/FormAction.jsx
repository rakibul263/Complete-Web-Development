import React from 'react';

const handelFromData = (formData) => {
    console.log(formData.get('name'));
    console.log(formData.get('email'));
}

const FormAction = () => {
    return (
        <div>
            <form action={handelFromData}>
                <input type="text" placeholder='Your Name' name='name' /> <br />
                <input type="email" placeholder='Your Email' name='email' /> <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default FormAction;