import { useEffect } from "react";
import { useState } from "react";
import OutputData from "./OutputData";

function CompanyInfo() {
    const [info, setInfo] = useState({
        firma_adi: "Yıldız Oto Kurtarma",
        ana_hizmet: "Çekici",
        ek_hizmetler: "Oto Kurtarıcı, Yol Yardım, Oto Taşıma",
        ana_bolge: "Sakarya",
        ek_bolgeler:
            "Adapazarı, Akyazı, Arifiye, Erenler, Ferizli, Geyve, Hendek, Karapürçek, Karasu, Kaynarca, Kocaali, Pamukova, Sapanca, Serdivan, Söğütlü, Taraklı",
        firma_tel: "0264 241 41 90",
        mansetler:
            "Sakarya En Yakın Çekici, Sakarya Oto Kurtarma, Sakarya Acil En Yakın Çekici, Sakarya 7/24 Oto Kurtarıcı",
    });

    return (
        <div className="col-12 p-lg-5 d-flex flex-column flex-lg-row gap-5">
            <form className="col-12 col-lg-3 shadow rounded px-4 px-lg-5 py-4">
                <div className="d-flex flex-column my-3">
                    <label htmlFor="">Firma Adı</label>
                    <input
                        className="form-control my-2"
                        type="text"
                        placeholder="Örn: Erenler Oto Kurtarma"
                        value={info.firma_adi}
                        onChange={(e) =>
                            setInfo({ ...info, firma_adi: e.target.value })
                        }
                    />
                </div>
                <div className="d-flex flex-column my-3">
                    <label htmlFor="">Ana Hizmet</label>
                    <input
                        className="form-control my-2"
                        type="text"
                        placeholder="Örn: Çekici"
                        value={info.ana_hizmet}
                        onChange={(e) =>
                            setInfo({ ...info, ana_hizmet: e.target.value })
                        }
                    />
                </div>
                <div className="d-flex flex-column my-3">
                    <label htmlFor="">Ek Hizmetler</label>
                    <input
                        className="form-control my-2"
                        type="text"
                        placeholder="Örn: Oto Kurtarıcı, Yol Yardım, Oto Taşıma"
                        value={info.ek_hizmetler}
                        onChange={(e) =>
                            setInfo({
                                ...info,
                                ek_hizmetler: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="d-flex flex-column my-3">
                    <label htmlFor="">Ana Bölge</label>
                    <input
                        className="form-control my-2"
                        type="text"
                        placeholder="Örn: Erenler"
                        value={info.ana_bolge}
                        onChange={(e) =>
                            setInfo({ ...info, ana_bolge: e.target.value })
                        }
                    />
                </div>
                <div className="d-flex flex-column my-3">
                    <label htmlFor="">Ek Bölgeler</label>
                    <textarea
                        className="form-control my-2"
                        type="text"
                        placeholder="Örn: Adapazarı, Serdivan"
                        rows="4"
                        value={info.ek_bolgeler}
                        onChange={(e) =>
                            setInfo({ ...info, ek_bolgeler: e.target.value })
                        }
                    />
                </div>
                <div className="d-flex flex-column my-3">
                    <label htmlFor="">Firma Telefonu</label>
                    <input
                        className="form-control my-2"
                        type="text"
                        placeholder="Örn: 0530 000 00 00"
                        value={info.firma_tel}
                        onChange={(e) =>
                            setInfo({ ...info, firma_tel: e.target.value })
                        }
                    />
                </div>
                <div className="d-flex flex-column my-3">
                    <label htmlFor="">Manşetler</label>
                    <textarea
                        className="form-control my-2"
                        type="text"
                        placeholder="Örn: Sakarya En Yakın Çekici, Sakarya Oto Kurtarma, Sakarya Acil En Yakın Çekici, Sakarya 7/24 Oto Kurtarıcı"
                        rows="4"
                        value={info.mansetler}
                        onChange={(e) =>
                            setInfo({
                                ...info,
                                mansetler: e.target.value,
                            })
                        }
                    />
                </div>
            </form>
            <div className="col shadow rounded px-4 px-lg-5 py-4 d-flex flex-wrap">
                <OutputData info={info} />
            </div>
        </div>
    );
}

export default CompanyInfo;
