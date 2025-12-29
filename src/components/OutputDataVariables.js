const sayfa_isimleri = [
    "Hakkımızda",
    "Hizmetlerimiz",
    "Bölgelerimiz",
    "Blog",
    "Galeri",
    "İletişim",
];

const tabs = [
    {
        id: "meta_td",
        label: "Meta - TD",
    },
    {
        id: "manset",
        label: "Manşet",
    },
    {
        id: "hizmetler_td",
        label: "Hizmetler - TD",
    },
    {
        id: "hizmetler_content",
        label: "Hizmetler - Content",
    },
    {
        id: "bolgeler_td",
        label: "Bölgeler - TD",
    },
    {
        id: "bolgeler_content",
        label: "Bölgeler - Content",
    },
    {
        id: "sayfalar_td",
        label: "Sayfalar - TD",
    },
    {
        id: "sayfalar_content",
        label: "Sayfalar - Content",
    },
];

const content_structure = `<h2><span style="font-size: 18pt;"><strong>1. h2 Başlık</strong></span></h2><p>1. Paragraf</p><h3><span style="font-size: 14pt;"><strong>1. h3 başlık</strong></span></h3><p>2. Paragraf</p><h3><span style="font-size: 14pt;"><strong>2. h3 başlık</strong></span></h3><p>3. Paragraf</p><h3><span style="font-size: 14pt;"><strong>3. h3 başlık</strong></span></h3><p>4. Paragraf</p><h3><span style="font-size: 14pt;"><strong>4. h3 başlık</strong></span></h3><p>5. Paragraf</p><h3><span style="font-size: 14pt;"><strong>5. h3 başlık</strong></span></h3><p>6. Paragraf</p><h3><span style="font-size: 14pt;"><strong>6. h3 başlık</strong></span></h3><p>7. Paragraf</p>`;

const seo_keys_cekici = {
    all: " çekici, oto çekici, kurtarıcı, oto kurtarıcı, oto kurtarma, yol yardım, oto taşıma, en yakın çekici, en yakın oto çekici, en yakın kurtarıcı, en yakın oto kurtarıcı, en yakın oto kurtarma, en yakın yol yardım, en yakın oto taşıma, 7/24 çekici, 7/24 oto çekici, 7/24 kurtarıcı, 7/24 oto kurtarıcı, 7/24 oto kurtarma, 7/24 yol yardım, 7/24 oto taşıma, acil çekici, acil oto çekici, acil kurtarıcı, acil oto kurtarıcı, acil oto kurtarma, acil yol yardım, acil oto taşıma",
    cekici: "çekici, en yakın çekici, acil çekici, 7/24 çekici",
    otocekici:
        "oto çekici, en yakın oto çekici, acil oto çekici, 7/24 oto çekici",
    kurtarici: "kurtarıcı, en yakın kurtarıcı, acil kurtarıcı, 7/24 kurtarıcı",
    otokurtarici:
        "oto kurtarıcı, en yakın oto kurtarıcı, acil oto kurtarıcı, 7/24 oto kurtarıcı",
    otokurtarma:
        "oto kurtarma, en yakın oto kurtarma, acil oto kurtarma, 7/24 oto kurtarma",
    yolyardim:
        "yol yardım, en yakın yol yardım, acil yol yardım, 7/24 yol yardım",
    ototasima:
        "oto taşıma, en yakın oto taşıma, acil oto taşıma, 7/24 oto taşıma",
};

const seo_keys_lastikci = {
    all: " lastikçi, oto lastikçi, mobil lastikçi, mobil oto lastik, mobil oto lastikçi, yol yardım, lastik tamiri, lastik değişimi, lastik onarımı, lastik tamir ve değişimi, en yakın lastikçi, en yakın oto lastikçi, en yakın mobil lastikçi, en yakın mobil oto lastik, en yakın mobil oto lastikçi, en yakın yol yardım, en yakın lastik tamiri, en yakın lastik değişimi, en yakın lastik onarımı, en yakın lastik tamir ve değişimi, acil lastikçi, acil oto lastikçi, acil mobil lastikçi, acil mobil oto lastik, acil mobil oto lastikçi, acil yol yardım, acil lastik tamiri, acil lastik değişimi, acil lastik onarımı, acil lastik tamir ve değişimi, 7/24 lastikçi, 7/24 oto lastikçi, 7/24 mobil lastikçi, 7/24 mobil oto lastik, 7/24 mobil oto lastikçi, 7/24 yol yardım, 7/24 lastik tamiri, 7/24 lastik değişimi, 7/24 lastik onarımı, 7/24 lastik tamir ve değişimi",
    lastikci: "lastikçi, en yakın lastikçi, acil lastikçi, 7/24 lastikçi",
    otolastikci:
        "oto lastikçi, en yakın oto lastikçi, acil oto lastikçi, 7/24 oto lastikçi",
    mobillastikci:
        "mobil lastikçi, en yakın mobil lastikçi, acil mobil lastikçi, 7/24 mobil lastikçi",
    mobilotolastik:
        "mobil oto lastik, en yakın mobil oto lastik, acil mobil oto lastik, 7/24 mobil oto lastik",
    mobilotolastikci:
        "mobil oto lastikçi, en yakın mobil oto lastikçi, acil mobil oto lastikçi, 7/24 mobil oto lastikçi",
    yolyardim2:
        "yol yardım, en yakın yol yardım, acil yol yardım, 7/24 yol yardım",
    lastiktamiri:
        "lastik tamiri, en yakın lastik tamiri, acil lastik tamiri, 7/24 lastik tamiri",
    lastikdegisimi:
        "lastik değişimi, en yakın lastik değişimi, acil lastik değişimi, 7/24 lastik değişimi",
    lastikonarimi:
        "lastik onarımı, en yakın lastik onarımı, acil lastik onarımı, 7/24 lastik onarımı",
    lastiktamirvedegisimi:
        "lastik tamir ve değişimi, en yakın lastik tamir ve değişimi, acil lastik tamir ve değişimi, 7/24 lastik tamir ve değişimi",
};

export {
    sayfa_isimleri,
    tabs,
    content_structure,
    seo_keys_cekici,
    seo_keys_lastikci,
};
