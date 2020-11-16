module.exports.greet = (name) => {
    name = name ? name : ['my friend'];
    name = typeof (name) !== "object" ? [name] : name;

    let NAME = [];
    name.forEach(item => {
        const items = item.includes('\"') || item.includes("\'") ? [item.replace(/[\"\']/g, "")]
            : item.split(',');
        NAME = [...NAME, ...items];
    })

    const name_u = [];
    const name_n = [];
    NAME.forEach(item => {
        item = item.trim();
        if (item.toUpperCase() === item) {
            name_u.push(item);
        } else {
            name_n.push(item);
        }
    })

    const count_n = name_n.length;
    const count_u = name_u.length;

    let msg = count_n ? "Hello, " : "";

    for (let item in name_n) {
        msg += +item === 0 ? name_n[item]
            : +item === count_n - 1 ?
                +item === 1 ? " and " + name_n[item]
                    : ", and " + name_n[item]
                : ", " + name_n[item];
    }

    msg += count_n ?
        count_u ? ". AND HELLO " : "."
        : count_u ? "HELLO " : ""

    for (let item in name_u) {
        msg += +item === 0 ? name_u[item]
            : " & " + name_u[item]
    }

    msg += count_u ? "!" : ""
    
    return msg
}