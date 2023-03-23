import Doctor from "./Doctor";

class DocktorsAppointment{
    constructor(appointment){
        console.log(appointment);
        if(appointment){ 
            const {doctor, date} = appointment;
            this.doctor = doctor || new Doctor();
            this.date = date || new Date();
        }
        this.doctor = new Doctor();
        this.date = new Date();
    }
}

export default DocktorsAppointment;