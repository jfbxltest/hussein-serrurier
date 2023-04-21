function config(classesCTA) {
  return {
    getTextAndLink(classesCtaName) {
      const classCTA = classesCTA[classesCtaName];
      if (classCTA === undefined) {
        console.log(
          `!!!!! ${classesCtaName} is not defined in [${Object.keys(
            classesCTA
          )}] !!!!`
        );
        return;
      }
      return {
        text: classesCTA.text,
        href: classesCTA.href,
      };
    },
  };
}

module.exports = (classesCTA) => config(classesCTA);
