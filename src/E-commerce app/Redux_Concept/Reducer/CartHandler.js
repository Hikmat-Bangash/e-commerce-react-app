
const list = []

const CartHandler = (state = list, action) => {
    const product = action.payload;
   switch(action.type){
       case "ADDITEM":
               const product = action.payload;
               const exist = state.find((x)=>x.id === product.id);
               if(!exist){
                return[
                    ...state,
                    {
                        ...product,
                    }
                ]
               }
              
           
        break;

        case "DELITEM":
            const item = action.payload;
            return state.filter((x)=> x.id !== item.id);
            break;

        default:
            return state
        break;
           
        
   }
}

export default CartHandler