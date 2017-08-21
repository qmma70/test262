// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: >
  DecimalDigits `.` DecimalDigits ExponentPart_opt `-` DecimalDigits
info: |
  NumericLiteralSeparator ::
    _

  DecimalLiteral ::
    DecimalIntegerLiteral . DecimalDigits_opt ExponentPart_opt

  DecimalDigits ::
    ...
    DecimalDigits NumericLiteralSeparator DecimalDigit

  SignedInteger ::
    ...
    - DecimalDigits
    ...

---*/

assert.sameValue(Number("1.0e-1_0"), 1.0e-10);