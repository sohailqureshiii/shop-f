import axiosIntance from "../helpers/axios";
import { authConstants} from "./constants";

export const loginAction = userData => dispatch => {
  axiosIntance
    .post("/signin", userData)
    .then(res => {
      const { token, user } = res.data;
       localStorage.setItem("token", token);
       localStorage.setItem("user", JSON.stringify(user));
       dispatch({
         type: authConstants.LOGIN_SUCCESS,
         payload: {
           token,
           user
        }
       });
    })

    .catch(error =>{    
      dispatch({
         type: authConstants.LOGIN_FAILURE,
         payload: {error:"Something went worng"}
        });
    }

    );
};


export const googleLoginAction = tokenId => dispatch => {
  axiosIntance
    .post("/google-login", tokenId)
    .then(res => {
      const { token, user } = res.data;
       localStorage.setItem("token", token);
       localStorage.setItem("user", JSON.stringify(user));
       dispatch({
         type: authConstants.LOGIN_SUCCESS,
         payload: {
           token,
           user
        }
       });
      //  isUserLoggedIn()
    })

    .catch(error =>{    
      dispatch({
         type: authConstants.LOGIN_FAILURE,
         payload: {error:"Something went worng"}
        });
    }

    );
};


export const signUpAction = userData => dispatch => {
 
  axiosIntance
    .post("/signup", userData)
    .then(res => {
      const { token, user } = res.data;
       localStorage.setItem("token", token);
       localStorage.setItem("user", JSON.stringify(user));
       dispatch({
         type: authConstants.LOGIN_SUCCESS,
         payload: {
           token,
           user
        }
       });
    }).catch(error =>{    
      dispatch({
         type: authConstants.LOGIN_FAILURE,
         payload: {error:"User already registered"}
        });
    }

    );
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user
        }
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "Failed to login" }
      });
    }
  };
};


// export const signoutAction = () => {
//   return async (dispatch) => {
//     dispatch({ type: authConstants.LOGOUT_REQUEST });
//     // localStorage.removeItem('user');
//     // localStorage.removeItem('token');
//     localStorage.clear();
//     dispatch({ type: authConstants.LOGOUT_SUCCESS });
//     dispatch({ type: cartConstants.RESET_CART });
//     //const res = await axios.post(`/admin/signout`);
//     // if(res.status === 200){

//     // }else{
//     //     dispatch({
//     //         type: authConstants.LOGOUT_FAILURE,
//     //         payload: { error: res.data.error }
//     //     });
//     // }
//   };
// };
