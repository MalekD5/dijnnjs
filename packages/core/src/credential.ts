import { isString } from "./utils";

export interface BaseCredential {
	/**
	 * represents either the email or username
	 */
	credential: string;
}

export interface PasswordCredential extends BaseCredential {
	password: string;
}

export interface CredentialFactory {
	createCredential(data: unknown): BaseCredential;
}

export class DefaultCredentialFactory implements CredentialFactory {
	createCredential(data: unknown): BaseCredential {
		if (typeof data !== "object" || !data)
			throw new Error("Invalid data, expected object");

		if ("password" in data && "credential" in data) {
			if (!isString(data.credential) || !isString(data.password))
				throw new Error("Invalid credential data, type mismatch.");

			const structure = data as { credential: string; password: string };

			return {
				credential: structure.credential,
				password: structure.password,
			} as PasswordCredential;
		}

		throw new Error("Invalid credential data, structure mismatch.");
	}
}
