const fragmenter = require('@flybywiresim/fragmenter');
const fs = require('fs');

const execute = async () => {
    try {
        const result = await fragmenter.pack({
            packOptions: { splitFileSize: 102_760_448, keepCompleteModulesAfterSplit: false },
            baseDir: './build-a321neo/out/lvfr-horizonsim-airbus-a321-neo',
            outDir: './build-a321neo/out/build-modules',
            modules: [{
                name: 'effects',
                sourceDir: './effects'
            }, {
                name: 'html_ui',
                sourceDir: './html_ui'
            }, {
                name: 'ModelBehaviorDefs',
                sourceDir: './ModelBehaviorDefs'
            }, {
                name: 'A321neoLEAP_Model',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/model'
            }, {
                name: 'A321neoLEAP_Model_NACF',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/model.NACF'
            }, {
                name: 'A321neoLEAP_Panels',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/panel'
            }, {
                name: 'A321neoLEAP_Sound',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/sound'
            }, {
                name: 'A321neoLEAP_Texture',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/TEXTURE'
            }, {
                name: 'A321neoLEAP_Texture_AAL',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.AAL'
            }, {
                name: 'A321neoLEAP_Texture_AAR',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.AAR'
            }, {
                name: 'A321neoLEAP_Texture_ABY',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.ABY'
            }, {
                name: 'A321neoLEAP_Texture_ACA',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.ACA'
            }, {
                name: 'A321neoLEAP_Texture_AFL',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.AFL'
            }, {
                name: 'A321neoLEAP_Texture_AFR',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.AFR'
            }, {
                name: 'A321neoLEAP_Texture_ASA',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.ASA'
            }, {
                name: 'A321neoLEAP_Texture_ASA2',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.ASA2'
            }, {
                name: 'A321neoLEAP_Texture_AUA2',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.AUA2'
            }, {
                name: 'A321neoLEAP_Texture_AVA',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.AVA'
            }, {
                name: 'A321neoLEAP_Texture_AXM',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.AXM'
            }, {
                name: 'A321neoLEAP_Texture_AZU',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.AZU'
            }, {
                name: 'A321neoLEAP_Texture_BAW',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.BAW'
            }, {
                name: 'A321neoLEAP_Texture_CFG',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.CFG'
            }, {
                name: 'A321neoLEAP_Texture_CPA',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.CPA'
            }, {
                name: 'A321neoLEAP_Texture_EXS',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.EXS'
            }, {
                name: 'A321neoLEAP_Texture_EZY',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.EZY'
            }, {
                name: 'A321neoLEAP_Texture_FIN',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.FIN'
            }, {
                name: 'A321neoLEAP_Texture_FPY',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.FPY'
            }, {
                name: 'A321neoLEAP_Texture_IBS',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.IBS'
            }, {
                name: 'A321neoLEAP_Texture_JST',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.JST'
            }, {
                name: 'A321neoLEAP_Texture_NVR',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.NVR'
            }, {
                name: 'A321neoLEAP_Texture_PGT',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.PGT'
            }, {
                name: 'A321neoLEAP_Texture_ROU',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.ROU'
            }, {
                name: 'A321neoLEAP_Texture_SKU',
                sourceDir: './SimObjects/Airplanes/A321neoLEAP/texture.SKU'
            }, {
                name: 'aircrafta321neolrLEAP_Model',
                sourceDir: './SimObjects/Airplanes/aircrafta321neolrLEAP/model'
            }, {
                name: 'aircrafta321neolrLEAP_Panel',
                sourceDir: './SimObjects/Airplanes/aircrafta321neolrLEAP/panel'
            }, {
                name: 'aircrafta321neolrLEAP_Sound',
                sourceDir: './SimObjects/Airplanes/aircrafta321neolrLEAP/sound'
            }, {
                name: 'aircrafta321neolrLEAP_Texture',
                sourceDir: './SimObjects/Airplanes/aircrafta321neolrLEAP/TEXTURE'
            }, {
                name: 'aircrafta321neolrLEAP_Texture_DJT',
                sourceDir: './SimObjects/Airplanes/aircrafta321neolrLEAP/texture.DJT'
            }, {
                name: 'aircrafta321neolrLEAP_Texture_EIN',
                sourceDir: './SimObjects/Airplanes/aircrafta321neolrLEAP/texture.EIN'
            }, {
                name: 'aircrafta321neolrLEAP_Texture_RZO',
                sourceDir: './SimObjects/Airplanes/aircrafta321neolrLEAP/texture.RZO'
            }, {
                name: 'aircrafta321neolrLEAP_Texture_SAS',
                sourceDir: './SimObjects/Airplanes/aircrafta321neolrLEAP/texture.SAS'
            }, {
                name: 'aircrafta321neolrLEAP_Texture_TAP',
                sourceDir: './SimObjects/Airplanes/aircrafta321neolrLEAP/texture.TAP'
            }, {
                name: 'aircrafta321neolrPW_Model',
                sourceDir: './SimObjects/Airplanes/aircrafta321neolrPW/model'
            }, {
                name: 'aircrafta321neolrPW_Panel',
                sourceDir: './SimObjects/Airplanes/aircrafta321neolrPW/panel'
            }, {
                name: 'aircrafta321neolrPW_Sound',
                sourceDir: './SimObjects/Airplanes/aircrafta321neolrPW/sound'
            }, {
                name: 'aircrafta321neolrPW_Texture',
                sourceDir: './SimObjects/Airplanes/aircrafta321neolrPW/TEXTURE'
            }, {
                name: 'aircrafta321neolrPW_Texture_JBU',
                sourceDir: './SimObjects/Airplanes/aircrafta321neolrPW/texture.JBU'
            }, {
                name: 'aircrafta321neolrPW_Texture_TSC',
                sourceDir: './SimObjects/Airplanes/aircrafta321neolrPW/texture.TSC'
            }, {
                name: 'aircrafta321neopw_Model',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/model'
            }, {
                name: 'aircrafta321neopw_Model_NACF',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/model.NACF'
            }, {
                name: 'aircrafta321neopw_Panel',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/panel'
            }, {
                name: 'aircrafta321neopw_Sound',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/sound'
            }, {
                name: 'aircrafta321neopw_Texture',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/TEXTURE'
            }, {
                name: 'aircrafta321neopw_Texture_AEE',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.AEE'
            }, {
                name: 'aircrafta321neopw_Texture_ANA',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.ANA'
            }, {
                name: 'aircrafta321neopw_Texture_ANZ',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.ANZ'
            }, {
                name: 'aircrafta321neopw_Texture_CCA',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.CCA'
            }, {
                name: 'aircrafta321neopw_Texture_CSN',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.CSN'
            }, {
                name: 'aircrafta321neopw_Texture_DAL',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.DAL'
            }, {
                name: 'aircrafta321neopw_Texture_DLH',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.DLH'
            }, {
                name: 'aircrafta321neopw_Texture_FFT',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.FFT'
            }, {
                name: 'aircrafta321neopw_Texture_FFT2',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.FFT2'
            }, {
                name: 'aircrafta321neopw_Texture_HAL',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.HAL'
            }, {
                name: 'aircrafta321neopw_Texture_HVN',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.HVN'
            }, {
                name: 'aircrafta321neopw_Texture_IGO',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.IGO'
            }, {
                name: 'aircrafta321neopw_Texture_ITY',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.ITY'
            }, {
                name: 'aircrafta321neopw_Texture_JBU',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.JBU'
            }, {
                name: 'aircrafta321neopw_Texture_KAL',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.KAL'
            }, {
                name: 'aircrafta321neopw_Texture_LAN',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.LAN'
            }, {
                name: 'aircrafta321neopw_Texture_MEA',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.MEA'
            }, {
                name: 'aircrafta321neopw_Texture_NKS',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.NKS'
            }, {
                name: 'aircrafta321neopw_Texture_PAL',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.PAL'
            }, {
                name: 'aircrafta321neopw_Texture_QFA',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.QFA'
            }, {
                name: 'aircrafta321neopw_Texture_SWR',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.SWR'
            }, {
                name: 'aircrafta321neopw_Texture_THY',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.THY'
            }, {
                name: 'aircrafta321neopw_Texture_VIV',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.VIV'
            }, {
                name: 'aircrafta321neopw_Texture_VLG',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.VLG'
            }, {
                name: 'aircrafta321neopw_Texture_VOI',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.VOI'
            }, {
                name: 'aircrafta321neopw_Texture_WZZ',
                sourceDir: './SimObjects/Airplanes/aircrafta321neopw/texture.WZZ'
            }]
        });
        console.log(result);
        console.log(fs.readFileSync('./build-a321neo/out/build-modules/modules.json').toString());
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

execute();