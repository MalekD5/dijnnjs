import type { BaseCredential } from "./credential";
import type { BaseUser } from "./user";

export type Processor<C extends BaseCredential, U extends BaseUser> = {
	process(credential: C): Promise<U>;
};
