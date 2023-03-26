class Doctor{
    constructor(other){
        if(other){
            const {specialization, name, clinic} = other;
            this.specialization = specialization;
            this.name = name;
            this.clinic = clinic;
        }
        else{
            this.specialization = this.name = this.clinic = '';
        }
    }

    isValid(){
        return this.specialization && this.name && this.clinic && 
        typeof this.specialization === 'string' && typeof this.name === 'string' && typeof this.clinic === 'string';
    }
}

export default Doctor;