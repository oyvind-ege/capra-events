import type {
	ChildDatabaseBlockObjectResponse,
	PartialBlockObjectResponse
} from '@notionhq/client/build/src/api-endpoints';

/**
 * Sjekker om den gitte "Block" fra Notion er av typen "Child Database"
 * @param block
 * @returns
 */
export const isChildDatabaseBlock = (
	block: ChildDatabaseBlockObjectResponse | PartialBlockObjectResponse
): block is ChildDatabaseBlockObjectResponse => {
	return (block as ChildDatabaseBlockObjectResponse).child_database !== undefined;
};
