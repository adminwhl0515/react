const homedata = (state = {
    homenavlist: []
}, {type, data}) =>{
    if (type === 'HOME_NAV_LIST'){
        state.homenavlist = data
    }
    return state
}
export default homedata