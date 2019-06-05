
export let login = (data, history) => {

    let fetchOptions = {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', },
        body:JSON.stringify(data)
    }

    fetch("http://localhost:8080/react/demo/login", fetchOptions)
        .then(response => response.json())
        .then(result => {
            if (result.status == 200) {
                document.cookie = "token=" + result.token
                history.push("/app")
            }else {
                alert("登录失败");
            }
        }).catch(function (e) {
            alert(e);
        }
    )
}
