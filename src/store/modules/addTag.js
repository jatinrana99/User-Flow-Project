const state={
    selectedData:[],
    tagData:[],
    status:[],
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
};
const getters = {
    getTagData: (state) => state.tagData,

};

export default {
    state,
    actions,
    mutations,
    getters
}