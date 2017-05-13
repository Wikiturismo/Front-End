export class Comment {

      constructor(
          public id: number,
          public state: boolean,
          public content: string,
          public town_id: number,
          public place_id: number,
          public user_id: number,
          public depart_id: number,
         ) {}
  }
