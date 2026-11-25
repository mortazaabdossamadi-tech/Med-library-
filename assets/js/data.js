/* مرکز داده MEDLIB — برای افزودن درسنامه جدید فقط یک مورد به lessons اضافه کنید (راهنما در README.md) */
window.MEDLIB={
categories:[
{id:'cardiology',fa:'قلب و عروق',en:'Cardiology',group:'داخلی',icon:'❤️',desc:'بیماری‌های قلب، ریتم و عروق کرونر',topics:['ACS','Heart Failure','Arrhythmias','Valvular Heart Disease','Cardiomyopathies','ECG','Pericardial Diseases']},
{id:'hematology',fa:'هماتولوژی',en:'Hematology',group:'داخلی',icon:'🩸',desc:'کم‌خونی‌ها، اختلالات انعقادی و بدخیمی‌های خون',topics:['Anemia','Coagulation','Leukemia','Lymphoma','Transfusion']},
{id:'pulmonology',fa:'ریه',en:'Pulmonology',group:'داخلی',icon:'🫁',desc:'بیماری‌های راه هوایی، پارانشیم و پرده جنب',topics:['Asthma','COPD','Pneumonia','Pulmonary Embolism','Pleural Diseases','Interstitial Lung Disease']},
{id:'gastroenterology',fa:'گوارش',en:'Gastroenterology',group:'داخلی',icon:'🥣',desc:'بیماری‌های دستگاه گوارش و کبد',topics:['GERD','GI Bleeding','IBD','Liver Disease','Pancreatitis']},
{id:'nephrology',fa:'نفرولوژی',en:'Nephrology',group:'داخلی',icon:'💧',desc:'کلیه، الکترولیت‌ها و تعادل اسید و باز',topics:['AKI','CKD','Electrolytes','Acid-Base','Glomerular Diseases']},
{id:'endocrinology',fa:'غدد',en:'Endocrinology',group:'داخلی',icon:'🦋',desc:'دیابت، تیروئید و آدرنال',topics:['Diabetes','Thyroid','Adrenal','Pituitary','Calcium Disorders']},
{id:'rheumatology',fa:'روماتولوژی',en:'Rheumatology',group:'داخلی',icon:'🦴',desc:'آرتریت‌ها و بیماری‌های خودایمنی',topics:['RA','SLE','Vasculitis','Gout','Spondyloarthritis']},
{id:'infectious',fa:'بیماری‌های عفونی',en:'Infectious Diseases',group:'داخلی',icon:'🦠',desc:'عفونت‌های باکتریایی، ویروسی و قارچی',topics:['Sepsis','HIV','Antibiotics','Tropical Diseases']},
{id:'emergency',fa:'اورژانس',en:'Emergency Medicine',group:'سایر رشته‌ها',icon:'🚑',desc:'احیا، تروما و اورژانس‌های شایع',topics:['Resuscitation','Allergy','Toxicology','Trauma']},
{id:'neurology',fa:'نورولوژی',en:'Neurology',group:'سایر رشته‌ها',icon:'🧠',desc:'سکته مغزی، صرع و بیماری‌های عصبی',topics:['Stroke','Epilepsy','Headache','Neuropathy']},
{id:'surgery',fa:'جراحی',en:'Surgery',group:'سایر رشته‌ها',icon:'✂️',desc:'جراحی عمومی و شکم حاد',topics:['Acute Abdomen','Hernia','Perioperative Care']},
{id:'pediatrics',fa:'اطفال',en:'Pediatrics',group:'سایر رشته‌ها',icon:'🧸',desc:'رشد، واکسیناسیون و بیماری‌های کودکان',topics:['Neonatology','Growth','Vaccination']},
{id:'obgyn',fa:'زنان و زایمان',en:'OB/GYN',group:'سایر رشته‌ها',icon:'🤰',desc:'بارداری، زایمان و بیماری‌های زنان',topics:['Pregnancy','Labor','Gynecology']},
{id:'dermatology',fa:'پوست',en:'Dermatology',group:'سایر رشته‌ها',icon:'🧴',desc:'بیماری‌های پوست و مو',topics:['Eczema','Psoriasis','Skin Infections']},
{id:'psychiatry',fa:'روان‌پزشکی',en:'Psychiatry',group:'سایر رشته‌ها',icon:'💭',desc:'اختلالات خلقی، اضطرابی و سایکوتیک',topics:['Depression','Psychosis','Anxiety']}
],
lessons:[
{id:'acs',cat:'cardiology',topic:'ACS',title:'سندرم حاد کرونری',en:'Acute Coronary Syndrome',desc:'تشخیص، ریسک و درمان اولیه STEMI، NSTEMI',added:'2026-11-20',updated:'2026-11-20',views:150,file:'lessons/cardiology/acs.html'},
{id:'heart-failure',cat:'cardiology',topic:'Heart Failure',title:'نارسایی قلب',en:'Heart Failure',desc:'درمان‌های پایه EF',added:'2026-11-21',updated:'2026-11-21',views:120,file:'lessons/cardiology/heart-failure.html'},
{id:'asthma',cat:'pulmonology',topic:'Asthma',title:'آسم',en:'Asthma',desc:'ارزیابی شدت حمله و درمان حاد و نگهدارنده',added:'2026-11-22',updated:'2026-11-23',views:180,file:'lessons/pulmonology/asthma.html'},
{id:'anaphylaxis',cat:'emergency',topic:'Allergy',title:'آنافیلاکسی',en:'Anaphylaxis',desc:'تشخیص سریع و تزریق اپی‌نفرین',added:'2026-11-24',updated:'2026-11-24',views:260,file:'lessons/emergency/anaphylaxis.html'},
{id:'aortic-diseases',cat:'cardiology',topic:'Aortic Diseases',title:'بیماری‌های آئورت',en:'Aortic Diseases',desc:'تشخیص و درمان بیماری‌های آئورت',added:'2026-11-25',updated:'2026-11-25',views:0,file:'lessons/cardiology/aortic-diseases.html'}
]
};
