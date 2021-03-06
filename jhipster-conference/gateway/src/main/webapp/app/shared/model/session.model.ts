import { Moment } from 'moment';
import { ISpeaker } from 'app/shared/model//speaker.model';

export interface ISession {
    id?: number;
    title?: string;
    description?: any;
    startDateTime?: Moment;
    endDateTime?: Moment;
    speakers?: ISpeaker[];
}

export class Session implements ISession {
    constructor(
        public id?: number,
        public title?: string,
        public description?: any,
        public startDateTime?: Moment,
        public endDateTime?: Moment,
        public speakers?: ISpeaker[]
    ) {}
}
