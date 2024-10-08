import type { BaseUserSchema } from "./schema";

export interface DatabaseAdapter<S extends BaseUserSchema> {
	create(user: S): Promise<void>;

	delete(identifier: string): Promise<void>;

	verify(identifier: string): Promise<void>;

	getUserById(identifier: string): Promise<S>;

	getUserByCredential(credential: string): Promise<S>;
}
