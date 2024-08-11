import { CARSLOAD_SUCC,CARSLOAD_FAIL, CARLOAD_SUCC, CARLOAD_FAIL, CARRENT_SUCC, CARRENT_FAIL, UPDATE_LIKES } from "../actions/types"


const initialState ={
    cars:[],
    car:null,
    loading:true,
    error:{}
}








export default function (state = initialState,action){
    const {type,payload}=action;


    switch(type){
        case CARSLOAD_SUCC:
            return{
                ...state,
                cars:payload,
                loading:false
            }
            case CARLOAD_SUCC:
                return{
                ...state,
                car:payload,
                loading:false
            }
            case CARSLOAD_FAIL:
                return{
                    ...state,
                    error:payload,
                    loading:false
                }
                case CARRENT_FAIL:
                case CARLOAD_FAIL:
                return{
                    ...state,
                    error:payload,
                    loading:false
                }
                case CARRENT_SUCC:
                    return{
                    ...state,
                    car:payload,
                    loading:false
                    }
                case UPDATE_LIKES:
                    return{
                        ...state,
                        car:state.cars.map(car=> car._id === payload.id ? {...car, likes:payload.likes} : car),
                        loading:false
                    }
            
                default:
                    return state
                
    }
}