# LOVING LOVE — Website Schema
## Site Architecture & Content Blueprint for Development

> **Project:** Loving Love — Marriage Celebrant Website Redesign
> **Client:** Lena Saunig — Sydney-based Authorised Marriage Celebrant
> **Stack:** Next.js
> **Source content:** `CONTENT.md`
> **Last updated:** 2026-05-27

---

## BRAND IDENTITY

| Field | Value |
|-------|-------|
| **Business name** | Loving Love |
| **Celebrant** | Lena Saunig |
| **Full title** | Lena Saunig Loving Love — Authorised Marriage Celebrant |
| **Tagline** | Celebrating love, and also life. |
| **Phone** | 0405 143 843 |
| **Email** | lena@lovinglove.com.au |
| **Instagram** | @LovingLove |
| **Location** | Sydney, Australia (travels outside Sydney) |

### Brand Voice (from Lena)
- Conversational, warm, personal — never generic
- Balanced mix of professional and personal
- Calm, subtle, focused — not loud or bold
- No language that diminishes others or carries negative undertones
- Content should feel like a conversation, not a brochure

---

## SITE MAP — 9 Pages

```
/                          → Home
/meet-lena                 → Meet Lena
/your-ceremony             → Your Ceremony
/moments                   → Moments & Thoughtful Words
/other-services            → Other Services
/celebrations-of-life      → Celebrations of Life         [NEW]
/favourite-venues          → Favourite Venues             [NEW — TBD content]
/trusted-partners          → Trusted Partners             [NEW — TBD content]
/contact                   → Contact Me
```

---

## NAVIGATION STRUCTURE

With 9 pages, navigation uses a **primary nav + grouped dropdown** approach:

```
HOME  |  MEET LENA  |  YOUR CEREMONY  |  MOMENTS  |  SERVICES ▾  |  CONNECT ▾  |  CONTACT ME

SERVICES dropdown:
  → Other Services
  → Celebrations of Life

CONNECT dropdown:
  → Favourite Venues
  → Trusted Partners
```

> **Dev note:** Navigation labels are display names only. URL slugs are defined in the sitemap above.

---

## GLOBAL ELEMENTS

### Header (all pages)
- Logo / Brand mark
- Business name: **LOVING LOVE**
- Celebrant name: **LENA SAUNIG**
- Role label: *Marriage Celebrant*
- Phone number: `0405 143 843` (clickable `tel:` link)
- Navigation menu

### Footer (all pages)
- Copyright: `© 2019 by Loving Love`
- Social media links: Facebook | Instagram (@LovingLove)
- Quick link: `Contact Me`

---

---

## PAGE 1 — HOME

| Field | Value |
|-------|-------|
| **Page name** | Home |
| **URL slug** | `/` |
| **Nav label** | HOME |
| **Browser title** | `Lena Saunig — Loving Love | Authorised Marriage Celebrant` |
| **Meta description** | Sydney-based Authorised Marriage Celebrant creating heartfelt, personalised ceremonies. Because your love story is like no other. |

---

### SECTION 1.1 — Hero

**Layout:** Full-width hero with large photo + text overlay or split layout
**Photo credit:** MICHELLE FIONA PHOTOGRAPHER

**Intro text (verbatim):**
> A big congratulations to you and thanks for visiting!
>
> My name's Lena Saunig, I'm a Sydney based Authorised Marriage Celebrant, I do travel out of Sydney and yes, I most certainly love Love!
>
> Your marriage ceremony is a celebration of your special and unique love. I want to make sure that you totally feel each moment, and for the precious people in your life, taking part in witnessing your marriage, to feel a deep sense of joy and connection with you, and each other.
>
> If you would like a meaningful and heartfelt ceremony, that truly reflects who you are, please get in touch. It would be a privilege to be your Celebrant.

**CTA Buttons:**
- Primary: `Let's Chat` → links to `/contact`
- Secondary: `Ceremony Planning` → links to `/your-ceremony`

---

### SECTION 1.2 — Focus Statement

