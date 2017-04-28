export class Town {

    constructor(
        public id: number,
        public name: string,
        public weather: string,
        public avertemper: number,
        public altitude: number,
        public demonym: string,
        public airport: boolean,
        public transpterminal: boolean,
        public depart_id: number
       ){}
}
