declare module '@apiverve/linesorter' {
  export interface linesorterOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface linesorterResponse {
    status: string;
    error: string | null;
    data: LineSorterData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface LineSorterData {
      sorted:        (null | string)[];
      lineCount:     number | null;
      order:         null | string;
      caseSensitive: boolean | null;
  }

  export default class linesorterWrapper {
    constructor(options: linesorterOptions);

    execute(callback: (error: any, data: linesorterResponse | null) => void): Promise<linesorterResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: linesorterResponse | null) => void): Promise<linesorterResponse>;
    execute(query?: Record<string, any>): Promise<linesorterResponse>;
  }
}