**Layout:** Full-width centred text block (standout quote style)

**Heading:**
> MY FOCUS IS TO CREATE AND DELIVER A CEREMONY THAT IS AS UNIQUE AS YOU ARE

**Body text:**
> A most significant part of your wedding day is your ceremony. So, I will work with you to ensure it's exactly how you would like it, and for it to be a true reflection of your love and relationship.

---

### SECTION 1.3 — Featured Testimonials

**Layout:** Horizontal scrolling carousel or grid of 6 quote cards
**Note:** Each card should display the quote + couple name. Photos to be added when available (Lena's request: pair testimonials with couple photos).

| Quote | Couple |
|-------|--------|
| "We felt that it was a true reflection of our story and one that had our guests crying and laughing." | Belle & Matt |
| "We would 150% recommend Lena." | Lucy & Ryan |
| "When you look for a wedding celebrant, you're not just looking for an official. You are looking for someone to be part of your family." | Bec & Andy |
| "So much love for Lena - she's a beautiful soul who genuinely loves what she's doing - and it shows." | Tina & Jason |
| "Speechless! Absolutely speechless at how amazing Lena was from the very first meet, all the way right through to our special day!" | Jo & Fahad |
| "Lena created a beautiful personalised ceremony that was lighthearted, intimate, and totally us. She is definitely worth more than 5 stars." | Jess & Andre |

**Link below carousel:**
> `See all Moments & Thoughtful Words →` → links to `/moments`

---

---

## PAGE 2 — MEET LENA

| Field | Value |
|-------|-------|
| **Page name** | Meet Lena |
| **URL slug** | `/meet-lena` |
| **Nav label** | MEET LENA |
| **Browser title** | `Meet Lena — Loving Love` |
| **Meta description** | Get to know Lena Saunig — the heart behind Loving Love. Sydney celebrant with a passion for meaningful, personal ceremonies. |

> **Design note:** Lena wants to step away from a traditional "About Me" structure. This page should feel like a warm introduction — like meeting her for the first time. Organic flow, conversational, not a CV or biography list.

---

### SECTION 2.1 — Introduction

**Layout:** Photo of Lena (portrait) + text side by side, or full-width cinematic with caption

**Heading:**
> A   L I T T L E   A B O U T   M E

**Body text (verbatim, 3 paragraphs):**
> Becoming a Marriage Celebrant had been a secret dream of mine for over 20 years, which I happened to mention to a friend who was the Celebrant at a mutual friend's wedding. He encouraged me to get myself qualified and registered. No longer a dream for many years now! I will be forever grateful to him.
>
> I'm passionate about love, people, communication and connection. I have a varied background; from advertising and public relations, to education, counselling and supporting parents & teens to connect, and I place great value on taking the time to get to know the people I work with.
>
> As a Marriage Celebrant, I have the opportunity to, not only connect with amazing couples, but to also get a sense of their love and the wonderful connection they share, which for me is important for creating a ceremony that is a true reflection of each couple I work with.
>
> Cheers to love!

**Social handle:** @LovingLove

---

### SECTION 2.2 — CTA

**Layout:** Simple centred block

**Text:** *(to be written — can pull from Contact page tone)*
> Ready to connect? I'd love to hear from you.

**Button:** `Get in Touch` → links to `/contact`

---

---

## PAGE 3 — YOUR CEREMONY

| Field | Value |
|-------|-------|
| **Page name** | Your Ceremony |
| **URL slug** | `/your-ceremony` |
| **Nav label** | YOUR CEREMONY |
| **Browser title** | `Your Ceremony — Loving Love` |
| **Meta description** | From our first conversation to your wedding day — here's how Lena creates a ceremony that is truly, completely yours. |

---

### SECTION 3.1 — Hero

**Layout:** Full-width hero photo + heading overlay
**Photo credit:** OLLIE KHEDUN PHOTOGRAPHER

**Page heading:**
> When Love Happens

---

### SECTION 3.2 — Focus Statement

**Layout:** Full-width centred standout text

**Heading:**
> MY FOCUS IS TO CREATE AND DELIVER A CEREMONY THAT IS HEARTFELT AND MEANINGFUL TO YOU

---

### SECTION 3.3 — The Ceremony Planning Process

**Layout:** 4-step timeline or numbered card layout (vertical on mobile, horizontal or alternating on desktop)

**Section title:**
> THE CEREMONY PLANNING PROCESS

---

**Step 1 — We Get to Know Each Other**

> We'll have catch ups, the initial being obligation free. These may be face-to-face, via emails, telephone, Face Time or other. The style of ceremony is a reflection of you. At our initial catch up, we discuss what you'd like or envisage; whether it's a short and simple ceremony with a small number of guests, or a longer more detailed and personalised ceremony, involving a large bridal party and number of guests. You may be planning an elopement or a surprise ceremony. I'll outline all that's involved, from legal requirements to ceremony process, and provide my fee.

---

**Step 2 — We Plan the Ceremony Together**

> Once you decide to connect, you will lodge, with me, a Notice of Intended Marriage. It is a legal requirement for this Notice to be lodged at least one month before the date of your marriage, and not more than 18 months prior to the date. And so, we become a bit of a team as we begin the process of creating YOUR ceremony! Based on the style of ceremony, we'll discuss options; I note your thoughts and ideas, I share mine, provide you with information and a range of readings, as well as examples to support you in writing your own special vows. Basically, I work with you until you're totally happy.

---

**Step 3 — On your Wedding Day**

> I'll arrive 45 minutes earlier than the ceremony start time. If required, which we would establish earlier in the piece, I would have my great PA system, as well as my table and two chairs for signing of the Marriage Register. I would set up and connect with others involved in your ceremony; for example, I would work with, and alert photographers of any specific special moments to capture, touch base with musicians and support your suppliers working behind the scenes, if needed. I'll introduce myself to significant family members and mingle with your guests. Meet the groom and his crew, check in on the nerves! Quick hello to the bride and her party. Have tissues on hand! I deliver your ceremony with love, and ensure all documents are completed and signed in accordance with legal requirements.

---

**Step 4 — After your Wedding**

> I register your marriage and lodge all legal documents with the Registry of Births, Deaths and Marriages within fourteen days from the date of your wedding. If requested by you, I apply for the Official Certificate of Marriage on your behalf, at the same time of registering your marriage.

---

### SECTION 3.4 — CTA

**Heading:**
> Ready for a Chat? I'd love to hear from you!

**Button:** `Contact Me` → links to `/contact`

---

---

## PAGE 4 — MOMENTS & THOUGHTFUL WORDS

| Field | Value |
|-------|-------|
| **Page name** | Moments & Thoughtful Words |
| **URL slug** | `/moments` |
| **Nav label** | MOMENTS |
| **Browser title** | `Moments & Thoughtful Words — Loving Love` |
| **Meta description** | Words from the couples Lena has had the privilege of celebrating — because every love story is worth telling. |

---

### SECTION 4.1 — Page Heading

**Heading:**
> MOMENTS & THOUGHTFUL WORDS

---

### SECTION 4.2 — Google Reviews

**Layout:** Embedded Google Reviews widget or link
> **Dev note:** Lena wants couples to be able to leave Google Reviews. Add Google Reviews embed/badge here and a CTA button: `Leave a Google Review →`

---

### SECTION 4.3 — Testimonials Grid

**Layout:** Card grid — each card contains:
- Couple photo `[TBD — Lena to provide]`
- Couple names (bold)
- Venue / location (italic)
- Full testimonial quote

**Total testimonials: 30 couples** (see `CONTENT.md` Section 4 for all full quotes)

**Full testimonials list** (names & venues):

| # | Couple | Venue |
|---|--------|-------|
| 1 | Belle & Matt | Lilyvale in the Royal National Park |
| 2 | Lucy & Ryan | Paperbark Grove North Centennial Park |
| 3 | Bec & Andy | Stanwell Park |
| 4 | John & Eunice | Gunners Barracks |
| 5 | Jo & Fahad | Arc of Pines Bicentennial Park |
| 6 | Tina & Jason | The Studio |
| 7 | Mel & Val | Eden Gardens |
| 8 | Jess & Andre | Gledswood Estate |
| 9 | Carly & Greg | Wildwood |
| 10 | Laura & Matt | Camperdown Commons ~ Acre Eatery |
| 11 | Thipphavanh & Mangkone | Family Home |
| 12 | Lauren & Andrew | North Head ~ Sanctuary Lawn |
| 13 | Michelle & Michael | Bellagio Cafe |
| 14 | Natasha & James | Miramare Gardens |
| 15 | Kate & Anthony | Family Home |
| 16 | Lelin & Boris | Beachside Dojo |
| 17 | Tamarah & Dean | Eden Gardens |
| 18 | Christine & Reuben | Leuralla Amphitheatre |
| 19 | Victoria & Krishna | McKell Park |
| 20 | Lina & Adrian | UTS Haberfield Club |
| 21 | Grace & Will | Cooke Park |
| 22 | Deahne & Ben | Bendooley Estate |
| 23 | Juliet & Bradley | Shark Island |
| 24 | Sarah & Kyle | Palm Beach Golf Club |
| 25 | Jessica & David | Hopewood House |
| 26 | Kellie & Josh | Gerroa |
| 27 | Kate & Stuart | The Studio |
| 28 | Fiona & Andrew | Ovolo |
| 29 | Steve & Jonathan | Botany |
| 30 | Stephany & Dallas | Horsley Homestead |
| 31 | Jessica & Dave | Family Home |
| 32 | Zareen & Adam | Bendooley Estate |

> **Full text for each testimonial** → see `CONTENT.md` Section 4

---

---

## PAGE 5 — OTHER SERVICES

| Field | Value |
|-------|-------|
| **Page name** | Other Services |
| **URL slug** | `/other-services` |
| **Nav label** | Other Services *(under SERVICES dropdown)* |
| **Browser title** | `Other Services — Loving Love` |
| **Meta description** | From vow renewals to commitment ceremonies and baby namings — Lena creates meaningful ceremonies for every celebration of love. |

---

### SECTION 5.1 — Page Introduction

> This is a celebration of your marriage and commitment to each other. Together we plan a unique ceremony that celebrates your story.

---

### SECTION 5.2 — Service Card 1: Renewal of Marriage Vows

**Tagline:**
> "A lifetime ago I said 'I do' and still 'I do'"

**Body text:**
> This is a celebration of your marriage and commitment to each other. Together we plan a unique ceremony that celebrates your story.

**Legal note:**
> A Vow renewal is not a legal ceremony.

---

### SECTION 5.3 — Service Card 2: Commitment Ceremony

**Body text:**
> You may not wish to get legally married, but would like to celebrate your commitment to each other. Together we plan a special ceremony to celebrate your love, excluding all the legal components.

**Legal note:**
> A commitment ceremony is not a legal ceremony.

---

### SECTION 5.4 — Service Card 3: Baby Naming Ceremony

**Body text:**
> A naming ceremony is a celebration of your child, shared with family and friends, it's a lovely way to express the joy your child has brought to your life, and your commitment to your child. The ceremony we create together would be a celebration that involves the special people in your child's life.

**Legal note:**
> A naming ceremony is non-religious and not a legal ceremony.

---

### SECTION 5.5 — Footer CTA

> Click to make contact ~ would love to hear from you ~

**Button:** `Contact Me` → links to `/contact`

---

---

## PAGE 6 — CELEBRATIONS OF LIFE ⭐ NEW

| Field | Value |
|-------|-------|
| **Page name** | Celebrations of Life |
| **URL slug** | `/celebrations-of-life` |
| **Nav label** | Celebrations of Life *(under SERVICES dropdown)* |
| **Browser title** | `Celebrations of Life — Loving Love` |
| **Meta description** | `[TBD]` |

> ⚠️ **Content Status: TBD — Lena to provide**
>
> This is a new service that Lena confirmed she wants to add. No content has been provided yet. The page structure below is a suggested placeholder framework based on the style and tone of the rest of the site.

---

### SECTION 6.1 — Hero / Page Heading

**Heading:** `[TBD]`
*(Suggested: something along the lines of "Honouring a life well loved" or "A ceremony for every chapter")*

---

### SECTION 6.2 — What is a Celebration of Life?

**Body text:** `[TBD — Lena to write in her conversational tone]`

*(Suggested content areas to cover:)*
- What a Celebration of Life is
- Who it is for (loss of a loved one, milestone birthdays, life transitions, etc.)
- How Lena approaches it
- What makes it different from a funeral or religious service
- Legal note if applicable

---

### SECTION 6.3 — CTA

**Button:** `Get in Touch` → links to `/contact`

---

---

## PAGE 7 — FAVOURITE VENUES ⭐ NEW

| Field | Value |
|-------|-------|
| **Page name** | Favourite Venues |
| **URL slug** | `/favourite-venues` |
| **Nav label** | Favourite Venues *(under CONNECT dropdown)* |
| **Browser title** | `Favourite Venues — Loving Love` |
| **Meta description** | `[TBD]` |

> ⚠️ **Content Status: TBD — Lena to provide**
>
> Lena confirmed she's happy to add this page. No venue list has been provided yet.

---

### SECTION 7.1 — Page Introduction

**Heading:** `[TBD]`
*(Suggested: "Spaces I love to celebrate in")*

**Intro text:** `[TBD — Lena to write]*`

---

### SECTION 7.2 — Venue Cards Grid

**Layout:** Card grid — each card contains:
- Venue photo `[TBD]`
- Venue name
- Location / suburb
- Short description from Lena about why she loves it `[TBD]`
- Venue website link (optional)

**Venues list:** `[TBD — Lena to provide full list]`

> **Note:** Many of the 30+ testimonials in Moments already reference venue names (see Section 4 table above). Some of these may appear in this list.

---

### SECTION 7.3 — CTA

**Text:** *Curious about a particular venue? Get in touch and we can chat.*
**Button:** `Contact Me` → links to `/contact`

---

---

## PAGE 8 — TRUSTED PARTNERS ⭐ NEW

| Field | Value |
|-------|-------|
| **Page name** | Trusted Partners |
| **URL slug** | `/trusted-partners` |
| **Nav label** | Trusted Partners *(under CONNECT dropdown)* |
| **Browser title** | `Trusted Partners — Loving Love` |
| **Meta description** | `[TBD]` |

> ⚠️ **Content Status: TBD — Lena to provide**
>
> Lena confirmed she's happy to feature trusted professionals she works with. No partner list has been provided yet.

---

### SECTION 8.1 — Page Introduction

**Heading:** `[TBD]`
*(Suggested: "The people I trust to make your day beautiful")*

**Intro text:** `[TBD — Lena to write]*`

---

### SECTION 8.2 — Partner Cards Grid

**Layout:** Card grid or list — each entry contains:
- Partner photo / logo `[TBD]`
- Name / business name
- Service category (Photographer, Planner, Florist, Stylist, etc.)
- Short personal note from Lena about working with them `[TBD]`
- Website / Instagram link

**Partners list:** `[TBD — Lena to provide full list]`

> **Note:** Two photographers already credited in the site: **Michelle Fiona Photographer** (home hero) and **Ollie Khedun Photographer** (ceremony page). These may be starting points for the partners list.

---

### SECTION 8.3 — CTA

**Text:** *Want to know more about any of these wonderful people? Feel free to reach out.*
**Button:** `Contact Me` → links to `/contact`

---

---

## PAGE 9 — CONTACT ME

| Field | Value |
|-------|-------|
| **Page name** | Contact Me |
| **URL slug** | `/contact` |
| **Nav label** | CONTACT ME |
| **Browser title** | `Contact Me — Loving Love` |
| **Meta description** | Ready to chat? I'd love to hear from you. Let's arrange an obligation free catch up — perhaps over coffee. |

---

### SECTION 9.1 — Main Text

> Hope you do get in touch.

> It would be amazing to take part in one of the happiest celebrations of your life!

> Call me or send an email.

> Let's arrange an obligation free catch up, perhaps over a coffee or a drink!

> I will share a little more about myself, and further explain my role as your Marriage Celebrant. You can tell me a bit about you & your wedding plans, and hopefully I do go on to create a meaningful ceremony, which captures your special love.

---

### SECTION 9.2 — Contact Details

```
M: 0405 143 843     (clickable tel: link)
E: lena@lovinglove.com.au    (clickable mailto: link)
```

---

### SECTION 9.3 — Contact Form

**Fields:**
- Your name `[text input — required]`
- Phone number `[tel input]`
- Email `[email input — required]`
- Subject `[text input]`
- Message `[textarea — required]`

**Submit button:** `Send`

**Success message:**
> Thanks! Message sent. I'll be in touch shortly.

> **Dev note:** Form should send email notification to `lena@lovinglove.com.au` on submission.

---

---

## ADDITIONAL FEATURES & FUTURE DEVELOPMENT NOTES

### Google Reviews
> **Lena's request:** Couples should be able to leave Google Reviews directly from the site.
> - Add a Google Reviews widget / embed to the **Moments & Thoughtful Words** page
> - Add a `Leave a Google Review` CTA button (links to Lena's Google Business profile)
> - *(Google Business Profile URL to be provided by Lena)*

### Possible Enquiry Dashboard `[Phase 2 — TBD]`
> A future client management dashboard where Lena can view all enquiries with full details. Fields to capture:
> - Your name
> - Your partner's name
> - Phone number
> - Email address
> - Wedding date
> - Ceremony time
> - Ceremony location
> - Approximate number of guests?
> - How did you hear about me?
> - Additional information / queries?

### AI Assistant `[Phase 2 — Pending Lena's approval]`
> Lena is unfamiliar with AI and has requested a face-to-face or FaceTime discussion before any decision. Not to be included in Phase 1 development.
> - Would act as a friendly guide for visitors
> - Could answer FAQs, introduce venues/partners, guide couples through process
> - Could pre-qualify enquiries and summarise them for Lena
> - Must reflect Lena's voice and personality
> - Requires a training document to be written by Lena

---

## CONTENT CHECKLIST FOR LENA

Before development is complete, the following content needs to be provided by Lena:

| Item | Status | Notes |
|------|--------|-------|
| Hero photo (Home) | ✅ Exists | Credit: Michelle Fiona Photographer |
| About / Meet Lena photo | ⚠️ Needed | Portrait photo of Lena |
| Ceremony page photo | ✅ Exists | Credit: Ollie Khedun Photographer |
| Testimonial couple photos | ⚠️ Needed | 30+ couple photos to pair with quotes |
| Celebrations of Life — full page content | ❌ TBD | Lena to write |
| Favourite Venues — venue list + descriptions | ❌ TBD | Lena to provide |
| Trusted Partners — partner list + descriptions | ❌ TBD | Lena to provide |
| Google Business Profile URL | ❌ TBD | For Google Reviews integration |
| Celebrations of Life — meta description | ❌ TBD | Once content is written |
| Favourite Venues — meta description | ❌ TBD | Once content is written |
| Trusted Partners — meta description | ❌ TBD | Once content is written |

---

## INSPIRATION REFERENCES

Websites Lena identified as having features/qualities she'd like to explore:

| Site | URL |
|------|-----|
| Marry Me Michelle | https://www.marrymemichelle.com.au/ |
| Sally Hughes Celebrant | https://celebrantsallyhughes.com.au/ |
| Love and Life | https://loveandlife.com.au/ |
| The Salty Shutter | https://www.thesaltyshutter.com/ |
| Rachel Gutierrez Photography | https://rachelgutierrezphotography.com/ |

---

*End of Website Schema*
*For full verbatim copy text → see `CONTENT.md`*
