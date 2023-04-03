function config(classesImage, breakpoints) {
  return {
    getWidthsFormatsAndSizes(classImageName) {
      const classImage = classesImage[classImageName];
      if (classImage === undefined) {
        console.log(
          `!!!!! ${classImageName} is not defined in [${Object.keys(
            classesImage
          )}] !!!!`
        );
        return;
      }
      return {
        widths: classImage.widths,
        formats: classImage.formats,
        sizes: calculMedias(classImage.medias, breakpoints),
      };
    },
  };
}

function calculMedias(medias, breakpoints) {
  let result = "";
  for (const [key, value] of Object.entries(medias.sizes)) {
    result += `(max-width: ${breakpoints[key]}) ${value}, `;
  }
  result += medias.default;
  return result;
}

module.exports = (classesImage, breakpoints) =>
  config(classesImage, breakpoints);
