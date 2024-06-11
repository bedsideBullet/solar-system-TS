export const minBy = <T>(array: T[], cb: (element: T) => string | number) => {
	if (!array[0]) return;
	let minElement: T = array[0];

	for (let item of array) {
		if (cb(item) < cb(minElement)) {
			minElement = item;
		}
	}
	return minElement;
};

export function maxBy<T>(array: T[], cb: (element: T) => string | number) {
	if (!array[0]) return;
	let maxElement: T = array[0];
	for (let item of array) {
		if (cb(item) > cb(maxElement)) {
			maxElement = item;
		}
	}
	return maxElement;
}
