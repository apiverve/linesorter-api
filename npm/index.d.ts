declare module '@apiverve/linesorter' {
  export interface linesorterOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface linesorterResponse {
    status: string;
    error: string | null;
    data: LineSorterData;
    code?: number;
  }


  interface LineSorterData {
      sorted:        string[];
      original:      string[];
      lineCount:     number;
      order:         string;
      caseSensitive: boolean;
  }

  export default class linesorterWrapper {
    constructor(options: linesorterOptions);

    execute(callback: (error: any, data: linesorterResponse | null) => void): Promise<linesorterResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: linesorterResponse | null) => void): Promise<linesorterResponse>;
    execute(query?: Record<string, any>): Promise<linesorterResponse>;
  }
}
