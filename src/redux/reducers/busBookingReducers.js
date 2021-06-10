import busesData from '../../FakeData/buses.json';

const initialValue = {
    buses: busesData,
    busBookingList: [],
    userInfo: [],
    singleBusData: [],
    temporaryBookingList: []
}

export const busReducers = (state = initialValue, action) => {
    switch(action.type){
        case 'SHOW_SINGLE_BUS_DATA': {
            return {
                ...state,
                singleBusData: state?.buses.find(a => a.id === action.payload)
            }
        }
        case 'ADD_TO_BOOKING_LIST': {
            return {
                ...state,
                busBookingList: [action.payload]
            }
        }
        case 'REMOVE_FROM_BOOKING_LIST': {
            return {
                ...state,
                busBookingList: state.busBookingList.filter(b => b.id !== action.payload)
            }
        }
        case 'ADD_TO_TEMPORARY_BOOKING_LIST': {
            return {
                ...state,
                temporaryBookingList: [action.payload]
            }
        }
        case 'ADD_USER_INFO': {
            return {
                ...state,
                userInfo: [action.payload]
            }
        }
        default: {
            return state
        }
    }
}