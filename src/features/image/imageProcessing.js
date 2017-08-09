import jimp from 'jimp';

export default function (fileLocation, fileName, newLocation) {
	return new Promise((resolve, reject) => {
		return jimp.read(`${fileLocation}/${fileName}`, (err, image) => {
			if (err) return reject(err);

			image.resize(640, 480)
				.quality(80)
				.greyscale()
				.write(newLocation + '/' + fileName)
			return resolve(image);
		});
	})
}
