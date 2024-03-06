import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";
import axios from "axios";
import reducer from "../Reducer/ProductReducer";

const AppContext = createContext();

const API = "http://localhost:8000/api/propertyget";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProperty = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const properties = await res.data;
      console.log(properties);
      dispatch({ type: "SET_API_DATA", payload: properties });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd api call for single product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProperty(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state ,getSingleProduct}}>{children}</AppContext.Provider>
  );
};

//custom hook

const usePropertyContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, usePropertyContext};

//create a context
//provider
//consumer => useContext Hook
