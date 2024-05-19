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

export const convertToDateString = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = date.getFullYear();
    
    return `ngày ${day} tháng ${month} năm ${year}`;
}

export const TableToDateString = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
}

export function getTodayDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = today.getFullYear();
    
    return `${year}-${month}-${day}`;
}