
/**
 *   根据注册信息类型 跳转到相应的页面
 * 
 * @param {*} type 类型 boss/row(老板/牛人) 
 * @param {*} avatar 图像
 */
export function getRedireactPath({type,avatar}){
//     user.type: /boss /row
//     user.avatar /bossinfo /rowinfo
    let url=(type==='boss')?'/boss':'/cow'
    if(!avatar){
        url+='info'
    }
    return url;
}