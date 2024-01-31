import React, { useState } from 'react'

const Profile = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        bio: '',
        gender: '',
        specialization: '',
    })

    const handleInputChange = e => {

    }

    return (
        <div>
            <h2 className='text-headingColor font-bold text-[24px] leading-9 mb-10'>
                Profile Information
            </h2>

            <form action="">
                <div className="mb-5">
                    <p className="form__label">Name*</p>
                    <input
                        type="text"
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder='Full Name'
                        className='form__input'
                    />
                </div>
                <div className="mb-5">
                    <p className="form__label">eMail*</p>
                    <input
                        type="email"
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder='eMail'
                        className='form__input'
                        readOnly
                        aria-readonly
                        disabled='true'
                    />
                </div>
                <div className="mb-5">
                    <p className="form__label">Phone*</p>
                    <input
                        type="number"
                        name='phone'
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder='Phone Number'
                        className='form__input'
                    />
                </div>
                <div className="mb-5">
                    <p className="form__label">Bio*</p>
                    <input
                        type="Text"
                        name='bio'
                        value={formData.bio}
                        onChange={handleInputChange}
                        placeholder='Bio'
                        className='form__input'
                        maxLength={200}
                    />
                </div>

                <div className="mb-5">
                    <div className='grid grid-cols-3 gap-5 mb-[30px]'>
                        <div>
                            <p className='form__label'>Gender*</p>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                className='form__input py-3.5'
                            >
                                <option value="">Select:</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <p className='form__label'>Specialization*</p>
                            <select
                                name="specialization"
                                value={formData.specialization}
                                onChange={handleInputChange}
                                className='form__input py-3.5'
                            >
                                <option value="">Select:</option>
                                <option value="surgeon">Surgeon</option>
                                <option value="neurologist">Neurologist</option>
                                <option value="dermatologist">Dermatologist</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Profile