export declare type ErrorMessageStrings = {
  [key: string]: string;
};

export declare type ErrorMessageGenerators = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: (errorObject: any) => string;
};

export declare type ErrorMessages =
  | ErrorMessageStrings
  | ErrorMessageGenerators;
