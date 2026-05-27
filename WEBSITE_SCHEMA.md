# LOVING LOVE — Website Schema
## Site Architecture & Content Blueprint for Development

> **Project:** Loving Love — Marriage Celebrant Website Redesign
> **Client:** Lena Saunig — Sydney-based Authorised Marriage Celebrant
> **Stack:** Next.js
> **Source content:** `CONTENT.md`
> **Last updated:** 2026-05-27
>
> ⚠️ **Scope of this document:** Pages, URL structure, navigation, and text content only.
> Design, styles, and visual direction are handled separately in `DESIGN.md` (to be created).

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
/celebrations-of-life      → Celebrations of Life         [NEW — content TBD]
/favourite-venues          → Favourite Venues             [NEW — content TBD]
/trusted-partners          → Trusted Partners             [NEW — content TBD]
/connect                   → Connect (Contact)
```

---

## NAVIGATION STRUCTURE

```
HOME  |  MEET LENA  |  YOUR CEREMONY  |  MOMENTS  |  SERVICES ▾  |  PARTNERS ▾  |  CONNECT

SERVICES dropdown:
  → Other Services         (/other-services)
  → Celebrations of Life   (/celebrations-of-life)

PARTNERS dropdown:
  → Favourite Venues       (/favourite-venues)
  → Trusted Partners       (/trusted-partners)
```

**Navigation logic:**
- `HOME` — Entry point
- `MEET LENA` — Who Lena is
- `YOUR CEREMONY` — Her primary and core service (wedding ceremonies)
- `MOMENTS` — Testimonials and couple stories
- `SERVICES` — Additional ceremony services (non-wedding)
- `PARTNERS` — Strategic allies: venues + trusted professionals
- `CONNECT` — Contact / enquiry

---

## GLOBAL ELEMENTS

### Header (present on all pages)

```
LENA SAUNIG
LOVING LOVE
Marriage Celebrant
0405 143 843
```

- Logo / brand mark
- Business name: LOVING LOVE
- Celebrant name: LENA SAUNIG
- Role: Marriage Celebrant
- Phone: `0405 143 843` — clickable `tel:` link
- Navigation menu

### Footer (present on all pages)

```
Copyright © 2019 by Loving Love
[Facebook]  [Instagram]
```

- Copyright notice
- Social media links: Facebook | Instagram (@LovingLove)
- Quick link: `Connect` → `/connect`

---

---

## PAGE 1 — HOME

| Field | Value |
|-------|-------|
| **Page name** | Home |
| **URL** | `/` |
| **Nav label** | HOME |
| **Browser title** | `Lena Saunig — Loving Love \| Authorised Marriage Celebrant` |
| **Meta description** | Sydney-based Authorised Marriage Celebrant creating heartfelt, personalised ceremonies. Because your love story is like no other. |

---

### SECTION 1.1 — Hero

**Text:**

> A big congratulations to you and thanks for visiting!
>
> My name's Lena Saunig, I'm a Sydney based Authorised Marriage Celebrant, I do travel out of Sydney and yes, I most certainly love Love!
>
> Your marriage ceremony is a celebration of your special and unique love. I want to make sure that you totally feel each moment, and for the precious people in your life, taking part in witnessing your marriage, to feel a deep sense of joy and connection with you, and each other.
>
> If you would like a meaningful and heartfelt ceremony, that truly reflects who you are, please get in touch. It would be a privilege to be your Celebrant.

**Photo credit:** Michelle Fiona Photographer

**CTA Buttons:**
- `Let's Chat` → `/connect`
- `Ceremony Planning` → `/your-ceremony`

---

### SECTION 1.2 — Focus Statement

**Heading:**
> MY FOCUS IS TO CREATE AND DELIVER A CEREMONY THAT IS AS UNIQUE AS YOU ARE

**Body text:**
> A most significant part of your wedding day is your ceremony. So, I will work with you to ensure it's exactly how you would like it, and for it to be a true reflection of your love and relationship.

---

### SECTION 1.3 — Featured Testimonials

**6 featured quotes:**

> "We felt that it was a true reflection of our story and one that had our guests crying and laughing."
> — Belle & Matt

