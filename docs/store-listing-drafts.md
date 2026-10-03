# Store-ready replacement text — English

Prepared 2026-10-02 for the public 2.1.0 feature set on each platform. Drafts only; not submitted or published. Counts include spaces, punctuation and internal line breaks, exclude code fences and the final newline after the field. ASCII keywords are also counted in UTF-8 bytes.

Publication checks: confirm installed release/OTA mapping and actual labels/default, entitlements and sync; reconcile privacy policy and console declarations first. Exact plan prices, seven-day offer and numerical quotas are intentionally omitted because live offerings/deployed limits were not verified. See `claim-register.md`. The same broad AI features appear in fresh Android release notes and the iOS listing; cancellation instructions and processing providers below are platform-specific.

## Apple App Store

| Field | Characters | Limit |
|---|---:|---:|
| App name | 25 | 30 |
| Subtitle | 26 | 30 |
| Promotional text | 142 | 170 |
| Keywords | 81 | 100 bytes (ASCII) |
| Description | 2418 | 4000 |

### App name

```text
JoySpend: Expense Tracker
```

### Subtitle

```text
Budgets & emotion insights
```

### Promotional text

```text
Understand your spending with free core tracking and emotion insights. Optional paid AI assistance helps you explore purchases and plan goals.
```

### Keywords

```text
income,money,spending,finance,recurring,currency,habits,planning,savings,personal
```

### Description

```text
Understand where your money goes and which purchases feel worthwhile.

JoySpend is a personal expense tracker that brings your spending and emotions together. Start with free core tracking, then choose optional paid AI assistance when you want help exploring your records.

Your free core tools
- Log expenses and income with categories, dates and notes.
- Set budgets and explore spending by category, emotion and time.
- Tag purchases Joyful, Good, Okay or Regret. New entries start with Joyful selected; review the tag before saving.
- Track recurring transactions and record spending in multiple currencies.
- Use core manual tracking and local insights offline without an account.
- Sign in for cloud sync of transactions and recurring records across devices.

Your emotion tags help you reflect on purchases. The separate Joy-Per-Spend Score summarizes expense emotions as an amount-weighted average on a 5-point scale; it is not a rating you select for each purchase or a measure of happiness.

Optional AI assistance
Plus adds questions about your spending, personalized explanations and chat-based expense logging. Pro includes Plus with goal planning, progress tracking and a larger AI message allowance. These are paid subscription features and require sign-in and an internet connection. AI helps you understand and plan; its answers can be incomplete or wrong and are not professional financial advice.

Your data choices
Core records are stored on your device. Signed-in sync uses Google Firebase cloud storage. When you use AI, your questions and relevant spending context are processed by JoySpend's online service and Google AI. Firebase Crashlytics can process technical diagnostics; RevenueCat and Apple process subscription-related data.

Signing in, sync, AI, purchases and exchange-rate refreshes require internet access. Offline tracking does not make these online features available offline.

Subscriptions and offers
Check the App Store purchase sheet for your local price, billing period and any eligible trial before subscribing. A trial applies only when shown for your account and chosen product. Subscriptions renew automatically unless cancelled. To avoid an Apple trial charge, cancel at least 24 hours before the trial ends in Settings > your name > Subscriptions. Deleting the app does not cancel a subscription.

Support: support@joyspend.tech
Privacy: https://joyspend.tech/privacy/
```

### Suggested screenshot captions

- Understand your spending at a glance (36 characters)
- Track expenses and income (25 characters)
- Tag purchases Joyful, Good, Okay or Regret (42 characters)
- Explore spending by category and emotion (40 characters)
- Keep budgets and recurring transactions in view (47 characters)
- Ask about your spending with Plus (paid) (40 characters)
- Plan goals and track progress with Pro (paid) (45 characters)

Use actual production captures from iPhone/iPad. Match every caption to the visible screen. Paid-feature captions explicitly label the purchase requirement. These are suggestions, not edited screenshots. No formal caption text field limit is asserted. Do not use a screenshot of a star selector, a personal Drive backup, unreleased UI or an unverified price/trial.

## Google Play

| Field | Characters | Limit |
|---|---:|---:|
| App name | 25 | 30 |
| Short description | 72 | 80 |
| Full description | 2461 | 4000 |

