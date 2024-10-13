import { WorksService } from './works.service';
import { WorkDto } from './dto/work.dto';
export declare class WorksController {
    private readonly worksService;
    constructor(worksService: WorksService);
    create(body: Omit<WorkDto, 'img'>, file: Express.Multer.File): Promise<import("mongoose").Document<unknown, {}, import("../schema/work.schema").WorkDocument> & import("../schema/work.schema").WorkModule & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("../schema/work.schema").WorkDocument> & import("../schema/work.schema").WorkModule & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, import("../schema/work.schema").WorkDocument> & import("../schema/work.schema").WorkModule & import("mongoose").Document<unknown, any, any> & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
}