> "We would 150% recommend Lena."
> — Lucy & Ryan

> "When you look for a wedding celebrant, you're not just looking for an official. You are looking for someone to be part of your family."
> — Bec & Andy

> "So much love for Lena - she's a beautiful soul who genuinely loves what she's doing - and it shows."
> — Tina & Jason

> "Speechless! Absolutely speechless at how amazing Lena was from the very first meet, all the way right through to our special day!"
> — Jo & Fahad

> "Lena created a beautiful personalised ceremony that was lighthearted, intimate, and totally us. She is definitely worth more than 5 stars."
> — Jess & Andre

**Link:**
- `See all Moments & Thoughtful Words →` → `/moments`

---

---

## PAGE 2 — MEET LENA

| Field | Value |
|-------|-------|
| **Page name** | Meet Lena |
| **URL** | `/meet-lena` |
| **Nav label** | MEET LENA |
| **Browser title** | `Meet Lena — Loving Love` |
| **Meta description** | Get to know Lena Saunig — the heart behind Loving Love. Sydney celebrant with a passion for meaningful, personal ceremonies. |

> **Content note:** Lena wants to step away from a traditional "About Me" structure and instead flow organically into who she is. This page should feel like a warm introduction — conversational and personal, not a formal biography.

---

### SECTION 2.1 — Introduction

**Heading:**
> A   L I T T L E   A B O U T   M E

**Body text:**

> Becoming a Marriage Celebrant had been a secret dream of mine for over 20 years, which I happened to mention to a friend who was the Celebrant at a mutual friend's wedding. He encouraged me to get myself qualified and registered. No longer a dream for many years now! I will be forever grateful to him.
>
> I'm passionate about love, people, communication and connection. I have a varied background; from advertising and public relations, to education, counselling and supporting parents & teens to connect, and I place great value on taking the time to get to know the people I work with.
>
> As a Marriage Celebrant, I have the opportunity to, not only connect with amazing couples, but to also get a sense of their love and the wonderful connection they share, which for me is important for creating a ceremony that is a true reflection of each couple I work with.
>
> Cheers to love!

**Social media handle:** @LovingLove

---

### SECTION 2.2 — CTA

**Button:** `Get in Touch` → `/connect`

---

---

## PAGE 3 — YOUR CEREMONY

| Field | Value |
|-------|-------|
| **Page name** | Your Ceremony |
| **URL** | `/your-ceremony` |
| **Nav label** | YOUR CEREMONY |
| **Browser title** | `Your Ceremony — Loving Love` |
| **Meta description** | From our first conversation to your wedding day — here's how Lena creates a ceremony that is truly, completely yours. |

---

### SECTION 3.1 — Hero

**Page heading:**
> When Love Happens

**Photo credit:** Ollie Khedun Photographer

---

### SECTION 3.2 — Focus Statement

**Heading:**
> MY FOCUS IS TO CREATE AND DELIVER A CEREMONY THAT IS HEARTFELT AND MEANINGFUL TO YOU

---

### SECTION 3.3 — The Ceremony Planning Process

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

**Button:** `Connect` → `/connect`

---

---

## PAGE 4 — MOMENTS & THOUGHTFUL WORDS

| Field | Value |
|-------|-------|
| **Page name** | Moments & Thoughtful Words |
| **URL** | `/moments` |
| **Nav label** | MOMENTS |
| **Browser title** | `Moments & Thoughtful Words — Loving Love` |
| **Meta description** | Words from the couples Lena has had the privilege of celebrating — because every love story is worth telling. |

---

### SECTION 4.1 — Page Heading

> MOMENTS & THOUGHTFUL WORDS

---

### SECTION 4.2 — Google Reviews

**CTA:** `Leave a Google Review →`
*(Google Business Profile URL to be provided by Lena)*

> **Note for dev:** Google Reviews widget/embed to be integrated once Lena provides her Google Business Profile link.

---

### SECTION 4.3 — Testimonials

Each testimonial entry displays:
- Couple names
- Venue / location
- Full testimonial text
- Couple photo *(to be provided by Lena)*

---

**Belle & Matt** | *Lilyvale in the Royal National Park*

