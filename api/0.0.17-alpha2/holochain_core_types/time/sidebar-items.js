initSidebarItems({"fn":[["test_iso_8601",""]],"struct":[["Iso8601","This struct represents datetime data recovered from a string in the ISO 8601 and RFC 3339 (more restrictive) format.  Invalid try_from conversions fails w/ Result<DateTime, HolochainError>."],["Period","A human-readable time Period, implemented as a std::time::Duration (which is unsigned). Conversion to/from and Serializable to/from readable form: \"1w2d3h4.567s\", at full Duration precision; values > 1s w/ ms precision are formatted to fractional seconds w/ full precision, while values < 1s are formatted to integer ms, us or ns as appropriate.  Accepts y/yr/year, w/wk/week, d/dy/day, h/hr/hour, m/min/minute, s/sec/second, ms/millis/millisecond, u/μ/micros/microsecond, n/nanos/nanosecond, singular or plural.  The humantime and parse_duration crates are complex, incompatible with each other, depend on crates and/or do not compile to WASM."],["Timeout","Represents a timeout for an HDK function. The usize interface defaults to ms.  Also convertible to/from a std::time::Duration (which is also unsigned) at full precision."]]});