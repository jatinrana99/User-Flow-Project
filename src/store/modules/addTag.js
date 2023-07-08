const state={
    selectedData:[],
    tagData:[],
    status:[],
    httpData:[],
};
const actions ={};
const  mutations = {
    addData: (state,data) => {
        state.selectedData.push(data);
    },

    tagData: (state,data) =>{
        state.tagData.push(data);
    },
    status: (state,data) => {
        state.status.push(data);
    },
    httpData: (state,data) => {
        state.httpData.push(data);
    },
    deleteTagData: (state,index) => {
        state.tagData.splice(index,1);
    }
        

};
const getters = {
    getTagData: (state) => state.tagData,
    getHttpData: (state) => state.httpData,
    
};

export default {
    state,
    actions,
    mutations,
    getters
}