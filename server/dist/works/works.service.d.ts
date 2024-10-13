import { Model } from 'mongoose';
import { WorkDocument } from 'src/schema/work.schema';
import { WorkDto } from './dto/work.dto';
export declare class WorksService {
    private WorkModel;
    constructor(WorkModel: Model<WorkDocument>);
    create(createWorkDto: WorkDto): Promise<import("mongoose").Document<unknown, {}, WorkDocument> & import("src/schema/work.schema").WorkModule & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, WorkDocument> & import("src/schema/work.schema").WorkModule & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    remove(_id: string): Promise<(import("mongoose").Document<unknown, {}, WorkDocument> & import("src/schema/work.schema").WorkModule & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
}
