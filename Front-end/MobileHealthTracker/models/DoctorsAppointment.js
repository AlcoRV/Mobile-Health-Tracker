import Doctor from "./Doctor";

class DocktorsAppointment{
    constructor(doctor, date){
        this.doctor = doctor || new Doctor();
        this.date = date || new Date();
    }
}

export default DocktorsAppointment;