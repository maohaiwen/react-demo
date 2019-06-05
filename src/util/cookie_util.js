
export let get_cookie = (Name) => {
    let search = Name + "=";
    let returnvalue = "";//返回值
    if (document.cookie.length > 0) {
        let sd = document.cookie.indexOf(search);
        if (sd !== -1) {
            sd += search.length;
            let end = document.cookie.indexOf(";", sd);
            if (end === -1)
                end = document.cookie.length;
            //unescape() 函数可对通过 escape() 编码的字符串进行解码。
            returnvalue=unescape(document.cookie.substring(sd, end))
        }
    }
    return returnvalue;
};