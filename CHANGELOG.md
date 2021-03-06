## [4.0.2-alpha.1](https://github.com/spartanbio/schedio/compare/v4.0.1...v4.0.2-alpha.1) (2021-01-22)


### Bug Fixes

* ensures third party `iframes` behave as expected ([e4be591](https://github.com/spartanbio/schedio/commit/e4be59193e1366402a8c560e63086a610317c5e0))

## [4.0.1](https://github.com/spartanbio/schedio/compare/v4.0.0...v4.0.1) (2020-09-22)


### Bug Fixes

* loads tokens with `sass-resources-loader` ([d8de231](https://github.com/spartanbio/schedio/commit/d8de23136b101cfb63bd2f405fd54fb36ae19079))

## [4.0.1-alpha.1](https://github.com/spartanbio/schedio/compare/v4.0.0...v4.0.1-alpha.1) (2020-07-08)


### Bug Fixes

* loads tokens with `sass-resources-loader` ([d8de231](https://github.com/spartanbio/schedio/commit/d8de23136b101cfb63bd2f405fd54fb36ae19079))

# [4.0.0](https://gitlab.com/spartanbio-ux/schedio/compare/v3.15.3...v4.0.0) (2020-05-19)


### Features

* converts `em` to `rem` ([f76cbfc](https://gitlab.com/spartanbio-ux/schedio/commit/f76cbfc723f411958ab3b757fa4f2bbaa931c334))
* **button:** removes `isOutlined` and `isText` props ([b91fa8c](https://gitlab.com/spartanbio-ux/schedio/commit/b91fa8c31fd4ad91489424e9db97bf035fd4e2e3))
* **button-group:** removes props to change button styles ([1cf3ac9](https://gitlab.com/spartanbio-ux/schedio/commit/1cf3ac9185139eeb63a52d32230a4f45a61cbb59))
* upgrades `@spartanbio/schedio-tokens` ([296c947](https://gitlab.com/spartanbio-ux/schedio/commit/296c9479ace6142b46125324505f86fe23e70920))
* upgrades `@spartanbio/schedio-tokens` ([8ac7b9c](https://gitlab.com/spartanbio-ux/schedio/commit/8ac7b9c673411741eb7650467219b85f17e658ee))


### BREAKING CHANGES

* **button-group:** buttons should be styled individually, rather than by the group.
* **button:** props were replaced by `type` prop
* `em` is no longer used
* SCSS
  - `easing('in')` and `easing('out')` are now `easing('ease-in')` and `easing('ease-out')`
  - `color('spartan_blue')` is now `color('blue`)`
  - `spacing()` returns `rem`
  - `spacing('4x')` is now `spacing('qudaruple')`
  - `shadow()` returns shadows with `rem`

# [4.0.0-alpha.1](https://gitlab.com/spartanbio-ux/schedio/compare/v3.15.3...v4.0.0-alpha.1) (2020-05-19)


### Features

* converts `em` to `rem` ([f76cbfc](https://gitlab.com/spartanbio-ux/schedio/commit/f76cbfc723f411958ab3b757fa4f2bbaa931c334))
* **button:** removes `isOutlined` and `isText` props ([b91fa8c](https://gitlab.com/spartanbio-ux/schedio/commit/b91fa8c31fd4ad91489424e9db97bf035fd4e2e3))
* **button-group:** removes props to change button styles ([1cf3ac9](https://gitlab.com/spartanbio-ux/schedio/commit/1cf3ac9185139eeb63a52d32230a4f45a61cbb59))
* upgrades `@spartanbio/schedio-tokens` ([296c947](https://gitlab.com/spartanbio-ux/schedio/commit/296c9479ace6142b46125324505f86fe23e70920))
* upgrades `@spartanbio/schedio-tokens` ([8ac7b9c](https://gitlab.com/spartanbio-ux/schedio/commit/8ac7b9c673411741eb7650467219b85f17e658ee))


### BREAKING CHANGES

* **button-group:** buttons should be styled individually, rather than by the group.
* **button:** props were replaced by `type` prop
* `em` is no longer used
* SCSS
  - `easing('in')` and `easing('out')` are now `easing('ease-in')` and `easing('ease-out')`
  - `color('spartan_blue')` is now `color('blue`)`
  - `spacing()` returns `rem`
  - `spacing('4x')` is now `spacing('qudaruple')`
  - `shadow()` returns shadows with `rem`

# [4.0.0-alpha.1](https://gitlab.com/spartanbio-ux/schedio/compare/v3.15.3...v4.0.0-alpha.1) (2020-05-19)


### Features

* converts `em` to `rem` ([f76cbfc](https://gitlab.com/spartanbio-ux/schedio/commit/f76cbfc723f411958ab3b757fa4f2bbaa931c334))
* upgrades `@spartanbio/schedio-tokens` ([8ac7b9c](https://gitlab.com/spartanbio-ux/schedio/commit/8ac7b9c673411741eb7650467219b85f17e658ee))
* **button:** removes `isOutlined` and `isText` props ([b91fa8c](https://gitlab.com/spartanbio-ux/schedio/commit/b91fa8c31fd4ad91489424e9db97bf035fd4e2e3))
* **button-group:** removes props to change button styles ([1cf3ac9](https://gitlab.com/spartanbio-ux/schedio/commit/1cf3ac9185139eeb63a52d32230a4f45a61cbb59))


### BREAKING CHANGES

* **button-group:** buttons should be styled individually, rather than by the group.
* **button:** props were replaced by `type` prop
* `em` is no longer used
* SCSS
  - `easing('in')` and `easing('out')` are now `easing('ease-in')` and `easing('ease-out')`
  - `color('spartan_blue')` is now `color('blue`)`
  - `spacing()` returns `rem`
  - `spacing('4x')` is now `spacing('qudaruple')`
  - `shadow()` returns shadows with `rem`

# [4.0.0-alpha.1](https://gitlab.com/spartanbio-ux/schedio/compare/v3.15.3...v4.0.0-alpha.1) (2020-05-08)


### Features

* converts `em` to `rem` ([997f196](https://gitlab.com/spartanbio-ux/schedio/commit/997f1962083473b282cb7ac3ad752c523c47223c))
* upgrades `@spartanbio/schedio-tokens` ([5d2f1ff](https://gitlab.com/spartanbio-ux/schedio/commit/5d2f1ffa841b0bbe891ac6ffedcc38e04665b587))


### BREAKING CHANGES

* `em` is no longer used
* SCSS
  - `easing('in')` and `easing('out')` are now `easing('ease-in')` and `easing('ease-out')`
  - `color('spartan_blue')` is now `color('blue`)`
  - `spacing()` returns `rem`
  - `spacing('4x')` is now `spacing('qudaruple')`
  - `shadow()` returns shadows with `rem`

## [3.15.3](https://gitlab.com/spartanbio-ux/schedio/compare/v3.15.2...v3.15.3) (2020-02-18)


### Bug Fixes

* **button:** adds `aria-hidden` to icon ([f99b28d](https://gitlab.com/spartanbio-ux/schedio/commit/f99b28dbac7bb2087b0cd43820cc86490677a7b8))
* **collapse:** adds `aria-hidden` to icon ([98d0baa](https://gitlab.com/spartanbio-ux/schedio/commit/98d0baa427ff764fdd356e98445ff8eabf5392a2))
* **file-input:** adds `aria-hidden` to icon ([0dffb99](https://gitlab.com/spartanbio-ux/schedio/commit/0dffb9916fa76a0a86fc91486ad2d4d534bf23f5))
* **form-validation:** adds `aria-hidden` to icon ([ae21212](https://gitlab.com/spartanbio-ux/schedio/commit/ae2121200699a77cc9552f69941f698fae34440e))
* **input:** adds `aria-hidden` to icon ([d0b83ab](https://gitlab.com/spartanbio-ux/schedio/commit/d0b83abc7b6706aa859a9d131ef5d08083391c3a))
* **link:** adds `aria-hidden` to icon ([a8c6107](https://gitlab.com/spartanbio-ux/schedio/commit/a8c6107489669e561dc2f16ee506b0d5c239bfbc))
* **select:** adds `aria-hidden` to icon ([f0ebcd6](https://gitlab.com/spartanbio-ux/schedio/commit/f0ebcd68100b693cbe21c5d24dde833a749531a3))
* **textarea:** adds `aria-hidden` to icon ([7953175](https://gitlab.com/spartanbio-ux/schedio/commit/795317525aaf7c69be9b23881c259641106a2248))
* **toast:** adds `aria-hidden` to icon ([4665e85](https://gitlab.com/spartanbio-ux/schedio/commit/4665e8512da06d31ba9ca3ae8210f27157562fee))

## [3.15.2](https://gitlab.com/spartanbio-ux/schedio/compare/v3.15.1...v3.15.2) (2020-02-14)


### Bug Fixes

* updates deps ([29d1c0a](https://gitlab.com/spartanbio-ux/schedio/commit/29d1c0a785369062cc3315cd073a14434f129af0))

## [3.15.1](https://gitlab.com/spartanbio-ux/schedio/compare/v3.15.0...v3.15.1) (2020-02-14)


### Bug Fixes

* **switch:** binds value prop correctly ([a62f901](https://gitlab.com/spartanbio-ux/schedio/commit/a62f9017520fb98ca63adb100ff85e11812c7c3c))

# [3.15.0](https://gitlab.com/spartanbio-ux/schedio/compare/v3.14.1...v3.15.0) (2020-02-11)


### Features

* transpiles for ie 11 ([20ce98a](https://gitlab.com/spartanbio-ux/schedio/commit/20ce98a7116ca29c587d45c9813389bf21b15821))

## [3.14.1](https://gitlab.com/spartanbio-ux/schedio/compare/v3.14.0...v3.14.1) (2020-02-07)


### Bug Fixes

* **deps:** upgrade @vue/cli and plugins ([4efcb21](https://gitlab.com/spartanbio-ux/schedio/commit/4efcb21c88acf039fff953204f66b18517653b5c))

# [3.14.0](https://gitlab.com/spartanbio-ux/schedio/compare/v3.13.1...v3.14.0) (2019-12-16)


### Bug Fixes

* **button:** adds `native-type` prop so HTML button type can be set ([a0923ce](https://gitlab.com/spartanbio-ux/schedio/commit/a0923ce6a5f8e5a11a5c6f5feac1d7bfd787930d))


### Features

* **chip:** adds default config for color ([0fd9a19](https://gitlab.com/spartanbio-ux/schedio/commit/0fd9a19aef63ddf3c1cccf3449aa1cd5627e6b94))
* enables default prop config ([dc20e34](https://gitlab.com/spartanbio-ux/schedio/commit/dc20e34e6c4842bbd27811ef14ce6b90025d7871))
* **button:** adds default config for color, shade, and type ([b2798b8](https://gitlab.com/spartanbio-ux/schedio/commit/b2798b87a74efe8e8647a1d5653ebdcef560115c))
* **container:** adds default config for tag ([8a0a85d](https://gitlab.com/spartanbio-ux/schedio/commit/8a0a85d494a6013d140d28d9c0ab941c222ff1e9))
* **file-input:** adds default config for text, is-droppable, hide-icon, hide-count ([93f4166](https://gitlab.com/spartanbio-ux/schedio/commit/93f416641dc0fdaa67fd9969b1308256299e9f61))
* **hero:** adds default config for height ([d38e898](https://gitlab.com/spartanbio-ux/schedio/commit/d38e89885fb3671018361375382d1aff5286960f))
* **link:** adds `use-anchor` prop ([5f9e5a8](https://gitlab.com/spartanbio-ux/schedio/commit/5f9e5a86aab3467dfab34d58b4ea0ce571376aa0))
* **link:** supports custom `router-link` wrappers, rather than just `nuxt-link` ([966ca30](https://gitlab.com/spartanbio-ux/schedio/commit/966ca30b8c6d0990ebd4aa8e5e0486352dba712f))
* **progress-bar:** adds default config for message and color ([b4c7eea](https://gitlab.com/spartanbio-ux/schedio/commit/b4c7eea6f42d92d4816d91810d8b125ea01d5440))
* **spinner:** adds default config for color and size ([519ef08](https://gitlab.com/spartanbio-ux/schedio/commit/519ef088cccec6d1e5345afeb4716add7b91b0bf))
* **table:** adds default config for is-bordered, is-hoverable, is-striped, is-fullwidth ([e710012](https://gitlab.com/spartanbio-ux/schedio/commit/e71001227bbef6ce8c2f4ba2d7f7f0b9178ffc56))

## [3.13.1](https://gitlab.com/spartanbio-ux/schedio/compare/v3.13.0...v3.13.1) (2019-12-13)


### Bug Fixes

* moves `@spartanbio/schedio-tokens` to dependencies ([0ad14c6](https://gitlab.com/spartanbio-ux/schedio/commit/0ad14c60924ceb9be5d89587e1da4da86c58fcb2))

# [3.13.0](https://gitlab.com/spartanbio-ux/schedio/compare/v3.12.0...v3.13.0) (2019-12-13)


### Bug Fixes

* **deps:** updates tokens ([c5a36ed](https://gitlab.com/spartanbio-ux/schedio/commit/c5a36ed227e40da4f20792830bd502180c3ee0a8))


### Features

* migrates tokens to `@spartanbio/schedio-tokens` ([f4e1268](https://gitlab.com/spartanbio-ux/schedio/commit/f4e1268ac1a3cb90704a5d89b0a0253a789929cd))

# [3.12.0](https://gitlab.com/spartanbio-ux/schedio/compare/v3.11.1...v3.12.0) (2019-12-13)


### Features

* migrates tokens to `@spartanbio/schedio-tokens` ([b946aee](https://gitlab.com/spartanbio-ux/schedio/commit/b946aeeda9a30e69b5bc639c4f74091a73ad2471))

## [3.11.1](https://gitlab.com/spartanbio-ux/schedio/compare/v3.11.0...v3.11.1) (2019-12-10)


### Bug Fixes

* **ci:** uses object for assets config ([bc71d7a](https://gitlab.com/spartanbio-ux/schedio/commit/bc71d7a11ba47daaf01655f22185859872b167e5))

# [3.11.0](https://gitlab.com/spartanbio-ux/schedio/compare/v3.10.4...v3.11.0) (2019-12-10)


### Bug Fixes

* **deps:** ugrades dependencies ([2bc03c3](https://gitlab.com/spartanbio-ux/schedio/commit/2bc03c37d941adebf0f45a7bc88102cbd5b8d5d3))
* **switch:** binds `checked` to `value` ([069f54c](https://gitlab.com/spartanbio-ux/schedio/commit/069f54cbc4c172ced4548575d4fa7ff74afe5f82))
* **tokens-utils:** corrects `$background-value` name ([77ada75](https://gitlab.com/spartanbio-ux/schedio/commit/77ada75c5e73c62ed61041e105c5bf2f7a7d4bec))
* uses correct `style-resources-loader` config ([5508608](https://gitlab.com/spartanbio-ux/schedio/commit/55086084340161cd4c23f824ec1d48b775f72d09))


### Features

* **button:** adds `type` prop; deprecates `isOutlined` and `isText` ([d07ad20](https://gitlab.com/spartanbio-ux/schedio/commit/d07ad20ea89ee86601d490f50ee2cab2b32caa1d))
* **button:** adds shade prop ([697c9a4](https://gitlab.com/spartanbio-ux/schedio/commit/697c9a44f221c168eba15f570055538b613facbe))
* **button-group:** deprecates `color`, `isOutlined`, `isText` ([10c3125](https://gitlab.com/spartanbio-ux/schedio/commit/10c31251cea8400dd40e894da7bb4b0898e423c4))
* **controls:** adds shades to icon mixin ([b8aa66a](https://gitlab.com/spartanbio-ux/schedio/commit/b8aa66a163464a4e8da6ca90a854238fd732aa5d))
* **icon:** enables icon shades ([97a1d74](https://gitlab.com/spartanbio-ux/schedio/commit/97a1d74d4c45274006840abc9181c06ebd84f41c))
* **input:** adds icon shade props ([f39b90b](https://gitlab.com/spartanbio-ux/schedio/commit/f39b90b43ddea729d7c6bb086412255b99514a7c))
* **internal:** adds prop deprecation mixin ([c35df89](https://gitlab.com/spartanbio-ux/schedio/commit/c35df89209710c6067d7fbf2e63299e355eb14d3))
* **logo:** adds logo component ([2daaf2b](https://gitlab.com/spartanbio-ux/schedio/commit/2daaf2bfcc232277da022fce83c6a0deccf0d75d))
* adds shared options ([a518316](https://gitlab.com/spartanbio-ux/schedio/commit/a5183160db7b10dc16c13f4f37a0a08265577feb))
* **select:** adds icon shade props ([a77fe62](https://gitlab.com/spartanbio-ux/schedio/commit/a77fe623a6299c63f4887c141876eb755ac556ab))
* **textarea:** adds icon shade props ([ee102af](https://gitlab.com/spartanbio-ux/schedio/commit/ee102aff5bca9e428a8cd8b79d2ed6fcd7363e4a))

## [3.10.4](https://gitlab.com/spartanbio-ux/schedio/compare/v3.10.3...v3.10.4) (2019-11-20)


### Bug Fixes

* **toast:** removes `module` from style ([ddae9ca](https://gitlab.com/spartanbio-ux/schedio/commit/ddae9ca))

## [3.10.3](https://gitlab.com/spartanbio-ux/schedio/compare/v3.10.2...v3.10.3) (2019-11-13)


### Bug Fixes

* **select:** ensures duplicate events are not emitted ([7c4ee2e](https://gitlab.com/spartanbio-ux/schedio/commit/7c4ee2e))

## [3.10.2](https://gitlab.com/spartanbio-ux/schedio/compare/v3.10.1...v3.10.2) (2019-10-28)


### Bug Fixes

* **controls:** ensures checks and radios don't shrink ([ec0a44d](https://gitlab.com/spartanbio-ux/schedio/commit/ec0a44d))
* **radio:** properly binds and emits value ([bb548e8](https://gitlab.com/spartanbio-ux/schedio/commit/bb548e8))

## [3.10.1](https://gitlab.com/spartanbio-ux/schedio/compare/v3.10.0...v3.10.1) (2019-10-28)


### Bug Fixes

* **radio:** ensures values are emitted ([ee4a8fd](https://gitlab.com/spartanbio-ux/schedio/commit/ee4a8fd))

# [3.10.0](https://gitlab.com/spartanbio-ux/schedio/compare/v3.9.2...v3.10.0) (2019-10-04)


### Features

* **lazy-image:** adds lazy image component ([4d0ab3f](https://gitlab.com/spartanbio-ux/schedio/commit/4d0ab3f))

## [3.9.2](https://gitlab.com/spartanbio-ux/schedio/compare/v3.9.1...v3.9.2) (2019-09-30)


### Performance Improvements

* **icons:** reduces bundles size ([3fbf3f4](https://gitlab.com/spartanbio-ux/schedio/commit/3fbf3f4))
* reduces bundle size ([2c7ca66](https://gitlab.com/spartanbio-ux/schedio/commit/2c7ca66))

## [3.9.1](https://gitlab.com/spartanbio-ux/schedio/compare/v3.9.0...v3.9.1) (2019-09-26)


### Bug Fixes

* **inputs:** renames `_name` to `computedName` ([a043f64](https://gitlab.com/spartanbio-ux/schedio/commit/a043f64))

# [3.9.0](https://gitlab.com/spartanbio-ux/schedio/compare/v3.8.1...v3.9.0) (2019-09-26)


### Bug Fixes

* **buttons:** removes transition from height and width ([01495f4](https://gitlab.com/spartanbio-ux/schedio/commit/01495f4))
* **checkbox:** binds checked attribute ([3b7df6f](https://gitlab.com/spartanbio-ux/schedio/commit/3b7df6f))
* **controls:** removes transition from height and width ([fa271a5](https://gitlab.com/spartanbio-ux/schedio/commit/fa271a5))


### Features

* **card-container:** adds tag prop ([dde1b53](https://gitlab.com/spartanbio-ux/schedio/commit/dde1b53))
* **container:** adds tag prop ([2dd32f8](https://gitlab.com/spartanbio-ux/schedio/commit/2dd32f8))
* **hero:** adds tag prop ([24699ed](https://gitlab.com/spartanbio-ux/schedio/commit/24699ed))
* **inputs:** computes field name ([134460e](https://gitlab.com/spartanbio-ux/schedio/commit/134460e))
* **table:** adds `is-fullwidth` ([cb81183](https://gitlab.com/spartanbio-ux/schedio/commit/cb81183))

## [3.8.1](https://gitlab.com/spartanbio-ux/schedio/compare/v3.8.0...v3.8.1) (2019-09-19)


### Bug Fixes

* **card:** specifies `border-color` correctly ([1548635](https://gitlab.com/spartanbio-ux/schedio/commit/1548635))

# [3.8.0](https://gitlab.com/spartanbio-ux/schedio/compare/v3.7.0...v3.8.0) (2019-09-18)


### Bug Fixes

* **button:** improves icon spacing ([8315f97](https://gitlab.com/spartanbio-ux/schedio/commit/8315f97))
* **button-group:** accounts for added button margin ([1b20d09](https://gitlab.com/spartanbio-ux/schedio/commit/1b20d09))
* **headings:** removes `margin-bottom` from `:only-child` ([820dca0](https://gitlab.com/spartanbio-ux/schedio/commit/820dca0))
* **link:** fallback to `href` instead of `to` ([8422008](https://gitlab.com/spartanbio-ux/schedio/commit/8422008))
* **radio:** improves checkmark rendering ([1e38f97](https://gitlab.com/spartanbio-ux/schedio/commit/1e38f97))
* **spacing:** makes `spacing('tight')` usable ([f41e307](https://gitlab.com/spartanbio-ux/schedio/commit/f41e307))
* **toast:** improves `margin-bottom` ([6042f06](https://gitlab.com/spartanbio-ux/schedio/commit/6042f06))


### Features

* **borders:** improves border colors ([897b685](https://gitlab.com/spartanbio-ux/schedio/commit/897b685))
* **button:** adds text buttons ([bea097c](https://gitlab.com/spartanbio-ux/schedio/commit/bea097c))
* **button:** allows slot text to become aria-label ([2359315](https://gitlab.com/spartanbio-ux/schedio/commit/2359315))
* **chip-group:** adds chip group ([a5c1e1f](https://gitlab.com/spartanbio-ux/schedio/commit/a5c1e1f))
* **link:** adds `icon`, `isExternal` and `isLight` props ([cf2cfe6](https://gitlab.com/spartanbio-ux/schedio/commit/cf2cfe6))
* **typography:** uses dark theme for `code` and `pre` ([19e8281](https://gitlab.com/spartanbio-ux/schedio/commit/19e8281))

# [3.7.0](https://gitlab.com/spartanbio-ux/schedio/compare/v3.6.1...v3.7.0) (2019-07-29)


### Bug Fixes

* **typography:** fixes weight class names ([3a5a807](https://gitlab.com/spartanbio-ux/schedio/commit/3a5a807))
* only ignore root level dist ([862a618](https://gitlab.com/spartanbio-ux/schedio/commit/862a618))


### Features

* **typography:** uses `$font-weight-light` if bigger than 16px ([9e1f83b](https://gitlab.com/spartanbio-ux/schedio/commit/9e1f83b))

## [3.6.1](https://gitlab.com/spartanbio-ux/schedio/compare/v3.6.0...v3.6.1) (2019-07-26)


### Bug Fixes

* **container-column:** generates response order classes correctly ([35d8c69](https://gitlab.com/spartanbio-ux/schedio/commit/35d8c69))

# [3.6.0](https://gitlab.com/spartanbio-ux/schedio/compare/v3.5.1...v3.6.0) (2019-07-24)


### Features

* **hero:** adds additional heights ([acf8cb2](https://gitlab.com/spartanbio-ux/schedio/commit/acf8cb2))

## [3.5.1](https://gitlab.com/spartanbio-ux/schedio/compare/v3.5.0...v3.5.1) (2019-07-11)


### Bug Fixes

* **collapse:** fixes alignment and icon sizing ([26f3813](https://gitlab.com/spartanbio-ux/schedio/commit/26f3813))

# [3.5.0](https://gitlab.com/spartanbio-ux/schedio/compare/v3.4.9...v3.5.0) (2019-07-02)


### Features

* **s-collapse:** adds `SCollapse` component ([ee147e4](https://gitlab.com/spartanbio-ux/schedio/commit/ee147e4))

## [3.4.9](https://gitlab.com/spartanbio-ux/schedio/compare/v3.4.8...v3.4.9) (2019-06-24)


### Bug Fixes

* **row:** applies negative margin to all sides ([c1c1dfa](https://gitlab.com/spartanbio-ux/schedio/commit/c1c1dfa))

## [3.4.8](https://gitlab.com/spartanbio-ux/schedio/compare/v3.4.7...v3.4.8) (2019-06-24)


### Bug Fixes

* **column:** increases column padding ([44947a9](https://gitlab.com/spartanbio-ux/schedio/commit/44947a9))
* **container:** adds padding to ensure rows do not cause page to scroll horizontally ([c98b367](https://gitlab.com/spartanbio-ux/schedio/commit/c98b367))

## [3.4.7](https://gitlab.com/spartanbio-ux/schedio/compare/v3.4.6...v3.4.7) (2019-06-20)


### Bug Fixes

* **typography:** fixes paragraph spacing ([1cf6ee9](https://gitlab.com/spartanbio-ux/schedio/commit/1cf6ee9))

## [3.4.6](https://gitlab.com/spartanbio-ux/schedio/compare/v3.4.5...v3.4.6) (2019-06-20)


### Bug Fixes

* **hero:** improves padding ([6eca329](https://gitlab.com/spartanbio-ux/schedio/commit/6eca329))
* **typography:** ensures correct property is being set ([bbd63d0](https://gitlab.com/spartanbio-ux/schedio/commit/bbd63d0))
* **typography:** only add margin to non-last child paragraphs ([1190a6e](https://gitlab.com/spartanbio-ux/schedio/commit/1190a6e))

## [3.4.5](https://gitlab.com/spartanbio-ux/schedio/compare/v3.4.4...v3.4.5) (2019-06-19)


### Bug Fixes

* **container-column:** ensures size props will be parsed as `boolean` ([0fef1d5](https://gitlab.com/spartanbio-ux/schedio/commit/0fef1d5))

## [3.4.4](https://gitlab.com/spartanbio-ux/schedio/compare/v3.4.3...v3.4.4) (2019-06-18)


### Bug Fixes

* **fonts:** removes fonts from main bundle ([3da1325](https://gitlab.com/spartanbio-ux/schedio/commit/3da1325))

## [3.4.3](https://gitlab.com/spartanbio-ux/schedio/compare/v3.4.2...v3.4.3) (2019-06-14)


### Bug Fixes

* **callout:** improves background-color ([8710204](https://gitlab.com/spartanbio-ux/schedio/commit/8710204))
* **controls:** makes text unselectable when disabled ([89ff7fc](https://gitlab.com/spartanbio-ux/schedio/commit/89ff7fc))
* **inputs:** centers check mark properly ([201a01c](https://gitlab.com/spartanbio-ux/schedio/commit/201a01c))
* **select:** fixes default value selection ([2cfdf40](https://gitlab.com/spartanbio-ux/schedio/commit/2cfdf40))

## [3.4.2](https://gitlab.com/spartanbio-ux/schedio/compare/v3.4.1...v3.4.2) (2019-06-07)


### Bug Fixes

* **button-group:** removes bottom margin from grouped ([ab20027](https://gitlab.com/spartanbio-ux/schedio/commit/ab20027))
* **controls:** enables focus ring on hover ([6eabb77](https://gitlab.com/spartanbio-ux/schedio/commit/6eabb77))
* **markdown:** lightens green on markdown links ([6ce956a](https://gitlab.com/spartanbio-ux/schedio/commit/6ce956a))

## [3.4.1](https://gitlab.com/spartanbio-ux/schedio/compare/v3.4.0...v3.4.1) (2019-06-06)


### Bug Fixes

* builds ASE colors when tokens change ([476fad4](https://gitlab.com/spartanbio-ux/schedio/commit/476fad4))

# [3.4.0](https://gitlab.com/spartanbio-ux/schedio/compare/v3.3.5...v3.4.0) (2019-06-05)


### Features

* **accessibility:** adds `@storybook/addon-a11y` ([19a1d67](https://gitlab.com/spartanbio-ux/schedio/commit/19a1d67))
* **colors:** ensures base colors have good contrast with white or night ([c2f4337](https://gitlab.com/spartanbio-ux/schedio/commit/c2f4337))
* **controls:** adds focus mixin ([2d198dc](https://gitlab.com/spartanbio-ux/schedio/commit/2d198dc))
* **scss:** adds `choose-contrast-color()` function ([e7e7a4f](https://gitlab.com/spartanbio-ux/schedio/commit/e7e7a4f))

## [3.3.5](https://gitlab.com/spartanbio-ux/schedio/compare/v3.3.4...v3.3.5) (2019-06-05)


### Bug Fixes

* **button-group:** adds margin-bottom ([34fd9fc](https://gitlab.com/spartanbio-ux/schedio/commit/34fd9fc))
* **container-row:** accounts for column padding ([8886b00](https://gitlab.com/spartanbio-ux/schedio/commit/8886b00))
* **label:** does not force case ([0431977](https://gitlab.com/spartanbio-ux/schedio/commit/0431977))
* **toast:** uses correct prop names/bindings ([877dd43](https://gitlab.com/spartanbio-ux/schedio/commit/877dd43))

## [3.3.4](https://gitlab.com/spartanbio-ux/schedio/compare/v3.3.3...v3.3.4) (2019-06-03)


### Bug Fixes

* **file-input:** emits event on empty input ([2e1d676](https://gitlab.com/spartanbio-ux/schedio/commit/2e1d676))
* **file-input:** makes control inline-block ([97cf127](https://gitlab.com/spartanbio-ux/schedio/commit/97cf127))

## [3.3.3](https://gitlab.com/spartanbio-ux/schedio/compare/v3.3.2...v3.3.3) (2019-06-03)


### Bug Fixes

* **file-input:** fixes v-model usage ([d52297f](https://gitlab.com/spartanbio-ux/schedio/commit/d52297f))

## [3.3.2](https://gitlab.com/spartanbio-ux/schedio/compare/v3.3.1...v3.3.2) (2019-05-31)


### Bug Fixes

* **file-input:** emits input on file removal ([010f45c](https://gitlab.com/spartanbio-ux/schedio/commit/010f45c))
* **file-input:** enables v-model ([a3f0875](https://gitlab.com/spartanbio-ux/schedio/commit/a3f0875))

## [3.3.1](https://gitlab.com/spartanbio-ux/schedio/compare/v3.3.0...v3.3.1) (2019-05-30)


### Bug Fixes

* **file-input:** emits files on input ([8ba785a](https://gitlab.com/spartanbio-ux/schedio/commit/8ba785a))

# [3.3.0](https://gitlab.com/spartanbio-ux/schedio/compare/v3.2.1...v3.3.0) (2019-05-30)


### Features

* **file-input:** adds drag and drop ([439e728](https://gitlab.com/spartanbio-ux/schedio/commit/439e728))

## [3.2.1](https://gitlab.com/spartanbio-ux/schedio/compare/v3.2.0...v3.2.1) (2019-05-28)


### Bug Fixes

* **button:** no select when loading (closes [#18](https://gitlab.com/spartanbio-ux/schedio/issues/18)) ([5975fd5](https://gitlab.com/spartanbio-ux/schedio/commit/5975fd5))
* **controls:** uses consistent disabled style (closes [#16](https://gitlab.com/spartanbio-ux/schedio/issues/16)) ([fd20059](https://gitlab.com/spartanbio-ux/schedio/commit/fd20059))
* **table:** fixes slot usage ([d649db6](https://gitlab.com/spartanbio-ux/schedio/commit/d649db6))

# [3.2.0](https://gitlab.com/spartanbio-ux/schedio/compare/v3.1.0...v3.2.0) (2019-05-28)


### Features

* **chip:** adds chip component ([852008a](https://gitlab.com/spartanbio-ux/schedio/commit/852008a))
* **file-input:** uses `SChip` ([2fa1356](https://gitlab.com/spartanbio-ux/schedio/commit/2fa1356))

# [3.1.0](https://gitlab.com/spartanbio-ux/schedio/compare/v3.0.1...v3.1.0) (2019-05-23)


### Bug Fixes

* **scripts:** ensures string is passed to jest ([f3c9a2d](https://gitlab.com/spartanbio-ux/schedio/commit/f3c9a2d))
* **scripts:** removes unused import ([03961f8](https://gitlab.com/spartanbio-ux/schedio/commit/03961f8))


### Features

* **file-input:** adds file input component ([bdc15a6](https://gitlab.com/spartanbio-ux/schedio/commit/bdc15a6))

## [3.0.1](https://gitlab.com/spartanbio-ux/schedio/compare/v3.0.0...v3.0.1) (2019-05-16)


### Bug Fixes

* **inputs:** fixes icon color binding ([f2d451f](https://gitlab.com/spartanbio-ux/schedio/commit/f2d451f))

# [3.0.0](https://gitlab.com/spartanbio-ux/schedio/compare/v2.18.1...v3.0.0) (2019-05-16)


### Bug Fixes

* converts font definitions to css ([e736b86](https://gitlab.com/spartanbio-ux/schedio/commit/e736b86))
* **ci:** upgrades image to node 10 ([cbdc157](https://gitlab.com/spartanbio-ux/schedio/commit/cbdc157))


### Features

* improved scss import ([008cf73](https://gitlab.com/spartanbio-ux/schedio/commit/008cf73))
* uses a consistent naming scheme for props ([3f066a9](https://gitlab.com/spartanbio-ux/schedio/commit/3f066a9))


### BREAKING CHANGES

* updates library API
In general:
- `xColor` => `color`
- `xSize` => `size`
- `xType` => `type`
- `outlineColor` => `isOutlined` (to be used with color prop)
- `showX` => `hideX` with default changed to `false`
- `isOptional` => `isRequired` with default changed accordingly
- `hasX` => `hideX` if X is an element, or text; default changed
accordingly

Specifically:
- **s-heading**: `displayLevel` has been combined with `level`

## [2.18.1](https://gitlab.com/spartanbio-ux/schedio/compare/v2.18.0...v2.18.1) (2019-05-02)


### Bug Fixes

* **switch:** improves transitions ([2539ff4](https://gitlab.com/spartanbio-ux/schedio/commit/2539ff4))

# [2.18.0](https://gitlab.com/spartanbio-ux/schedio/compare/v2.17.0...v2.18.0) (2019-05-02)


### Bug Fixes

* **switch:** adds color to hover state (closes [#14](https://gitlab.com/spartanbio-ux/schedio/issues/14)) ([d5ddbca](https://gitlab.com/spartanbio-ux/schedio/commit/d5ddbca))


### Features

* adds shadow overlay mixin ([65ebd9d](https://gitlab.com/spartanbio-ux/schedio/commit/65ebd9d))

# [2.17.0](https://gitlab.com/spartanbio-ux/schedio/compare/v2.16.2...v2.17.0) (2019-05-02)


### Features

* uses `dart-sass` instead of `node-sass` ([2951646](https://gitlab.com/spartanbio-ux/schedio/commit/2951646))

## [2.16.2](https://gitlab.com/spartanbio-ux/schedio/compare/v2.16.1...v2.16.2) (2019-05-02)


### Bug Fixes

* **shadows:** decreases shadow intensity ([4f5756a](https://gitlab.com/spartanbio-ux/schedio/commit/4f5756a))
* **shadows:** reduces shadow intensity ([#15](https://gitlab.com/spartanbio-ux/schedio/issues/15)) ([d2ef9f5](https://gitlab.com/spartanbio-ux/schedio/commit/d2ef9f5))

## [2.16.1](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.16.0...v2.16.1) (2019-04-12)


### Bug Fixes

* **button-group:** button group shadow should not appear when children are disabled ([e726fa5](https://gitlab.com/spartanbio-marketing/schedio/commit/e726fa5))
* **controls:** fixes icon spacing ([d9aa545](https://gitlab.com/spartanbio-marketing/schedio/commit/d9aa545))

# [2.16.0](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.15.2...v2.16.0) (2019-04-09)


### Features

* **tokens:** writes adobe swatch file ([c56c897](https://gitlab.com/spartanbio-marketing/schedio/commit/c56c897))

## [2.15.2](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.15.1...v2.15.2) (2019-04-09)


### Bug Fixes

* **toast:** uses correct border-radius ([2b9ab46](https://gitlab.com/spartanbio-marketing/schedio/commit/2b9ab46))
* **toast:** uses correct border-radius for toast action ([d328dec](https://gitlab.com/spartanbio-marketing/schedio/commit/d328dec))

## [2.15.1](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.15.0...v2.15.1) (2019-04-09)


### Bug Fixes

* **typography:** improves legibility ([ad197a9](https://gitlab.com/spartanbio-marketing/schedio/commit/ad197a9))

# [2.15.0](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.14.0...v2.15.0) (2019-04-03)


### Features

* **callout:** adds callout component ([8bbd7a6](https://gitlab.com/spartanbio-marketing/schedio/commit/8bbd7a6))

# [2.14.0](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.13.1...v2.14.0) (2019-03-26)


### Features

* **markdown:** adds markdown utility class ([6dc1a43](https://gitlab.com/spartanbio-marketing/schedio/commit/6dc1a43))

## [2.13.1](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.13.0...v2.13.1) (2019-03-22)


### Bug Fixes

* **inputs:** fixes invalid border color ([36c4ef5](https://gitlab.com/spartanbio-marketing/schedio/commit/36c4ef5))
* **inputs:** removes redundant mixin ([dac92a7](https://gitlab.com/spartanbio-marketing/schedio/commit/dac92a7))
* **select:** disables pointer events on arrow ([d4ab445](https://gitlab.com/spartanbio-marketing/schedio/commit/d4ab445))
* **select:** fixes select arrow disabled color ([1faa024](https://gitlab.com/spartanbio-marketing/schedio/commit/1faa024))
* **switch:** fixes disabled state ([857a0c0](https://gitlab.com/spartanbio-marketing/schedio/commit/857a0c0))
* **switch:** fixes invalid state ([eb902b6](https://gitlab.com/spartanbio-marketing/schedio/commit/eb902b6))

# [2.13.0](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.12.0...v2.13.0) (2019-03-21)


### Bug Fixes

* **heading:** fixes `tag` validation ([23ef081](https://gitlab.com/spartanbio-marketing/schedio/commit/23ef081))


### Features

* **spacing:** adds `spacing-tight` (0.75em) ([13c9d8f](https://gitlab.com/spartanbio-marketing/schedio/commit/13c9d8f))

# [2.12.0](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.11.0...v2.12.0) (2019-03-15)


### Bug Fixes

* **table-cell:** updates numeric cells on change ([2d279ab](https://gitlab.com/spartanbio-marketing/schedio/commit/2d279ab))


### Features

* **switch:** makes switch states less garish ([9d1c488](https://gitlab.com/spartanbio-marketing/schedio/commit/9d1c488))

# [2.11.0](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.10.5...v2.11.0) (2019-03-07)


### Bug Fixes

* **table:** hover background color overrides stripe color ([24008e5](https://gitlab.com/spartanbio-marketing/schedio/commit/24008e5))


### Features

* **table:** makes tables responsive ([8711726](https://gitlab.com/spartanbio-marketing/schedio/commit/8711726))

## [2.10.5](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.10.4...v2.10.5) (2019-03-06)


### Bug Fixes

* **table:** improves table stripe and higlight colors ([c9196e6](https://gitlab.com/spartanbio-marketing/schedio/commit/c9196e6))

## [2.10.4](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.10.3...v2.10.4) (2019-03-05)


### Bug Fixes

* **hero:** fixes `has-no-padding` prop ([d7b9dd9](https://gitlab.com/spartanbio-marketing/schedio/commit/d7b9dd9))

## [2.10.3](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.10.2...v2.10.3) (2019-03-05)


### Bug Fixes

* **switch:** fixes switch border ([6703495](https://gitlab.com/spartanbio-marketing/schedio/commit/6703495))

# [2.10.0](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.9.3...v2.10.0) (2019-03-01)


### Features

* adds vetur helpers ([09e1e8c](https://gitlab.com/spartanbio-marketing/schedio/commit/09e1e8c))

## [2.9.3](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.9.2...v2.9.3) (2019-02-28)


### Bug Fixes

* **forms:** fixes placeholder font-weight ([8fb5471](https://gitlab.com/spartanbio-marketing/schedio/commit/8fb5471))
* **toast:** allows toasts to have no type ([cac2140](https://gitlab.com/spartanbio-marketing/schedio/commit/cac2140))

## [2.9.2](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.9.1...v2.9.2) (2019-02-28)


### Bug Fixes

* fixes build and release config ([b8320ff](https://gitlab.com/spartanbio-marketing/schedio/commit/b8320ff))

## [2.9.1](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.9.0...v2.9.1) (2019-02-27)


### Bug Fixes

* fixes broken release ([c2602af](https://gitlab.com/spartanbio-marketing/schedio/commit/c2602af))

# [2.9.0](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.8.1...v2.9.0) (2019-02-27)


### Features

* **notification:** adds notification mixin ([d86faf8](https://gitlab.com/spartanbio-marketing/schedio/commit/d86faf8))
* **toast:** adds toast component ([c43a2aa](https://gitlab.com/spartanbio-marketing/schedio/commit/c43a2aa))
* **toast:** adds toast component ([#13](https://gitlab.com/spartanbio-marketing/schedio/issues/13)) ([4d615b5](https://gitlab.com/spartanbio-marketing/schedio/commit/4d615b5))

## [2.8.1](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.8.0...v2.8.1) (2019-02-07)


### Bug Fixes

* **icons:** fixes strokewidth on android ([9f91501](https://gitlab.com/spartanbio-marketing/schedio/commit/9f91501))

# [2.8.0](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.7.1...v2.8.0) (2019-02-07)


### Bug Fixes

* **links:** improves link states ([2b68e64](https://gitlab.com/spartanbio-marketing/schedio/commit/2b68e64))
* adds static directory to build script ([ecb1d72](https://gitlab.com/spartanbio-marketing/schedio/commit/ecb1d72))


### Features

* adds italic and weight utilities ([39537e8](https://gitlab.com/spartanbio-marketing/schedio/commit/39537e8))

## [2.7.1](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.7.0...v2.7.1) (2019-02-05)


### Bug Fixes

* **form-validation:** sets flex properties correctly ([49501cf](https://gitlab.com/spartanbio-marketing/schedio/commit/49501cf))
* **vue-transitions:** fixes transition duration ([5be8d47](https://gitlab.com/spartanbio-marketing/schedio/commit/5be8d47))

# [2.7.0](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.6.1...v2.7.0) (2019-02-05)


### Bug Fixes

* **controls:** fixes fullwidth controls ([c8bc39d](https://gitlab.com/spartanbio-marketing/schedio/commit/c8bc39d))


### Features

* **form-field:** adds form-field wrapper ([a6d51fb](https://gitlab.com/spartanbio-marketing/schedio/commit/a6d51fb))
* **form-validation:** adds form validation component (closes [#6](https://gitlab.com/spartanbio-marketing/schedio/issues/6), [#7](https://gitlab.com/spartanbio-marketing/schedio/issues/7)) ([1750885](https://gitlab.com/spartanbio-marketing/schedio/commit/1750885))
* **vue-transitions:** adds global vue transition ([a17c26b](https://gitlab.com/spartanbio-marketing/schedio/commit/a17c26b))

## [2.6.1](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.6.0...v2.6.1) (2019-01-31)


### Bug Fixes

* **button:** ensures disabled buttons hover state does not change ([8ee1e12](https://gitlab.com/spartanbio-marketing/schedio/commit/8ee1e12))

# [2.6.0](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.5.0...v2.6.0) (2019-01-31)


### Bug Fixes

* moves fonts to static ([47fc023](https://gitlab.com/spartanbio-marketing/schedio/commit/47fc023))
* **button:** fixes various disabled state bugs ([67f36ba](https://gitlab.com/spartanbio-marketing/schedio/commit/67f36ba))
* **container:** removes negative margins from rows ([d4a06b9](https://gitlab.com/spartanbio-marketing/schedio/commit/d4a06b9))
* **label:** fixes margin on first child ([3ab8327](https://gitlab.com/spartanbio-marketing/schedio/commit/3ab8327))
* **scss:** imports scss in a better order ([1fd36c5](https://gitlab.com/spartanbio-marketing/schedio/commit/1fd36c5))
* **shadows:** uses dark colour for shadows ([052dc41](https://gitlab.com/spartanbio-marketing/schedio/commit/052dc41))


### Features

* **link:** allows empty slot content ([9418f05](https://gitlab.com/spartanbio-marketing/schedio/commit/9418f05))

# [2.5.0](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.4.0...v2.5.0) (2019-01-30)


### Bug Fixes

* **button:** improves disabled and active states ([7b3674a](https://gitlab.com/spartanbio-marketing/schedio/commit/7b3674a))
* **button-group:** uses consistent prop naming ([f4b5d11](https://gitlab.com/spartanbio-marketing/schedio/commit/f4b5d11))
* **container-column:** uses separate function for `narrow` prop settings ([8bab4af](https://gitlab.com/spartanbio-marketing/schedio/commit/8bab4af))
* **container-row:** adds margin between sibling rows ([f7985ec](https://gitlab.com/spartanbio-marketing/schedio/commit/f7985ec))
* **container-row:** fixes class name generation ([4fb21f7](https://gitlab.com/spartanbio-marketing/schedio/commit/4fb21f7))
* **heading:** fixes heading margins (fixes [#5](https://gitlab.com/spartanbio-marketing/schedio/issues/5)) ([274078a](https://gitlab.com/spartanbio-marketing/schedio/commit/274078a))
* makes buttons inline-flex ([0a47467](https://gitlab.com/spartanbio-marketing/schedio/commit/0a47467))
* **icon:** uses feather library instead of svg sprites ([b473d99](https://gitlab.com/spartanbio-marketing/schedio/commit/b473d99))
* **label:** adds prop to hide optional text ([9f2d597](https://gitlab.com/spartanbio-marketing/schedio/commit/9f2d597))
* **label:** adds space between labels and buttons ([b6df098](https://gitlab.com/spartanbio-marketing/schedio/commit/b6df098))
* **reset:** resets address elements ([769ff50](https://gitlab.com/spartanbio-marketing/schedio/commit/769ff50))
* **spinner:** removes margin ([e6a46b6](https://gitlab.com/spartanbio-marketing/schedio/commit/e6a46b6))
* removes registration of multiple Vue instances and removes need for ([7fcc0a0](https://gitlab.com/spartanbio-marketing/schedio/commit/7fcc0a0))


### Features

* **button:** adds icons to buttons ([#2](https://gitlab.com/spartanbio-marketing/schedio/issues/2)) ([08e5983](https://gitlab.com/spartanbio-marketing/schedio/commit/08e5983))
* **buttons:** adds loading indicator to buttons ([d2cfddb](https://gitlab.com/spartanbio-marketing/schedio/commit/d2cfddb))
* **buttons:** adds outlined buttons (closes [#9](https://gitlab.com/spartanbio-marketing/schedio/issues/9)) ([be71eae](https://gitlab.com/spartanbio-marketing/schedio/commit/be71eae))
* **hero:** adds hero component (closes [#1](https://gitlab.com/spartanbio-marketing/schedio/issues/1)) ([813e16f](https://gitlab.com/spartanbio-marketing/schedio/commit/813e16f))
* **input:** adds icons to inputs ([#2](https://gitlab.com/spartanbio-marketing/schedio/issues/2)) ([feb99cb](https://gitlab.com/spartanbio-marketing/schedio/commit/feb99cb))
* **select:** adds icons to select ([#2](https://gitlab.com/spartanbio-marketing/schedio/issues/2)) ([5a32f7a](https://gitlab.com/spartanbio-marketing/schedio/commit/5a32f7a))
* **textarea:** adds icons to textareas ([#2](https://gitlab.com/spartanbio-marketing/schedio/issues/2)) ([6f85ac4](https://gitlab.com/spartanbio-marketing/schedio/commit/6f85ac4))
* **typography:** adds basic text utility classes ([#3](https://gitlab.com/spartanbio-marketing/schedio/issues/3)) ([914d1e7](https://gitlab.com/spartanbio-marketing/schedio/commit/914d1e7))

# [2.4.0](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.3.1...v2.4.0) (2018-11-30)


### Bug Fixes

* **select:** fixes arrow styling ([596d937](https://gitlab.com/spartanbio-marketing/schedio/commit/596d937))


### Features

* **icon:** adds icon component ([3943354](https://gitlab.com/spartanbio-marketing/schedio/commit/3943354))

## [2.3.1](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.3.0...v2.3.1) (2018-11-28)


### Bug Fixes

* **card:** binds image alt text ([dbafd81](https://gitlab.com/spartanbio-marketing/schedio/commit/dbafd81))
* **card-container:** imports container ([fcb3647](https://gitlab.com/spartanbio-marketing/schedio/commit/fcb3647))
* **inputs:** imports label ([7bc05cc](https://gitlab.com/spartanbio-marketing/schedio/commit/7bc05cc))
* **inputs:** registers SLabel ([d9773ba](https://gitlab.com/spartanbio-marketing/schedio/commit/d9773ba))
* **select:** emits correct events ([b1c229f](https://gitlab.com/spartanbio-marketing/schedio/commit/b1c229f))
* **select:** only compute `optionsHaveGroups` if `selectOptions` exists ([bd0f051](https://gitlab.com/spartanbio-marketing/schedio/commit/bd0f051))
* **table:** imports cell and row ([a010bb3](https://gitlab.com/spartanbio-marketing/schedio/commit/a010bb3))

# [2.3.0](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.2.4...v2.3.0) (2018-11-02)


### Bug Fixes

* **card:** uses BEM naming correctly ([2a1f490](https://gitlab.com/spartanbio-marketing/schedio/commit/2a1f490))
* **input:** fixes prop validation ([42da003](https://gitlab.com/spartanbio-marketing/schedio/commit/42da003))


### Features

* **a11y:** adds a11y plugin and updates styles for accessibility ([5139887](https://gitlab.com/spartanbio-marketing/schedio/commit/5139887))

## [2.2.4](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.2.3...v2.2.4) (2018-11-01)


### Bug Fixes

* **label:** fixes inline label alignment ([5147188](https://gitlab.com/spartanbio-marketing/schedio/commit/5147188))

## [2.2.3](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.2.2...v2.2.3) (2018-11-01)


### Bug Fixes

* **label:** fixes inline label alignment ([bd868a7](https://gitlab.com/spartanbio-marketing/schedio/commit/bd868a7))

## [2.2.2](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.2.1...v2.2.2) (2018-11-01)


### Bug Fixes

* **table:** fixes class names ([946a17a](https://gitlab.com/spartanbio-marketing/schedio/commit/946a17a))

## [2.2.1](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.2.0...v2.2.1) (2018-11-01)


### Bug Fixes

* **button-group:** fixes `button-group` color class names ([987110f](https://gitlab.com/spartanbio-marketing/schedio/commit/987110f))

# [2.2.0](https://gitlab.com/spartanbio-marketing/schedio/compare/v2.1.1...v2.2.0) (2018-11-01)


### Features

* **progress-bar:** adds progress bar component ([e7063fc](https://gitlab.com/spartanbio-marketing/schedio/commit/e7063fc))
* **spinner:** adds spinner component ([5ee324f](https://gitlab.com/spartanbio-marketing/schedio/commit/5ee324f))

## [2.1.1](https://gitlab.com/spartanbio-marketing/schedio.git/compare/v2.1.0...v2.1.1) (2018-10-31)


### Bug Fixes

* **switch:** removes `cursor: pointer` when disabled ([ee78099](https://gitlab.com/spartanbio-marketing/schedio.git/commit/ee78099))

# [2.1.0](https://gitlab.com/spartanbio-marketing/schedio.git/compare/v2.0.1...v2.1.0) (2018-10-31)


### Bug Fixes

* updates lint command ([a804ee0](https://gitlab.com/spartanbio-marketing/schedio.git/commit/a804ee0))


### Features

* **switch:** adds switch component ([12f7959](https://gitlab.com/spartanbio-marketing/schedio.git/commit/12f7959))

## [2.0.1](https://gitlab.com/spartanbio-marketing/schedio.git/compare/v2.0.0...v2.0.1) (2018-10-31)


### Bug Fixes

* uses correct path to shared conf ([65b43f4](https://gitlab.com/spartanbio-marketing/schedio.git/commit/65b43f4))

# [2.0.0](https://gitlab.com/spartanbio-marketing/schedio.git/compare/v1.6.5...v2.0.0) (2018-10-31)


### Bug Fixes

* **install:** improves how extract css is set ([8c792ba](https://gitlab.com/spartanbio-marketing/schedio.git/commit/8c792ba))
* replaces `vue-cli-plugin-storybook` with manually configured `[@storybook](https://gitlab.com/storybook)/vue` ([c41a179](https://gitlab.com/spartanbio-marketing/schedio.git/commit/c41a179))


### Code Refactoring

* renames components ([0bc370d](https://gitlab.com/spartanbio-marketing/schedio.git/commit/0bc370d))


### BREAKING CHANGES

* components have been renamed

## [1.6.5](https://gitlab.com/spartanbio-marketing/schedio.git/compare/v1.6.4...v1.6.5) (2018-10-29)


### Bug Fixes

* **docs:** changes extract css setting determination ([17f2c24](https://gitlab.com/spartanbio-marketing/schedio.git/commit/17f2c24))

## [1.6.4](https://gitlab.com/spartanbio-marketing/schedio.git/compare/v1.6.3...v1.6.4) (2018-10-29)


### Bug Fixes

* allows import of single components ([02ae011](https://gitlab.com/spartanbio-marketing/schedio.git/commit/02ae011))
* **readme:** fixes typo [skip ci] ([2fea9ef](https://gitlab.com/spartanbio-marketing/schedio.git/commit/2fea9ef))
* **textarea:** names component correctly ([76c3142](https://gitlab.com/spartanbio-marketing/schedio.git/commit/76c3142))

## [1.6.3](https://gitlab.com/spartanbio-marketing/schedio/compare/v1.6.2...v1.6.3) (2018-10-26)


### Bug Fixes

* adds npmignore ([3f17c68](https://gitlab.com/spartanbio-marketing/schedio/commit/3f17c68))
* lists build files for npm ([90024b9](https://gitlab.com/spartanbio-marketing/schedio/commit/90024b9))
* uses correct build and dest dirs ([53f6da6](https://gitlab.com/spartanbio-marketing/schedio/commit/53f6da6))
* uses correct package name ([997263e](https://gitlab.com/spartanbio-marketing/schedio/commit/997263e))

## [1.6.2](https://gitlab.com/spartanbio-marketing/schedio/compare/v1.6.1...v1.6.2) (2018-10-26)


### Bug Fixes

* references build script in `prepare` properly ([d098a3f](https://gitlab.com/spartanbio-marketing/schedio/commit/d098a3f))

## [1.6.1](https://gitlab.com/spartanbio-marketing/schedio/compare/v1.6.0...v1.6.1) (2018-10-25)


### Bug Fixes

* scripts should properly run on install ([e39fc9e](https://gitlab.com/spartanbio-marketing/schedio/commit/e39fc9e))

# [1.6.0](https://gitlab.com/spartanbio-marketing/schedio/compare/v1.5.0...v1.6.0) (2018-10-25)


### Bug Fixes

* **forms:** properly spaces form elements ([6cc3ede](https://gitlab.com/spartanbio-marketing/schedio/commit/6cc3ede))
* **headings:** uses fixed margin-top ([4646d82](https://gitlab.com/spartanbio-marketing/schedio/commit/4646d82))
* **scaffold:** only renders `PropList` if component has props ([cebbc45](https://gitlab.com/spartanbio-marketing/schedio/commit/cebbc45))
* **style:** makes transitions and border-radii reusable ([7dcb2e8](https://gitlab.com/spartanbio-marketing/schedio/commit/7dcb2e8))
* adds `prepare` ([20a247a](https://gitlab.com/spartanbio-marketing/schedio/commit/20a247a))


### Features

* adds card container ([9bd3d93](https://gitlab.com/spartanbio-marketing/schedio/commit/9bd3d93))
* restructures repo for publishing ([ceeb3c5](https://gitlab.com/spartanbio-marketing/schedio/commit/ceeb3c5))

# [1.5.0](https://gitlab.com/spartanbio-marketing/schedio/compare/v1.4.0...v1.5.0) (2018-10-19)


### Bug Fixes

* updates scaffold script ([53eee74](https://gitlab.com/spartanbio-marketing/schedio/commit/53eee74))


### Features

* adds `BaseTable` ([b25e40e](https://gitlab.com/spartanbio-marketing/schedio/commit/b25e40e))

# [1.4.0](https://gitlab.com/spartanbio-marketing/schedio/compare/v1.3.0...v1.4.0) (2018-10-18)


### Bug Fixes

* **buttons:** adds disabled state ([27faa08](https://gitlab.com/spartanbio-marketing/schedio/commit/27faa08))


### Features

* **base-label:** provides indication of optional fields ([c5d629f](https://gitlab.com/spartanbio-marketing/schedio/commit/c5d629f))

# [1.3.0](https://gitlab.com/spartanbio-marketing/schedio/compare/v1.2.0...v1.3.0) (2018-10-17)


### Bug Fixes

* **docs:** don't return duplicate props in ([eb57fea](https://gitlab.com/spartanbio-marketing/schedio/commit/eb57fea))
* **docs:** scope `ColorChip` styles ([19bc87a](https://gitlab.com/spartanbio-marketing/schedio/commit/19bc87a))


### Features

* adds card component ([87db1f7](https://gitlab.com/spartanbio-marketing/schedio/commit/87db1f7))
* adds link component ([6c9c516](https://gitlab.com/spartanbio-marketing/schedio/commit/6c9c516))
* **docs:** adds documentation components ([09b3884](https://gitlab.com/spartanbio-marketing/schedio/commit/09b3884))

# [1.2.0](https://gitlab.com/spartanbio-marketing/schedio/compare/v1.1.0...v1.2.0) (2018-10-11)


### Features

* **project:** adds commitlint ([05a0cc0](https://gitlab.com/spartanbio-marketing/schedio/commit/05a0cc0))
* **project:** adds hooks to protect master ([9f633ce](https://gitlab.com/spartanbio-marketing/schedio/commit/9f633ce))

# [1.1.0](https://gitlab.com/spartanbio-marketing/schedio/compare/v1.0.3...v1.1.0) (2018-10-11)


### Features

* **ci:** adds [@semantic-release](https://gitlab.com/semantic-release)/git ([39b1353](https://gitlab.com/spartanbio-marketing/schedio/commit/39b1353))
