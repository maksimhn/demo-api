import * as fs from 'fs';
import archiver from 'archiver';

export default function (sourceFolder, fileNamesArray, archiveName, res) {
	let output = fs.createWriteStream(`${sourceFolder}/${archiveName}`);
	let archive = archiver('zip', {
		zlib: {
			level: 9
		}
	});

	archive.on('warning', err => {
		if (err.code === 'ENOENT') {
			console.log(`Archiver warning: ${err}`);
		} else {
			throw err;
		}
	});

	archive.on('error', err => {
		throw err;
	});

	archive.pipe(output);

	fileNamesArray.forEach(file => {
		archive.file(`${sourceFolder}/${file}`, { name: file });
	});

	archive.finalize();

	return output;
}