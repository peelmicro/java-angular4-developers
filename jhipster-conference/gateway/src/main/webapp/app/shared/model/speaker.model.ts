import { ISession } from 'app/shared/model//session.model';

export interface ISpeaker {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    twiter?: string;
    bio?: any;
    sessions?: ISession[];
}

export class Speaker implements ISpeaker {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public twiter?: string,
        public bio?: any,
        public sessions?: ISession[]
    ) {}
}
