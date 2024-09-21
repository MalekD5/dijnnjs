export interface BaseUser {
	/**
	 * User identifier
	 */
	id: string;

	/**
	 * represents either the email or username
	 */
	credential: string;
}
