class DateHelper{
    getDate(date) {
        if(!date) { return ''; }
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${day}.${month}.${year}`;
    }

    getTime(date) {
        if(!date) { return ''; }
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${hours}:${minutes}`;
    }
}

export default DateHelper;