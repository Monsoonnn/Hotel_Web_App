export const formatCash = (str) => {
    return str.toString().split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
    })
}

export const dateConverter = (startDate, timeEnd) => {
    const newStartDate = new Date(startDate);
    const newEndDate = new Date(timeEnd);
    const one_day = 1000 * 60 * 60 * 24;
    let result
    result = Math.ceil((newEndDate.getTime() - newStartDate.getTime()) / (one_day))
    if (result < 0) { return 0 }
    return result
}