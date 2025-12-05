import { useEffect, useState } from "react";
import { sayfa_isimleri, tabs } from "./OutputDataVariables";

function OutputData({ info }) {
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
        `${ana_bolge} Yol Yardım Hizmetleri`,
        `${contentText.alti_adet_seo}`,
        `${ana_bolge} ${ana_hizmet} - ${firma_adi}`,
        `${ana_bolge} ${ana_hizmet} - ${firma_tel} - ${firma_adi}`,
        `${firma_adi} - ${firma_tel} - ${ana_bolge} ${ana_hizmet}`,
    ];

    useEffect(() => {
        setContentText((prev) => ({
            ...prev,
            alti_adet_seo: `${ana_bolge} ${ana_hizmet} firması için 6 adet 160 karakterlik SEO Description üret.`,
            dort_adet_manset: `"${mansetler}" SEO Titlelarının her biri için 160 karakterlik seo description üret. SEO keyler <strong> tagları içinde olsun.`,
            sayfalar_td: `${ana_bolge} ${ana_hizmet} - ${firma_adi} firmasının "Hizmetlerimiz, Bölgelerimiz, Blog, Galeri, İletişim" sayfalarının her biri için 60 karakterlik SEO Title ve ikişer adet 160 karakterlik SEO Description üret.`,
            hizmetler_td: `${ana_bolge} ${ana_hizmet} - ${firma_adi} firmasının "${ana_hizmet}, ${ek_hizmetler}" hizmetlerinin her biri için 60 karakterlik SEO Title ve ikişer adet 160 karakterlik SEO Description üret.`,
            hizmetler: `${ana_hizmet}, ${ek_hizmetler}`,
            bolgeler_td: `${ana_bolge} ${ana_hizmet} - ${firma_adi} firmasının "${ek_bolgeler}" hizmet bölgelerinin her biri için 60 karakterlik SEO Title ve ikişer adet 160 karakterlik SEO Description üret.`,
        }));
    }, [info]);
    return (
        <div>
            {/* prettier-ignore */}
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                {tabs.map((tab, index) => (
                    <li key={tab.id} className="nav-item" role="presentation">
                        <button
                            className={`nav-link ${index === 0 ? "active" : ""}`}
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
                        const generatedText = `${ana_bolge} ${ana_hizmet} - ${firma_adi} firmasının "${sayfa}" sayfası için 8 paragraftan oluşan her paragrafın 5 cümle olduğu bir seo metni üret. Paragrafların üstünde başlıklar olsun ama başlıkların başında sayısal numaralandırma olmasın. Metinler Google tarafından kopya içerik olarak tespit edilmemesi için benzersiz içerikler oluştur. SEO keyleri metnin içinde bolca kullan: çekici, oto çekici, kurtarıcı, oto kurtarıcı, oto kurtarma, yol yardım, oto taşıma, en yakın çekici, en yakın oto çekici, en yakın kurtarıcı, en yakın oto kurtarıcı, en yakın oto kurtarma, en yakın yol yardım, en yakın oto taşıma, 7/24 çekici, 7/24 oto çekici, 7/24 kurtarıcı, 7/24 oto kurtarıcı, 7/24 oto kurtarma, 7/24 yol yardım, 7/24 oto taşıma, acil çekici, acil oto çekici, acil kurtarıcı, acil oto kurtarıcı, acil oto kurtarma, acil yol yardım, acil oto taşıma. Paragraf formatı şu şekilde olsun: <h2><span style="font-size: 18pt;"><strong>1. h2 Başlık</strong></span></h2><p>1. Paragraf</p><h3><span style="font-size: 14pt;"><strong>1. h3 başlık</strong></span></h3><p>2. Paragraf</p><h3><span style="font-size: 14pt;"><strong>2. h3 başlık</strong></span></h3><p>3. Paragraf</p><h3><span style="font-size: 14pt;"><strong>3. h3 başlık</strong></span></h3><p>4. Paragraf</p><h3><span style="font-size: 14pt;"><strong>4. h3 başlık</strong></span></h3><p>5. Paragraf</p><h3><span style="font-size: 14pt;"><strong>5. h3 başlık</strong></span></h3><p>6. Paragraf</p><h3><span style="font-size: 14pt;"><strong>6. h3 başlık</strong></span></h3><p>7. Paragraf</p>`;

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
                        const generatedText = `${ana_bolge} ${ana_hizmet} - ${firma_adi} firmasının "${hizmet}" hizmet sayfası için 8 paragraftan oluşan her paragrafın 5 cümle olduğu bir seo metni üret. Paragrafların üstünde başlıklar olsun ama başlıkların başında sayısal numaralandırma olmasın. Metinler Google tarafından kopya içerik olarak tespit edilmemesi için benzersiz içerikler oluştur. Paragraf formatı şu şekilde olsun: <h2><span style="font-size: 18pt;"><strong>1. h2 Başlık</strong></span></h2><p>1. Paragraf</p><h3><span style="font-size: 14pt;"><strong>1. h3 başlık</strong></span></h3><p>2. Paragraf</p><h3><span style="font-size: 14pt;"><strong>2. h3 başlık</strong></span></h3><p>3. Paragraf</p><h3><span style="font-size: 14pt;"><strong>3. h3 başlık</strong></span></h3><p>4. Paragraf</p><h3><span style="font-size: 14pt;"><strong>4. h3 başlık</strong></span></h3><p>5. Paragraf</p><h3><span style="font-size: 14pt;"><strong>5. h3 başlık</strong></span></h3><p>6. Paragraf</p><h3><span style="font-size: 14pt;"><strong>6. h3 başlık</strong></span></h3><p>7. Paragraf</p>`;

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
                        const generatedText = `${ana_bolge} ${ana_hizmet} - ${firma_adi} firmasının "${bolge} ${ana_hizmet}" hizmet bölgesi sayfası için 8 paragraftan oluşan her paragrafın 5 cümle olduğu bir seo metni üret. Paragrafların üstünde başlıklar olsun ama başlıkların başında sayısal numaralandırma olmasın. Metinler Google tarafından kopya içerik olarak tespit edilmemesi için benzersiz içerikler oluştur. SEO keyleri metnin içinde bolca kullan: çekici, oto çekici, kurtarıcı, oto kurtarıcı, oto kurtarma, yol yardım, oto taşıma, en yakın çekici, en yakın oto çekici, en yakın kurtarıcı, en yakın oto kurtarıcı, en yakın oto kurtarma, en yakın yol yardım, en yakın oto taşıma, 7/24 çekici, 7/24 oto çekici, 7/24 kurtarıcı, 7/24 oto kurtarıcı, 7/24 oto kurtarma, 7/24 yol yardım, 7/24 oto taşıma, acil çekici, acil oto çekici, acil kurtarıcı, acil oto kurtarıcı, acil oto kurtarma, acil yol yardım, acil oto taşıma. Paragraf formatı şu şekilde olsun: <h2><span style="font-size: 18pt;"><strong>1. h2 Başlık</strong></span></h2><p>1. Paragraf</p><h3><span style="font-size: 14pt;"><strong>1. h3 başlık</strong></span></h3><p>2. Paragraf</p><h3><span style="font-size: 14pt;"><strong>2. h3 başlık</strong></span></h3><p>3. Paragraf</p><h3><span style="font-size: 14pt;"><strong>3. h3 başlık</strong></span></h3><p>4. Paragraf</p><h3><span style="font-size: 14pt;"><strong>4. h3 başlık</strong></span></h3><p>5. Paragraf</p><h3><span style="font-size: 14pt;"><strong>5. h3 başlık</strong></span></h3><p>6. Paragraf</p><h3><span style="font-size: 14pt;"><strong>6. h3 başlık</strong></span></h3><p>7. Paragraf</p>`;

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
