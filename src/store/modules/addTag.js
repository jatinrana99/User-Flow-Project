const state={
    selectedData:[],
};
const actions ={};
const  mutations = {
    addData: (state,data) => {
        state.selectedData.push(data);
    }
};
const getters = {};

export default {
    state,
    actions,
    mutations,
    getters
}