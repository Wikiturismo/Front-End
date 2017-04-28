export class Place {

    constructor(
        public id: number,
        public name: string,
        public state: boolean,
        public description: string,
        public ubication: string,
        public address: string,
        public kind: string,
        public entrycost: number,
        public town_id: number,
        public depart_id: number,
        public user_id: number
       ){}
}
