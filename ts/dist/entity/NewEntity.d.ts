import { DwNewsEntityBase } from '../DwNewsEntityBase';
import type { DwNewsSDK } from '../DwNewsSDK';
import type { Control } from '../types';
import type { New, NewLoadMatch } from '../DwNewsTypes';
declare class NewEntity extends DwNewsEntityBase<New> {
    constructor(client: DwNewsSDK, entopts: any);
    make(this: NewEntity): NewEntity;
    load(this: any, reqmatch?: NewLoadMatch, ctrl?: Control): Promise<NewEntity>;
}
export { NewEntity };