> "Lena, thank you so much for all your hard work in creating a wonderful ceremony for our Wedding Day. We felt that it was a true reflection of our story and one that had our guests crying and laughing. We especially loved the suggestions you made of certain readings and how you found interesting ways to incorporate symbols from our relationship into the ceremony itself. You put a lot of work into walking us through the whole process and our day was a lovely relaxed occasion because of it. You are one in a million and any couple would be lucky to have you officiate their Wedding."

---

**Lucy & Ryan** | *Paperbark Grove North Centennial Park*

> "Lena is the perfect celebrant! She was extremely thorough in the lead up and thought deeply and liaised with us about every aspect of the ceremony. She truly oozes love and being a celebrant isn't just a job for her, it's her passion. We would 150% recommend Lena."

---

**Bec & Andy** | *Stanwell Park*

> "When you look for a wedding celebrant, you're not just looking for an official. You are looking for someone to be part of your family, someone who understands you as a couple and who is sensitive to what you want your day to be. From our first meeting, you connected with us perfectly, listened to us, understood who we are and helped us enjoy the day just as we imagined it would be. Thank you!"

---

**John & Eunice** | *Gunners Barracks*

> "Lena has been a really great celebrant. From the time we first set down to chat with her till our wedding day itself she has been amazing guiding us along on every step. We had a wonderful experience and highly recommend her to anyone planning to for their special day!!"

---

**Jo & Fahad** | *Arc of Pines Bicentennial Park*

> "Speechless! Absolutely speechless at how amazing Lena was from the very first meet, all the way right through to our special day! Lena is very sweet, considerate, detail orientated and her overall ability to make the planning experience that so much more enjoyable. The ceremony on the day, was so perfect, heartfelt and meaningful - we couldn't have asked for a better day! We are still receiving compliments on Lena and our ceremony! Highly recommend anyone looking for the perfect celebrant, to connect with Lena."

---

**Tina & Jason** | *The Studio*

> "So much love for Lena - she's a beautiful soul who genuinely loves what she's doing - and it shows. Lena completely understood our ceremony requirements as well as our busy schedule, working for and with us on the ceremony script and rehearsal session. She made some excellent suggestions which we included in our ceremony without any of the tacky, corny bits. As the bride, seeing Lena before walking down the aisle was reassuring and calming, and she easily had the room at full attention with her genuine tone and words. Would totally recommend Lena as a fantastic marriage celebrant."

---

**Mel & Val** | *Eden Gardens*

> "We had the pleasure of having Lena Saunig unite us in marriage in January 2019. Since we enquired, her service has been outstanding. If you are looking for a trustworthy marriage celebrant who is kind, organised, funny and helpful, then get in touch with her because she will make you just as happy as we were."

---

**Jess & Andre** | *Gledswood Estate*

> "Lena created a beautiful personalised ceremony that was lighthearted, intimate, and totally us. She took time to know us as individuals and a couple, replied promptly by email to any questions we asked and was genuinely invested in making our day perfect. We love Lena; she is a kind, caring, enthusiastic, beautiful and genuine woman. We could not recommend her enough for anyone getting married!!! She is definitely worth more than 5 stars."

---

**Carly & Greg** | *Wildwood*

> "Lena is the best celebrate we could have ever dreamed of!
>
> Lena guided us through the steps of our ceremony in the leading months to the wedding and we couldn't have felt more comfortable or happier with how the day turned out.
>
> Be sure to crack open a bottle of wine while you go through Lena's couples questionnaire, you will laugh and maybe even shed a tear while filling in your answers. Lena incorporates this into the ceremony perfectly!
>
> So many of our friends and family at the wedding raved about how great our celebrant was and how sentimental and special the ceremony was compared to other weddings they had been to. Friends of ours who attended our wedding have since booked Lena to be their celebrant at their wedding in February next year!
>
> Lena, you are loving, caring and extremely passionate about what you do and I will continue to recommend you to anyone in need of a celebrant.
>
> Lots of love from the Winchesters."

---

**Laura & Matt** | *Camperdown Commons ~ Acre Eatery*

