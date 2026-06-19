/**
 * The list of git cient-side hooks
 * @see https://git-scm.com/docs/githooks
 */
export enum GitClientHook {
	PRE_COMMIT = "pre-commit",
	PRE_PUSH = "pre-push",
	PRE_COMMIT_MESSAGE = "prepare-commit-msg",
}

export enum GitHooksManagerType {
	HUSKY = "husky",
	LEFTHOOK = "lefthook",
}
