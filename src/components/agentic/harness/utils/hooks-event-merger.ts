export const hooksEventmerger = (
	harnessHooks: Array<string> | Record<string, string>,
	otherHooks?: Array<string>,
): string => {
	let values: Array<string> = [];

	try {
		if (Array.isArray(harnessHooks)) {
			values = harnessHooks;
		} else if (typeof harnessHooks === "object") {
			values = Object.values(harnessHooks);
		}
	} catch (error) {
		console.error("Error in hooksEventmerger:", error);
	}

	if (otherHooks && otherHooks.length > 0) {
		return [...values, ...otherHooks].join("|");
	}

	return values.join("|");
};
