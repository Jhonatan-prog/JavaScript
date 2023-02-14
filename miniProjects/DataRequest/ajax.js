(() => {
    const xhr = new XMLHttpRequest(),
     $xhr = document.getElementById("xhr"),
     $fragment = document.createDocumentFragment(); // gathers the info in the fragment 

    xhr.addEventListener("readystatechange", e => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            const jsonData = Object.assign(JSON.parse(xhr.responseText));
            jsonData.map(obj => {
                const $li = document.createElement("li")
                $li.innerHTML = `${obj.name} -- ${obj.email} -- ${obj.phone}`
                $fragment.appendChild($li)
            })
            
            $xhr.appendChild($fragment)

        } else {
            console.log("F")
        }
    })

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users")

    xhr.send()
})();