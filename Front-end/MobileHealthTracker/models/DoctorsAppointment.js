import Doctor from "./Doctor";

class DocktorsAppointment{
    constructor(appointment){
        if(appointment){ 
            const {doctor, date} = appointment;
            this.doctor = new Doctor(doctor);
            this.date = date;
        }
        else{
            this.doctor = new Doctor();
            this.date = '';
        }
    }

    isValid(){
        return this.doctor.isValid() && this.date && this.date instanceof Date;
    }
}

export default DocktorsAppointment;