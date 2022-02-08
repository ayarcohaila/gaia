export type FsNflAllDayMoment = {
  momentId: number;
  serialNumber: number;
  owner: string | null;
  createdAt: number;
  acquiredAt: number;
  activeListingPrice: number | null;
  activeListingOrderId: number | null;
  activeListingOrderAddress: string | null;
  editionId: number;
  seriesId: number;
  setId: number;
  playId: number;
  edition: {
    editionId: number;
    circulationCount: number;
    unavailableCount: number;
    hiddenInPacksCount: number;
    maxMintSize: number | null;
    tier: string;
  };
  series: {
    seriesId: number;
    name: string;
  };
  set: {
    setId: number;
    name: string;
  };
  play: {
    playId: number;
    playType: string;
    classification: string;
    playerFullName: string;
    playerNumber: string;
    playerPosition: string;
    teamName: string;
    gameDate: string;
    externalId: string | null;
  };
};
