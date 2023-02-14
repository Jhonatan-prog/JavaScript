### XMLHttpRequest

```javascript
(() => {
    const xhr = new XMLHttpRequest(), // intance
     $xhr = document.getElementById("xhr"),
     $fragment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange", e => {
        if (xhr.readyState !== 4) return; // only when it's 4

        if (xhr.status >= 200 && xhr.status < 300) {
            const info = Object.assign(JSON.parse(xhr.responseText));
            console.log(info[0].name)
        }
    })

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users") // get data

    xhr.send() // send request
})();

```

### Fetch

```javascript
(() => {
    const $fetch = document.getElementById("fetch")
        $fragment = document.createDocumentFragment();

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.ok === true ? res.json() : Promise.reject(res))
        .then(json => {
            json.forEach(obj => {
                const $li = document.createElement('li');
                $li.innerHTML = `${obj.name}, - ${obj.email}, - ${obj.phone}`
                $fragment.appendChild($li)
            })
            $fetch.appendChild($fragment)
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            console.log("log")
        })
})();
```

### Asycn / Await

```javascript
(() => {
    const $fetch = document.getElementById('fetch2'),
        $fragment = document.createDocumentFragment()

    async function getData() {
        try {
            let res = await fetch("https://jsonplaceolder.typicode.com/users"),
                json = await res.json()
                
            if (!res.ok) throw {status: res.status, statusText: res.statusText}

            json.forEach((obj) => {
                const $li = document.createElement('li')
                $li.innerHTML = `${obj.name}, - ${obj.email}, - ${obj.phone}`
                $fragment.appendChild($li)
            })

            $fetch.appendChild($fragment)
                
        } catch(err) {
            console.log(err)
        } finally {
            console.log('done')
        }
    }

    getData()
})();