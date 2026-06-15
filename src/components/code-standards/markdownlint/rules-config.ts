import type { Md003 } from "./rules/md003";
import type { Md004 } from "./rules/md004";
import type { Md007 } from "./rules/md007";
import type { Md009 } from "./rules/md009";
import type { Md010 } from "./rules/md010";
import type { Md012 } from "./rules/md012";
import type { Md013 } from "./rules/md013";
import type { Md022 } from "./rules/md022";
import type { Md024 } from "./rules/md024";
import type { Md025 } from "./rules/md025";
import type { Md026 } from "./rules/md026";
import type { Md029 } from "./rules/md029";
import type { Md030 } from "./rules/md030";
import type { Md031 } from "./rules/md031";
import type { Md033 } from "./rules/md033";
import type { Md035 } from "./rules/md035";
import type { Md040 } from "./rules/md040";
import type { Md041 } from "./rules/md041";
import type { Md043 } from "./rules/md043";
import type { Md046 } from "./rules/md046";
import type { Md048 } from "./rules/md048";
import type { Md049 } from "./rules/md049";
import type { Md050 } from "./rules/md050";
import type { Md053 } from "./rules/md053";

export interface MarkdownlintRules {
  /**
   * MD001 - Heading levels should only increment by one level at a time
   */
  readonly md001?: boolean;
  /**
   * MD003 - Heading style
   */
  readonly md003?: Md003;
  /**
   * MD004 - Unordered list style
   */
  readonly md004?: Md004;
  /**
   * MD005 - Inconsistent indentation for list items at the same level
   */
  readonly md005?: boolean;
  /**
   * MD007 - Unordered list indentation
   */
  readonly md007?: Md007;
  /**
   * MD009 - Trailing spaces
   */
  readonly md009?: Md009;
  /**
   * MD010 - Hard tabs
   */
  readonly md010?: Md010;
  /**
   * MD011 - Reversed link syntax
   */
  readonly md011?: boolean;
  /**
   * MD012 - Multiple consecutive blank lines
   */
  readonly md012?: Md012;
  /**
   * MD013 - Line length
   */
  readonly md013?: Md013;
  /**
   * MD014 - Dollar signs used before commands without showing output
   */
  readonly md014?: boolean;
  /**
   * MD018 - No space after hash on atx style heading
   */
  readonly md018?: boolean;
  /**
   * MD019 - Multiple spaces after hash on atx style heading
   */
  readonly md019?: boolean;
  /**
   * MD020 - No space inside hashes on closed atx style heading
   */
  readonly md020?: boolean;
  /**
   * MD021 - Multiple spaces inside hashes on closed atx style heading
   */
  readonly md021?: boolean;
  /**
   * MD022 - Headings should be surrounded by blank lines
   */
  readonly md022?: Md022;
  /**
   * MD023 - Headings must start at the beginning of the line
   */
  readonly md023?: boolean;
  /**
   * MD024 - Multiple headings with the same content
   */
  readonly md024?: Md024;
  /**
   * MD025 - Multiple top-level headings in the same document
   */
  readonly md025?: Md025;
  /**
   * MD026 - Trailing punctuation in heading
   */
  readonly md026?: Md026;
  /**
   * MD027 - Multiple spaces after blockquote symbol
   */
  readonly md027?: boolean;
  /**
   * MD028 - Blank line inside blockquote
   */
  readonly md028?: boolean;
  /**
   * MD029 - Ordered list item prefix
   */
  readonly md029?: Md029;
  /**
   * MD030 - Spaces after list markers
   */
  readonly md030?: Md030;
  /**
   * MD031 - Fenced code blocks should be surrounded by blank lines
   */
  readonly md031?: Md031;
  /**
   * MD032 - Lists should be surrounded by blank lines
   */
  readonly md032?: boolean;
  /**
   * MD033 - Inline HTML
   */
  readonly md033?: Md033;
  /**
   * MD034 - Bare URL used
   */
  readonly md034?: boolean;
  /**
   * MD035 - Horizontal rule style
   */
  readonly md035?: Md035;
  /**
   * MD036 - Emphasis used instead of a heading
   */
  readonly md036?: boolean;
  /**
   * MD037 - Spaces inside emphasis markers
   */
  readonly md037?: boolean;
  /**
   * MD038 - Spaces inside code span elements
   */
  readonly md038?: boolean;
  /**
   * MD039 - Spaces inside link text
   */
  readonly md039?: boolean;
  /**
   * MD040 - Fenced code blocks should have a language specified
   */
  readonly md040?: Md040;
  /**
   * MD041 - First line in a file should be a top-level heading
   */
  readonly md041?: Md041;
  /**
   * MD042 - No empty links
   */
  readonly md042?: boolean;
  /**
   * MD043 - Required heading structure
   */
  readonly md043?: Md043;
  /**
   * MD044 - Proper names should have the correct capitalization
   */
  readonly md044?: boolean;
  /**
   * MD045 - Images should have alternate text (alt text)
   */
  readonly md045?: boolean;
  /**
   * MD046 - Code block style
   */
  readonly md046?: Md046;
  /**
   * MD047 - Files should end with a single newline character
   */
  readonly md047?: boolean;
  /**
   * MD048 - Code fence style
   */
  readonly md048?: Md048;
  /**
   * MD049 - Emphasis style should be consistent
   */
  readonly md049?: Md049;
  /**
   * MD050 - Strong style should be consistent
   */
  readonly md050?: Md050;
  /**
   * MD051 - Link fragments should be valid
   */
  readonly md051?: boolean;
  /**
   * MD052 - Reference links and images should use a label that is defined
   */
  readonly md052?: boolean;
  /**
   * MD053 - Link and image reference definitions should be needed
   */
  readonly md053?: Md053;
}
