import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { useLocation } from 'react-router-dom'
import { getProperty } from '../../utils/api'
import { PuffLoader } from 'react-spinners'
import { AiFillHeart, AiTwotoneCar } from 'react-icons/ai'
import { FaShower } from 'react-icons/fa'
import { MdMeetingRoom, MdLocationPin } from 'react-icons/md'
import './Property.css'
import Map from '../../components/Map/Map'
import userAuthCheck from '../../hooks/userAuthCheck'
import { useAuth0 } from '@auth0/auth0-react'
import BookingModal from '../../components/BookingModal/BookingModal'
const Property = () => {
    const { pathname } = useLocation()
    const id = pathname.split("/").slice(-1)[0];
    const { data, isLoading, isError } = useQuery(["resd", id], () => 
    getProperty(id));

    const [modalOpened , setModalOpened] = useState(false);
    const [validateLogin] = userAuthCheck()
    const {user} = useAuth0();
    if (isLoading) {
        return (
            <div className="wrapper">
                <div className="flexCenter paddings">
                    <PuffLoader />
                </div>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="wrapper">
                <div className="flexCenter paddings">
                    <span>Error while fetching the property details</span>
                </div>
            </div>
        )
    }
    return (
        <div className="wrapper">
            <div className="flexColStart paddings innerWidth property-container">
                {/* like button */}
                <div className="like">
                    <AiFillHeart size={24} color=" black" /> </div>
                <img src={data?.image} alt="home image" />
                <div className="flexCenter property-details">
                    {/* left side */}
                    <div className="flexColStart left">
                        {/* head */}
                        <div className="flexStart head">

                            <span className='primaryText'>{data?.title}</span>
                            <span className='orangeText' style={{ fontSize: "1.2rem" }} >${data?.price}</span>
                        </div>




                        {/* facilities */}
                        <div className="flexStart facilities">

                            {/* bathrooms */}
                            <div className="flexStart facility">
                                <FaShower size={20} color="#1F3E72" />
                                <span>{data?.facilities?.bathrooms}Bathrooms</span>
                            </div>
                            {/* Parkings */}

                            <div className="flexStart facility">
                                <AiTwotoneCar size={20} color="#1F3E72" />
                                <span>{data?.facilities.parkings} Parking</span>
                            </div>

                            {/* Rooms */}
                            <div className="flexStart facility">
                                <MdMeetingRoom size={20} color="#1F3E72" />
                                <span>{data?.facilities.bedrooms} Room</span>
                            </div>

                        </div>
                        {/* description for the property */}

                        <span className="secondaryText" style={{ textAlign: "justify" }}>
                            {data?.description}
                        </span>

                        {/* address of the property */}

                        <div className="flexStart" style={{ gap: "0.5rem" }}>
                            <MdLocationPin size={25} />
                            <span className="secondaryText">
                                {data?.address}
                                {data?.city}
                                {data?.country}
                            </span>
                        </div>

                        {/* booking button */}
                        <button className="button"
                        onClick={()=> {
                            validateLogin() && setModalOpened(true);
                        }}>
                            Book Your Visit
                        </button>

                        <BookingModal 
                        opened ={modalOpened}
                        setOpened ={setModalOpened}
                        propertyId ={id}
                        email = {user?.email} />
                    </div>



                    {/* right side */}
                    <div className=" map ">
                        <Map
                            address={data?.address}
                            city={data?.city}
                            country={data?.country}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Property
