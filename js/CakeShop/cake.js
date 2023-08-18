let redux = require('redux');
const createStore = redux.createStore ;
const combine = redux.combineReducers ;
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const applyMiddleWare = redux.applyMiddleware ;


const BUY_CAKE = "BUY_CAKE";
const BUY_BUYICECREAM = "BUY_ICECREAM";



function buyCake(){
    return {
        type:BUY_CAKE 
    }
};
function buyIcecream(){
    return {
        type:BUY_BUYICECREAM 
    }
};

const initialCakeState = {
    numOfCake:10 ,
}

const initialIceCreamState = {
    numOfIcecream:20 ,
}

 const cakeReducers=(state=initialCakeState , action)=>{
    switch(action.type){
        case BUY_CAKE : return {
            ...state,
            numOfCake:state.numOfCake - 1
        };

        default : return state
    }
 };
 const iceCreamReducers=(state=initialIceCreamState , action)=>{
    switch(action.type){
        case BUY_BUYICECREAM : return {
            ...state,
            numOfIcecream:state.numOfIcecream - 1
        };

        default : return state
    }
 };

 const rootReducer = combine( {
     cake:cakeReducers ,
     iceCreeam:iceCreamReducers ,
 } )

 const store = createStore(rootReducer , applyMiddleWare(logger) );

 console.log("initialState-", store.getState());

 let unsubscribe = store.subscribe(()=>null);

 store.dispatch(buyCake());
 store.dispatch(buyCake());
 store.dispatch(buyCake());
 store.dispatch(buyIcecream());
 store.dispatch(buyIcecream());
 store.dispatch(buyIcecream());
 store.dispatch(buyCake());
 unsubscribe();







