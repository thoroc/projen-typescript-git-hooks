import { MD003 } from "./md003";
import { MD004 } from "./md004";
import { MD007 } from "./md007";
import { MD009 } from "./md009";
import { MD010 } from "./md010";
import { MD012 } from "./md012";
import { MD013 } from "./md013";
import { MD022 } from "./md022";
import { MD024 } from "./md024";
import { MD025 } from "./md025";
import { MD026 } from "./md026";
import { MD029 } from "./md029";
import { MD030 } from "./md030";
import { MD031 } from "./md031";
import { MD033 } from "./md033";
import { MD035 } from "./md035";
import { MD040 } from "./md040";
import { MD041 } from "./md041";
import { MD043 } from "./md043";
import { MD046 } from "./md046";
import { MD048 } from "./md048";
import { MD049 } from "./md049";
import { MD050 } from "./md050";
import { MD053 } from "./md053";

export interface MarkdownlintRules {
  /**
   * MD001 - Heading levels should only increment by one level at a time
   */
  readonly MD001?: boolean;
  /**
   * MD003 - Heading style
   */
  readonly MD003?: MD003;
  /**
   * MD004 - Unordered list style
   */
  readonly MD004?: MD004;
  /**
   * MD005 - Inconsistent indentation for list items at the same level
   */
  readonly MD005?: boolean;
  /**
   * MD007 - Unordered list indentation
   */
  readonly MD007?: MD007;
  /**
   * MD009 - Trailing spaces
   */
  readonly MD009?: MD009;
  /**
   * MD010 - Hard tabs
   */
  readonly MD010?: MD010;
  /**
   * MD011 - Reversed link syntax
   */
  readonly MD011?: boolean;
  /**
   * MD012 - Multiple consecutive blank lines
   */
  readonly MD012?: MD012;
  /**
   * MD013 - Line length
   */
  readonly MD013?: MD013;
  /**
   * MD014 - Dollar signs used before commands without showing output
   */
  readonly MD014?: boolean;
  /**
   * MD018 - No space after hash on atx style heading
   */
  readonly MD018?: boolean;
  /**
   * MD019 - Multiple spaces after hash on atx style heading
   */
  readonly MD019?: boolean;
  /**
   * MD020 - No space inside hashes on closed atx style heading
   */
  readonly MD020?: boolean;
  /**
   * MD021 - Multiple spaces inside hashes on closed atx style heading
   */
  readonly MD021?: boolean;
  /**
   * MD022 - Headings should be surrounded by blank lines
   */
  readonly MD022?: MD022;
  /**
   * MD023 - Headings must start at the beginning of the line
   */
  readonly MD023?: boolean;
  /**
   * MD024 - Multiple headings with the same content
   */
  readonly MD024?: MD024;
  /**
   * MD025 - Multiple top-level headings in the same document
   */
  readonly MD025?: MD025;
  /**
   * MD026 - Trailing punctuation in heading
   */
  readonly MD026?: MD026;
  /**
   * MD027 - Multiple spaces after blockquote symbol
   */
  readonly MD027?: boolean;
  /**
   * MD028 - Blank line inside blockquote
   */
  readonly MD028?: boolean;
  /**
   * MD029 - Ordered list item prefix
   */
  readonly MD029?: MD029;
  /**
   * MD030 - Spaces after list markers
   */
  readonly MD030?: MD030;
  /**
   * MD031 - Fenced code blocks should be surrounded by blank lines
   */
  readonly MD031?: MD031;
  /**
   * MD032 - Lists should be surrounded by blank lines
   */
  readonly MD032?: boolean;
  /**
   * MD033 - Inline HTML
   */
  readonly MD033?: MD033;
  /**
   * MD034 - Bare URL used
   */
  readonly MD034?: boolean;
  /**
   * MD035 - Horizontal rule style
   */
  readonly MD035?: MD035;
  /**
   * MD036 - Emphasis used instead of a heading
   */
  readonly MD036?: boolean;
  /**
   * MD037 - Spaces inside emphasis markers
   */
  readonly MD037?: boolean;
  /**
   * MD038 - Spaces inside code span elements
   */
  readonly MD038?: boolean;
  /**
   * MD039 - Spaces inside link text
   */
  readonly MD039?: boolean;
  /**
   * MD040 - Fenced code blocks should have a language specified
   */
  readonly MD040?: MD040;
  /**
   * MD041 - First line in a file should be a top-level heading
   */
  readonly MD041?: MD041;
  /**
   * MD042 - No empty links
   */
  readonly MD042?: boolean;
  /**
   * MD043 - Required heading structure
   */
  readonly MD043?: MD043;
  /**
   * MD044 - Proper names should have the correct capitalization
   */
  readonly MD044?: boolean;
  /**
   * MD045 - Images should have alternate text (alt text)
   */
  readonly MD045?: boolean;
  /**
   * MD046 - Code block style
   */
  readonly MD046?: MD046;
  /**
   * MD047 - Files should end with a single newline character
   */
  readonly MD047?: boolean;
  /**
   * MD048 - Code fence style
   */
  readonly MD048?: MD048;
  /**
   * MD049 - Emphasis style should be consistent
   */
  readonly MD049?: MD049;
  /**
   * MD050 - Strong style should be consistent
   */
  readonly MD050?: MD050;
  /**
   * MD051 - Link fragments should be valid
   */
  readonly MD051?: boolean;
  /**
   * MD052 - Reference links and images should use a label that is defined
   */
  readonly MD052?: boolean;
  /**
   * MD053 - Link and image reference definitions should be needed
   */
  readonly MD053?: MD053;
}
