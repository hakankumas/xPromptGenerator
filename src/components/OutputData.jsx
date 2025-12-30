import { useEffect, useState } from "react";
import { sayfa_isimleri, tabs, content_structure } from "./OutputDataVariables";

function OutputData({ info }) {
    console.log("x");
    const {
        firma_adi,
        ana_hizmet,
        ek_hizmetler,
        ana_bolge,
        ek_bolgeler,
        firma_tel,
        mansetler,
    } = info;
    const [contentText, setContentText] = useState({
        alti_adet_seo: "",
        dort_adet_manset: "",
        sayfalar_td: "",
        hizmetler_td: "",
        hizmetler: "",
        bolgeler_td: "",
    });
    const generated_meta_td = [
        `${ana_bolge} ${ana_hizmet} - ${firma_tel}`,
        `${ana_bolge} Acil Yol Yardım Hizmeti`,
        `${contentText.alti_adet_seo}`,
        `${ana_bolge} ${ana_hizmet} - ${firma_adi}`,
        `${ana_bolge} ${ana_hizmet} - ${firma_tel} - ${firma_adi}`,
        `${firma_adi} - ${firma_tel} - ${ana_bolge} ${ana_hizmet}`,
        `${ana_bolge} ${ana_hizmet} - ${firma_adi} firmasının Hizmetleri: "${ana_hizmet}, ${ek_hizmetler}". Hizmet Bölgeleri: "${ana_bolge}, ${ek_bolgeler}". ${ana_bolge} ${ana_hizmet} - ${firma_adi} firmasının Blog sayfası için 8 adet benzersiz blog başlıkları üret. Üretilen başlıkların her biri için 60 karakterlik SEO Title ve ikişer adet 160 karakterlik SEO Description üret.`,
    ];

    useEffect(() => {
        setContentText((prev) => ({
            ...prev,
            alti_adet_seo: `${ana_bolge} ${ana_hizmet} firması için 6 adet 160 karakterlik SEO Description üret.`,
            dort_adet_manset: `"${mansetler}" SEO Titlelarının her biri için 160 karakterlik seo description üret. SEO keyler <strong> tagları içinde olsun.`,
            sayfalar_td: `${ana_bolge} ${ana_hizmet} - ${firma_adi} firmasının "Hizmetlerimiz, Bölgelerimiz, Blog, Galeri, İletişim" sayfalarının her biri için 60 karakterlik SEO Title ve ikişer adet 160 karakterlik SEO Description üret.`,
            hizmetler_td: `${ana_bolge} ${ana_hizmet} - ${firma_adi} firmasının "${ana_hizmet}, ${ek_hizmetler}" hizmetlerinin her biri için 60 karakterlik SEO Title ve ikişer adet 160 karakterlik SEO Description üret.`,
            hizmetler: `${ana_hizmet}, ${ek_hizmetler}`,
            bolgeler_td: `${ana_bolge} ${ana_hizmet} - ${firma_adi} firmasının "${ek_bolgeler
                .split(",")
                .map((item) => item + ` ${ana_hizmet}`)
                .join(
                    ", "
                )}" hizmet bölgelerinin her biri için 60 karakterlik SEO Title ve ikişer adet 160 karakterlik SEO Description üret.`,
        }));
    }, [
        ana_bolge,
        ana_hizmet,
        mansetler,
        ek_hizmetler,
        ek_bolgeler,
        firma_adi,
    ]);

    // Hizmetler
    const editedServices = (hizmet) => {
        const seoKeys = `${hizmet}, en yakın ${hizmet}, acil ${hizmet}, 7/24 ${hizmet}`;
        return seoKeys.toLocaleLowerCase("tr-TR");
    };

    // Bölgeler
    const editedRegionService = (bolge) => {
        const sonuc = [];

        contentText.hizmetler.split(",").forEach((hizmet) => {
            hizmet = hizmet.trim().toLocaleLowerCase("tr-TR");

            sonuc.push(
                `${bolge} ${hizmet}`,
                `${bolge} en yakın ${hizmet}`,
                `${bolge} acil ${hizmet}`,
                `${bolge} 7/24 ${hizmet}`
            );
        });

        return sonuc.join(", ");
    };

    // Sayfalar

    return (
        <div>
            {/* prettier-ignore */}
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                {tabs.map((tab, index) => (
                    <li key={tab.id} className="nav-item" role="presentation">
                        <button
                            className={`nav-link text-dark ${index === 0 ? "active" : ""}`}
                            id={`${tab.id}-tab`}
                            data-bs-toggle="tab"
                            data-bs-target={`#${tab.id}`}
                            type="button"
                            role="tab"
                        >
                            {tab.label}
                        </button>
                    </li>
                ))}
            </ul>

            {/* prettier-ignore */}
            <div className="tab-content" id="myTabContent">
                
                {/* meta_td */}
                <div className="tab-pane fade show active " id="meta_td" role="tabpanel" >
                    {generated_meta_td.map((meta, index) => (
                        <div key={index} className="item-line" onClick={() => navigator.clipboard.writeText(meta)}>
                            {meta}
                        </div>
                    ))}
                </div>

                {/* mansetler */}
                <div 
                    className="tab-pane fade item-line" 
                    id="manset" 
                    role="tabpanel" 
                    onClick={() => navigator.clipboard.writeText(contentText.dort_adet_manset)}
                >
                    {contentText.dort_adet_manset}
                </div>

                {/* hizmetler_td */}
                <div 
                    className="tab-pane fade item-line" 
                    id="hizmetler_td" 
                    role="tabpanel" 
                    onClick={() => navigator.clipboard.writeText(contentText.hizmetler_td)}
                >
                    {contentText.hizmetler_td}
                </div>

                {/* hizmetler_content */}
                <div 
                    className="tab-pane fade" 
                    id="hizmetler_content" 
                    role="tabpanel" 
                >
                    {contentText.hizmetler.split(",").map(x => x.trim()).map((hizmet, index) => {
                        const generatedText = `${ana_bolge} ${ana_hizmet} - ${firma_adi} firmasının "${hizmet}" hizmet sayfası için 8 paragraftan oluşan her paragrafın 5 cümle olduğu bir seo metni üret. Paragrafların üstünde başlıklar olsun ama başlıkların başında sayısal numaralandırma olmasın. Metinler Google tarafından kopya içerik olarak tespit edilmemesi için benzersiz içerikler oluştur. SEO keyleri metnin içinde bolca kullan, SEO keyler strong tagları içinde olsun: "${editedServices(hizmet)}". Paragraf formatı şu şekilde olsun: ${content_structure}`;

                        return (
                            <div 
                                key={index}
                                className="item-line"
                                onClick={() => navigator.clipboard.writeText(generatedText)}
                            >
                                {generatedText}
                            </div>
                        );
                    })}
                </div>

                {/* bolgeler_td */}
                <div 
                    className="tab-pane fade item-line" 
                    id="bolgeler_td" 
                    role="tabpanel" 
                    onClick={() => navigator.clipboard.writeText(contentText.bolgeler_td)}
                >
                    {contentText.bolgeler_td}
                    
                </div>

                {/* bolgeler_content */}
                <div 
                    className="tab-pane fade" 
                    id="bolgeler_content" 
                    role="tabpanel" 
                >
                    {ek_bolgeler.split(",").map(x => x.trim()).map((bolge, index) => {
                        const generatedText = `${ana_bolge} ${ana_hizmet} - ${firma_adi} firmasının "${bolge} ${ana_hizmet}" hizmet bölgesi sayfası için 8 paragraftan oluşan her paragrafın 5 cümle olduğu bir seo metni üret. Paragrafların üstünde başlıklar olsun ama başlıkların başında sayısal numaralandırma olmasın. Metinler Google tarafından kopya içerik olarak tespit edilmemesi için benzersiz içerikler oluştur. SEO keyleri metnin içinde bolca kullan, SEO keyler strong tagları içinde olsun: "${editedRegionService(bolge)}". Paragraf formatı şu şekilde olsun: ${content_structure}`;

                        return (
                            <div 
                                key={index}
                                className="item-line"
                                onClick={() => navigator.clipboard.writeText(generatedText)}
                            >
                                {generatedText}
                            </div>
                        );
                    })}
                </div>

                {/* sayfalar_td */}
                <div 
                    className="tab-pane fade item-line" 
                    id="sayfalar_td" 
                    role="tabpanel" 
                    onClick={() => navigator.clipboard.writeText(contentText.sayfalar_td)}
                >
                    {contentText.sayfalar_td}
                </div>

                {/* sayfalar_content */}
                <div 
                    className="tab-pane fade" 
                    id="sayfalar_content" 
                    role="tabpanel" 
                >
                    {sayfa_isimleri.map((sayfa, index) => {
                        const generatedText = `${ana_bolge} ${ana_hizmet} - ${firma_adi} firmasının "${sayfa}" sayfası için 8 paragraftan oluşan her paragrafın 5 cümle olduğu bir seo metni üret. Firmanın hizmetleri: "${ana_hizmet}, ${ek_hizmetler}", hizmet bölgeleri: "${ana_bolge}, ${ek_bolgeler}". Paragrafların üstünde başlıklar olsun ama başlıkların başında sayısal numaralandırma olmasın. Metinler Google tarafından kopya içerik olarak tespit edilmemesi için benzersiz içerikler oluştur. SEO keyleri metnin içinde bolca kullan, SEO keyler strong tagları içinde olsun. Paragraf formatı şu şekilde olsun: ${content_structure}`;

                        return (
                            <div 
                                key={index}
                                className="item-line"
                                onClick={() => navigator.clipboard.writeText(generatedText)}
                            >
                                {generatedText}
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}

export default OutputData;
