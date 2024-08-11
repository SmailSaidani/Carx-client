import { REGISTER_SUCCESS,REGISTER_FAIL,USER_LOADED,AUTH_ERROR ,LOGIN_FAIL,LOGIN_SUCCESS, LOGOUT_SUCCESS} from "../actions/types";


const initialState= { 
    token:localStorage.getItem('token'),
    isAuthenticated: null,
    laoding:true,
    user:null
}



export default function (state = initialState , action ) {
 const {type , payload}= action;


 switch(type){
    case USER_LOADED:
        return{
            ...state,
            isAuthenticated:true,
            loading:false,
            user:payload
        }
    case REGISTER_SUCCESS:
        localStorage.setItem('token',payload.token);
        return{
            ...state,
            ...payload,
            isAuthenticated:true,
            laoding:false

        }
        case LOGIN_SUCCESS:
            localStorage.setItem('token',payload.token);
            return{
                ...state,
                ...payload,
                isAuthenticated:true,
                laoding:false
    
            }
    case LOGOUT_SUCCESS:
    case LOGIN_FAIL:
        localStorage.removeItem('token')
        return {
            ...state,
            token:null,
            isAuthenticated:false,
            laoding:false
        }
        
        
    case REGISTER_FAIL:
        localStorage.removeItem('token')
        return {
            ...state,
            token:null,
            isAuthenticated:false,
            laoding:false
        }
    case AUTH_ERROR:
        return {
            ...state,
            token:null,
            isAuthenticated:false,
            laoding:false
        }
        

    default:
        return state

 }
}