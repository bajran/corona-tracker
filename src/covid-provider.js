import React,{useReducer} from 'react';
import { reducer, initialState } from "./hooks-reducer/stateReducer";

const ReduxStateContext = React.createContext(null)
const ReduxDispatchContext = React.createContext(null);

function useStateContext(){
    const context = React.useContext(ReduxStateContext);
    if(context === undefined){
        throw new Error('Redux State Context is not availabel')
    }
    return context;
}

function useDispatchContext(){
    const context = React.useContext(ReduxDispatchContext);
    if(context === undefined){
        throw new Error('Redux Dispatch Context is not availabel')
    }
    return context;
}

function CovidProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <ReduxStateContext.Provider value={state}>
            <ReduxDispatchContext.Provider value={dispatch}>
                {children}
            </ReduxDispatchContext.Provider>
      </ReduxStateContext.Provider>
    )
  }


export {ReduxDispatchContext, ReduxStateContext, useStateContext, useDispatchContext, CovidProvider }