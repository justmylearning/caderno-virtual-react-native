import DatabaseFactory from '../DatabaseFactory';

export default class DisciplineContentService{
    static async insertDisciplineContent(disciplineContent){
        let query = 'INSERT INTO disciplinesContent (disciplineId, contentText, contentImageURI) VALUES(?,?,?)';

        const db = DatabaseFactory.getDatabaseConnection();
        return await db.transaction( (tx) => {
            tx.executeSql(query, [disciplineContent.disciplineId, disciplineContent.contentText, disciplineContent.contentImageURI]);
        });
    }

    static async getByDiscipline(disciplineId){
        let query = 'SELECT * FROM disciplinesContent WHERE disciplineId = ?';
        let disciplines = [];
        const db = DatabaseFactory.getDatabaseConnection();
        return new Promise( ( resolve, reject ) => db.transaction( async (tx) => {
            await tx.executeSql(query, [disciplineId],
                (_, { rows }) => resolve(rows._array), //OK
                (_, err) => console.log(err) //ERROR
            );
        }));
    }
}