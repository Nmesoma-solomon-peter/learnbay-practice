const myRedux = require("@reduxjs/toolkit");

const myMobileSlice = myRedux.createSlice({
    name: "mobiles",
    initialState: {
        noOfMobiles: 10
    },
    reducers: {
        buyMobile: (state, action) => {
            state.noOfMobiles = state.noOfMobiles - action.payload;
        }
    }
})

const { buyMobile } = myMobileSlice.actions;

const mobileStore = myRedux.configureStore({
    reducer: myMobileSlice.reducer
})
mobileStore.dispatch(buyMobile(2))
console.log(mobileStore.getState());