### App name

```text
JoySpend: Expense Tracker
```

### Short description

```text
Track expenses, budgets and emotions to understand your spending habits.
```

### Full description

```text
See where your money goes and how your purchases feel.

JoySpend combines expense tracking with emotion insights so you can reflect on your spending habits. Core tracking is free. Optional Plus and Pro subscriptions add AI assistance.

Start with free core tracking
- Record expenses and income with categories, dates and notes.
- Set budgets and view spending insights by category, emotion and time.
- Tag purchases Joyful, Good, Okay or Regret. New entries start with Joyful selected; review the tag before saving.
- Track recurring transactions and spending in multiple currencies.
- Use manual tracking and local insights offline without an account.
- Sign in for cloud sync of transactions and recurring records across devices.

Emotion tags and your score are different. You choose one of four emotions. The Joy-Per-Spend Score summarizes expense emotions as an amount-weighted average on a 5-point scale. It reflects your recorded tags, not a guarantee of happiness.

Add AI help when you want it
Plus helps you ask questions about your spending, explore personalized explanations and log expenses through chat. Pro includes Plus with goal planning, progress tracking and a larger AI message allowance. AI features require a paid subscription, sign-in and internet access. Answers may be incomplete or wrong; they support your decisions and are not professional financial advice.

Local tracking and online services
Core records are stored on your device. Signing in enables cloud sync through Google Firebase; this is not a backup to your personal Google Drive. Optional AI processes your questions and relevant spending context through JoySpend's online service and Google AI. Firebase Crashlytics can process technical diagnostics. RevenueCat and Google Play process subscription-related data.

Signing in, cloud sync, AI, subscription purchases and exchange-rate refreshes need internet access. Core offline tracking does not include those online features.

Plans and billing
Before subscribing, check Google Play for your local price, billing period and any eligible trial. Trial availability depends on the offer shown for your account and selected product. Subscriptions renew automatically unless cancelled. To avoid a trial charge, cancel before the trial ends in Google Play > Payments & subscriptions > Subscriptions. Uninstalling JoySpend does not cancel a subscription.

Support: support@joyspend.tech
Privacy: https://joyspend.tech/privacy/
```

### Suggested screenshot captions

- Understand your spending at a glance (36 characters)
- Track expenses and income (25 characters)
- Tag purchases Joyful, Good, Okay or Regret (42 characters)
- Explore spending by category and emotion (40 characters)
- Keep budgets and recurring transactions in view (47 characters)
- Ask about your spending with Plus (paid) (40 characters)
- Plan goals and track progress with Pro (paid) (45 characters)

Use actual production captures from Android. Match every caption to the visible screen. Paid-feature captions explicitly label the purchase requirement. These are suggestions, not edited screenshots. No formal caption text field limit is asserted. Do not use a screenshot of a star selector, a personal Drive backup, unreleased UI or an unverified price/trial.

## Official requirements checked

- [Apple app information](https://developer.apple.com/help/app-store-connect/reference/app-information/app-information): name and subtitle up to 30 characters.
- [Apple platform metadata](https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information/): promotional text 170 characters, plain-text description 4000 characters, keywords 100 bytes. The ASCII keyword field above meets both character and byte limits. Avoid repeating name/subtitle terms in keywords.
- [Apple accurate metadata rules](https://developer.apple.com/app-store/review/guidelines/#accurate-metadata): truthful released functionality, indicate additional purchases, real app screenshots and relevant terms; no misleading prices or unverifiable claims.
- [Google listing fields](https://support.google.com/googleplay/android-developer/answer/9859152): name 30, short description 80, full description 4000 characters.
- [Google metadata policy](https://support.google.com/googleplay/android-developer/answer/9898842): relevant, accurate wording; no ranking/price promotions in the title, keyword stuffing or invented testimonials.
- Cancellation wording: [Apple](https://support.apple.com/en-us/118428), [Google Play](https://support.google.com/googleplay/answer/7018481?hl=en). No product-specific trial duration inferred from these general policies.

No What's New text is supplied; this task is not a release submission. Do not paste the review notes, count tables, headings or code fences into store fields.