> "Lena is an absolutely tremendous celebrant! And now my mother-in-law! My wife and I had seen Lena at two previous weddings and we knew that we had to have her officiate our wedding. She shows such care and passion for each couple she works with. Lena is one of the most professional and caring vendors I had come across. She has a genuine care for people. What we loved about our wedding is that she made us feel so comfortable and loved throughout the whole process. Our ceremony was the most treasured moment of our day, thanks to Lena."

---

**Thipphavanh & Mangkone** | *Family Home*

*(Testimonial photo and text to be provided by Lena)*

---

**Lauren & Andrew** | *North Head ~ Sanctuary Lawn, July 2019*

> "Lena is an incredible soul who made our ceremony perfect. Her energy, love for weddings and authentic self helped make us feel at home and get through the challenging moments when the nerves set in. Could not speak more highly of Lena and her tailored services to each couple. So special!!!"

---

**Michelle & Michael** | *Bellagio Cafe*

> "Lena is a natural celebrant. She is genuine, warm and adds enormous positive value to the wedding experience. We felt very comfortable and relaxed with Lena and extremely confident she would provide a wonderful service."

---

**Natasha & James** | *Miramare Gardens*

> "We are really blessed to have Lena assist in our wedding. Genuinely caring, lovely lady and high attention to detail. Gave us lots of time and support for wedding prep as well. Highly recommended."

---

**Kate & Anthony** | *Family Home*

> "We cannot recommend Lena highly enough. She was the most perfect celebrant we could have dreamed of, not only for the ceremony planning, but for our big day. Lena brought so much love, enthusiasm, kindness, respect and open-mindedness to the process. Spending time with her was such a delight - more like hanging out with a loving family member, rather than a wedding supplier. We were able to tailor our ceremony to exactly what we wanted which was less traditional and more personal - to honour our story and best share it with our loved ones. We had so many compliments on Lena from our guests. It truly was a love-filled, sacred ceremony that we will cherish forever."

---

**Lelin & Boris** | *Beachside Dojo*

> "Lena is absolutely wonderful. She really had our best interest at heart and was really flexible to ensure the ceremony suited our needs. From the very first time we caught up I knew she's the best person to marry us. And the day was so perfect and full of love BIG Thanks to her. She had the full ceremony items printed and got us to approve it and even did a bound copy for us to keep to remember our special day. If love is the theme of one's wedding ceremony, then Lena is your perfect celebrant. We can't thank her enough."

---

**Tamarah & Dean** | *Eden Gardens*

> "I could not recommend Lena more, she was so invested in our ceremony and couldn't of done a better job! She made our day incredibly special and I am so glad that she was a part of our day! Its so important to connect with your celebrant and Lena is so compassionate it made it so easy to trust her with everything. Love her so much!"

---

**Christine & Reuben** | *Leuralla Amphitheatre*

> "Lena, She really made our day come together and made it so very special. She has such a personal touch, nothing is text book, her ability to keep us calm even in such undesirable weather was fantastic. She turned gloomy weather into something very romantic. Lena literally loves love. I cannot recommend her enough. The whole journey with her leading to our wedding was perfect, it definitely wouldn't be the same special day without her. Thank you again. Reuben & Christine"

---

**Victoria & Krishna** | *McKell Park*

> "Lena was absolutely the best. Prior to our wedding ceremony, we met Lena and kept one touch regularly to prepare our wedding ceremony. She was fun and helpful. She understood our love and how we envisioned our wedding ceremony perfectly. She is so passionate about love and her role as a celebrant. The ceremony she delivered for us was absolutely amazing, it reflected our love perfectly and she made it so special (and fun) for us. We will definitely recommend her services to all our friends!!!"

---

**Lina & Adrian** | *UTS Haberfield Club*

> "Lena was amazing, professional and organised. We were included every step of the way as she drafted the ceremony wording, getting to know us personally with face to face meetings and questionnaires. She was flexible in her approach and provided us with some great options such as poem readings. Lena also took the time to meet with us and the bridal party at the ceremony location to conduct a rehearsal. She always had a smile and was well presented. I would strongly recommend her."

---

**Grace & Will** | *Cooke Park*

