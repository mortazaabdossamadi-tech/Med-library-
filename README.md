# MEDLIB — کتابخانه جامع پزشکی

سایت استاتیک فارسی (HTML + CSS + JavaScript خالص) بدون Build، بدون بک‌اند و آماده GitHub Pages.

## ساختار
- `index.html` صفحه اصلی، `category.html?c=<id>` صفحه هر رشته، `lesson.html?id=<id>` نمایش درسنامه
- `assets/js/data.js` مرکز داده (رشته‌ها و درسنامه‌ها)، `assets/js/app.js` منطق، `assets/css/style.css` ظاهر
- `lessons/<رشته>/<نام>.html` فایل مستقل هر درسنامه (فقط محتوا، بدون `<html>` و `<body>`)

صفحه هر ۱۵ رشته با همان `category.html` ساخته می‌شود؛ پس برای رشته جدید نیازی به فایل HTML تازه نیست.

## انتشار روی GitHub Pages
1. در GitHub یک مخزن (Repository) عمومی بسازید.
2. محتوای پوشه MEDLIB را در ریشه مخزن آپلود کنید (`index.html` باید در ریشه باشد).
3. Settings ← Pages ← Source: `Deploy from a branch` ← Branch: `main` و پوشه `/ (root)` ← Save.
4. چند دقیقه بعد، سایت در `https://USERNAME.github.io/REPO/` آماده است.

## اجرای محلی
باز کردن مستقیم فایل (`file://`) درسنامه‌ها را بارگذاری نمی‌کند. در پوشه پروژه اجرا کنید:
`python -m http.server 8000` و سپس `http://localhost:8000` را باز کنید.

## افزودن درسنامه جدید
1. فایل `lessons/cardiology/valve-disease.html` را بسازید. با `<h2>` بخش‌بندی کنید تا فهرست مطالب ساخته شود. کلاس‌های آماده: `golden` (نکته طلایی)، `dx` (تشخیص)، `tx` (درمان)، و برای جدول، تصویر و کد از `table`، `img`، `pre><code`.
2. در `assets/js/data.js`، یک مورد به آرایه `lessons` اضافه کنید:
```js
{id:'valve-disease',cat:'cardiology',topic:'Valvular Heart Disease',title:'بیماری‌های دریچه‌ای',en:'Valvular Heart Disease',desc:'توضیح کوتاه',added:'2026-12-01',updated:'2026-12-01',views:0,file:'lessons/cardiology/valve-disease.html'}
```
`id` باید یکتا باشد و `topic` یکی از `topics` همان رشته. تصاویر را در `assets/images/` بگذارید و با مسیر نسبی (مثلاً `assets/images/x.png`، چون محتوا داخل `lesson.html` نمایش داده می‌شود) لینک کنید.

## آمادگی برای آینده (غیرفعال در این نسخه)
در این نسخه پنل مدیریت، ورود مدیر، آپلود، ویرایش/حذف و آمار بازدید وجود ندارد. جدا بودن داده (`data.js`) از محتوا (`lessons/`) باعث می‌شود بعداً بتوان با یک بک‌اند، `data.js` را با API جایگزین کرد. «پربازدید» فعلی فقط از شمارنده محلی همان مرورگر استفاده می‌کند.
