export const inclusivePick = <
	T extends object,
	K extends string | number | symbol,
>(
	obj: T,
	...keys: Array<K>
) =>
	Object.fromEntries(
		keys.map((key) => [key, obj[key as unknown as keyof T]]), // K is intentionally unconstrained to keyof T
	) as {
		[key in K]: key extends keyof T ? T[key] : undefined;
	};
