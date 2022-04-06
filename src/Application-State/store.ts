import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { AppReducer } from "./App/reducer";
import { HomeReducer } from "./Home/reducer";

const composeEnhancers = composeWithDevTools({});

const RootReducer = combineReducers({
    app: AppReducer,
    home: HomeReducer
});

export const store = process.env.NODE_ENV==="development" ? 
                        createStore(
                            RootReducer,
                            composeEnhancers(applyMiddleware(thunk))
                        ) : 

                        createStore(
                            RootReducer,
                            applyMiddleware(thunk)
                        )