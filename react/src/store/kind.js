const kinddata = (state = {
    kindmenulist: []
}, {type, data}) =>{
    if (type === 'KIND_MENU_LIST'){
        state.kindmenulist = data
    }
    return state
}
export default kinddata