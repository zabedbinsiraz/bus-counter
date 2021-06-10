import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showSingleBusData } from '../../../redux/actions/busBookingActions';

const Service = () => {

    const busData = useSelector((state) => {
        return state.busReducers.buses
    })

    const dispatch = useDispatch();

    return (
        <section style={{ backgroundColor: '#F6F4EF' }} className="pt-4">
            <h4 className="text-center pt-5 title">Services that we provide</h4>
            <div className="container py-5">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        busData && busData.map(bus => (

                            <div class="col">
                                <div class="card h-100 p-3 border_radius border-0 text-center">
                                    <img style={{height:'220px'}} src={bus.img} class="card-img-top" alt={bus.name} />
                                    <div class="card-body">
                                        <h5 class="card_title">{bus.name}</h5>
                                        <p className="card_subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur.</p>
                                    </div>
                                    <div className="card-action">
                                        <Link to={`/book/${bus.id}`}>
                                            <button onClick={() => dispatch(showSingleBusData(bus.id))} className="button">Book Now <span><FontAwesomeIcon icon={faArrowRight} /></span></button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Service;