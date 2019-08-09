import DatabaseFactory from '../DatabaseFactory';

export default class DisciplineService{

    static async insertDiscipline(discipline){
        let query = 'INSERT INTO disciplines (name, teacherName, period) VALUES(?,?,?)';
        const db = DatabaseFactory.getDatabaseConnection();
        return await db.transaction( async (tx) => {
            tx.executeSql(query, [discipline.name, discipline.teacherName, discipline.period]);
        });
    }

    static async getAll(){
        let query = 'SELECT * FROM disciplines';
        let disciplines = [];
        const db = DatabaseFactory.getDatabaseConnection();
        return new Promise( ( resolve, reject ) => db.transaction( async (tx) => {
            await tx.executeSql(query, [],
                (_, { rows }) => resolve(rows._array), //OK
                (_, err) => console.log(err) //ERROR
            );
        }));
    }
    
}