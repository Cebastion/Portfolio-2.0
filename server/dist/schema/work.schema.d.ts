import { Document } from 'mongoose';
export type WorkDocument = WorkModule & Document;
export declare class WorkModule {
    title: string;
    description: string;
    year: string;
    role: string;
    link: string;
    image: Buffer;
}
export declare const WorkSchema: import("mongoose").Schema<WorkModule, import("mongoose").Model<WorkModule, any, any, any, Document<unknown, any, WorkModule> & WorkModule & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, WorkModule, Document<unknown, {}, import("mongoose").FlatRecord<WorkModule>> & import("mongoose").FlatRecord<WorkModule> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}>;
