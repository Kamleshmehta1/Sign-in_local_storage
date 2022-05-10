let obj = {
    name: {
        myNameL: "kamlesh",
        surName: {
            sur: "mehta"
        }
    }
}

function flatterObject(obj, parent, res = {}) {
    for (let key in obj) {
        let pros = parent ? parent + "_" + key : key;
        if (typeof (obj[key]) === "object") {
            flatterObject(obj[key], pros, res)
        } else {
            res[pros] = obj[key]
        }
    }
    return res
}

let res = flatterObject(obj)
console.log(res); 