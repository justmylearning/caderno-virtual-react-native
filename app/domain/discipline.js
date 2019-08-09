export default class Discipline{

    constructor(id, name, teacherName, period){
        this.name = name;
        this.teacherName = teacherName;
        this.period = period;
        this.id = (id) ? id : null;
    }

}