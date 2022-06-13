import { createSlice } from '@reduxjs/toolkit';

export const softSlice = createSlice({
	name: 'soft',
	initialState: 
		{
            jsonStatus: false,
            test: 'hello redux store',
            storeSatus: false,
            isLoading: true,
            softCardsData: [
                
                    
                  
              
            ],
            row: null,
            newrow: [{"id":"005"},{"id":"006"}], 
          },
	reducers: {
		changeSoftCardsData: (state, action) => {
			      
			state.softCardsData = action.payload
            
		}
    

	},
  
});

export const selectData = (state) => state.soft.softCardsData;

export const { changeSoftCardsData, setStoreStatus } = softSlice.actions;

export default softSlice.reducer;