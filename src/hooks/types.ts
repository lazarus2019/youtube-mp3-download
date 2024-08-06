interface CustomNavigator extends Navigator {
  msSaveBlob: (blob?: Blob, filename?: string) => boolean | NodeJS.Timeout;
}

export interface WindowDownloaderEmbedded extends Window {
  navigator: CustomNavigator;
}
