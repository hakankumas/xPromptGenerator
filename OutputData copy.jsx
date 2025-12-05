import { useEffect, useState } from "react";
import { sayfa_isimleri, tabs } from "./src/components/OutputDataVariables";

function OutputData({ info }) {
    const [contentText, setContentText] = useState({
        sayfalar_td: `${info.ana_bolge} ${info.ana_hizmet} - ${info.firma_adi} firmasının "Hizmetlerimiz, Bölgelerimiz, Blog, Galeri, İletişim" sayfalarının her biri için 60 karakterlik SEO Title ve ikişer adet 160 karakterlik SEO Description üretir misin.`,
        hizmetler_td: ``,
        hizmetler_content: ``,
        bolgeler_td: ``,
        bolgeler_content: ``,
        blog_td: ``,
        blog_content: ``,
    });

    useEffect(() => {
        setContentText((prev) => ({
            ...prev,
            alti_adet_seo: `${info.ana_bolge} ${info.ana_hizmet} firması için 6 adet 160 karakterlik SEO Description üret.`,
        }));
    }, [info]);

    return (
        <div>
            <pre>{JSON.stringify(info, null, 2)}</pre>

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
                <div className="tab-pane fade show active" id="alti_adet_seo" role="tabpanel">
                    <pre style={{ whiteSpace: "pre-line" }}>
                        {`${info.ana_bolge} ${info.ana_hizmet} firması için 6 adet 160 karakterlik SEO Description üretir misin?`}
                    </pre>
                </div>
                <div className="tab-pane fade" id="manset" role="tabpanel">
                    <pre style={{ whiteSpace: "pre-line" }}>
                        {`"${info.ana_bolge} En Yakın ${info.ana_hizmet}, ${info.ana_bolge} Oto Kurtarma, ${info.ana_bolge} Acil En Yakın ${info.ana_hizmet}, ${info.ana_bolge} 7/24 Oto Kurtarıcı" SEO Titlelarının her biri için 160 karakterlik seo description üretir misin. SEO keyler <strong> tagları içinde olsun.`
                        }
                    </pre>
                </div>
                <div className="tab-pane fade" id="sayfalar_td" role="tabpanel">
                    <pre style={{ whiteSpace: "pre-line" }}>{contentText.sayfalar_td}</pre>
                </div>
                <div className="tab-pane fade" id="sayfalar_content" role="tabpanel">
                    {sayfa_isimleri.map((sayfa, index) => {
                        const generatedText = `${info.ana_bolge} ${info.ana_hizmet} - ${info.firma_adi} firmasının "${sayfa}" sayfası için 7 paragraftan oluşan her paragrafın 5 cümle olduğu bir seo metni üretir misin. Paragrafların başında başlıklar olsun. SEO keyler ** olsun. Metinler Google tarafından kopya içerik olarak tespit edilmemelidir. SEO keyleri metnin içinde bolca kullan: çekici, oto çekici, kurtarıcı, oto kurtarıcı, oto kurtarma, yol yardım, oto taşıma, en yakın çekici, en yakın oto çekici, en yakın kurtarıcı, en yakın oto kurtarıcı, en yakın oto kurtarma, en yakın yol yardım, en yakın oto taşıma, 7/24 çekici, 7/24 oto çekici, 7/24 kurtarıcı, 7/24 oto kurtarıcı, 7/24 oto kurtarma, 7/24 yol yardım, 7/24 oto taşıma, acil çekici, acil oto çekici, acil kurtarıcı, acil oto kurtarıcı, acil oto kurtarma, acil yol yardım, acil oto taşıma`;

                        return (
                            <div 
                                key={index}
                                onClick={() => navigator.clipboard.writeText(generatedText)}
                                style={{ cursor: "pointer" }}
                            >
                                <pre style={{ whiteSpace: "pre-line" }}>{generatedText}</pre>
                            </div>
                        );
                    })}
                </div>
                <div className="tab-pane fade" id="hizmetler_td" role="tabpanel">
                    <pre style={{ whiteSpace: "pre-line" }}>{`${info.ana_bolge} ${info.ana_hizmet} - ${info.firma_adi} firmasının Hizmet Bölgeleri: "${info.ek_bolgeler}". Hizmet bölgelerinin her biri için 60 karakterlik SEO Title ve ikişer adet 160 karakterlik SEO Description üret.`}</pre>
                </div>
                <div className="tab-pane fade" id="hizmetler_content" role="tabpanel">
                    <pre style={{ whiteSpace: "pre-line" }}>{contentText.hizmetler_content}</pre>
                </div>
                <div className="tab-pane fade" id="bolgeler_td" role="tabpanel">
                    <pre style={{ whiteSpace: "pre-line" }}>{contentText.bolgeler_td}</pre>
                </div>
                <div className="tab-pane fade" id="bolgeler_content" role="tabpanel">
                    <pre style={{ whiteSpace: "pre-line" }}>{contentText.bolgeler_content}</pre>
                </div>
                <div className="tab-pane fade" id="blog_td" role="tabpanel">
                    <pre style={{ whiteSpace: "pre-line" }}>{contentText.blog_td}</pre>
                </div>
                <div className="tab-pane fade" id="blog_content" role="tabpanel">
                    <pre style={{ whiteSpace: "pre-line" }}>{contentText.blog_content}</pre>
                </div>
            </div>
        </div>
    );
}

export default OutputData;
