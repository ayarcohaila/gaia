export function formatNumber(
  c: number,
  decPlaces: number = 0,
  thouSeparator: string | undefined = undefined,
  decSeparator: string | undefined = undefined,
  forceDecimal: boolean = false
): string {
  decPlaces = isNaN((decPlaces = Math.abs(decPlaces))) ? 2 : decPlaces;
  decSeparator = decSeparator === undefined ? '.' : decSeparator;
  thouSeparator = thouSeparator === undefined ? ',' : thouSeparator;
  let n: number = c;
  let sign = n < 0 ? '-' : '';
  let s = Math.abs(+n || 0).toFixed(decPlaces);
  n = Number(s);
  let i = parseInt(s) + '';
  let j = i.length > 3 ? i.length % 3 : 0;

  let str =
    sign +
    (j ? i.substr(0, j) + thouSeparator : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thouSeparator);
  if (n % 1 !== 0 || forceDecimal) {
    return (
      str +
      (decPlaces
        ? decSeparator +
          Math.abs(n - Number(i))
            .toFixed(decPlaces)
            .slice(2)
        : '')
    );
  } else {
    return str;
  }
}

type MomentDescriptionParams = {
  play: {
    playerFullName: string;
    playType: string;
  };
  series: {
    name: string;
  };
  set: {
    name: string;
  };
  serialNumber: number;
};

export function buildMomentDescription(moment: MomentDescriptionParams): string {
  return `${moment.play.playerFullName} ${moment.play.playType} (${moment.series.name} ${moment.set.name}) #${moment.serialNumber}`;
}
