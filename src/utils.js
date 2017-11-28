export const withQueryDefaults = query => ({
	page: query.page || '1',
	perPage: query.perPage || '10',
	direction: query.direction || 'asc'
});
