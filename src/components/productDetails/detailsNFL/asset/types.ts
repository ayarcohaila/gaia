type Asset = {
  title: string;
  img: string;
  video?: string;
};

export interface AssetProps {
  assets: Array<Asset> | Asset;
}
