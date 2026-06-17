import { Component, type Project, YamlFile } from "projen";

export interface AislopEngines {
	readonly format?: boolean;
	readonly lint?: boolean;
	readonly codeQuality?: boolean;
	readonly aiSlop?: boolean;
	readonly architecture?: boolean;
	readonly security?: boolean;
}

export interface AislopSecurityOptions {
	readonly audit?: boolean;
	readonly auditTimeout?: number;
}

export interface AislopScoringWeights {
	readonly format?: number;
	readonly lint?: number;
	readonly codeQuality?: number;
	readonly aiSlop?: number;
	readonly architecture?: number;
	readonly security?: number;
}

export interface AislopScoringThresholds {
	readonly good?: number;
	readonly ok?: number;
}

export interface AislopScoring {
	readonly weights?: AislopScoringWeights;
	readonly thresholds?: AislopScoringThresholds;
	readonly smoothing?: number;
	readonly maxPerRule?: number;
}

export interface AislopCi {
	readonly failBelow?: number;
	readonly format?: string;
}

export interface AislopTelemetry {
	readonly enabled?: boolean;
}

export interface AislopConfigOptions {
	readonly extends?: string | string[];
	readonly engines?: AislopEngines;
	readonly maxFunctionLoc?: number;
	readonly maxFileLoc?: number;
	readonly maxNesting?: number;
	readonly maxParams?: number;
	readonly security?: AislopSecurityOptions;
	readonly scoring?: AislopScoring;
	readonly ci?: AislopCi;
	readonly telemetry?: AislopTelemetry;
}

export class AislopConfig extends Component {
	static readonly configPath = ".aislop/config.yml";
	static readonly version = 1;

	public static of(project: Project): AislopConfig | undefined {
		const singleton = (c: Component): c is AislopConfig =>
			c instanceof AislopConfig;
		return project.components.find(singleton);
	}

	constructor(project: Project, options: AislopConfigOptions = {}) {
		super(project);

		const engines = options.engines
			? {
					...(options.engines.format !== undefined && {
						format: options.engines.format,
					}),
					...(options.engines.lint !== undefined && {
						lint: options.engines.lint,
					}),
					...(options.engines.codeQuality !== undefined && {
						"code-quality": options.engines.codeQuality,
					}),
					...(options.engines.aiSlop !== undefined && {
						"ai-slop": options.engines.aiSlop,
					}),
					...(options.engines.architecture !== undefined && {
						architecture: options.engines.architecture,
					}),
					...(options.engines.security !== undefined && {
						security: options.engines.security,
					}),
				}
			: undefined;

		const scoringWeights = options.scoring?.weights
			? {
					...(options.scoring.weights.format !== undefined && {
						format: options.scoring.weights.format,
					}),
					...(options.scoring.weights.lint !== undefined && {
						lint: options.scoring.weights.lint,
					}),
					...(options.scoring.weights.codeQuality !== undefined && {
						"code-quality": options.scoring.weights.codeQuality,
					}),
					...(options.scoring.weights.aiSlop !== undefined && {
						"ai-slop": options.scoring.weights.aiSlop,
					}),
					...(options.scoring.weights.architecture !== undefined && {
						architecture: options.scoring.weights.architecture,
					}),
					...(options.scoring.weights.security !== undefined && {
						security: options.scoring.weights.security,
					}),
				}
			: undefined;

		const scoring = options.scoring
			? {
					...(scoringWeights && { weights: scoringWeights }),
					...(options.scoring.thresholds && {
						thresholds: options.scoring.thresholds,
					}),
					...(options.scoring.smoothing !== undefined && {
						smoothing: options.scoring.smoothing,
					}),
					...(options.scoring.maxPerRule !== undefined && {
						maxPerRule: options.scoring.maxPerRule,
					}),
				}
			: undefined;

		new YamlFile(project, AislopConfig.configPath, {
			obj: {
				version: AislopConfig.version,
				...(options.extends !== undefined && { extends: options.extends }),
				...(engines && { engines }),
				...(options.maxFunctionLoc !== undefined && {
					maxFunctionLoc: options.maxFunctionLoc,
				}),
				...(options.maxFileLoc !== undefined && {
					maxFileLoc: options.maxFileLoc,
				}),
				...(options.maxNesting !== undefined && {
					maxNesting: options.maxNesting,
				}),
				...(options.maxParams !== undefined && {
					maxParams: options.maxParams,
				}),
				...(options.security && { security: options.security }),
				...(scoring && { scoring }),
				...(options.ci && { ci: options.ci }),
				...(options.telemetry && { telemetry: options.telemetry }),
			},
		});
	}
}
