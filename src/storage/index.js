import vuex from 'vuex'
import vue from 'vue'
vue.use(vuex)
const storage =new vuex.Store({
    state:{
        bgcColor:'#ffffff',
        page:0
    },
    mutations:{
        changeColor(state){

            if(state.bgcColor==='#ffffff')
            {

                state.bgcColor="#666"
                document.body.style.backgroundColor=   state.bgcColor
            }
            else{
                state.bgcColor='#ffffff'
                document.body.style.backgroundColor=   state.bgcColor
            }


        },
        changePage(state,number)
        {
           state.page=number

        }
    },
    getters:{},

})
export  default storage