> "Lena was an incredibly supportive and helpful celebrant! I could not be more happy with the service that she provided. Lena created a thoughtful and personal ceremony that was enjoyed by everyone who attended my wedding. I would highly recommend Lena to anyone looking for a celebrant for an upcoming wedding."

---

**Deahne & Ben** | *Bendooley Estate*

*(Testimonial photo and text to be provided by Lena)*

---

**Juliet & Bradley** | *Shark Island*

> "Lena is the perfect celebrant: professional, adaptable, upbeat, considerate, fun with still being able to garner at a second's notice all the gravitas that a wedding ceremony merits. We loved having her be our celebrant."

---

**Sarah & Kyle** | *Palm Beach Golf Club*

> "Lena is the most beautiful, genuine person you'll ever meet. She is kind and warm and we could not have hoped to be married by a more perfect person. Lena took time and care with us and our story. She treated every part with care and really put love into our ceremony. Lena's words were genuine and she really made us feel the love between us and from everyone around us. She made it a beautiful experience and personalised it to fit who we are as a couple. She is just wonderful and we can't thank her enough."

---

**Jessica & David** | *Hopewood House*

> "Our wedding day was absolutely perfect and a lot of that had to do with the wonderful Lena. Working in events and in the wedding industry as a wedding planner, I have seen my fair share of weddings and celebrants. As soon as we got engaged we both knew Lena would be the one to marry us. Lena was absolutely made to be a celebrant, she is so loving, so invested and so personal. Lena was easy to work with, customized our marriage and brought every single attendee to tears. We could not recommend Lena enough as a couple and as a professional Wedding Planner, I will be recommending her time and time again to all the lovely couples I work with. Thank you Lena!"

---

**Kellie & Josh** | *Gerroa*

> "Lena was amazing from the first time we met her! I don't think I've met anyone who loves love as much as she does! Lena was professional and friendly and very easy going. We highly recommend her for any event!"

---

**Kate & Stuart** | *The Studio*

> "Lena is truly an absolute sweetheart, who really does just love love. She was always such a pleasure to deal with, and works closely (but not overbearingly) with couples to achieve a ceremony that is true to who they are and how they love. We had a number of people comment on how lovely and personal our ceremony was, and the warmth and sincerity of our celebrant. Lena's pricing is very reasonable considering how wonderful she is, and we cannot recommend her highly enough."

---

**Fiona & Andrew** | *Ovolo*

> "Lena was amazing from start to finish!! She made the whole process so easy. She helped us to create an incredibly personal ceremony that truest reflected us! Lena truly loves doing what she does, and it shows in every aspect! Our special day would not have been the same without her!"

---

**Steve & Jonathan** | *Botany*

> "Our wedding in Los Angeles had to be canceled because of the pandemic. We then needed to get married to support our immigration process so we were just going to do something more administrative. Lena understood but gently prodded us to make it more special. It was the best advice we ever received. Even though we will celebrate with other family and friends in a bigger way, we can honestly say that if that were NOT to happen, the ceremony that Lena put together was so perfect we would be happy if that was it. It was personal and heartfelt. It was like having a trusted family member or friend do this for us. She is sweet, sensitive and made us even more excited and appreciative of what marriage means. She is a conduit of love. We are so lucky to have met her."

---

**Stephany & Dallas** | *Horsley Homestead*

*(Testimonial photo and text to be provided by Lena)*

---

**Jessica & Dave** | *Family Home*

> "Lena was outstanding, we could not be happier with the service she provided. Lena took us through the process and offered insights and expert advice on everything from our ceremony length and structure to our vows. She was also accommodating, reliable, and a delight to work with, even when we had to make changes to our day due to the pandemic. Everyone was blown away by the customised ceremony Lena had created for us and all the personal touches she injected so seamlessly.
>
> Thank you for making our day so special!"

---

**Zareen & Adam** | *Bendooley Estate*

> "Lena has such a beautiful attitude and really worked closely with my partner and I to ensure the ceremony perfectly reflected our personalities and beliefs. Lena was very supportive with some family issues I was having at the time, and went out of her way to ensure I felt loved. She is a celebrant who really loves this job for the human connections that she creates."

---

---

