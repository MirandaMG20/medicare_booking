import React, { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

const Profile = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        bio: '',
        gender: '',
        specialization: '',
        fee: 0,
        qualifications: [{
            startDate: '',
            endDate: '',
            degree: '',
            university: '',
        }],
        experiences: [{
            startDate: '',
            endDate: '',
            position: '',
            hospital: '',
        }],
        timeSlots: [],
    })

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
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

                        <div>
                            <p className='form__label'>Fee*</p>
                            <input
                                type="number"
                                name='fee'
                                placeholder='$'
                                value={formData.fee}
                                className='form__input'
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>

                <div className='mb-5'>
                    <p className='form__label'>Qualifications*</p>
                    {formData.qualifications?.map((item, index) => <div key={index}>
                        <div>
                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <p className="form__label">Starting Date*</p>
                                    <input
                                        type="date"
                                        name='startDate'
                                        value={item.startDate}
                                        className='form__input'
                                    />
                                </div>
                                <div>
                                    <p className="form__label">Ending Date*</p>
                                    <input
                                        type="date"
                                        name='endDate'
                                        value={item.endDate}
                                        className='form__input'
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5 mt-5">
                                <div>
                                    <p className="form__label">Degree*</p>
                                    <input
                                        type="text"
                                        name='degree'
                                        value={item.degree}
                                        className='form__input'
                                    />
                                </div>
                                <div>
                                    <p className="form__label">University*</p>
                                    <input
                                        type="text"
                                        name='university'
                                        value={item.university}
                                        className='form__input'
                                    />
                                </div>
                            </div>

                            <button className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer'>
                                <AiOutlineDelete />
                            </button>
                        </div>
                    </div>
                    )}

                    <button className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
                        Add Qualification
                    </button>
                </div>

                <div className='mb-5'>
                    <p className='form__label'>Experiences*</p>
                    {formData.experiences?.map((item, index) => <div key={index}>
                        <div>
                            <div className="grid grid-cols-2 gap-5">
                                <div>
                                    <p className="form__label">Starting Date*</p>
                                    <input
                                        type="date"
                                        name='startDate'
                                        value={item.startDate}
                                        className='form__input'
                                    />
                                </div>
                                <div>
                                    <p className="form__label">Ending Date*</p>
                                    <input
                                        type="date"
                                        name='endDate'
                                        value={item.endDate}
                                        className='form__input'
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5 mt-5">
                                <div>
                                    <p className="form__label">Position*</p>
                                    <input
                                        type="text"
                                        name='position'
                                        value={item.position}
                                        className='form__input'
                                    />
                                </div>
                                <div>
                                    <p className="form__label">Hospital*</p>
                                    <input
                                        type="text"
                                        name='hospital'
                                        value={item.hospital}
                                        className='form__input'
                                    />
                                </div>
                            </div>

                            <button className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer'>
                                <AiOutlineDelete />
                            </button>
                        </div>
                    </div>
                    )}

                    <button className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
                        Add Experiences
                    </button>
                </div>

                <div className='mb-5'>
                    <p className='form__label'>Time Slots*</p>
                    {formData.timeSlots?.map((item, index) => <div key={index}>
                        <div>
                            <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                                <div>
                                    <p className="form__label">Starting Date*</p>
                                    <input
                                        type="date"
                                        name='startDate'
                                        value={item.startDate}
                                        className='form__input'
                                    />
                                </div>
                                <div>
                                    <p className="form__label">Ending Date*</p>
                                    <input
                                        type="date"
                                        name='endDate'
                                        value={item.endDate}
                                        className='form__input'
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5 mt-5">
                                <div>
                                    <p className="form__label">Position*</p>
                                    <input
                                        type="text"
                                        name='position'
                                        value={item.position}
                                        className='form__input'
                                    />
                                </div>
                                <div>
                                    <p className="form__label">Hospital*</p>
                                    <input
                                        type="text"
                                        name='hospital'
                                        value={item.hospital}
                                        className='form__input'
                                    />
                                </div>
                            </div>

                            <button className='bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer'>
                                <AiOutlineDelete />
                            </button>
                        </div>
                    </div>
                    )}

                    <button className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">
                        Add Experiences
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Profile