export type BaseUserSchema = {
	id: string;
	credential: string;

	hashedPassword: string;

	createdAt: Date;

	verifiedAt?: Date;
};