## PAGE 5 — OTHER SERVICES

| Field | Value |
|-------|-------|
| **Page name** | Other Services |
| **URL** | `/other-services` |
| **Nav label** | Other Services *(under SERVICES dropdown)* |
| **Browser title** | `Other Services — Loving Love` |
| **Meta description** | From vow renewals to commitment ceremonies and baby namings — Lena creates meaningful ceremonies for every celebration of love. |

---

### SECTION 5.1 — Renewal of Marriage Vows

**Tagline:**
> "A lifetime ago I said 'I do' and still 'I do'"

**Body text:**
> This is a celebration of your marriage and commitment to each other. Together we plan a unique ceremony that celebrates your story.

**Legal note:**
> A Vow renewal is not a legal ceremony.

---

### SECTION 5.2 — Commitment Ceremony

**Body text:**
> You may not wish to get legally married, but would like to celebrate your commitment to each other. Together we plan a special ceremony to celebrate your love, excluding all the legal components.

**Legal note:**
> A commitment ceremony is not a legal ceremony.

---

### SECTION 5.3 — Baby Naming Ceremony

**Body text:**
> A naming ceremony is a celebration of your child, shared with family and friends, it's a lovely way to express the joy your child has brought to your life, and your commitment to your child. The ceremony we create together would be a celebration that involves the special people in your child's life.

**Legal note:**
> A naming ceremony is non-religious and not a legal ceremony.

---

### SECTION 5.4 — Celebrations of Life

> **Dev note:** This section contains NO text content. It is a single button/link that takes the user to the dedicated Celebrations of Life page (`/celebrations-of-life`). No description, no copy — just the button.

**Button:** `Celebrations of Life` → `/celebrations-of-life`

---

### SECTION 5.5 — Footer CTA

> Click to make contact ~ would love to hear from you ~

**Button:** `Connect` → `/connect`

---

---

## PAGE 6 — CELEBRATIONS OF LIFE ⭐ NEW

| Field | Value |
|-------|-------|
| **Page name** | Celebrations of Life |
| **URL** | `/celebrations-of-life` |
| **Nav label** | Celebrations of Life *(under SERVICES dropdown)* |
| **Browser title** | `Celebrations of Life — Loving Love` |
| **Meta description** | `[TBD — Lena to provide once content is written]` |

> ⚠️ **Content Status: TBD — All content to be written by Lena.**

**Page purpose:** This page is dedicated to memorial and end-of-life celebration ceremonies. It is a standalone page with its own distinct tone — sober, respectful, and separate from the rest of the site. It is accessed via the button on the Other Services page (`/other-services`) and also directly from the SERVICES dropdown in the navigation.

**Tone note for dev:** This page serves a different audience and emotional context than the wedding-focused pages. The tone of the content (once provided by Lena) will be calmer and more solemn. Design treatment to be defined in `DESIGN.md`.

---

### SECTION 6.1 — Page Heading

**Heading:** `[TBD — Lena to provide]`

---

### SECTION 6.2 — Body Content

**All content:** `[TBD — Lena to write]`

---

### SECTION 6.3 — CTA

**Button:** `Connect` → `/connect`

---

---

## PAGE 7 — FAVOURITE VENUES ⭐ NEW

| Field | Value |
|-------|-------|
| **Page name** | Favourite Venues |
| **URL** | `/favourite-venues` |
| **Nav label** | Favourite Venues *(under PARTNERS dropdown)* |
| **Browser title** | `Favourite Venues — Loving Love` |
| **Meta description** | `[TBD — Lena to provide once content is written]` |

> ⚠️ **Content Status: TBD**
> Lena confirmed she is happy to add this page. Venue list and descriptions to be provided by Lena.
> Note: Many venues are already mentioned in the Moments & Thoughtful Words testimonials (see Page 4) and may be a starting point.

---

### SECTION 7.1 — Page Introduction

**Heading:** `[TBD — Lena to provide]`

**Intro text:** `[TBD — Lena to write]`

---

### SECTION 7.2 — Venue Entries

Each entry contains:
- Venue name
- Location / suburb
- Lena's personal note about the venue `[TBD — Lena to write]`
- Venue website link *(optional)*

