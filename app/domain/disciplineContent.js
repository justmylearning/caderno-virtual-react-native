export default class DisciplineContent{
    /*
    // id: INT
    // disciplineId: INT FK DISCIPLINE(ID)
    // contentText: TEXT
    // contentImageURI: TEXT //file:///com.package.caderno-virtual/imagem.jpg
    */
    constructor(id, disciplineId, contentText, contentImageURI ){
        this.id = (id) ? id : null;
        this.disciplineId = disciplineId;
        this.contentText = contentText;
        this.contentImageURI = contentImageURI;
    }

}