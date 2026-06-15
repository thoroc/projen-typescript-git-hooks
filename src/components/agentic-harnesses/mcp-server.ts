export interface McpServerConfig {
  readonly command: string;
  readonly args?: Array<string>;
  readonly env?: Record<string, string>;
}

export class McpServer {
  readonly name: string;
  readonly command: string;
  readonly args?: Array<string>;
  readonly env?: Record<string, string>;

  constructor(name: string, options: McpServerConfig) {
    this.name = name;
    this.command = options.command;
    this.args = options.args;
    this.env = options.env;
  }
}