**Venue list:** `[TBD — Lena to provide]`

---

### SECTION 7.3 — CTA

**Button:** `Connect` → `/connect`

---

---

## PAGE 8 — TRUSTED PARTNERS ⭐ NEW

| Field | Value |
|-------|-------|
| **Page name** | Trusted Partners |
| **URL** | `/trusted-partners` |
| **Nav label** | Trusted Partners *(under PARTNERS dropdown)* |
| **Browser title** | `Trusted Partners — Loving Love` |
| **Meta description** | `[TBD — Lena to provide once content is written]` |

> ⚠️ **Content Status: TBD**
> Lena confirmed she is happy to feature trusted professionals she works with regularly. Partner list and descriptions to be provided by Lena.
> Note: Two photographers are already credited in the existing site — Michelle Fiona Photographer and Ollie Khedun Photographer — and may be starting points for this list.

---

### SECTION 8.1 — Page Introduction

**Heading:** `[TBD — Lena to provide]`

**Intro text:** `[TBD — Lena to write]`

---

### SECTION 8.2 — Partner Entries

Each entry contains:
- Partner / business name
- Service category (e.g. Photographer, Planner, Florist, Catering, etc.)
- Lena's personal note about working with them `[TBD — Lena to write]`
- Website / Instagram link *(optional)*

**Partner categories include:** Photographers, Wedding Planners, Florists, Catering, and other wedding professionals.

**Partner list:** `[TBD — Lena to provide]`

---

### SECTION 8.3 — CTA

**Button:** `Connect` → `/connect`

---

---

## PAGE 9 — CONNECT

| Field | Value |
|-------|-------|
| **Page name** | Connect |
| **URL** | `/connect` |
| **Nav label** | CONNECT |
| **Browser title** | `Connect — Loving Love` |
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
M: 0405 143 843          (clickable tel: link)
E: lena@lovinglove.com.au    (clickable mailto: link)
```

---

### SECTION 9.3 — Contact Form

**Fields:**
- Your name *(required)*
- Phone number
- Email *(required)*
- Subject
- Message *(required)*

**Submit button:** `Send`

**Success message:**
> Thanks! Message sent. I'll be in touch shortly.

> **Dev note:** Form submission sends email notification to `lena@lovinglove.com.au`

---

---

## CONTENT CHECKLIST — Items Needed from Lena

| Item | Status | Notes |
|------|--------|-------|
| Hero photo (Home page) | ✅ Exists | Credit: Michelle Fiona Photographer |
| Photo (Meet Lena page) | ⚠️ Needed | Portrait of Lena |
| Ceremony page hero photo | ✅ Exists | Credit: Ollie Khedun Photographer |
| Couple photos (Moments page) | ⚠️ Needed | One per testimonial — 32 couples |
| Celebrations of Life — full content | ❌ TBD | Lena to write entire page |
| Favourite Venues — venue list + notes | ❌ TBD | Lena to provide |
| Trusted Partners — partner list + notes | ❌ TBD | Lena to provide |
| Google Business Profile URL | ❌ TBD | For Google Reviews integration |
| Meta descriptions for new pages | ❌ TBD | Once content is written |

---

## FEATURES BACKLOG

### Google Reviews *(Phase 1)*
- Google Reviews widget/embed on the Moments & Thoughtful Words page
- `Leave a Google Review` CTA button
- Google Business Profile URL required from Lena

### Enquiry Dashboard *(Phase 2 — TBD)*
A future client management tool for Lena to view all enquiries. Fields to be captured:
- Your name
- Your partner's name
- Phone number
- Email address
- Wedding date
- Ceremony time
- Ceremony location
- Approximate number of guests?
- How did you hear about me?
- Additional information / queries?

### AI Assistant *(Phase 2 — Pending Lena's approval)*
- Lena is unfamiliar with AI and has requested a face-to-face or FaceTime discussion before any decision
- Not to be included in Phase 1
- Full brief documented in `CONTENT.md` under Client Notes

---

## INSPIRATION REFERENCES

Websites Lena identified as having features and qualities she'd like to explore:

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
*For design direction → see `DESIGN.md` (to be created)*
