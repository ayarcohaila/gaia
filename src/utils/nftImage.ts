export const slugifyNflAllDay = (value: string): string => {
  return value.toLowerCase().replace(/ /g, '_');
};

export enum ASSET_TYPES_LOOKUP {
  VIDEO_IDLE_1080_1080_BLACK = 'AnimationCapture_Video_Idle_Black_1080_1080_Black.mp4',
  VIDEO_PORTRAIT_1080_1920_BLACK = 'AnimationCapture_Video_Portrait_Black_1080_1920_Black.mp4',
  VIDEO_PORTRAIT_1080_1920_GREY = 'AnimationCapture_Video_Portrait_Grey_1080_1920_Grey.mp4',
  VIDEO_SQUARE_1080_1080_GREY = 'AnimationCapture_Video_Square_Grey_1080_1080_Grey.mp4',
  VIDEO_SQUARE_LOGO_1080_1080_BLACK = 'AnimationCapture_Video_Square_Logo_Black_1080_1080_Black.mp4',
  DETAILS_2880_2880_BLACK = 'Details_Black_2880_2880_Black.png',
  DETAILS_2880_2880_GREY = 'Details_Grey_2880_2880_Grey.png',
  HERO_2880_2880_BLACK = 'Hero_Black_2880_2880_Black.png',
  HERO_LOGO_2880_2880_BLACK = 'Hero_Black_Logo_2880_2880_Black.png',
  HERO_SML_1080_1080_BLACK = 'Hero_Black_SML_1080_1080_Black.png',
  HERO_2880_2880_GREY = 'Hero_Grey_2880_2880_Grey.png',
  HERO_LANDSCAPE_LOGO_3840_2160_BLACK = 'Hero_Landscape_Logo_Black_3840_2160_Black.png',
  HERO_2880_2880_TRANSPARENT = 'Hero_Trans_2880_2880_Transparent.png',
  LEGAL_2880_2880_BLACK = 'Legal_Black_2880_2880_Black.png',
  LEGAL_2880_2880_GREY = 'Legal_Grey_2880_2880_Grey.png',
  PLAYER_2880_2880_BLACK = 'Player_Black_2880_2880_Black.png',
  PLAYER_2880_2880_TRANSPARENT = 'Player_Transparent_2880_2880_Transparent.png',
  SCORES_2880_2880_BLACK = 'Scores_Black_2880_2880_Black.png',
  SCORES_2880_2880_GREY = 'Scores_Grey_2880_2880_Grey.png'
}

export const generatePlayMediaUrl = (
  setExternalId: string,
  setName: string,
  assetType: ASSET_TYPES_LOOKUP,
  size?: { width: number; height: number; quality?: number }
) => {
  const setSlug = slugifyNflAllDay(setName);
  const resize = size ? 'resize/' : '';
  const resizeParams = size
    ? `?width=${size.width}&height=${size.height}&quality=${size.quality ?? 80}`
    : '';
  return `https://assets.nflallday.com/${resize}editions/${setSlug}/${setExternalId}/play_${setExternalId}_${setSlug}_capture_${assetType}${resizeParams}`;
};
