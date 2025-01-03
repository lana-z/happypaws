import sharp from 'sharp';

sharp('public/images/livi-hero.png')
  .resize(1920, null, { // 1920px width, maintain aspect ratio
    withoutEnlargement: true
  })
  .jpeg({ // convert to jpeg with quality 80
    quality: 80,
    mozjpeg: true
  })
  .toFile('public/images/livi-hero.jpg')
  .then(info => console.log('Image optimized:', info))
  .catch(err => console.error('Error optimizing image:', err));
