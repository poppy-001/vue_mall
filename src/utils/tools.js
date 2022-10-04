export function debounce(fn, delay) {
    let timer = null
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)

        }, delay)
    }
}

export function dataFormat(time) {
    const data = new Date(time * 1000)

    const y = data.getFullYear();
    const m = (data.getMonth() + 1) >= 10 ? (data.getMonth() + 1) : "0" + (data.getMonth() + 1);
    const d = data.getDay() >= 10 ? data.getDay() : '0' + data.getDay();
    const hh = data.getHours() >= 10 ? data.getHours() : '0' + data.getHours();
    const mm = data.getMinutes() >= 10 ? data.getMinutes() : '0' + data.getMinutes();
    const ss = data.getSeconds() >= 10 ? data.getSeconds() : '0' + data.getSeconds();

    return y + "-" + m + "-" + d + " " + hh + ":" + mm + ":" + ss
}