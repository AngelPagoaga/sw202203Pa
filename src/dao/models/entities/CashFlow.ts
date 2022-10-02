
//Entities es la entidad de nuestra base de datos, Una entidad puede ser un conjunto de tablas
//Que conforma un todo.

export interface ICashFlow{ //Interface describe la estructura de un objeto
    type: 'INCOME' | 'EXPENSE';//La variable type solo puede tener esos dos literales
    date: Date;
    amount: number;
    description: string;
    _id?: unknown; //mongodb, sql ,postgetdb cambia segun la base de datos.
};


