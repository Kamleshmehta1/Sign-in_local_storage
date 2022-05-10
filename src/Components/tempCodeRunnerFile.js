function flatternObject(obj, parent, res = {}) {
    for (let key in obj) {
        let propName = parent ? parent + "_" + key : key;
        if (typeof (obj[key]) === "object") {
            flatternObject(obj[key], propName, res)
        } else {
            res[propName] = obj[key]
        }
    }
    return res
}

let res = flatternObject(obj)
console.log(res);