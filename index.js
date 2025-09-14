import callsites from 'callsites';

function isValidFileName(fileName) {
	return typeof fileName === 'string'
		&& !fileName.startsWith('node:')
		&& fileName !== 'module.js';
}

export default function parentModule(filePath) {
	const stacks = callsites();

	if (!filePath) {
		// Find the first non-internal parent module
		for (const stack of stacks.slice(2)) {
			const fileName = stack?.getFileName();

			if (isValidFileName(fileName)) {
				return fileName;
			}
		}

		return;
	}

	let hasSeenValue = false;

	// Start from index 1 to skip this function
	for (const stack of stacks.slice(1)) {
		const parentFilePath = stack?.getFileName();

		if (!isValidFileName(parentFilePath)) {
			continue;
		}

		if (parentFilePath === filePath) {
			hasSeenValue = true;
			continue;
		}

		if (hasSeenValue) {
			return parentFilePath;
		}
	}
}
