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
    
    getCommonDate(date, time){
        if(!(typeof date === 'string' && typeof time === 'string')){ return ''; }
        date = date.split('.');
        date = new Date(`${date[2]}-0${date[1]}-${date[0]}T00:00:00.000Z`);

        time = time.split(':');
        time = new Date(`0001-01-01T${time[0]}:${time[1]}:00.000Z`)

        date.setHours(time.getHours());
        date.setMinutes(time.getMinutes());
        return date;
    }
}

export default DateHelper;